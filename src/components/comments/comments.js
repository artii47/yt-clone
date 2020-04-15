import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./comments.styles";
import CommentList from "../comment-list/comment-list";
import { numberWithCommas } from "../../helpers/numConverter";
import SortOptions from "../sort-options/sort-options";

const Comments = ({ sortBy, setSortBy, video }) => {
  const renderComments = () => {
    return (
      <>
        <Styled.CommentsFlexWrapper>
          <Styled.CommentsCount>
            {video
              ? `${numberWithCommas(video.statistics.commentCount)} Comments`
              : ""}
          </Styled.CommentsCount>
          <SortOptions sortBy={sortBy} setSortBy={setSortBy} />
        </Styled.CommentsFlexWrapper>
        <CommentList />
      </>
    );
  };
  return <Styled.Comments id="comments">{renderComments()}</Styled.Comments>;
};

export default Comments;

Comments.propTypes = {
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
  video: PropTypes.shape({
    statistics: PropTypes.shape({
      commentCount: PropTypes.string,
    }),
  }).isRequired,
};

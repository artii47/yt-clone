import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import * as Styled from "./comments.styles";
import CommentList from "../comment-list/comment-list";
import { numberWithCommas } from "../../helpers/numConverter";
import SortOptions from "../sort-options/sort-options";
import { selectChannelItem } from "../../selectors/channel.selector";

const Comments = ({ sortBy, setSortBy, video }) => {
  const currentVideoChannel = useSelector(selectChannelItem);
  if (!currentVideoChannel) {
    return "";
  }
  return (
    <Styled.Comments id="comments">
      <Styled.CommentsFlexWrapper>
        <Styled.CommentsCount>
          {video
            ? `${numberWithCommas(video.statistics.commentCount)} Comments`
            : ""}
        </Styled.CommentsCount>
        <SortOptions sortBy={sortBy} setSortBy={setSortBy} />
      </Styled.CommentsFlexWrapper>
      <CommentList />
    </Styled.Comments>
  );
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

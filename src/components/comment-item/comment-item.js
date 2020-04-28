import React, { useState } from "react";
import PropTypes from "prop-types";
import * as Styled from "./comment-item.styles";
import { numberConverter } from "../../helpers/numConverter";
import { dateConverter } from "../../helpers/dateConverter";
import { renderTextWithShowMoreButton } from "../../helpers/renderTextWithShowMoreButton";

const CommentItem = ({
  authorChannelImage,
  authorName,
  publishedAt,
  text,
  likeCount,
}) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <Styled.CommentItem>
      <Styled.CommentItemImg
        referrerPolicy="no-referrer"
        src={authorChannelImage}
      />
      <Styled.CommentItemContent>
        <Styled.CommentItemFlexWrapper>
          <Styled.CommentItemChannelTitle>
            {authorName}
            &nbsp;
          </Styled.CommentItemChannelTitle>
          <Styled.CommentItemPublishDate>
            {dateConverter(publishedAt)}
          </Styled.CommentItemPublishDate>
        </Styled.CommentItemFlexWrapper>
        <Styled.CommentItemText data-testid="comment">
          {renderTextWithShowMoreButton(90, text, showMore, setShowMore)}
        </Styled.CommentItemText>
        <Styled.CommentItemFlexWrapper>
          <Styled.CommentItemLike />
          <Styled.CommentItemLikeCount data-testid="like-count">
            {likeCount === 0 ? "" : numberConverter(likeCount)}
          </Styled.CommentItemLikeCount>
          <Styled.CommentItemDislike />
        </Styled.CommentItemFlexWrapper>
      </Styled.CommentItemContent>
    </Styled.CommentItem>
  );
};

export default CommentItem;

CommentItem.propTypes = {
  authorChannelImage: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
};

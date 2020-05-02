import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import * as Styled from "./comment-item.styles";
import { numberConverter } from "../../helpers/numConverter";
import { dateConverter } from "../../helpers/dateConverter";
import { renderTextWithShowMoreButton } from "../../helpers/renderTextWithShowMoreButton";
import { fetchCommentsRepliesAsync } from "../../reducers/commentsReducer";
import CommentReplies from "../comment-replies/comment-replies";
import { selectCommentItem } from "../../selectors/comments.selector";

const CommentItem = ({
  authorChannelImage,
  authorName,
  publishedAt,
  text,
  likeCount,
  commentId,
  repliesCount,
  index,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const commentItem = useSelector(selectCommentItem(index));
  const dispatch = useDispatch();
  return (
    <Styled.CommentItem>
      <Styled.CommentItemImg
        referrerPolicy="no-referrer"
        src={authorChannelImage}
        alt={authorName}
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
          {renderTextWithShowMoreButton(90, text, showMore, setShowMore, 40)}
        </Styled.CommentItemText>
        <Styled.CommentItemFlexWrapper>
          <Styled.CommentItemLike />
          <Styled.CommentItemLikeCount data-testid="like-count">
            {likeCount === 0 ? "" : numberConverter(likeCount)}
          </Styled.CommentItemLikeCount>
          <Styled.CommentItemDislike />
        </Styled.CommentItemFlexWrapper>
        {repliesCount ? (
          <Styled.CommentItemRepliesText
            showReplies={showReplies}
            onClick={() => {
              setShowReplies(!showReplies);
              if (!commentItem?.snippet?.replies) {
                dispatch(
                  fetchCommentsRepliesAsync(commentId, index, commentItem.id)
                );
              }
            }}
          >
            {!showReplies
              ? `View ${repliesCount} replies`
              : `Hide ${repliesCount} replies`}
          </Styled.CommentItemRepliesText>
        ) : (
          ""
        )}
        {showReplies ? <CommentReplies index={index} /> : ""}
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
  commentId: PropTypes.string.isRequired,
  repliesCount: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

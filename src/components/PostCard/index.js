import React from "react";

const PostCard = ({ title, body, onClick, onDelete }) => {
  return (
    <div className="post__card__wrapper" onClick={onClick}>
      <div
        onClick={onDelete}
        className="post__delete__icon"
        style={{
          minWidth: "30px",
          minHeight: "30px",
          maxWidth: "30px",
          maxHeight: "30px",
          borderRadius: "100%",
          border: "1px solid black",
          textAlign: "center",
          lineHeight: "30px",
        }}
      >
        X
      </div>
      <h4 className="post__card__title">{title}</h4>
      <p className="post__card__body">{body}</p>
    </div>
  );
};

export default PostCard;

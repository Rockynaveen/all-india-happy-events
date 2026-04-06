import React from "react";
import type  { ReviewReplyType } from "../../types/pre-event-photographer/pre-event-details/reply-type";

type Props = {
  reply: ReviewReplyType | null;
};

const ReviewReply: React.FC<Props> = ({ reply }) => {
  if (!reply) return null;

  return (
    <div className="media reply-box">
      <img
        src="assets/images/testimonials/vendor.png"
        alt=""
        className="thumb"
      />
      <div className="media-body">
        <div className="d-md-flex justify-content-between mb-3">
          <h4 className="mb-0">Vendor Response</h4>
          <small className="txt-blue">{reply.date}</small>
        </div>
        {reply.message}
      </div>
    </div>
  );
};

export default ReviewReply;
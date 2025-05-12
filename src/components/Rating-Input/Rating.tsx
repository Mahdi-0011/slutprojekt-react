import React, { useState } from "react";
import "./Rating.scss"; 

const RatingInput: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [submittedRating, setSubmittedRating] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number>(0);

  const handleClick = (value: number) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating === 0) return;
    setSubmittedRating(rating);
  };

  const handleEdit = () => {
    setSubmittedRating(null);
    setRating(0);
  };

  return (
    <div className="rating-container">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= (hovered || rating) ? "filled" : ""}`}
            onClick={() => handleClick(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
          >
            ★
          </span>
        ))}
      </div>
      {submittedRating === null ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <div className="submitted">
          <p>{submittedRating}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default RatingInput;

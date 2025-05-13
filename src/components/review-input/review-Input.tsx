import React, { useState, ChangeEvent } from "react";
import "./review-Input.scss"

const Input: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [comments, setComments] = useState<string[]>([]);
  const [isEditingIndex, setIsEditingIndex] = useState<number | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const addComment = () => {
    if (input.trim() === "") return;

    if (isEditingIndex !== null) {
      const updated = [...comments];
      updated[isEditingIndex] = input;
      setComments(updated);
      setIsEditingIndex(null);
    } else {
      setComments([...comments, input]);
    }

    setInput("");
  };

  const removeComment = (index: number) => {
    const updated = [...comments];
    updated.splice(index, 1);
    setComments(updated);
  };

  const editComment = (index: number) => {
    setInput(comments[index]);
    setIsEditingIndex(index);
  };

  return (
    <>
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>{comment}</p>
            <div className="input-container">
              <button type="button" onClick={() => editComment(index)}>Edit</button>
              <button type="button" onClick={() => removeComment(index)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="input-container">
          <input
            type="text"
            className="input"
            placeholder="  Review..."
            value={input}
            onChange={handleChange}
          />
          <button type="button" onClick={addComment}>
            {isEditingIndex !== null ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;

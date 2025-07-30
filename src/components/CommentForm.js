import { useState, useEffect } from "react";

export default function CommentForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setCommentsList(JSON.parse(savedComments));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(commentsList));
  }, [commentsList]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || comment.trim() === "") return;

    const newComment = { name: name.trim(), comment: comment.trim() };
    setCommentsList((prev) => [...prev, newComment]);

    setName("");
    setComment("");
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full p-3 border rounded"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          className="w-full p-3 border rounded"
          placeholder="Leave a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>
        {commentsList.length === 0 && (
          <p className="text-gray-500">No comments yet.</p>
        )}
        <ul className="space-y-3">
          {commentsList.map((cmt, index) => (
            <li
              key={index}
              className="p-3 text-black bg-gray-100 rounded border border-gray-300"
            >
              <strong>{cmt.name}</strong>: {cmt.comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

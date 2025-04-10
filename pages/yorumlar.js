import { useState } from "react";
import Link from "next/link";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [commentData, setCommentData] = useState({
    name: "",
    photoUrl: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCommentData({
      ...commentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, commentData]);
    setCommentData({ name: "", photoUrl: "", comment: "" });
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold text-orange-700 mb-4">Yorumlar</h1>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Yorum Gönder</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Ad Soyad</label>
            <input
              type="text"
              name="name"
              value={commentData.name}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Fotoğraf URL</label>
            <input
              type="text"
              name="photoUrl"
              value={commentData.photoUrl}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Yorum</label>
            <textarea
              name="comment"
              value={commentData.comment}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
            >
              Yorum Gönder
            </button>
          </div>
        </form>
      </div>

      <div className="mt-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Yorumlar</h2>
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md">
              <img
                src={comment.photoUrl}
                alt={comment.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-lg">{comment.name}</p>
                <p className="text-gray-600">{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Link href="/">
          <a className="px-6 py-2 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 transition duration-300">
            Ana Sayfaya Dön
          </a>
        </Link>
      </div>
    </div>
  );
}

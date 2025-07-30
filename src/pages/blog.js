import CommentForm from "../components/CommentForm";

import { useEffect, useState } from "react";

export default function Blog() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      const res = await fetch(
        "https://api.pexels.com/v1/search?query=hairstyles&per_page=9",
        {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
          },
        }
      );
      const data = await res.json();
      setPhotos(data.photos);
    }

    fetchPhotos();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Hairstyle Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div key={photo.id} className="border rounded-lg overflow-hidden">
            <img
              src={photo.src.medium}
              alt={photo.photographer}
              className="w-full h-60 object-cover"
            />
            <div className="p-2 text-sm text-gray-500">
              By {photo.photographer}
            </div>
          </div>
        ))}
      </div>
      <CommentForm />
     </div>
  );

}

import { useState } from "react";

export default function PhotoGallery() {
  const images = ["/Logo.jpg", "/Logo2.jpg", "/Logo3.jpg"];
  const [index, setIndex] = useState(0);

  function nextImage() {
    setIndex((index + 1) % images.length);
  }

  function prevImage() {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-xl font-bold mb-4">Gallery</h2>
      <div className="flex items-center space-x-4">
        {/* Back button */}
        <button
          onClick={prevImage}
          className="text-white px-2 py-1 rounded hover:bg-gray-700"
        >
          ◀
        </button>

        {/* Image */}
        <img
          src={images[index]}
          alt="Gallery"
          className="w-72 h-72 object-cover rounded-xl shadow-md"
        />

        {/* Next button */}
        <button
          onClick={nextImage}
          className="text-white px-2 py-1 rounded hover:bg-gray-700"
        >
          ▶
        </button>
      </div>

      {/* Dots */}
      <div className="flex space-x-2 mt-4">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              i === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

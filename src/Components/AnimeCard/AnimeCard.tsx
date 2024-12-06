import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimeCardProps } from './AnimeCard.types';
import { IMG_HOST } from '../../api';
import { useInView } from 'react-intersection-observer';

export const AnimeCard = ({ code, image, title }: AnimeCardProps) => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '100px',
  });

  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    navigate(`/title/${code}`);
    setIsVisible(false);
  };

  return (
    <div
      className={`w-full max-w-xs rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 p-4 cursor-pointer ${
        isVisible ? '' : 'hidden'
      }`}
      ref={ref}
      onClick={handleClick}
    >
      {inView && (
        <img
          src={`${IMG_HOST}/${image}`}
          alt={title}
          className="rounded-lg w-full h-64 object-cover mb-4"
          loading="lazy"
        />
      )}
      <div className="bg-white rounded-lg shadow-md p-4 text-center">
        <h2 className="text-lg font-bold text-gray-800 mb-2 truncate">
          {title}
        </h2>
        <button
          onClick={handleClick}
          className="flex items-center justify-center gap-2 mt-3 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white py-2 px-6 rounded-full hover:shadow-lg hover:opacity-90 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
          Перейти к просмотру
        </button>
      </div>
    </div>
  );
};

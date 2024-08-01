import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';

// Define the interface for props
interface PostItemsProps {
  postID: string;
  thumbnail: string;
  category: string;
  title: string;
  decs: string;
  authorID: string;
  harga: string;
}

// Functional component with props typed
const PostItems: React.FC<PostItemsProps> = ({ postID, thumbnail, category, title, decs,harga, authorID }) => {
  // Function to truncate description text
  const truncateDescription = (text: string, limit: number): string => {
    const words = text.split(' ');
    if (words.length <= limit) return text;
    return words.slice(0, limit).join(' ') + '...';
  };

  // Return the JSX
  return (
    <article className="container mx-auto flex flex-col p-3 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden w-48">
       <div className="flex justify-center items-center">
        <img className="w-full h-56 object-cover" src={thumbnail} alt={title} />
      </div>
      <div className="mt-1 flex flex-col flex-grow">
        <Link to={`/posts/${postID}`} className="text-md font-medium text-gray-900 hover:underline">
          {title}
        </Link>
        <p className="mt-1 text-gray-600 text-sm">
          {truncateDescription(decs, 100)}
        </p>
        <p className='text-xs mt-1 mb-2 font-light text-gray-800'>Rp: {harga}</p>
        <div className="mt-auto flex items-center text-sm text-gray-500">
          <PostAuthor authorID={authorID} />
          <span className="text-gray-400 mx-2">|</span>
          <Link to={`/posts/categories/${category}`} className="text-blue-500 hover:text-blue-600">
            {category}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostItems;

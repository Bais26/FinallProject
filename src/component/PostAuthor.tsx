import React from 'react';

interface PostAuthorProps {
  authorID: string;
}

const PostAuthor: React.FC<PostAuthorProps> = ({ authorID }) => {
  return <div>Author ID: {authorID}</div>;
};

export default PostAuthor;

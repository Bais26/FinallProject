import React, { useState } from 'react';
import Thumbnail1 from '../assets/images/buku1.jpg';
import Thumbnail2 from '../assets/images/buku2.jpg';
import Thumbnail3 from '../assets/images/buku3.jpg';
import Thumbnail4 from '../assets/images/buku4.jpg';
import Thumbnail5 from '../assets/images/buku5.jpg';
import PostItems from './PostItems';

// Define a type for the post items
interface Post {
  id: string;
  thumbnail: string;
  category: string;
  title: string;
  decs: string;
  authorID: string;
  harga: string;
}

// Define the component
const Post: React.FC = () => {
  // Dummy data with type annotations
  const DummyData: Post[] = [
    {
      id: '1',
      thumbnail: Thumbnail1,
      category: 'sport',
      title: 'Buku 1',
      decs: 'ini buku saya semua',
      harga: '60000',
      authorID: '2',
    },
    {
      id: '2',
      thumbnail: Thumbnail2,
      category: 'Teknologi',
      title: 'Buku 2 ',
      decs: 'ini buku saya semua',
      harga: '60000',
      authorID: '2',
    },
    {
      id: '3',
      thumbnail: Thumbnail3,
      category: 'Makanan',
      title: 'Buku 3',
      decs: 'ini buku saya semua',
      harga: '60000',
      authorID: '2',
    },
    {
      id: '4',
      thumbnail: Thumbnail4,
      category: 'Makanan',
      title: 'Buku 4',
      decs: 'ini buku saya semua',
      harga: '60000',
      authorID: '2',
    },
    {
      id: '5',
      thumbnail: Thumbnail5,
      category: 'Makanan',
      title: 'Buku 5',
      decs: 'ini buku saya semua',
      harga: '60000',
      authorID: '2',
    },
    {
        id: '6',
        thumbnail: Thumbnail3,
        category: 'Makanan',
        title: 'Buku 5',
        decs: 'ini buku saya semua',
        harga: '60000',
        authorID: '2',
      },
      {
        id: '7',
        thumbnail: Thumbnail2,
        category: 'Makanan',
        title: 'Buku 5',
        decs: 'ini buku saya semua',
        harga: '60000',
        authorID: '2',
      },
      {
        id: '8',
        thumbnail: Thumbnail1,
        category: 'Makanan',
        title: 'Buku 5',
        decs: 'ini buku saya semua',
        harga: '60000',
        authorID: '2',
      },
      {
        id: '9',
        thumbnail: Thumbnail2,
        category: 'Makanan',
        title: 'Buku 5',
        decs: 'ini buku saya semua',
        harga: '60000',
        authorID: '2',
      },
      {
        id: '10',
        thumbnail: Thumbnail4,
        category: 'Makanan',
        title: 'Buku 5',
        decs: 'ini buku saya semua',
        harga: '60000',
        authorID: '2',
      },
      {
        id: '11',
        thumbnail: Thumbnail3,
        category: 'Makanan',
        title: 'Buku 5',
        decs: 'ini buku saya semua',
        harga: '60000',
        authorID: '2',
      },
      {
        id: '12',
        thumbnail: Thumbnail1,
        category: 'Makanan',
        title: 'Buku 5',
        decs: 'ini buku saya semua',
        harga: '60000',
        authorID: '2',
      },
  ];

  // State for posts with type annotations
  const [post, setPost] = useState<Post[]>(DummyData);

  // Return the JSX
  return (
    <section className="p-6 border">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {post.map(({ id, thumbnail, category, title, decs, harga, authorID }) => (
          <PostItems
            key={id}
            postID={id}
            thumbnail={thumbnail}
            category={category}
            title={title}
            decs={decs}
            harga={harga}
            authorID={authorID}
          />
        ))}
      </div>
    </section>
  );
};

export default Post;

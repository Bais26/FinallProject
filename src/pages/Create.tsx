import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Create: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('Uncategories');
  const [description, setDescription] = useState<string>('');
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [harga, setHarga] = useState<string>('');

  const module = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const format = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  // Define categories for post
  const PostCategory: string[] = [
    'Uncategories',
    'Teknologi',
    'Sport',
    'Makanan',
    'Hiburan',
    'Belajar',
    'Kampus',
  ];

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic to handle form submission, like sending data to an API
    console.log({ title, category, description, thumbnail, harga });
  };

  // Return the JSX
  return (
    <section className="bg-gray-50 flex items-center py-20 justify-center">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Tambah Buku</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Judul"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 transition"
          />
          <input
            type="file"
            onChange={(e) => setThumbnail(e.target.files ? e.target.files[0] : null)}
            accept="image/png, image/jpg, image/jpeg"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 transition"
          />
          <input
            type="text"
            placeholder="Harga"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 transition"
          />
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 transition"
          >
            {PostCategory.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <ReactQuill
            modules={module}
            formats={format}
            value={description}
            onChange={setDescription}
            className="bg-white"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
          >
            Create
          </button>
        </form>
      </div>
    </section>
  );
};

export default Create;

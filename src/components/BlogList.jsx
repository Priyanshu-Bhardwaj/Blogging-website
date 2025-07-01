import React, { useState } from 'react';
import { blogCategories } from '../assets/assets';

const BlogList = () => {
  const [menu, setMenu] = useState('All');

  return (
    <div>
      <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
        {blogCategories.map((item) => (
          <button
            key={item}
            onClick={() => setMenu(item)}
            className={`relative cursor-pointer px-4 py-1 rounded-full 
              ${menu === item ? 'bg-primary text-white' : 'text-gray-500 hover:text-black'}`}
          >
            {item}
          </button>
        ))}
      </div>

      <div>
        {/* Blog cards will be rendered here */}
      </div>
    </div>
  );
};

export default BlogList;

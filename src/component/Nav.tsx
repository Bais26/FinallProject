import React, { useState } from "react";
import { Link } from 'react-router-dom';

interface NavProps {
  name: string;
  url: string;
  dropdown?: NavItem[];
}

interface NavItem {
  name: string;
  url: string;
}

const Nav: React.FC<NavProps> = ({ name, url, dropdown }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="text-md cursor-pointer group bg-white sticky top-0">
      {dropdown ? (
        <>
          <span onClick={handleToggleDropdown} className="mr-2">{name}</span>
          {showDropdown ? (
            <i className="fa-solid fa-angle-down text-black text-sm" onClick={handleToggleDropdown}></i>
          ) : (
            <i className="fa-solid fa-angle-right text-black text-sm" onClick={handleToggleDropdown}></i>
          )}
          {showDropdown && (
            <div className="absolute shadow-lg">
              {dropdown.map((item, index) => (
                <Link key={index} to={item.url} className="block px-4 py-1 text-gray-800">
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link to={url} className="">{name}</Link>
      )}
    </div>
  );
}

export default Nav;

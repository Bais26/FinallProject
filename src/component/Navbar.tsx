import { useState } from "react";
import Nav from "./Nav.tsx";
import Logo from '../assets/logo/LogoBais.png';

interface NavItem {
  name: string;
  url: string;
  dropdown?: NavItem[];
}

export default function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<Record<number, boolean>>({});

  const listnav: NavItem[] = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Create Post",
      url: "/Create",
    },
    {
      name: "Authors",
      url: "/authors",
    },
  ];

  const handleToggleSidebar = () => {
    setToggle(!toggle);
  };

  const handleToggleDropdown = (index: number) => {
    setShowDropdown((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="bg-white sticky top-0">
      <div className="flex flex-wrap md:flex-nowrap justify-between mx-4">
        <img className="" src={Logo} alt="Logo" width={100} height={50} />
        <div className="hidden md:flex items-center gap-12 md:gap-12">
          {listnav.map((items, index) => (
            <Nav
              key={index}
              name={items.name}
              url={items.url}
              dropdown={items.dropdown}
            />
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={handleToggleSidebar}>
            <i className="text-2xl mt-2 fa-solid fa-bars"></i>
          </button>
          {toggle && (
            <div className="absolute w-full top-20 right-0 p-4">
              <div className="p-4">
                {listnav.map((items, index) => (
                  <div className="my-2" key={index}>
                    <span onClick={() => handleToggleDropdown(index)}>
                      <a href={items.url}>{items.name}</a>
                      {items.dropdown && (
                        <i
                          className={`fa-solid ml-2 ${
                            showDropdown[index] ? 'fa-angle-up' : 'fa-angle-right'
                          }`}
                        ></i>
                      )}
                    </span>
                    {showDropdown[index] && items.dropdown && (
                      <ul>
                        {items.dropdown.map((dropdownItem, dropdownIndex) => (
                          <li className="my-3" key={dropdownIndex}>
                            <a href={dropdownItem.url}>{dropdownItem.name}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

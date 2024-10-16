import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';

export const RootLayout = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="nav-container flex justify-center w-full pt-3 md:w-full md:mx-[0%]">
        <div className="nav-wrapper flex flex-wrap">
          <NavLink
            className="btn btn-ghost bg-base-100 w-28 h-[4rem] rounded-btn font-Rounded text-[11px] ml-[3.2rem] mr-[6rem]"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="btn btn-ghost w-28 h-[4rem] bg-base-100 rounded-btn font-Rounded text-[11px] ml-8 mr-[6rem]"
            to="about"
          >
            About
          </NavLink>
          <div className={`dropdown ${isDropdownOpen ? 'dropdown-open' : ''}`}>
            <div
              role="button"
              className="btn btn-ghost w-28 h-[4rem] rounded-btn bg-base-100 text-[11px] font-Rounded ml-[2rem] mr-28"
              onClick={toggleDropdown}
            >
              Directory
            </div>
            <ul className="menu-wrapper menu dropdown-content z-[1] mt-5 shadow bg-base-100 rounded-box w-52 sm:p-4 sm:w-full sm:gap-2 sm:text-xs">
              <li>1 = Quality Assurance (2022)</li>
              <li>2 = Cellular (2018)</li>
              <li>3 = SlackAttack (2020)</li>
              <li>4 = Tell Conor Something (2020)</li>
              <li>5 = Breakfast Broadcast (2020)</li>
              <li>6 = What are you doing right now? (2020)</li>
              <li>7 = How was your day? (2018)</li>
            </ul>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

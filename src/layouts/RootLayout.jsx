import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';

export const RootLayout = () => {
  return (
    <>
      <div className="navbar items-center w-full rounded-box">
        <div className="flex justify-center flex-1 px-2">
          <div className="flex items-stretch">
            <NavLink className="btn btn-ghost bg-base-100 rounded-btn font-Rounded" to="/">
              Home
            </NavLink>
            <NavLink className="btn btn-ghost bg-base-100 rounded-btn font-Rounded" to="about">
              About
            </NavLink>
            <div className="dropdown dropdown-hover">
              <div role="button" className="btn btn-ghost rounded-btn bg-base-100  font-Rounded">
                Directory
              </div>
              <ul className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li>1 = Quality Assurance(2022)</li>
                <li>2 = Cellular(2018)</li>
                <li>3 = SlackAttack(2020)</li>
                <li>4 = Tell Conor Something(2020)</li>
                <li>5 = Breakfast Broadcast(2020)</li>
                <li>6 = What are you doing right now?(2020)</li>
                <li>7 = How was your day?(2018)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
};

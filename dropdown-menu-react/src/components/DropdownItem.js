import React from "react";

export const DropdownItem = ({ userInfo }) => {
  return (
    <>
      {userInfo.map((value, index) => {
        return (
          <li className="dropdownItem" key={index}>
            <img src={value.image} alt=""></img>
            <a href="#"> {value.title} </a>
          </li>
        );
      })}
    </>
  );
};

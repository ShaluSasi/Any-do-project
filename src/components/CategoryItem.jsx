import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
const CategoryItem = ({ id, name, key, index, callbackProp }) => {
  const [currentCategoryId, setCurrentCategoryId] = useState(id);
  const [currentCategoryName, setCurrentCategoryName] = useState(name);
  const handleDelete = async (event) => {
    setCurrentCategoryId(id);
    const response = await fetch("http://localhost:8080/cat/category", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: currentCategoryId }),
    });
    callbackProp();
  };
  useEffect(() => {
    setCurrentCategoryName(name);
  }, []);
  return (
    <>
      <li className="AppSidebarLi">
        <a href={"/" + name}>
          <div className="profileicon">
            <div>{name}</div>
            <div style={{ marginTop: "4px" }}>
              <button
                aria-label="Delete"
                className="TaskItemDeleteTask__button TaskItemDeleteTask__button--in"
                type="submit"
                onClick={handleDelete}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  className="TaskItemDeleteTask__button__svg"
                >
                  <g fill="none">
                    <path d="M2 2h16v16H2z"></path>
                    <path
                      d="M11.062 10l3.75-3.85c.287-.295.24-.735-.104-.984-.347-.251-.856-.212-1.143.082L10 8.91 6.435 5.25c-.287-.295-.796-.334-1.143-.083-.344.249-.39.69-.104.984L8.938 10l-3.75 3.85c-.287.295-.24.735.104.984.347.251.856.212 1.143-.082L10 11.09l3.565 3.66c.287.295.796.334 1.143.083.344-.249.39-.69.104-.984L11.062 10zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </a>
      </li>
    </>
  );
};
export default CategoryItem;

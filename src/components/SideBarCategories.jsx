import CategoryItem from "./CategoryItem";
import React, { useState, useEffect } from "react";
const SideBarCategories = ({ callbackProp, categoryData }) => {
  return (
    <>
      <ul className="AppSidebarUl">
        {categoryData.map((category, index) => (
          <CategoryItem
            key={category.id}
            {...category}
            index={index}
            callbackProp={callbackProp}
          />
        ))}
      </ul>
    </>
  );
};
export default SideBarCategories;

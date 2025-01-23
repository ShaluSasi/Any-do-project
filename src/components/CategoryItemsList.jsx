import React, { useEffect, useState } from "react";
import CategoryRadioButton from "./CategoryRadioButton";
import { useContext } from "react";
import { UserContext } from "../App";
const CategoryItemsList = ({ category, categoryId }) => {
  const [categoryItems, setCategoryItems] = useState([]);
  const { itemsData, setItemsData } = useContext(UserContext);
  const [currentCategory, setCurrentCategory] = useState(category);
  const [currentCategoryId, setCurrentCategoryId] = useState(categoryId);
  const fetchCategoryItems = async (event) => {
    console.log("fetch CategoryItems called");
    console.log("category:::" + category);
    console.log("currentCategory:::" + currentCategory);
    setCurrentCategory(category);
    setCurrentCategoryId(categoryId);
    const response = await fetch(
      "http://localhost:8080/cat/categories/tasks?categoryName=" +
        currentCategory
    );
    const resData = await response.json();
    console.log(resData);
    setCategoryItems(resData);
  };
  useEffect(() => {
    fetchCategoryItems();
  }, []);
  return (
    <>
      <div id="game-container">
        <h2>{category}</h2>

        <ul style={{ paddingLeft: "0px", marginBottom: "0px" }}>
          {categoryItems.map(
            (item, index) => (
              <CategoryRadioButton
                indexKey={itemsData.indexOf(item)}
                key={item.id}
                filterKey={currentCategoryId}
                {...item}
                callback={fetchCategoryItems}
                index={index}
              />
            )
            // day === item.day && (
            //   <TaskListItem filter={day} key={item.day} {...item} />
            // )
          )}
        </ul>
      </div>
    </>
  );
};
export default CategoryItemsList;

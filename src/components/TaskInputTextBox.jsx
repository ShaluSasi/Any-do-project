import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
export default function TaskInputTextBox({ callbackProp, filterKey, size }) {
  const [newTask, setNewTask] = useState("");
  const [moveCategory, setMoveCategory] = useState("");
  const [categoryModalShow, setCategoryModalShow] = useState(false);
  const [isVisibleCategoryModal, setIsVisibleCategoryModal] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [currentCategoryRadioValue, setCurrentCategoryRadioValue] = useState();
  const handleCategoryRadioChange = (e) => {
    setCurrentCategoryRadioValue(e.target.value);
    document.getElementById(
      "category_radio_btn" + e.target.value
    ).checked = true;
  };
  const fetchCategoryList = async (event) => {
    console.log("fetch fetchCategoryList called");
    const response = await fetch("http://localhost:8080/cat/categories/order");
    const resData = await response.json();
    setCategoryList(resData);
  };
  useEffect(() => {
    fetchCategoryList();
  }, []);
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(categoryList);
    fetchCategoryList();
    setIsVisibleCategoryModal(!isVisibleCategoryModal);
    setCategoryModalShow(true);

    document.getElementById("addTaskInput" + filterKey).value = "";
    callbackProp();
  };
  const handleMoveCategoryClick = async (event) => {
    setMoveCategory(currentCategoryRadioValue);
    let temp = currentCategoryRadioValue;
    setCategoryModalShow(false);
    const response = await fetch("http://localhost:8080/Task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newTask,
        day: filterKey,
        seqNo: size + 1,
        category: temp,
      }),
    });
    callbackProp();
  };

  return (
    <div className="SmartTypeQuickAdd">
      <div className="SmartTypeQuickAdd__textField">
        <div className="SmartTypeQuickAddTextFieldWrapper SmartTypeQuickAddTextFieldWrapper__content--withEndAdornment">
          <input
            id={"addTaskInput" + filterKey}
            type="text"
            placeholder="Enter text"
            onChange={handleInputChange}
            className="addTaskInput"
          ></input>
          <div>
            <button
              className="ButtonInlineText ButtonInlineText--faintTheme"
              type="submit"
              onClick={handleSubmit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="SmartTypeQuickAdd__sendIcon"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  d="M12.6 17.2V8M8 12.6 12.6 8l4.6 4.6"
                ></path>
              </svg>
            </button>
          </div>
          <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={categoryModalShow}
            onHide={() => setCategoryModalShow(false)}
          >
            <Modal.Header style={{ border: "none" }} closeButton></Modal.Header>
            <Modal.Body>
              <div className="TextField2">My Lists</div>
              {categoryList.map((category, index) => (
                // <CategoryItem
                //   key={category.id}
                //   {...category}
                //   index={index}
                //   callbackProp={callbackProp}
                // />
                <div className="TextField2">
                  <button
                    value={category.id}
                    style={{
                      backgroundColor: "transparent",
                      fontWeight: "400",
                      fontSize: "20px",
                      width: "100%",
                      textAlign: "left",
                      border: "none",
                    }}
                    onClick={handleCategoryRadioChange}
                  >
                    <input
                      type="radio"
                      id={"category_radio_btn" + category.id}
                      name={"category_radio_btn"}
                      value={category.id}
                      onClick={handleCategoryRadioChange}
                    />
                    {category.name}
                  </button>
                </div>
              ))}
              {/* <div className="TextField1">
                <input
                  id="CategoryFieldBox"
                  type="text"
                  maxlength="1000"
                  placeholder="Category Name"
                  autofocus=""
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    fontWeight: "700",
                    fontSize: "28px",
                  }}
                />
              </div> */}
            </Modal.Body>
            <Modal.Footer style={{ border: "none" }}>
              {/* <Button onClick={handleAddClick}>ADD</Button> */}
              <Button onClick={handleMoveCategoryClick}>ADD</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

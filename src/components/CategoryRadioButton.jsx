import React, { useEffect, useState } from "react";
export default function CategoryRadioButton({
  id,
  name,
  status,
  category,
  callback,
  indexKey,
  filterKey,
  index,
  key,
  props,
}) {
  useEffect(() => {
    callback();
    console.log(">>>" + currentCategory);
    console.log(filterKey);
    console.log(isValidCategory);
  }, []);
  const [currentTaskId, setCurrentTaskId] = useState(id);
  const [currentCategory, setCurrentCategory] = useState(category);
  const [currentCategoryName, setCurrentCategoryName] = useState(name);
  const isValidCategory = currentCategory == filterKey ? true : false;
  const [strikeThroughCSS, setStrikeThroughCSS] = useState(false);
  const [currentTaskStatus, setCurrentTaskStatus] = useState(status);

  const [currentRadioValue, setCurrentRadioValue] = useState();
  const isValid = currentTaskStatus == "DONE" ? true : false;
  const handleDelete = async (event) => {
    setCurrentTaskId(id);
    const response = await fetch("http://localhost:8080/Task", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: currentTaskId }),
    });

    callback();
  };
  const handleRadio = async (e) => {
    setCurrentRadioValue(e.target.value);
    setCurrentTaskStatus(currentTaskStatus == "DONE" ? "NOT_DONE" : "DONE");
    const response = await fetch("http://localhost:8080/Task", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: e.target.value }),
    });
    //setStrikeThroughCSS((prev) => !prev);
    callback();
  };
  const StrikeThrough = {
    textDecoration: "line-through",
  };
  const StrikeThroughNone = {
    textDecoration: "none",
  };
  return (
    <>
      <React.Fragment key={index}>
        {isValidCategory && (
          <table className="itemTable">
            <tbody style={isValid ? StrikeThrough : StrikeThroughNone}>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    value={id}
                    name="category_radio_btn"
                    onClick={handleRadio}
                    checked={isValid}
                  />
                </th>
                <td>{currentCategoryName}</td>
                <td>
                  <div>
                    <div>
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
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </React.Fragment>
    </>
  );
}

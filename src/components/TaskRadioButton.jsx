import React, { useEffect, useState } from "react";
import fetchData from "./TaskListPage";
import { Card, CardBody } from "react-bootstrap";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import DropArea from "./DropArea";
export default function TaskRadioButton({
  id,
  name,
  status,
  day,
  seqNo,
  callbackProp,
  filterKey,
  indexKey,
  index,
  setActiveCard,
  onDrop,
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const [currentTaskId, setCurrentTaskId] = useState(id);
  const [currentRadioValue, setCurrentRadioValue] = useState();
  const [strikeThroughCSS, setStrikeThroughCSS] = useState(false);
  const [currentTaskStatus, setCurrentTaskStatus] = useState(status);
  const [currentDay, setCurrentDay] = useState(day);
  const handleRadioChange = async (e) => {
    setCurrentRadioValue(e.target.value);
    setCurrentTaskStatus(currentTaskStatus == "DONE" ? "NOT_DONE" : "DONE");
    const response = await fetch("http://localhost:8080/Task", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: e.target.value }),
    });
    //setStrikeThroughCSS((prev) => !prev);
    callbackProp();
  };
  const handleDelete = async (event) => {
    setCurrentTaskId(id);
    const response = await fetch("http://localhost:8080/Task", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: currentTaskId }),
    });

    callbackProp();
  };
  const StrikeThrough = {
    textDecoration: "line-through",
  };
  const StrikeThroughNone = {
    textDecoration: "none",
  };
  const style = { transition, transform: CSS.Transform.toString(transform) };
  const isValid = currentTaskStatus == "DONE" ? true : false;
  const isValidDay = currentDay == filterKey ? true : false;
  return (
    <>
      <React.Fragment key={index}>
        {isValidDay && (
          <table
            className="itemTable"
            draggable
            onDragStart={() => setActiveCard(index)}
            onDragEnd={() => {
              setActiveCard(null);
              callbackProp();
            }}

            // ref={setNodeRef}
            // {...attributes}
            // {...listeners}
            // style={style}
          >
            <tbody>
              <tr style={isValid ? StrikeThrough : StrikeThroughNone}>
                <th>
                  <input
                    type="checkbox"
                    value={id}
                    name="task_radio_btn"
                    onClick={handleRadioChange}
                    checked={isValid}
                  />
                </th>
                <td>{name}</td>
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
            {/* <tr>
        <td id="itemCol">{owner}</td>
      </tr> */}
          </table>
        )}
        {isValidDay && <DropArea onDrop={() => onDrop(day, index + 1)} />}
      </React.Fragment>
    </>
  );
}

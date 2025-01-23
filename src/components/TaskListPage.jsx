import { useEffect, useState } from "react";
import TaskRadioButton from "./TaskRadioButton";
import TaskInputTextBox from "./TaskInputTextBox";
import { UserContext } from "../App";
import { useContext } from "react";
import React from "react";
import DropArea from "./DropArea";
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
export default function TaskListPage({ day, setActiveCard, onDrop }) {
  const { itemsData, setItemsData } = useContext(UserContext);
  const fetchData = async (event) => {
    console.log("fetchData called");
    const response = await fetch("http://localhost:8080/Task/order");
    const resData = await response.json();
    setItemsData(resData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const getTaskPos = (id) => itemsData.findIndex((item) => item.id === id);
  const handleDragEnd = async (event) => {
    const { active, over } = event;
    const activeId = active.id;
    const overId = over.id;
    if (active.id == over.id) return;
    setItemsData((itemsData) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      alert(originalPos);
      alert(newPos);
      itemsData[originalPos].day = itemsData[newPos].day;
      const newItemsArray = arrayMove(itemsData, originalPos, newPos);
      console.log("After dragging******");
      console.log(newItemsArray);
      const response = fetch(
        "http://localhost:8080/Task/reorder?activeId=" +
          activeId +
          "&&overId=" +
          overId,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newItemsArray),
        }
      );
      return newItemsArray;
    });
  };
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    }),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );
  //const maxSeqValue = Math.max(...itemsData.map((data) => data.seqNo));
  const maxSeqValue = Math.max.apply(
    Math,
    itemsData.map(function (data) {
      return data.seqNo;
    })
  );

  return (
    <>
      {/* <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      > */}
      {<h2>{day}</h2>}
      {/* <SortableContext
          items={itemsData}
          strategy={verticalListSortingStrategy}
        > */}
      <ul style={{ paddingLeft: "0px", marginBottom: "0px" }}>
        <DropArea onDrop={() => onDrop(day, 0)} />
        {itemsData.map(
          (item, index) => (
            // <TaskRadioButton {...item} />

            <TaskRadioButton
              filterKey={day}
              indexKey={itemsData.indexOf(item)}
              key={item.id}
              {...item}
              callbackProp={fetchData}
              index={index}
              setActiveCard={setActiveCard}
              onDrop={onDrop}
            />
          )
          // day === item.day && (
          //   <TaskListItem filter={day} key={item.day} {...item} />
          // )
        )}
      </ul>
      {/* </SortableContext>
      </DndContext> */}
      {/* <TaskInputTextBox callbackProp={fetchData} /> */}
      <TaskInputTextBox
        key={"asd"}
        size={maxSeqValue}
        callbackProp={fetchData}
        filterKey={day}
      />
    </>
  );
}

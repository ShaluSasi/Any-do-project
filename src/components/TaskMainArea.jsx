import { useState } from "react";
import TaskListBox from "../components/TaskListBox";
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
import { UserContext } from "../App";
import { useContext } from "react";
export default function TaskMainArea() {
  const { itemsData, setItemsData } = useContext(UserContext);
  const handleDragEnd = async (event) => {
    const { active, over } = event;
    const activeId = active.id;
    const overId = over.id;
    if (active.id == over.id) return;
    setItemsData((itemsData) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

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
  return (
    <>
      <DndContext
        onDragEnd={handleDragEnd}
        sensors={sensors}
        collisionDetection={closestCorners}
      >
        <SortableContext
          items={itemsData}
          strategy={verticalListSortingStrategy}
        >
          <div>
            <div id="game-container">
              <TaskListBox day="Today" />
            </div>
            <div id="game-container">
              <TaskListBox day="Tomorrow" />
            </div>
            <div id="game-container">
              <TaskListBox day="Someday" />
            </div>
            <div id="game-container">
              <TaskListBox day="Others" />
            </div>
          </div>
        </SortableContext>
      </DndContext>
    </>
  );
}

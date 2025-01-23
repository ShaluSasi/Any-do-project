import TaskPage from "./components/TaskPage.jsx";
import { useState, useEffect } from "react";
import TaskListPage from "./components/TaskListPage.jsx";
import Container from "react-bootstrap/Container";
import BasicExample from "./components/Navbar.jsx";
import { createContext, useContext } from "react";
import fetchData from "./components/TaskListPage";
import SideBar from "./components/SideBar.jsx";
import { Route, Routes } from "react-router-dom";
import CategoryItemsList from "./components/CategoryItemsList.jsx";
export const UserContext = createContext(null);
function App() {
  const [itemsData, setItemsData] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  const onDrop = (day, position) => {
    console.log(
      `${activeCard} is going to place into ${day} and at the position ${position}`
    );
    if (activeCard === null || activeCard === undefined) return;
    const taskToMove = itemsData[activeCard];
    const newItemsArray = itemsData.filter(
      (item, index) => index !== activeCard
    );
    newItemsArray.splice(position, 0, { ...taskToMove, day: day });
    setItemsData(newItemsArray);
    console.log(newItemsArray);
    const originalPos = newItemsArray[activeCard].id;
    const newPos = position;
    const response = fetch(
      "http://localhost:8080/Task/reorder?activeId=" +
        originalPos +
        "&&overPosition=" +
        newPos +
        "&&category=" +
        day,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItemsArray),
      }
    );
    window.location.reload(false);
  };
  return (
    <>
      <main>
        <UserContext.Provider value={{ itemsData, setItemsData }}>
          <BasicExample /> <BasicExample />
          <div className="row1" style={{ height: "100%" }}>
            <div
              className="column1 left"
              style={{
                background: "white",
                height: "1800px",
              }}
            >
              <SideBar />
            </div>
            <Routes>
              <Route
                path="/*"
                element={
                  <div
                    className="column1 middle"
                    style={{
                      height: "100%",
                      display: "grid",
                    }}
                  >
                    <article
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        padding: "100px 8%",
                      }}
                    >
                      <div
                        id="game-container"
                        style={{
                          margin: "20px",
                        }}
                      >
                        <TaskListPage
                          day="Today"
                          setActiveCard={setActiveCard}
                          onDrop={onDrop}
                        />
                      </div>
                      <div id="game-container" style={{ margin: "20px" }}>
                        <TaskListPage
                          day="Tomorrow"
                          setActiveCard={setActiveCard}
                          onDrop={onDrop}
                        />
                      </div>
                      <div id="game-container" style={{ margin: "20px" }}>
                        <TaskListPage
                          day="Someday"
                          setActiveCard={setActiveCard}
                          onDrop={onDrop}
                        />
                      </div>
                      <div id="game-container" style={{ margin: "20px" }}>
                        <TaskListPage
                          day="Others"
                          setActiveCard={setActiveCard}
                          onDrop={onDrop}
                        />
                      </div>
                    </article>
                  </div>
                }
              />
              <Route
                path="/Food"
                element={<CategoryItemsList category="Food" categoryId="3" />}
              />
              <Route
                path="/Career"
                element={<CategoryItemsList category="Career" categoryId="4" />}
              />
              <Route
                path="/Personal"
                element={
                  <CategoryItemsList category="Personal" categoryId="152" />
                }
              />
              <Route
                path="/Shopping"
                element={
                  <CategoryItemsList category="Shopping" categoryId="202" />
                }
              />
            </Routes>
          </div>
        </UserContext.Provider>
      </main>
    </>
  );
}

export default App;

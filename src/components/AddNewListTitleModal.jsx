import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
function AddNewListTitleModal(props) {
  const [newCategory, setNewCategory] = useState("");
  const handleAddInputChange = (event) => {
    setNewCategory(event.target.value);
  };
  const handleAddClick = async (e) => {
    const response = await fetch("http://localhost:8080/cat/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newCategory }),
    });
    return props.onHide;
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{ border: "none" }} closeButton></Modal.Header>
      <Modal.Body>
        <div className="TextField1">
          <input
            id="TextFieldBox"
            type="text"
            maxlength="1000"
            placeholder="Add a list title"
            autofocus=""
            onChange={handleAddInputChange}
            style={{
              border: "none",
              backgroundColor: "transparent",
              fontWeight: "700",
              fontSize: "28px",
            }}
          />
        </div>
      </Modal.Body>
      <Modal.Footer style={{ border: "none" }}>
        {/* <Button onClick={handleAddClick}>ADD</Button> */}
        <Button onClick={props.onHide}>ADD</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default AddNewListTitleModal;

import React from "react";
import { Modal } from "semantic-ui-react";

const DishInput = props => (

  <div className="newDishLink">
    <InputModal
      inputClickHandler={props.inputClickHandler}
      newDish={props.newDish}
      inputChangeHandler={props.inputChangeHandler}
      addNew={<p className="linkNewDish">Add new dish</p>}
    />
  </div>
);
const InputModal = props => (
  <Modal
    trigger={<p className="linkNewDish">Add new dish</p>}
    closeIcon
  >
    <Modal.Header>Add New Dish</Modal.Header>
    <Modal.Content image>

      <Modal.Description>
        <div className="form-container">
          <form onSubmit={props.inputClickHandler}>
            <input placeholder="dish name" className="inputStyle" name="name" onChange={props.inputChangeHandler} /> <br />
            <input placeholder="restaurant name" className="inputStyle" name="restaurant" onChange={props.inputChangeHandler} />
            <br />
            <input placeholder="keyword" className="inputStyle" name="keyword" onChange={props.inputChangeHandler} />
            <br />
            <input placeholder="$" className="inputStyle" name="price" onChange={props.inputChangeHandler} />
            <br />
            <input placeholder="image URL" className="inputStyle" name="image" onChange={props.inputChangeHandler} />
            <br />
            <input placeholder="rating" className="inputStyle" name="rating" onChange={props.inputChangeHandler} />
            <br />
            <button style={{ float: "right" }} >Add</button>
          </form>
        </div>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default DishInput;
import React from "react";
import { Modal, Rating, Image } from "semantic-ui-react";

const DishInput = props => (

  <div className="newDishLink">
    <InputModal
      inputClickHandler={props.inputClickHandler}
      newDish={props.newDish}
      inputChangeHandler={props.inputChangeHandler}
      inputRateHandler={props.inputRateHandler}
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
      <Image wrapped size='small' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCuh28gO5any9RjETQvdVKu5-nXDHZX7WnBQCpuXa4CEqI4Hebw' />
      <Modal.Description>
        <div className="form-container">
          <form onSubmit={props.inputClickHandler}>
            <input placeholder="dish name" className="inputStyle" name="name" onChange={props.inputChangeHandler} /> <br />
            <input placeholder="restaurant name" className="inputStyle" name="restaurant" onChange={props.inputChangeHandler} />
            <br />
            <input placeholder="phone no." className="inputStyle" name="phone" onChange={props.inputChangeHandler} />
            <br />
            <input placeholder="address" className="inputStyle" name="address" onChange={props.inputChangeHandler} />
            <br />
            <input placeholder="keyword" className="inputStyle" name="keyword" onChange={props.inputChangeHandler} />
            <br />
            <input placeholder="$" className="inputStyle" name="price" onChange={props.inputChangeHandler} />
            <br />
            <input placeholder="description" className="inputStyle" name="description" onChange={props.inputChangeHandler} />
            <br />
            <input placeholder="image URL" className="inputStyle" name="image" onChange={props.inputChangeHandler} />
            <br />
            {/* <input placeholder="review" className="inputStyle" name="review" onChange={props.inputChangeHandler} />
            <br />
            <Rating icon="star" maxRating={5} onRate={props.inputRateHandler} />
            <br /> */}
            <button style={{ float: "right" }} >Add</button>
          </form>
        </div>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default DishInput;
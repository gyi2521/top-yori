import React from "react";
import { Grid, Image, Rating } from "semantic-ui-react";
import { Button, Header, Modal } from "semantic-ui-react";
//import Slider from "react-slick";

const ModalModalExample = props => (
  <Modal
    trigger={<Image src={props.dishImage} size="tiny" circular href="#" />}
    closeIcon
  >
    <Modal.Header>{props.dishName}</Modal.Header>
    <Modal.Content image>
      <Image src={props.dishImage} size="medium" circular />
      <Modal.Description>
        <Header>{props.restaurant}</Header>
        <Rating icon="star" defaultRating={props.rating} maxRating={5} />
        <p>"Best dish I had in Tin drum! "</p>
        <Header>${props.price}</Header>
        <p>
          Description: Savory Thai brown sauce, green bean, carrot, onion,
          scallion, basil, jalapeño, cucumber, sautéed chicken, egg fried rice
        </p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

const PopularDishList = props => (
  <div
    style={{
      // backgroundColor: "#eee",
      width: "18%",
      // overflow: "auto",
      // overflowX: "scroll",
      // overflowY: "hidden",
      position: "fixed",
      top: 40,
      right: 10

    }}
  >
    <Grid>
      <Grid.Row columns={2}>
        {props.popularDishList.map((dish, i) => (
          <Grid.Column
            key={i}
            style={{
              backgroundColor: "#eee",
              border: "2px solid white",
              padding: 0
            }}
          >
            <div style={{ padding: 8 }}>
              {/* <h4>{dish.name}</h4> */}
              <ModalModalExample
                dishImage={dish.image}
                dishName={dish.name}
                restaurant={dish.restaurant}
                rating={dish.rating}
                price={dish.price}
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "auto",
                backgroundColor: "rgba(0,0,0,0.5)"
              }}
            >
              <span
                style={{ color: "white", marginLeft: "5px", fontSize: "10px" }}
              >
                {dish.name}
                {/* <br />${dish.price}&nbsp; */}
              </span>
              {/* <Rating icon="star" defaultRating={dish.rating} maxRating={5} /> */}
            </div>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  </div>
);

export default PopularDishList;

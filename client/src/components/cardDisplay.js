import React from 'react';
import { Image, Rating } from "semantic-ui-react";
import { Header, Modal } from "semantic-ui-react";

const ModalModalExample = props => (
    <Modal
        trigger={<Image src={props.dishImage} width="110" height="110" circular href="#" />}
        closeIcon
    >
        <Modal.Header>{props.dishName}</Modal.Header>
        <Modal.Content image>
            <Image src={props.dishImage} width="170" height="130" circular />
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

const DishCard = (props) => (

    <div className="row" >

        <button onClick={props.displayPrevious} className="prev clearButton" >&#10094;</button>
        <label className='topYoriTitle'>Popular dish in your area</label>
        <div className="dishCardContent">

            {props.popularDishList.slice(props.startPosition, props.startPosition + 5).map((dish, i) => (

                <div key={i} className='column'>

                    <div className='card'>

                        <div className="cardImage"><h4>{dish.name}</h4>
                            <ModalModalExample
                                dishImage={dish.image}
                                dishName={dish.name}
                                restaurant={dish.restaurant}
                                rating={dish.rating}
                                price={dish.price}
                            /></div>
                        <div className='background-sage'>
                            {dish.restaurant}<br />

                            <Rating icon="star" defaultRating={dish.rating} maxRating={5} />
                        </div>
                    </div>
                </div>
            ))}

        </div>
        <button onClick={props.displayNext} className="next clearButton" >&#10095;</button>
    </div>

);

export default DishCard;

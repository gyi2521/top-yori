import React, { Component } from 'react';
import { Image, Rating } from "semantic-ui-react";
import { Header, Modal } from "semantic-ui-react";
import GoogleMapReact from 'google-map-react';

const ModalModalExample = props => {


    let modalContent = null;
    let map = null;
    let trigger = null;

    if (props.mode === "view") {
        trigger = <Image src={props.dishImage} style={{ paddingBottom: '7px' }} width="110" height="110" circular href="#" />;
        modalContent = <Modal.Description>
            <Header>at {props.restaurant}</Header>
            <p>{props.address}</p>
            <p>{props.phone}</p>
            <Header>${props.price}</Header>
            {/* <p>Description: {props.description}</p> */}

        </Modal.Description>
            ;
        map = <Modal.Description>
            <SimpleMap restaurant={props.restaurant} center={{ lat: 33.776752, lng: -84.390046 }} />
        </Modal.Description>;
    }
    else {
        trigger = <a>Rate & Review</a>
        modalContent = <Modal.Description>
            <Rating icon="star" style={{ paddingLeft: "10px", paddingTop: "10px" }} maxRating={5} onRate={props.reviewHandleRating} />
            <br />
            <textarea name="review" onChange={props.reviewChangeHandler} cols={40} rows={7} /><br />
            <button onClick={props.reviewClickHandler} value={props.dishId}>Submit</button>
        </Modal.Description>;
    }


    return (
        <Modal
            trigger={trigger}
            closeIcon
        >
            <Modal.Header>{props.dishName}</Modal.Header>

            <Modal.Content image>
                <Modal.Description style={{ paddingRight: "10px" }}>
                    <Image src={props.dishImage} width="130" height="130" circular />
                    <Rating icon="star" rating={props.rating} style={{ paddingLeft: "10px", paddingTop: "10px" }} maxRating={5} />
                </Modal.Description>
                {modalContent}
                {map}
            </Modal.Content>
        </Modal>
    );

}

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
                                phone={dish.phone}
                                address={dish.address}
                                rating={dish.rating}
                                price={dish.price}
                                review={dish.review}
                                description={dish.description}
                                mode="view"
                            /><br /><br /><br />
                            <ModalModalExample
                                dishId={dish._id}
                                rating={dish.rating}
                                dishImage={dish.image}
                                dishName={dish.name}
                                reviewHandleRating={props.reviewHandleRating}
                                reviewChangeHandler={props.reviewChangeHandler}
                                reviewClickHandler={props.reviewClickHandler}
                                mode="review"
                            />
                        </div>
                        <div className='backgroundChange'>
                            {dish.restaurant}<br />
                            <Rating icon="star" rating={dish.rating} maxRating={5} />
                            <br /><br />
                        </div>
                    </div>
                </div>
            ))}

        </div>
        <button onClick={props.displayNext} className="next clearButton" >&#10095;</button>
    </div>

);

const AnyReactComponent = ({ text }) => (
    <div style={{
        color: 'white',
        background: 'skyblue',
        padding: '10px 5px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
);

class SimpleMap extends React.Component {
    render() {
        let zoom = 18;
        let center = {}
        switch (this.props.restaurant) {
            case "Tin Drum":
                center = { lat: 33.776752, lng: -84.390046 };
                break;
            case "Moe's":
                center = { lat: 33.777190, lng: -84.390100 };
                break;
            case "Ray's NY Pizza":
                center = { lat: 33.776700, lng: -84.388180 };
                break;
            case "Umma's House":
                center = { lat: 33.777024, lng: -84.389256 };
                break;
            default:
                center = { lat: 33.777645, lng: -84.388878 };
        }

        return (
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDGFQR3I_Ny_FTC8vfIz5qW8WTIbJsTr80" }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <AnyReactComponent
                    text={this.props.restaurant}
                />
            </GoogleMapReact>
        );
    }
}

export default DishCard;

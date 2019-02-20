import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
    <div style={{
        color: 'white',
        background: 'grey',
        padding: '15px 10px',
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
    static defaultProps = {
        center: { lat: 33.776752, lng: -84.390046 },
        zoom: 18
    };

    render() {
        return (
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDGFQR3I_Ny_FTC8vfIz5qW8WTIbJsTr80" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent
                    lat={33.776752}
                    lng={-84.390046}
                    text={'Kreyser Avrora'}
                />
            </GoogleMapReact>
        );
    }
}

export default SimpleMap;
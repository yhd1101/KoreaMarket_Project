import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends React.Component {
    render() {
        const mapStyles = {
            width: '450px',
            height: '370px',
            marginTop: '25px'
        };
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: 37.7749,
                    lng: -122.4194
                }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBGnjmcpvMOWwh1BvSuiKyHHwRn-eZbOpA'
    // apiKey: 'AIzaSAKmH3ECzGz_qJArVA_hm2mplcRviKCNO0'
})(MapContainer);
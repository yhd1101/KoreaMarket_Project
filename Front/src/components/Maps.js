import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends React.Component {
    render() {
        const mapStyles = {
            width: '400px',
            height: '300px',
            marginTop: '30px'
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
    apiKey: 'AIzaSyCTGZUI3SHj3GMx_ja_hEHACiJmrpWqF1s'
    // apiKey: 'AIzaSAKmH3ECzGz_qJArVA_hm2mplcRviKCNO0'
})(MapContainer);
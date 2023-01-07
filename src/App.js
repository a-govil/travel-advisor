import React, {useState, useEffect} from 'react';

import { CssBaseline, Grid } from '@material-ui/core';

import { getPlaceData } from './api';

import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import PlaceDetails from './components/PlaceDetails/PlaceDetails';



const App = () => {
    const[places,setPLaces]=useState([]);

    const [coordinates,setCoordinates]=useState({});
    const [bounds, setBounds] = useState(null);

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
            setCoordinates({lat: latitude,lng:longitude});
        })

    },[])

    useEffect(()=> {
        console.log(coordinates,bounds);
        
        getPlaceData()
        .then((data)=>{
            console.log(data)

        })
    },[coordinates,bounds]);

    return (
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width:'100%'}}>
                <Grid item xs={12} md={5} >
                    <List/>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Map
                        setCoordinates={setBounds}
                        setBounds={setBounds}
                        coordinates={coordinates}
                    />
                </Grid>

            </Grid>
        </>
    );
}

export default App;

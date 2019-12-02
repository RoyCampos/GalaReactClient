import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

//Import Components
import Menu from './home/navbar';
import Filter from './home/filter';
import Schedule from './home/schedule-tour';
import TrendingPlaces from './home/trending-places-content';
//Import Assets
import '../css/all.min.css';
import '../css/spaces.css';
import TopCitys from './home/top-citys';

let authFails = false;

const Home = (props) => {
    /*Validation
    if (authFails)
        return <Redirect to='/' />*/
    //Hooks
    const [homeState, setHomeState] = useState({
            schedule: [
                {
                    id: '01PEX',
                    country: 'PE',
                    title: 'Reserva tu tour experience hoy!',
                    description: `Programe un recorrido, haga una cita para alquilar espacio
                en Themesberg, o solicite más información.`}
            ],
            topCities: [
                {
                    id: 'LMPE',
                    country: 'PE',
                    city: 'Lima',
                    distric: [{
                        name: 'Miraflores',
                        urlImg: ''
                    },
                    {
                        name: 'San Isidro',
                        urlImg: ''
                    },
                    {
                        name: 'Magdalena',
                        urlImg: ''
                    },
                    {
                        name: 'Surco',
                        urlImg: ''
                    }
                    ],
                }
            ],
            trendingPlaces:[
                {
                    id: '',
                    title: 'Vancouver Coworking',
                    ubication: 'Miraflores, Lima',
                    state: 0, //When the value is 0(unverified), if is 1 (verified)
                    rate:5, //This can be any number 0 to 5
                    category:'Coworking',
                    about:{
                        urlImgs:['','',''],
                        description:'Latelier is the brainchild of 3 innovative guys that want to create a working hub for the local community',
                    },
                    features:{
                        priceMonthly: '2100$',
                        priceDaily:'200$',
                        capacity: '20',
                        dimensions:'200mt'
                    },
                    amenities:[
                        {basic:['High-Speed WiFi','Air Conditioning','Heating'],
                        seating:['Standing Desks','Ergonomic Chairs','Beanbags'],
                        community:['Events','Community Lunches','Workshops','Community Drinks'],
                        facilities:['Kitchen','Skype Room','Personal Lockers'],
                        equipment:['Projector','Sound'],
                        transportation:['5 Minute Walk From Public Transit', 'Bike Parking'],
                        relaxZones:['Outdoor Terrace','Lounge / Chill-out Area'],
                        caffeineFix:['Free Tea','Free Coffee']
                        }
                    ],
                    reviews:[
                        {id:'',
                        userName:'',
                        dateReview:'',
                        rate:5,
                        description:''}
                    ],
                    location:'',
                    propertyOwner:{
                        userName:'Tanislav Robert',
                        email:'',
                        phoneNumber:'',
                        urlImg:''
                    }
                }
            ],
            sendData: {}
        });
    return (
        <main>
            {console.log(props)}
            <Menu dataUser={props} />
            <Filter data={props}/>
            <Schedule data={homeState.schedule} />
            <TopCitys citys={homeState.topCities} />
            <TrendingPlaces trending={homeState.trendingPlaces} />
        </main>
    )
}

export default Home;
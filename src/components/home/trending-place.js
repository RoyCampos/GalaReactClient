import React, { useState, useEffect } from 'react';
import axios from 'axios';
//Assets
import '../../css/all.min.css';
import '../../css/spaces.css'


const TrendingPlances = (props) => {

    const [TrendingPlace, setTrendingPlace] = useState(
        /*
        ()=>{
        const initialState =[]; 
        fetch('http://localhost:8080/galarestapi/api/v1/place/places/by/rate/5')
        .then(response => response.json())
        .then(dataresponse => initialState.push(dataresponse))
        return initialState;
    }*/
        [
            {
                "id": 29,
                "titlePlace": "Zara Coworking",
                "ubication_place": "Surco",
                "statePlace": 0,
                "ratePlace": 2,
                "categoryPlace": "Coworking",
                "urlImgPlace": "https://picsum.photos/id/1078/3000/2000",
                "capacidadPlace": 100
            },
            {
                "id": 34,
                "titlePlace": "Zara Coworking",
                "ubication_place": "Surco",
                "statePlace": 0,
                "ratePlace": 5,
                "categoryPlace": "Coworking",
                "urlImgPlace": "https://picsum.photos/id/1078/3000/2000",
                "capacidadPlace": 100
            },
            {
                "id": 29,
                "titlePlace": "Zara Coworking",
                "ubication_place": "Surco",
                "statePlace": 0,
                "ratePlace": 2,
                "categoryPlace": "Coworking",
                "urlImgPlace": "https://picsum.photos/id/1078/3000/2000",
                "capacidadPlace": 100
            },
            {
                "id": 34,
                "titlePlace": "Zara Coworking",
                "ubication_place": "Surco",
                "statePlace": 0,
                "ratePlace": 5,
                "categoryPlace": "Coworking",
                "urlImgPlace": "https://picsum.photos/id/1078/3000/2000",
                "capacidadPlace": 100
            }
        ]
    )
    console.log(TrendingPlace)
  
    useEffect( () => {
        //GetPlaces
        const getPlaces = () => {
            fetch('http://localhost:8080/galarestapi/api/v1/place/places/by/rate/5')
               .then(response => response.json())
               .then(dataresponse => setTrendingPlace(dataresponse))
       }
       getPlaces()
    }, [])
        

    return (
        <div className="row mt-12">
            {
            TrendingPlace.map((place,i) => {

                return (
                    <div className="col-md-6" key={i}>
                        {/*<!-- Card -->*/}
                        <div className="card shadow-sm border-soft mb-4 animate-up-5">
                            <a href="https://demo.themesberg.com/bootstrap/spaces/html/pages/single-space.html" className="position-relative"><img src={place.urlImgPlace} className="card-img-top" alt="image" /> <span className="badge badge-primary position-absolute listing-badge"><span className="font-weight-normal font-xs">{place.categoryPlace}</span></span>
                            </a>
                            <div className="card-body"><a href="https://demo.themesberg.com/bootstrap/spaces/html/pages/single-space.html"><h5 className="font-weight-normal">{place.titlePlace}</h5></a>
                                <div className="post-meta"><span className="small lh-120"><i className="fas fa-map-marker-alt mr-2"></i>{place.ubication_place}</span></div>
                                <div className="d-flex my-4"><i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <span className="badge badge-pill badge-secondary ml-2">5.0</span></div>
                                <div className="d-flex justify-content-between">
                                    <div className="col pl-0"><span className="text-muted font-small d-block mb-2">Monthly</span> <span className="h5 text-dark font-weight-bold">2100$</span></div>
                                    <div className="col"><span className="text-muted font-small d-block mb-2">Capacidad</span> <span className="h5 text-dark font-weight-bold">{place.capacidadPlace   }</span></div>
                                    <div className="col pr-0"><span className="text-muted font-small d-block mb-2">Sq.Ft</span> <span className="h5 text-dark font-weight-bold">1200</span></div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- End of Card -->*/}
                    </div>
                )
            })
        }
        </div>        
    )
}


export default TrendingPlances;
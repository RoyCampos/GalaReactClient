import React,{ useState, useEffect } from 'react';
import TrendingPlace from './trending-place';
const TrendingPlaces = (props) =>{
    const [TrendingState,setTrendingState] =useState({
        places:[]
    })

    useEffect(()=>{
        console.log("Esto es del Place Content")
        console.log(props.trending)
        setTrendingState(TrendingState,props.trending)
        console.log(TrendingState)
    },[])

    return(
        <section className="section">
            <div className="container">
                <div className="row mt-6">
                    <div className="col-12">
                        <h5 className="font-weight-normal mb-5">Trending Spaces</h5>
                    </div>
                    <TrendingPlace place={props.trending}/>
                </div>
            </div>
        </section>
        
    )
}

export default TrendingPlaces;
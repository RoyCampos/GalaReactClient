import React, { useState, useEffect } from 'react';

const TopCitys = (props) => {

    const [cityState, setCityState] = useState(
        [
            {
                "id_district": 1,
                "title_distric": "Miraflores",
                "description_distric": "Beautiful Zone",
                "url_img": "https://picsum.photos/id/1029/4887/2759"
            }
        ]
    );

    useEffect(() => {
        const getCitys = () => {
            fetch('http://localhost:8080/galarestapi/api/v1/district/all')
                .then(response => response.json())
                .then(dataresponse => setCityState(dataresponse))
        }
        getCitys()
    }, [])

    console.log(cityState)

    return (
        <section className="section">
            <div className="container">
                <div className="rowclassName">
                    <div className="row mt-6">
                        <div className="col-12">
                            <h5 className="font-weight-normal mb-5">Top Cities</h5>
                        </div>
                        {
                            cityState.map((city, i) => {
                                return (
                                    <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0" key={i}>
                                        {/*<!-- Card -->*/}
                                        <a href="#" className="card img-card fh-400 border-0 outer-bg" data-background-inner="img/newyork.jpg">
                                            <div className="inner-bg overlay-dark" style={{}}></div>
                                            <div className="card-img-overlay d-flex align-items-center" style={{backgroundImage:`url(${city['url_img']})`,backgroundSize:'cover'}}>
                                                <div className="card-body text-white p-3">
                                                    <h5 className="font-weight-normal text-uppercase text-center">{city['title_distric']}</h5></div>
                                            </div>
                                        </a>
                                        {/*<!-- End of Card -->*/}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
        )
}

export default TopCitys;
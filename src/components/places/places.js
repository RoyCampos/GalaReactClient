import React, { useState, useEffect } from 'react';

const Places = (props) => {

    console.log(props)
    const [placesState, setPlacesState] = useState(
        [{
            ubication_place: 'surco',
            urlImgPlace:'https://picsum.photos/id/1078/3000/2000'
        }]
    )


    //GetPlacesByFilter

    console.log(placesState)
    useEffect(() => {
        const getPlacesByFilter = () => {
            fetch('http://localhost:8080/galarestapi/api/v1/place/places/by/capacidad/ubicacion/' + Number(props.history.location.rstate.detail['capacidad']) + '/' + props.history.location.rstate.detail['ubication'])
                .then(response => response.json())
                .then(dataresponse => { setPlacesState(dataresponse) })
        }
        getPlacesByFilter()

    }, [])
    return (
        <div>
            {/*<!-- Hero -->*/}
            <div className="section section-lg bg-primary overlay-dark text-white">
                <div className="container">
                    <div className="row justify-content-center pt-5">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-transparent">
                                    <li className="breadcrumb-item"><a href="../../index.html">Home</a></li>
                                    <li className="breadcrumb-item active">{placesState[0]['ubication_place']}</li>
                                </ol>
                            </nav>
                            {/*<!-- Heading -->*/}
                            <h1 className="display-2">Espacios en<span className="font-weight-light"> {placesState[0]["ubication_place"]}</span></h1>
                            {/*<!-- Text -->*/}
                            <p className="lead text-muted mt-4">{placesState.length}+ espacions con escritorios, oficinas & sala de reuniones en Peru.
                            <br />Descubre y reserva espacio hoy.</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section pt-5 pt-lg-6">
                <div id="spaces-container" className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-9">

                            <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
                                <div className="mr-3">
                                    <p className="mb-3 mb-md-0 font-small">mostrando 0 - {placesState.length} de {placesState.length}</p>
                                </div>
                                <div className="nav-wrapper position-relative p-0">
                                    <ul className="nav nav-pills nav-pill-rounded" id="tab-34" role="tablist">
                                        <li className="nav-item pr-0"><a className="nav-link text-sm-center active" id="tab-link-example-13" data-toggle="tab" href="#link-example-13" role="tab" aria-controls="link-example-13" aria-selected="true"><span className="nav-link-icon d-block"><i className="fas fa-th-list"></i></span></a></li>
                                        <li className="nav-item pr-0"><a className="nav-link text-sm-center" id="tab-link-example-14" data-toggle="tab" href="#link-example-14" role="tab" aria-controls="link-example-14" aria-selected="false"><span className="nav-link-icon d-block"><i className="fas fa-th-large"></i></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-content mt-4" id="tabcontentexample-5">
                                <div className="tab-pane fade show active" id="link-example-13" role="tabpanel" aria-labelledby="tab-link-example-13">
                                    {placesState.map((place, p) => {
                                        return (
                                            <div className="row" key={p}>
                                                <div className="col-lg-12">
                                                    <div className="card card-article-wide shadow-sm flex-md-row no-gutters border-soft mb-4 animate-up-5">
                                                        <a href="single-space.html" className="col-md-6 col-lg-6"><img src={place['urlImgPlace']} alt="image" className="card-img-top" /></a>
                                                        <div className="card-body d-flex flex-column justify-content-between col-auto p-4"><a href="single-space.html"><h4 className="font-weight-normal mb-0">{place['titlePlace']}</h4></a>
                                                            <div className="post-meta"><span className="small lh-120"><i className="fas fa-map-marker-alt mr-2"></i>{place['ubication_place']}</span></div>
                                                            <div className="d-flex my-4"><i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <span className="badge badge-pill badge-secondary ml-2">5.0</span></div>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="col pl-0"><span className="text-muted font-small d-block mb-2">Precio</span> <span className="h5 text-dark font-weight-bold">500$</span></div>
                                                                <div className="col"><span className="text-muted font-small d-block mb-2">Capacidad</span> <span className="h5 text-dark font-weight-bold">{place['capacidadPlace']}</span></div>
                                                                <div className="col pr-0"><span className="text-muted font-small d-block mb-2">Metros2</span> <span className="h5 text-dark font-weight-bold">1200</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) /*ending block */
                                    })
                                    }

                                </div>
                                <div className="tab-pane fade" id="link-example-14" role="tabpanel" aria-labelledby="tab-link-example-14">
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            {/*<!-- Card -->*/}
                                            <div className="card shadow-sm border-soft mb-4 animate-up-5">
                                                <a href="./single-space.html" className="position-relative"><img src="../../img/image-office.jpg" className="card-img-top" alt="image" /> <span className="badge badge-primary position-absolute listing-badge"><span className="font-weight-normal font-xs">Office Space</span></span>
                                                </a>
                                                <div className="card-body"><a href="./single-space.html"><h5 className="font-weight-normal">Collaborative Workspace</h5></a>
                                                    <div className="post-meta"><span className="small lh-120"><i className="fas fa-map-marker-alt mr-2"></i>New York, Manhattan, USA</span></div>
                                                    <div className="d-flex my-4"><i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <span className="badge badge-pill badge-secondary ml-2">5.0</span></div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="col pl-0"><span className="text-muted font-small d-block mb-2">Monthly</span> <span className="h5 text-dark font-weight-bold">450$</span></div>
                                                        <div className="col"><span className="text-muted font-small d-block mb-2">People</span> <span className="h5 text-dark font-weight-bold">12</span></div>
                                                        <div className="col pr-0"><span className="text-muted font-small d-block mb-2">Sq.Ft</span> <span className="h5 text-dark font-weight-bold">1200</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<!-- End of Card -->*/}
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            {/*<!-- Card -->*/}
                                            <div className="card shadow-sm border-soft mb-4 animate-up-5">
                                                <a href="./single-space.html" className="position-relative"><img src="../../img/cowork-office.jpg" className="card-img-top" alt="image" /> <span className="badge badge-secondary position-absolute listing-badge"><span className="font-weight-normal font-xs">Coworking Space</span></span>
                                                </a>
                                                <div className="card-body"><a href="./single-space.html"><h5 className="font-weight-normal">Coworking Workspace</h5></a>
                                                    <div className="post-meta"><span className="small lh-120"><i className="fas fa-map-marker-alt mr-2"></i>Bucharest, Sector 2, Romania</span></div>
                                                    <div className="d-flex my-4"><i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-gray-200"></i> <i className="star fas fa-star text-gray-200"></i> <span className="badge badge-pill badge-secondary ml-2">3.0</span></div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="col pl-0"><span className="text-muted font-small d-block mb-2">Monthly</span> <span className="h5 text-dark font-weight-bold">300$</span></div>
                                                        <div className="col"><span className="text-muted font-small d-block mb-2">People</span> <span className="h5 text-dark font-weight-bold">24</span></div>
                                                        <div className="col pr-0"><span className="text-muted font-small d-block mb-2">Sq.Ft</span> <span className="h5 text-dark font-weight-bold">3000</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<!-- End of Card -->*/}
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            {/*<!-- Card -->*/}
                                            <div className="card shadow-sm border-soft mb-4 animate-up-5">
                                                <a href="./single-space.html" className="position-relative"><img src="../../img/meeting-office.jpg" className="card-img-top" alt="image" /> <span className="badge badge-warning position-absolute listing-badge"><span className="font-weight-normal font-xs">Meeting Space</span></span>
                                                </a>
                                                <div className="card-body"><a href="./single-space.html"><h5 className="font-weight-normal">Meeting Office Space</h5></a>
                                                    <div className="post-meta"><span className="small lh-120"><i className="fas fa-map-marker-alt mr-2"></i>London, Canary Wharf, UK</span></div>
                                                    <div className="d-flex my-4"><i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-gray-200"></i> <span className="badge badge-pill badge-secondary ml-2">4.0</span></div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="col pl-0"><span className="text-muted font-small d-block mb-2">Hourly</span> <span className="h5 text-dark font-weight-bold">50$</span></div>
                                                        <div className="col"><span className="text-muted font-small d-block mb-2">People</span> <span className="h5 text-dark font-weight-bold">3-5</span></div>
                                                        <div className="col pr-0"><span className="text-muted font-small d-block mb-2">Sq.Ft</span> <span className="h5 text-dark font-weight-bold">400</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<!-- End of Card -->*/}
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            {/*<!-- Card -->*/}
                                            <div className="card shadow-sm border-soft mb-4 animate-up-5">
                                                <a href="./single-space.html" className="position-relative"><img src="../../img/conference-office.jpg" className="card-img-top" alt="image" /> <span className="badge badge-primary position-absolute listing-badge"><span className="font-weight-normal font-xs">Conference Room</span></span>
                                                </a>
                                                <div className="card-body"><a href="./single-space.html"><h5 className="font-weight-normal">Conference Room</h5></a>
                                                    <div className="post-meta"><span className="small lh-120"><i className="fas fa-map-marker-alt mr-2"></i>Paris, La Defense, France</span></div>
                                                    <div className="d-flex my-4"><i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <span className="badge badge-pill badge-secondary ml-2">4.7</span></div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="col pl-0"><span className="text-muted font-small d-block mb-2">Hourly</span> <span className="h5 text-dark font-weight-bold">100$</span></div>
                                                        <div className="col"><span className="text-muted font-small d-block mb-2">People</span> <span className="h5 text-dark font-weight-bold">2-20</span></div>
                                                        <div className="col pr-0"><span className="text-muted font-small d-block mb-2">Sq.Ft</span> <span className="h5 text-dark font-weight-bold">200</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<!-- End of Card -->*/}
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            {/*<!-- Card -->*/}
                                            <div className="card shadow-sm border-soft mb-4 animate-up-5">
                                                <a href="./single-space.html" className="position-relative"><img src="../../img/lifestyle-office.jpg" className="card-img-top" alt="image" /> <span className="badge badge-secondary position-absolute listing-badge"><span className="font-weight-normal font-xs">Lifestyle Space</span></span>
                                                </a>
                                                <div className="card-body"><a href="./single-space.html"><h5 className="font-weight-normal">Lifestyle Space</h5></a>
                                                    <div className="post-meta"><span className="small lh-120"><i className="fas fa-map-marker-alt mr-2"></i>Madrid, Hortaleza, Spain</span></div>
                                                    <div className="d-flex my-4"><i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <span className="badge badge-pill badge-secondary ml-2">5.0</span></div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="col pl-0"><span className="text-muted font-small d-block mb-2">Daily</span> <span className="h5 text-dark font-weight-bold">350$</span></div>
                                                        <div className="col"><span className="text-muted font-small d-block mb-2">People</span> <span className="h5 text-dark font-weight-bold">10-25</span></div>
                                                        <div className="col pr-0"><span className="text-muted font-small d-block mb-2">Sq.Ft</span> <span className="h5 text-dark font-weight-bold">100</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<!-- End of Card -->*/}
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            {/*<!-- Card -->*/}
                                            <div className="card shadow-sm border-soft mb-4 animate-up-5">
                                                <a href="./single-space.html" className="position-relative"><img src="../../img/private-office.jpg" className="card-img-top" alt="image" /> <span className="badge badge-warning position-absolute listing-badge"><span className="font-weight-normal font-xs">Private Space</span></span>
                                                </a>
                                                <div className="card-body"><a href="./single-space.html"><h5 className="font-weight-normal">Private Space</h5></a>
                                                    <div className="post-meta"><span className="small lh-120"><i className="fas fa-map-marker-alt mr-2"></i>Budapest, Ferencvaros, Hungary</span></div>
                                                    <div className="d-flex my-4"><i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-warning"></i> <i className="star fas fa-star text-gray-200"></i> <span className="badge badge-pill badge-secondary ml-2">4.0</span></div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="col pl-0"><span className="text-muted font-small d-block mb-2">Monthly</span> <span className="h5 text-dark font-weight-bold">100$</span></div>
                                                        <div className="col"><span className="text-muted font-small d-block mb-2">People</span> <span className="h5 text-dark font-weight-bold">1</span></div>
                                                        <div className="col pr-0"><span className="text-muted font-small d-block mb-2">Sq.Ft</span> <span className="h5 text-dark font-weight-bold">10</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<!-- End of Card -->*/}
                                        </div>
                                        <div className="col mt-5 text-center">
                                            <button className="btn btn-primary" type="submit">Show More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <aside className="col-12 col-lg-3 mt-3 mt-lg-0 d-none d-lg-block z-2">
                            <div id="filters-sidebar">
                                <form action="#" method="get" className="sidebar-inner">
                                    <div className="card list-group list-group-flush shadow-sm border-soft p-3">
                                        <label className="mb-5">Price range (monthly)</label>
                                        {/*<!-- Range slider container -->*/}
                                        <div id="input-slider-range" data-range-value-min="100" data-range-value-max="500"></div>
                                        {/*<!-- Range slider values -->*/}
                                        <div className="row d-none">
                                            <div className="col-6"><span className="range-slider-value value-low" data-range-value-low="200" id="input-slider-range-value-low"></span></div>
                                            <div className="col-6 text-right"><span className="range-slider-value value-high" data-range-value-high="400" id="input-slider-range-value-high"></span></div>
                                        </div>
                                        {/*<!-- End of range slider values -->*/}
                                    </div>
                                    <div className="card list-group list-group-flush shadow-sm border-soft mt-4 p-3">
                                        <div className="form-group">
                                            <label for="capacity">Capacity</label>
                                            <select className="custom-select custom-select-sm" id="capacity">
                                                <option>1 Person</option>
                                                <option>2-5 Persons</option>
                                                <option>10-20 Persons</option>
                                                <option>20-40 Persons</option>
                                                <option>50+ Persons</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="size">Size</label>
                                            <select className="custom-select custom-select-sm" id="size">
                                                <option>10 Sq. Ft - 20 Sq. Ft</option>
                                                <option>20 Sq. Ft - 50 Sq. Ft</option>
                                                <option>50 Sq. Ft - 100 Sq. Ft</option>
                                                <option>100 Sq. Ft - 200 Sq. Ft</option>
                                                <option>200+ Sq. Ft</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="card shadow-sm border-soft mt-4 p-3">
                                        <h6 className="font-weight-bold">Amenitites</h6>
                                        <ul className="list-group list-group list-group-flush">
                                            <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox" /> <span className="form-check-sign"></span> Kitchen</label>
                                                </div>
                                            </li>
                                            <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox" /> <span className="form-check-sign"></span> Conference Room</label>
                                                </div>
                                            </li>
                                            <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox" /> <span className="form-check-sign"></span> Coffee & Drinks</label>
                                                </div>
                                            </li>
                                            <li className="list-group-item border-0 py-1 px-0 d-flex align-items-center justify-content-between">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" type="checkbox" /> <span className="form-check-sign"></span> Bike Parking</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <button className="btn btn-sm btn-block btn-primary animate-up-2 mt-4" type="submit">Apply filters</button>
                                </form>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Places
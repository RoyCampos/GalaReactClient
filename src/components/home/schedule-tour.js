import React from 'react';
import ModalSchedule from '../modals/modal';

const  schedule = (props) =>{
    return(
        <section className="section">
            <div className="container">
                <div className="rowclassName">
                <div className="row mt-6">
                    <div className="col-12">
                        
                        <div className="card-group shadow-soft border border-soft">
                            <div className="card">
                                <div className="card-body p-5">
                                    <div className="progress-wrapper mb-5">
                                        <div className="progress-info info-xl">
                                            <div className="progress-label">
                                                <h6 className="font-weight-normal text-dark">Space occupancy level</h6></div>
                                            <div className="progress-percentage"><span className="text-dark">85%</span></div>
                                        </div>
                                        <div className="progress progress-lg">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" bar-blue-schedule></div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column flex-lg-row d-sm-flex justify-content-between align-items-center">
                                        <div className="mb-5 mb-lg-0">
                                            <h4 className="font-weight-normal">{props.data[0]['title']}</h4>
                                            <p className="lead mb-0">{props.data[0]['description']}
                                                <br className="d-none d-lg-inline"/>at Themesberg, or ask for more information.</p>
                                        </div>
                                        <div className="align-content-end">
                                            {/*Boton Modal -->*/}    
                                            <ModalSchedule/>
                                        </div>
                                        {/*Modal Content -->*/}
                                        <div className="modal fade" id="modal-form" tabIndex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-md" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-body p-0">
                                                        <div className="card bg-soft shadow-md border-0">
                                                            <div className="card-header bg-white py-4">
                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                                                <div className="text-muted text-center mb-3">
                                                                    <h3>Interested?</h3>
                                                                    <p>We would love to show you Spaces. Please let us know when you are available and we will make our best to receive you on that date and time.</p>
                                                                </div>
                                                            </div>
                                                            <div className="card-body">
                                                                <form className="mt-3">
                                                                    <div className="form-group">
                                                                        <div className="input-group mb-4">
                                                                            <div className="input-group-prepend"><span className="input-group-text"><i className="far fa-user"></i></span></div>
                                                                            <input className="form-control" placeholder="Name" type="text" required=""/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <div className="input-group mb-4">
                                                                            <div className="input-group-prepend"><span className="input-group-text"><i className="far fa-envelope"></i></span></div>
                                                                            <input className="form-control" placeholder="Email" type="email" required=""/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <div className="input-group mb-4">
                                                                            <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-mobile"></i></span></div>
                                                                            <input className="form-control" placeholder="Phone" type="number" required=""/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="input-group input-group-lg mb-lg-0">
                                                                        <div className="input-group-prepend"><span className="input-group-text"><i className="far fa-calendar-alt"></i></span></div>
                                                                        <input className="form-control datepicker" placeholder="Select date" type="text" data-position="top"/>
                                                                    </div>
                                                                    <div className="text-center">
                                                                        <button type="submit" className="btn btn-block btn-primary mt-4">Send Request Quote</button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!-- End of Modal Content -->*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default schedule;
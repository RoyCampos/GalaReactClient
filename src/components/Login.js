import React, { Component}  from 'react';
import LoginImg from '../img/Login.svg';

import useForm from 'react-hook-form';

const Login = () => {

    //Hooks forms
    const {handleSubmit,register} = useForm();

    const onSubmit= data =>{
        const getLoginStatus = () => {
            fetch('http://localhost:8080/galarestapi/api/v1/users/by/email' + data['email'])
                .then(response => response.json())
                .then(dataresponse => console.log(dataresponse))
        }
        getLoginStatus()
    }


        return(        
            <section className="min-vh-100 d-flex align-items-center my-5">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-8 col-md-6 col-lg-6 offset-md-1 order-md-2">
                            <img src={LoginImg} alt="..." className="img-fluid"/>
                        </div>
                        <div className="col-12 col-md-5 col-lg-5 order-md-1">
                        <div>
                            <div className="text-center text-md-center mt-4 mt-md-0">
                                <h2 className="font-weight-normal">WELCOME BACK!</h2>
                                <p className="text-gray mb-0">Please log back in to access your included.co account.</p>
                            </div>
                            <div className="btn-wrapper mt-4 mb-5 text-center"><a href="#" className="d-block d-sm-inline-block btn btn-sm btn-icon btn-twitter animate-up-1 mb-2 mr-1"><span class="btn-inner-icon"><i class="fab fa-twitter"></i> </span><span class="btn-inner-text">Twitter</span> </a><a href="#" class="d-block d-sm-inline-block btn btn-sm btn-icon btn-facebook animate-up-1 mb-2 mr-1"><span class="btn-inner-icon"><i class="fab fa-facebook"></i> </span><span class="btn-inner-text">Facebook</span> </a><a href="#" class="d-block d-sm-inline-block btn btn-sm btn-icon btn-instagram animate-up-1 mb-2"><span class="btn-inner-icon"><i class="fab fa-instagram"></i> </span><span class="btn-inner-text">Instagram</span></a></div><span class="clearfix"></span>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="input-group-text"><i className="far fa-user"></i></span></div>
                                        <input 
                                            name="email"
                                            ref={register}
                                            type="email" 
                                            className="form-control" 
                                            id="input-email" 
                                            placeholder="Enter email" 
                                            required=""/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-unlock-alt"></i></span></div>
                                        <input 
                                            name="password"
                                            ref={register}
                                            className="form-control" 
                                            placeholder="Password" 
                                            type="password" 
                                            required=""/>
                                        <div className="input-group-append"><span className="input-group-text"><i className="far fa-eye"></i></span></div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button type="submit" className="btn btn-block btn-primary animate-up-2">Sign in</button>
                                </div>
                            </form>
                            <div className="d-flex justify-content-between align-items-center mt-4"><span><small>Not registered?</small> <a href="/registro" class="small font-weight-bold">Create account</a></span>
                                <div>
                                    <a href="#" className="small text-right">Lost password?</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

export default Login;
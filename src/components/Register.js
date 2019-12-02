import React, {useState}  from 'react';
import { Redirect } from 'react-router-dom';
import {BrowserRouter, Route} from 'react-router';
import registerSVG from '../img/Register.svg'
import { homedir } from 'os';

const API = 'http://localhost:8080/galarestapi/api/v1/';
const DEFAULT_QUERY = 'save';


const Register = (props)=>{
    //History
    const {history} = props;
    {console.log(props)}
    //State
    const [registerState,setRegisterState] =useState({
        "email":"example@email.com",
        "password":"password",
        "createdAt": ""
    }
    )
    /*Validation*/
    //Hooks
    //Send
    const sendRegister = ()=>{
        fetch('http://localhost:8080/galarestapi/api/v1/save', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "email":registerState['email'],
                "password":registerState['password'],
                 "createdAt": registerState['createdAt']
               })
           }).then(response => {
                if(response.status=='200'){
                    return response.json()
                }
                return {error:'error al registrar'}
            })
           .then(dataresponse => {
            const data= Object.getOwnPropertyNames(dataresponse);
            console.log(dataresponse);
            console.log(data);
            console.log(data.length);
            if (data.length!=0){
                history.push({
                    pathname:'/home',
                    rstate:{detail: dataresponse}
                
            });
            }
           });
    }
    //Handler
    const changeHandler =(e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setRegisterState({...registerState,
            [name]:value
        });
    }
    
    return(
        <section className="min-vh-100 d-flex align-items-center my-5">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-8 col-md-6 col-lg-6 offset-md-1 order-md-2">
                        <img src={registerSVG} alt="..." className="img-fluid"/>
                    </div>
                    <div className="col-12 col-md-5 col-lg-5 order-md-1">
                        <div>
                            <div className="mb-5 mt-3 text-center">
                                <h2 className="font-weight-normal">JOIN GALA</h2>
                                <p className="text-gray mb-0">Drop in to beautiful workspaces all around your city.</p>
                            </div><span className="clearfix"></span>
                            <form onSubmit={sendRegister}>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="input-group-text"><i className="far fa-user"></i></span></div>
                                        <input type="email" className="form-control" name="email" value={registerState.email} onChange={changeHandler} id="input-email" placeholder="Enter email" required=""/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-unlock-alt"></i></span></div>
                                        <input className="form-control" placeholder="Password" name="password" value={registerState.password} onChange={changeHandler} id="input-pass" type="password" required=""/>
                                        <div className="input-group-append"><span className="input-group-text"><i className="far fa-eye"></i></span></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-unlock-alt"></i></span></div>
                                        <input type="password" className="form-control" id="input-password-confirm" placeholder="Confirm password" required=""/>
                                    </div>
                                </div>
                                <div className="form-group" style={{display:"none"}}>
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-unlock-alt"></i></span></div>
                                        <input type="password" className="form-control" id="dateCreate" placeholder="Confirm password" required=""/>
                                    </div>
                                </div>
                                <div className="my-4">
                                    <div className="form-check round-check mb-3">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox"/> <span className="form-check-sign"></span> I agree to the <a href="./legal.html">terms and conditions</a></label>
                                    </div>
                                </div>
                                
                            </form>
                            <button onClick={sendRegister} type="submit" className="btn btn-block btn-primary animate-up-2">Create account</button>
                            <div className="mt-4 text-center"><small>Already have an account?</small> <a href="/" className="small font-weight-bold">Sign in</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;
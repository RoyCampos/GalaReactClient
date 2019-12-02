import React, { useState, useEffect } from 'react';
import { Input } from 'reactstrap';
import useForm from 'react-hook-form';


const Filter = (props) => {
    {console.log(props)}
    //History
    const {history} = props.data;
    //const { history } = props;
    const [filterState, setFilterState] = useState(
        {
            "input_ubication": "100",
            "input_capacidad": "Surco"
        }
    )

    //Hooks forms
    const {handleSubmit,register} = useForm();

    const onSubmit= data =>{
        setFilterState(data)
        if (data.length!=0){
            history.push({
                pathname:'/places',
                rstate:{detail: data}
            
        });
        }
    }
        
    useEffect(()=>{
        console.log(filterState)
    },[onSubmit])


    return (
        <section className="section section-xl bg-primary overlay-dark text-white rounded" data-background="img/hero.jpg"  >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-md-center">

                        <h1 className="display-2">Encuentra tu <span className="font-weight-bolder">espacio</span> perfecto.</h1>

                        <p className="lead text-muted mt-4"><span className="font-weight-bold">12,000+</span> espacios con escritorios, oficinas &amp; salas de fiestas en <span className="font-weight-bold">4</span> distritos.
                            <br />Busca y reserva tu espacio hoy</p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <div className="card card-body">
                            <form onSubmit={handleSubmit(onSubmit)} className="row">
                               
                                <div className="col-lg">
                                    <div className="form-group mb-lg-0">
                                        <div className="input-group input-group-lg mb-lg-0">
                                            <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-search"></i></span></div>
                                            <input name='ubication' 
                                                    
                                                    ref={register} 
                                                    id="search-location" 
                                                    type="text" 
                                                    className="form-control autocomplete" 
                                                    placeholder="Search location" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <div className="form-group mb-lg-0">
                                        <div className="input-group input-group-lg mb-lg-0">
                                            <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-calendar"></i></span></div>
                                            <input
                                                type="date"
                                                name="date"
                                                id="input_date"
                                                placeholder="Select date"
                                                className="form-control datepicker"
                                                ref={register}
                                            />
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <div className="form-group mb-lg-0">
                                        <div className="input-group input-group-lg mb-lg-0">
                                            <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-users"></i></span></div>
                                            <input 
                                                    name='capacidad' 
                                                    ref={register}  
                                                    id="capacity" 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="Capacidad" 
                                                     />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-auto">
                                    <button   type="submit" className="btn btn-lg btn-primary btn-block mt-3 mt-md-0 animate-up-2">Encontrar Espacio</ button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Filter;
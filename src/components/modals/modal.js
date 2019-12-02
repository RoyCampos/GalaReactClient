import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import useForm from 'react-hook-form';
const ModalSchedule = (props) => {

    const {history} =props;
    //Hooks forms
    const {handleSubmit,register} = useForm();

    const onSubmit= data =>{
        console.log(data);
        fetch('http://localhost:8080/galarestapi/api/v1/reservaSchedule/save', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "nameUserSchedule":data['nameUserSchedule'],
                "emailUserSchedule":data['emailUserSchedule'],
                 "phoneUserSchedule": data['phoneUserSchedule'],
                 "dateUserSchedule": data['dateUserSchedule']
               })
           }).then(response => {
            console.log(response);
            if (response.status=="200"){
                toggle();
            }else{
                alert("Datos Mal ingresados")
            }
           });

        }


    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="primary" onClick={toggle}>Reserva tu tour Ahora</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>¿Interesado?</ModalHeader>
                <ModalBody>
                    <p>Nos encantaría mostrarte todo. Avísenos cuando esté disponible y haremos todo lo posible para recibirlo en esa fecha y hora.</p>
                    <div className="card-body">
                        <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <div className="input-group mb-4">
                                    <div className="input-group-prepend"><span className="input-group-text"><i className="far fa-user"></i></span></div>
                                    <input 
                                    name="nameUserSchedule"
                                    className="form-control" 
                                    placeholder="Name" 
                                    type="text" 
                                    ref={register}
                                    required="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group mb-4">
                                    <div className="input-group-prepend"><span className="input-group-text"><i className="far fa-envelope"></i></span></div>
                                    <input 
                                        name="emailUserSchedule"
                                        className="form-control" 
                                        placeholder="Email" 
                                        type="email"
                                        ref={register} 
                                        required="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group mb-4">
                                    <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-mobile"></i></span></div>
                                    <input 
                                        name="phoneUserSchedule"
                                        className="form-control" 
                                        placeholder="Phone" 
                                        type="number" 
                                        ref={register}
                                        required="" />
                                </div>
                            </div>
                            <div className="input-group input-group-lg mb-lg-0">
                                <div className="input-group-prepend"><span className="input-group-text"><i className="far fa-calendar-alt"></i></span></div>                             
                                    <input
                                        type="date"
                                        name="dateUserSchedule"
                                        id="exampleDate"
                                        placeholder="Select date"
                                        className="form-control datepicker"
                                        ref={register}
                                    />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-block btn-primary mt-4">Enviar solicitud</button>
                            </div>
                        </form>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Done</Button>{' '}
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalSchedule;
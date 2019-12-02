import react from "react";

import useForm from 'react-hook-form';

export default function filterForm(){
    const {register, handleSubmit}= useForm();


    const onSubmit = data =>{
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
            placeholder="email"
            name="email"
            ref={register}
            type="text"/>
            
            <input 
            placeholder="email"
            name="email"
            ref={register}
            type="text"/>
            
            <input 
            placeholder="email"
            name="email"
            ref={register}
            type="text"/>

            <input 
            type="submit"/>
        </form>
    )
}
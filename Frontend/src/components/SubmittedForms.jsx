import React,{ useEffect, useState } from "react";
import Card from "./Card";


export default function SubmittedForms(){

    const [forms , setForms] = useState([])

    useEffect(()=>{
        async function getData(){
        let res = await fetch("http://localhost:5000/")
        let data = await res.json()
        setForms(data.data)
    }
    getData()
    },[])

    return(
     
        <div>
            <h1>Submitted forms:-</h1>
            {forms.map((iter,index)=> 
             {
             return <Card data = {iter} key={index}/>
            }
            )}
        </div>
    
    )
}
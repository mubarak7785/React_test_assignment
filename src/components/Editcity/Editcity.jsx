import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
export const Editcity=()=>{
    const {id}=useParams();
    const [formdata,setFormdata]=useState({})
    const navigate=useNavigate();

const handleChange=(e)=>{
    const {id,value}=e.target;
    setFormdata({...formdata,[id]:value})
}

const senddata=()=>{
    fetch(`http://localhost:3001/add-city/${id}`,{
        method :"PATCH",
        body:JSON.stringify(formdata),
        headers :{"content-type":"application/json"}
    }).then(alert("City Dtails Edited")).then(navigate("/"))
    
}
    return <div>
        <div className="city_data">
            <form action="" onSubmit={senddata}>
                <label htmlFor="">Country</label>
                <input type="text" onChange={handleChange} id="country"/><br /><br />
                <label htmlFor="">City</label>
                <input type="text" onChange={handleChange} id="city" /><br /><br />
                <label htmlFor="" >Population</label>
                <input type="number" onChange={handleChange} id="population"/><br /><br />
                <input type="submit" />
            </form>
        </div>
       
    </div>
}
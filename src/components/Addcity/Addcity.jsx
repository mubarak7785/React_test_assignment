import { useState } from "react"

export const Addcity=()=>{
    const [formdata,setFormdata]=useState({})


const handleChange=(e)=>{
    const {id,value}=e.target;
    setFormdata({...formdata,[id]:value})
}

const senddata=()=>{
    fetch("http://localhost:3001/add-city",{
        method :"POST",
        body:JSON.stringify(formdata),
        headers :{"content-type":"application/json"}
    })
    alert("Data Added")
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
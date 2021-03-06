import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Navbar } from "../Navbar/Navbar"
import { useDispatch,useSelector} from "react-redux"

export const Home=()=>{

    const [resdata,setResdata]=useState([])


    useEffect(()=>{
        getdata()
    })

    const getdata=()=>{
        fetch("http://localhost:3001/add-city").then(Response=>Response.json()).then(data=>dispatch({type:"CITY_DATA",payload:data}))  
       
    }
const dispatch=useDispatch();
const cdata=useSelector(store=>store.citydata);
    return <div>
       <Navbar/>
       <div>
           <table border="1px">
               <thead>
                   <tr>
                       <td>id</td>
                       <td>Country</td>
                       <td>City</td>
                       <td>Population</td>
                       <td>Edit</td>
                       <td>Delete</td>
                   </tr>
               </thead>
               <tbody>
                   {cdata.map((elem)=>{
                       return(
                           <tr>
                               <td>{elem.id}</td>
                               <td>{elem.country}</td>
                               <td>{elem.city}</td>
                               <td>{elem.population}</td>
                               <td><Link to={`/edit/${elem.id}`}>Edit</Link></td>
                               <td><Link to={`/delete/${elem.id}`}>Delete</Link></td>
                           </tr>
                       )
                   })}
               </tbody>
           </table>
       </div>
    </div>
}
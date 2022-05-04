/* import React,{useState,useEffect} from "react";
import axios from "axios";
import "./database.css"
function Cards(){
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        axios.get('http://localhost:3003/')
        .then((res)=>{
            console.log(res);
            setLoading(false);
            setData(res.data)
        })
        .catch((error)=>{
          console.log(error)
        })
    },[])

    return(
        <>
        {
           loading && <p>Loading...</p>
        }
        <ul id="main">
           {
               data.map((ele,_id)=>{
                   return(
                       <li key={_id}>
                           <p>{ele.title}</p>
                           <small>Imdb:<span>{ele.imdb.rating}</span></small>
                       </li>
                   )
               })
           }
        </ul>
        </>
    )
}
export default Cards */

import React,{useState,useEffect} from "react";
import axios from "axios";
import "../components/database.css";
function CardsCom(){
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        axios.get('http://localhost:3001/')
        .then((res)=>{
            console.log(res);
            setLoading(false);
            setData(res.data)
        })
        .catch((error)=>{
          console.log(error)
        })
    },[])

    return(
        <>
        {
           loading && <p>Loading...</p>
        }
        <ul className="card2">
           {
               data.map((ele)=>{
                   return(
                       <div className="cards1">
                           
                            <li className="list">
                           <p className="title">{ele.title}</p>
                           <small className="ratings">Imdb:<span>{ele.imdb.rating}</span></small>
                       </li>
                       </div>
                      
                   )
               })
           }
        </ul>
        </>
    )
}
export default CardsCom
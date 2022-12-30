import Axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css' ;

const url="https://randomuser.me/api";

const App = () =>{

    const [result,setResult]=useState(null)


    const apirequest=async()=>{
        if(!result){
        const apiResult=await Axios.get(url);
        console.log(result);
        setResult(apiResult.data.results[0]);
        }
    }
    useEffect(()=>{
    apirequest()})

    return <div className='body'>
        <br></br>
    <center>
    <h1 style={{marginTop:'0px'}} >Profile Data</h1><hr></hr>
    <br></br>
    <img className='img' src={result?.picture?.large}/><br></br><br></br>


    </center>

        <div className='Content'>

       <p className='title'>Name:</p>
        <p> {result?.name?.first} {result?.name?.last} </p><br></br>
        <p className='title'>Gender:</p>
        <p> {result?.gender}</p><br></br>
        <p className='title'>City:</p>
        <p> {result?.location?.city}</p><br></br>
        <p className='title'>Phone:</p>
        <p>{result?.phone}</p><br></br>
        <p className='title'>Email:</p>
        <p>{result?.email}</p>

        </div>
   </div>
}
export default App;
import logo from './logo.svg';
import './App.css';
import BasicTable from './Table';
import React, {useEffect, useState} from 'react'
import Radio from '@material-ui/core/Radio'
import axios from 'axios'
import { Box, FormControl, FormControlLabel, FormLabel, RadioGroup } from '@material-ui/core'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function App() {
  const[data,setData]=useState({table: [{'test': 'test'}]})
  const[query,setQuery]=useState("")
  const[print,setPrint]=useState(false)
  const[category,setcategory]=useState("mysql")
  const[database,setddata]=useState("instacart")
  const notify=()=>{
    toast("Invalid Query, Please try again! ")
  }
  useEffect(()=>{

  }, [])

  const fetchData = async () => {
    let data=''
    try
    {
    if (category=="mongodb") {
      if(database=="adnimerge")
       data = await fetch(`http://ec2-3-82-110-179.compute-1.amazonaws.com:8080/home/parseQuery?query=${query}&database=${database}&category=${category}`)
      else
       data = await fetch(`http://ec2-3-82-110-179.compute-1.amazonaws.com:8088/home/parseQuery?category=${category}&query=${query}&database=${database}`)
    } else {
       data = await fetch(`http://ec2-3-82-110-179.compute-1.amazonaws.com:8080/home/parseQuery?query=${query}&database=${database}&category=${category}`)
    }
     if (data.status ==500)
     {
      setPrint(false)
      throw new Error("Data not found");
     }
     else
     {
      setPrint(true)
     }
    //let data = await fetch(`http://ec2-3-82-110-179.compute-1.amazonaws.com:8080/home/parseQuery?query=${query}&database=${database}&category=${category}`)
      data = await data.json()
      console.log("Data=",data)
      console.log("print",print)
      // process data
      setData(data)
  }catch
  {
    console.log("print",print)
    console.log("data",data)
    toast.error("Data is Empty, Check your Query! ",{
      // Set to 10sec
      position: toast.POSITION.BOTTOM_CENTER, autoClose:10000})

  }
  }  

  return (


    <div className="App" meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" style={{
      backgroundColor: 'thistle '
      
    }}
>
      <h2>TEAM 4: 527 FINAL PROJECT QUERY EDITOR</h2>
      
      
      <div className="Form1">
      <FormControl>
        <FormLabel> Database </FormLabel>
        <RadioGroup value={database} onChange={(e)=> setddata(e.target.value)} row >
          <FormControlLabel value="instacart" control ={<Radio/>} label="Instacart"/>
          <FormControlLabel value="adnimerge" control ={<Radio/>} label="Adnimerge"/>
        </RadioGroup>
      </FormControl>
    

      </div>

      <div className= "Form2">
      <FormControl>
        <FormLabel> Database Type </FormLabel>
        <RadioGroup value={category} onChange={(e)=> setcategory(e.target.value)} row >
          <FormControlLabel value="mysql" control ={<Radio/>} label="MySQL"/>
          <FormControlLabel value="redshift" control ={<Radio/>} label="RedShift"/>
          <FormControlLabel value="mongodb" control ={<Radio/>} label="Mongo"/>
        </RadioGroup>
      </FormControl>

      </div>


         
      <div>

        <textarea style={{ backgroundColor: 'cornsilk',width: 1210, height:400}}
          // value={this.state.textAreaValue}
          onChange={(e) => {setQuery(e.target.value)}}
          row={5}
          col={5}
          placeholder="Enter Query"
        />
       </div>


      
      {/* <input type="text" onChange={getData} /> */}
      <button color="#ff5c5c" style={{backgroundColor: 'white',height: '50px', width : '120px'}}
      onClick={()=>{fetchData()}}> <b>Submit Query</b></button>
      
     
      {/* {
        print?
        <BasicTable data={data}/>
        :null
      } */}

     {
        print?
        <BasicTable data={data}/>
        :null
      }
      
      

    </div>
    

    

    
  );
}

export default App;

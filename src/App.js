import logo from './logo.svg';
import './App.css';
import BasicTable from './Table';
import React, {useEffect, useState} from 'react'
import Radio from '@material-ui/core/Radio'
import axios from 'axios'
import { Box, FormControl, FormControlLabel, FormLabel, RadioGroup } from '@material-ui/core'



function App() {
  const[data,setData]=useState({table: [{'test': 'test'}]})
  const[query,setQuery]=useState("")
  const[print,setPrint]=useState(false)
  const[category,setcategory]=useState("mysql")
  const[database,setddata]=useState("insta")

  useEffect(()=>{

  }, [])

  const fetchData = async () => {
    let data = await fetch(`http://ec2-3-82-110-179.compute-1.amazonaws.com:8080/home/parseQuery?query=${query}&type=${category}`)
      data = await data.json()
      console.log(data)
      // process data
      setData(data)
  }  

  return (


    <div className="App" meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
      <h2>DBDS-App</h2>
      
      
      <div className="Form1">
      <FormControl>
        <FormLabel> Database </FormLabel>
        <RadioGroup value={database} onChange={(e)=> setddata(e.target.value)} row >
          <FormControlLabel value="insta" control ={<Radio/>} label="Instacart"/>
        </RadioGroup>
      </FormControl>

      </div>

      <div className= "Form2">
      <FormControl>
        <FormLabel> Database Type </FormLabel>
        <RadioGroup value={category} onChange={(e)=> setcategory(e.target.value)} row >
          <FormControlLabel value="mysql" control ={<Radio/>} label="MySQL"/>
          <FormControlLabel value="redshift" control ={<Radio/>} label="RedShift"/>
        </RadioGroup>
      </FormControl>

      </div>


      {
        print?
        <h1>{category}{database}</h1>
        :null
      }
      <div>

        <textarea style={{ width: 1210, height:400}}
          // value={this.state.textAreaValue}
          onChange={(e) => {setQuery(e.target.value)}}
          row={5}
          col={5}
          placeholder="Enter Query"
        />
       </div>


      
      {/* <input type="text" onChange={getData} /> */}
      <button color="#ff5c5c" style={{height: '30px', width : '100px'}}
      onClick={()=>{fetchData()}}> Submit Query</button>

      <BasicTable data={data}/>
      

    </div>
    

    

    
  );
}

export default App;

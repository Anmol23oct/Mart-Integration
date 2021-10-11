import logo from './logo.svg';
import './App.css';
import { Table } from './Table';
import React, {useState} from 'react'
import Radio from '@material-ui/core/Radio'
import { Box, FormControl, FormControlLabel, FormLabel, RadioGroup } from '@material-ui/core'

function App() {
  const[data,setData]=useState(null)
  const[print,setPrint]=useState(false)
  const[category,setcategory]=useState("redshift")
  const[database,setdata]=useState("insta")
  function getData(val)
    {
      setData(val.target.value)
      setPrint(false)
      console.warn(val.target.value)
    }
  return (


    <div className="App">
      <h2>DBDS-App</h2>
      <div className="Form1">
      <FormControl>
        <FormLabel> Database </FormLabel>
        <RadioGroup value={database} onChange={(e)=> setcategory(e.target.value)} row >
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
        <h1>{data}</h1>
        :null
      }
      <div>

        <textarea style={{ width: 1055, height:400}}
          // value={this.state.textAreaValue}
          onChange={getData}
          row={5}
          col={5}
          placeholder="Enter Query"
        />
       </div>


      
      {/* <input type="text" onChange={getData} /> */}
      <button color="#ff5c5c" style={{height: '30px', width : '100px'}}
      onClick={()=>setPrint(true)}> Submit Query</button>

      <Table/>
      

    </div>
    

    

    
  );
}

export default App;

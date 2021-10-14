import React,{useState,useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
//import MaterialTable  from 'material-table'
import axios  from 'axios'

export default function BasicTable({data}) {
    //let data = props.data
    console.log('test', data.table)

    let new_data = []
    console.log(Object.values(data.table))
    const columns = Object.keys(data.table[0]).map((ele, idx) => {return {
  
        title: ele,
        field: ele
    }})


    data.table.forEach(k => {
        console.log('test1', k,Object.keys(k),  k[Object.keys(k)[0]])
        new_data.push(k)
    })

    
    console.log('test2', new_data)

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell>sl no</TableCell>
            {columns.map((col) => (
              <TableCell>{col.title}</TableCell>
            ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {new_data.map((row, idx) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{idx+1}</TableCell>
                {Object.keys(row).map(r => (
                    <TableCell component="th" scope="row">
                        {row[r]}
                    </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

// export const Table=(props)=>{

//     let data = props.data
//     console.log('test', data.table)

//     let new_data = []
//     console.log(Object.values(data.table))
//     const columns = Object.keys(data.table[0]).map(ele => {return {
//         title: ele,
//         field: ele
//     }})


//     data.table.forEach(k => {
//         console.log('test1', k,Object.keys(k),  k[Object.keys(k)[0]])
//         new_data.push(k)
//     })

//     //new_data = data.table
//     console.log('test2', new_data)


    

//     return (<div>
//         {<MaterialTable title="Instacart Data"
//         data={new_data}
//         columns={columns}
        
//     /> }
//     </div>)
// }

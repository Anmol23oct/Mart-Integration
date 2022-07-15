import React,{useState,useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Pagination from "react-js-pagination";

import Paper from '@mui/material/Paper';
//import MaterialTable  from 'material-table'
import TablePagination from '@material-ui/core/TablePagination';
import axios  from 'axios'

export default function BasicTable({data}) {
    //let data = props.data
    console.log('test', data.table)

    let new_data = []
    let temp= []
    const [main_data,setmain_data]=useState([])
    console.log(Object.values(data.table))
    const columns = Object.keys(data.table[0]).map((ele, idx) => {return {
  
        title: ele,
        field: ele
    }})


    data.table.forEach(k => {
        console.log('test1', k,Object.keys(k),  k[Object.keys(k)[0]])
        new_data.push(k)
    })

    
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage,setRowsPerPage]=useState(20)
  // total records per page to display
  const recordPerPage = rowsPerPage;

  // total number of the records
  const totalRecords = new_data.length;

  // range of pages in paginator
  const pageRange = 5;
  const pagedecide= (currentPage) * recordPerPage
  // handle change event
  //main_data=new_data.slice((1 - 1) * recordPerPage, 1 * recordPerPage)
  const handlePageChange = (event,pageNumber) => {
    setCurrentPage(pageNumber);
    // call API to get data based on pageNumber
    let temp= []
    pageNumber=pageNumber+1
    temp=new_data.slice((pageNumber - 1) * recordPerPage, pageNumber * recordPerPage);
    setmain_data(temp)
    console.log('maindata', temp)
  }

  const handleChangeRowsPerPage=(event)=>{
    setRowsPerPage(parseInt(event.target.value,20));
    setCurrentPage(0);
  }




    console.log('test2', new_data)

    return (
      <div className="TableStart">
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell>S.No</TableCell>
            {columns.map((col) => (
              <TableCell>{col.title}</TableCell>
            ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {main_data.map((row, pagedecide) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{pagedecide+1}</TableCell>
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
      <TablePagination
      component="Paper" // add it for bootstrap 4
      count={totalRecords}
      page={currentPage}
      onChangePage={handlePageChange}
      rowsPerPage={recordPerPage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
     
    </div>
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

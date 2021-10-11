import React,{useState,useEffect} from 'react'
import MaterialTable  from 'material-table'

export const Table=()=>{

    // const data=[
    //     {name:"A", Aisle:12},
    //     {name:"B",Aisle:1},
    //     {name:"C",Aisle:25},
    //     {name:"D",Aisle:30},
    //     {name:"E",Aisle:35},
    //     {name:"F",Aisle:40}
    // ]
    const[data, setData]=useState([])
    const columns=[
        {
            title:'userId', field:'userId'

        },
        {
            title:'id', field:'id'

        },
        {
            title:'Title', field:'title'

        },
        {
            title:'body', field:'body'

        },


    ]

    useEffect(()=>{
                fetch("https://jsonplaceholder.typicode.com/posts")
                .then((data)=>data.json())
                .then(data=>{
                    console.log(data)
                    setData(data)})
            },[])

    return (<div>
        <MaterialTable title="Instacart Data"
        data={data}
        columns={columns}
        
        />
    </div>)
}


// import React,{useState,useEffect} from "react"
// import {DataGrid} from '@material-ui/data-grid'

// const coloumns=[
//     {field: 'userId', headerName: 'userId',width:300},
//     {field: 'ie', headerName: 'ie',width:300},
//     {field: 'Title', headerName: 'Title', width:300},
//     {field: 'body', headerName: 'body',width:300}
// ]

// export const Table= () =>{

//     const[tableData,setTableData]= useState([])

//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((data)=>data.json())
//         .then((data)=>console.log(data))
//         .then((data)=>setTableData(data))
//     })

//     return (
//         <div style={{height:700, width:'100%'}}>
//             <DataGrid
//              rows={tableData}
//              coloumns={coloumns}
//              pageSize={10}

//             />
//         </div>
//     )
// }
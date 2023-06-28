import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from 'axios';

const columns = [
  {
      name: 'name',
      selector: row => row.name,
      sortable:true
      
  },
  {
    name: 'email',
    selector: row => row.email,
    sortable:true
    
},
{
  name: 'contact',
  selector: row => row.contact,
  sortable:true
  
},
  {
      name: 'city',
      selector: row => row.city,
      sortable:true
  },
];

// const data = [
//   {
//       id: 1,
//       title: 'Beetlejuice',
//       year: '1988',
//   },
//   {
//       id: 2,
//       title: 'Ghostbusters',
//       year: '1984',
//   },
// ]
const SignUpShow = () => {
  const [table,setTable] =useState([]);

  useEffect(() => {

    axios.get('http://localhost:8000/signup/getregister')
  .then(function (response) {
    // handle success
    console.log(response.data.data);
    setTable(response.data.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  },[])

  return (
    <>
     <DataTable
            columns={columns}
            data={table}
            
            pagination
            selectableRows
            expandableRows
            fixedHeader
            
            fixedHeaderScrollHeight="200px"
            subHeader
            subHeaderComponent={
            <input
            type="text"
            
            />
            }
        />
    </>
  );
};

export default SignUpShow;

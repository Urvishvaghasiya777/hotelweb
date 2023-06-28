import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const columns = [
  {
    name: "name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "contact",
    selector: (row) => row.contact,
    sortable: true,
  },
  {
    name: "city",
    selector: (row) => row.city,
    sortable: true,
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
  const [table, setTable] = useState([]);

  const [search, setSerach] = useState(); // search ============

  const allData = () => {
    axios
      .get("http://localhost:8000/signup/getregister")
      .then(function (response) {
        // handle success
        console.log(response.data.data);
        setTable(response.data.data);
        setSerach(response.data.data); // search=========
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    allData();
  }, []);
// search bar ====================
  const handlerSearch = (item) => {
    item = item.toLowerCase();
    let dataSearch = table.filter((e) => {
      return e.name.toLowerCase().includes(item);
    });
    setSerach(dataSearch);
  };

  //===================

  return (
    <>
      <DataTable
        columns={columns}
        data={search} // search
        pagination
        selectableRows
        expandableRows
        fixedHeader
        // fixedHeaderScrollHeight="200px"
        subHeader
        subHeaderComponent={
          <input      // search
            type="text"
            placeholder="Search"
            onChange={(e) => {
              handlerSearch(e.target.value);
            }}
          />
        }
      />
    </>
  );
};

export default SignUpShow;

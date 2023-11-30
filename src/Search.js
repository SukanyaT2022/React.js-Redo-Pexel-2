import React, { useState } from 'react'

const Search = (props) => {
    const [search,setSearch] = useState()
    var apiKey = "c19t5LBUeXItCyO5nb5bpds50rtTKwmX7xOeFa4PnEBN8jabAxpjQW6U"
      const category = 'bird'; // Replace with the desired category
      const apiUrl = `https://api.pexels.com/v1/search?query=${search}`;
    // const handleSearch =(e)=>{
    //     setSearch(e.target.value)
    // }
    const searchHandler =()=>{

      fetch(apiUrl, {
          method: 'GET',
          headers: {
          'Authorization': apiKey,
          },
      })
       //step 3way to handle promise using then-- check if data come after console
    .then((response)=>response.json())
    // .then(data=>console.log(data.photos))
    //step 5
    .then((data)=>{
      props.onDataCatch(data);
      console.log(data)
    });
   }
  return (
    <div>
      <input type ="text" placeholder= "search category " onChange={(e)=>setSearch(e.target.value)} />
      {/* <input type = "text" placeholder= " " onChange={handleSearch}/> */}

      <button onClick={searchHandler}>Search</button>
    </div>
  )
}

export default Search

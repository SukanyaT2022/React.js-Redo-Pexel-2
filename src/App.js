import React, { useEffect, useState } from 'react'
import './App.css'
import Search from './Search'
const App = () => {

  //step 4
  const [data,setData]=useState()
  const orientation = "landscape "
  const picPerpage = 10
  let next = "";

  //step 1 get data first
  var apiKey = "c19t5LBUeXItCyO5nb5bpds50rtTKwmX7xOeFa4PnEBN8jabAxpjQW6U"
  var auth = "https://api.pexels.com/v1/search?query=people"
  //key word search use api call from pexel 
  const category = 'bird'; // Replace with the desired category
  const apiUrl = `https://api.pexels.com/v1/search?query=${category}`;
  
  // step 2Make a GET request to the Pexels API
  //step 6 put all fetch in useEffect
  useEffect(()=>{
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
  setData(data.photos);
  next = data.next_page;
});
//photo comfrom pexel api
},[])
const dataCatch =(val)=>{
  setData(val.photos);
}

  return (
<>
    <div className='main'>
      {/* below sent data fron search to app.js */}
      <Search onDataCatch = {dataCatch}/>
      {data && data.map((val)=>{
        return(
          <img src={val.src.small} alt=''/>
        )})
      }
     {data && <button><a href={next}>Next page</a></button> }     
    </div>
    </>
  )
}

export default App

import React, { useState } from 'react'

const App = () => {

  //step 4
  const [data,setData]=useState()

  //step 1 get data first
  var apiKey = "c19t5LBUeXItCyO5nb5bpds50rtTKwmX7xOeFa4PnEBN8jabAxpjQW6U"
  var auth = "https://api.pexels.com/v1/search?query=people"
  //key word search use api call from pexel 
  const category = 'nature'; // Replace with the desired category
  const apiUrl = `https://api.pexels.com/v1/search?query=${category}&per_page=10`;
  
  // step 2Make a GET request to the Pexels API
  fetch(apiUrl, {
  method: 'GET',
  headers: {
  'Authorization': apiKey,
  },
  })
   //step 3way to handle promise using then-- check if data come after console
.then(response=>response.json())
// .then(data=>console.log(data.photos))
//step 5
.then(data=>setData(data.photos))
//photo comfrom pexel api
  return (

    <div>
      {data && data.map((val)=>{
        return(
          <img src={val.src.small} alt=''/>
        )})
      }     
    </div>
  )
}

export default App

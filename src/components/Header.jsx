import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Header = () => {
    const[data,setData]=new useState([])
        const getData =()=>(
            axios.get("http://localhost:3002/api/visitor/viewall").then(
                (response)=>(
                    setData(response.data)
                )
            )
        )

        useEffect( ()=>{getData()},[])
  return (
    
    <div>
<Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Visitor Name</th>
      <th scope="col">Visitor Phone</th>
      <th scope="col">Visitor Aadhar</th>
      <th scope="col">Visitor Place</th>
      <th scope="col">Purpose of Visit</th>
    </tr>
  </thead>
  <tbody>

   {
    data.map(
        (value,index)=>{
            return <tr>
            <th scope="row">{value.name}</th>
            <td>{value.phoneno}</td>
            <td>{value.adharno}</td>
            <td>{value.place}</td>
            <td>{value.purposeofvisit}</td>
          </tr>
          
        }
    )
   }
  </tbody>
</table>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
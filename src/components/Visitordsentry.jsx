import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Visitordsentry = () => {
    const [input,setInput]=new useState(
        { "name": "",
        "Phoneno": "",
        "adharno":"",
        "place":"",
        "Purposeofvisit":""}
    )
    const inputHandler =(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3002/api/visitor/add",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("successfully added")
                    setInput(
                        { "name": "",
                        "Phoneno": "",
                        "adharno":"",
                        "place":"",
                        "Purposeofvisit":"" }
                    )
                } else {
                    alert("something went wrong")
                }
            }
        )
    }
    return (
    <div>
<Navbar/>
<div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Visitor Name</label>
                            <input type="text" className="form-control" name='name'  value={input.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone Number</label>
                            <input type="text" className="form-control"  name='phoneno' value={input.phoneno} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Purpose of Visit</label>
                            <input type="text" className="form-control" name='purposeofvisit' value={input.purposeofvisit} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-labell">Aadhar No</label>
                            <input type="text" className="form-control" name='adharno' value={input.adharno} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Place</label>
                            <input type="text" className="form-control" name='place' value={input.place} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValues}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Visitordsentry
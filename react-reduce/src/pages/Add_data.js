import React,{useState} from 'react'
import shortid from 'shortid'; // for random id generator
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {add_data} from '../feature/user/action'

function Add_data() {

let dispatch=useDispatch();
let navigate=useNavigate();

const [formvalue, setformvalue] = useState({
    id:"",
    name:"",
    email:"",
    password:"",
    mobile:"",
})

function onchange(e){
    setformvalue({...formvalue,id:shortid,[e.target.name]:e.target.value});
    //console.log(formvalue);
 }  

const [error, seterror] = useState("") 

function submithandel(e)
{
    e.preventDefault();
    if(!formvalue.name || !formvalue.email || !formvalue.password || !formvalue.mobile)
    {
        seterror("All field is required");
    }
    else{
        dispatch(add_data(formvalue))
        navigate('/');
    }
}


    return (
        <div>
            <div className="p-5 bg-primary text-white text-center">
                <h1>React Redux Crud</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Add Data</h2>

                        <Link className="btn btn-primary" to="/">Back</Link>
                        {
                            error && <h5 align="center" className='text-danger'>{error}</h5>
                        }  
                        <div class="container">
                            <form id="request" className="main_form">
                                <div className="row">
                                   
                                    <div className="col-md-12 mt-2">
                                        <input className="form-control" onChange={onchange} value={formvalue.name} placeholder="Name" type="text" name="name" required />
                                    </div>

                                    <div className="col-md-12 mt-2">
                                        <input className="form-control" onChange={onchange} value={formvalue.mobile}  placeholder="Phone Number" type="mobile" name="mobile" required />
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <input className="form-control" onChange={onchange} value={formvalue.email} placeholder="Email" type="type" name="email" required />
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <input className="form-control" onChange={onchange} value={formvalue.password} placeholder="Password" type="password" name="password" required />
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <button className="btn btn-primary" onClick={submithandel}>Signup</button>
                                    </div>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
            <div className="mt-5 p-4 bg-dark text-white text-center">
                <p>Footer</p>
            </div>
        </div>


    )
}

export default Add_data
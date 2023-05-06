import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getuserdata, delete_data, get_single_data, update_data } from '../feature/user/action';

function Index() {

    const dispatch = useDispatch()
    const navigate=useNavigate();
    const { users, user } = useSelector((state) => state.usersss);

    const [formvalue, setformvalue] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
    })

    useEffect(() => {
        dispatch(getuserdata());
    }, []);

    const [id,setId]=useState("");
    const edit=(id)=>{
        dispatch(get_single_data(id));
        //console.log(user);
        setId(id);
        setformvalue({...formvalue,name:user.name,email:user.email,password:user.password,mobile:user.mobile});
    }

    function onchange(e) {
        setformvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const [error, seterror] = useState("");

    function updatehandel(e) {
        e.preventDefault();
        if (!formvalue.name || !formvalue.email || !formvalue.password || !formvalue.mobile) {
            seterror("All field is required");
        }
        else {
            dispatch(update_data(id,formvalue));
            setformvalue({...formvalue,name:"",email:"",password:"",mobile:""});
            dispatch(getuserdata());
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
                        <h2>Dashbord</h2>
                        <Link className="btn btn-primary" to="/add_data">Add Data</Link>
                        <div class="container mt-2">
                            <table id="table" class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th className='text-center'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((item) => (
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.mobile}</td>
                                                <td className='text-center'>
                                                    <button className='btn btn-primary ms-1'>Status</button>
                                                    <button onClick={() => { dispatch(delete_data(item.id)); dispatch(getuserdata()); }} className='btn btn-danger ms-1'>Delete</button>
                                                    <button className='btn btn-warning ms-1' onClick={()=>edit(item.id)} data-bs-toggle="modal" data-bs-target="#myModal" >Edit</button>


                                                    <div className="modal" id="myModal">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                {/* Modal Header */}
                                                                <div className="modal-header">
                                                                    <h4 className="modal-title">Modal Heading</h4>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                                                </div>
                                                                {/* Modal body */}
                                                                <div className="modal-body">
                                                                    {
                                                                        error && <h5 align="center" className='text-danger'>{error}</h5>
                                                                    }
                                                                    <form id="request" className="main_form">
                                                                        <div className="row">

                                                                            <div className="col-md-12 mt-2">
                                                                                <input className="form-control" onChange={onchange} value={formvalue.name} placeholder="Name" type="text" name="name" required />
                                                                            </div>

                                                                            <div className="col-md-12 mt-2">
                                                                                <input className="form-control" onChange={onchange} value={formvalue.mobile} placeholder="Phone Number" type="mobile" name="mobile" required />
                                                                            </div>
                                                                            <div className="col-md-12 mt-2">
                                                                                <input className="form-control" onChange={onchange} value={formvalue.email} placeholder="Email" type="type" name="email" required />
                                                                            </div>
                                                                            <div className="col-md-12 mt-2">
                                                                                <input className="form-control" onChange={onchange} value={formvalue.password} placeholder="Password" type="password" name="password" required />
                                                                            </div>
                                                                            <div className="col-md-12 mt-2">
                                                                                <button className="btn btn-primary" onClick={updatehandel} data-bs-dismiss="modal">Save</button>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                {/* Modal footer */}
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
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

export default Index
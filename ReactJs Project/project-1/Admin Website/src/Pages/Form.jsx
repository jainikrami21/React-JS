import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";

function Form() {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchdata();
}, []);

const fetchdata =async () => {
    const res=await axios.get(`http://localhost:3000/users`);
    setData(res.data);
    setLoading(true);
  }

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchdata();
//   }, []);

//   const fetchdata = () => {
//     fetch("https://jainik-16f74-default-rtdb.firebaseio.com/users.json")
//       .then((response) => response.json())
//       .then((data) => {
        
//         setData(data);
//   });
// }

const ondelete =async (id) => {
  const res=await axios.delete(`http://localhost:3000/users/${id}`);
    toast.success('User Data Deleted Successfully')
  fetchdata();
}

const [formvalue, setFormvalue] = useState({
  name: "",
  mobile: "",
  email: "",
  password: "",
});

const [updateid, setUpdateid] = useState("");
const onedit = async (id) => {
  const res=await axios.get(`http://localhost:3000/users/${id}`);
  setFormvalue({ ...formvalue, name: res.data.name, mobile: res.data.mobile , email: res.data.email, password: res.data.password });
  setUpdateid(id);
}

const onchange = (e) => {
  setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  console.log(formvalue);
}
const onupdate = async (e) => {
  const res=await axios.patch(`http://localhost:3000/users/${updateid}`,formvalue);
  setFormvalue({ ...formvalue, name: res.data.name, mobile: res.data.mobile , email: res.data.email, password: res.data.password });
  fetchdata();
}

  const status = async(id) =>
  {
    const res = await axios.get(`http://localhost:3000/users/${id}`);
      if(res.data.status == "Unblock") 
      {
        await axios.patch(`http://localhost:3000/users/${id}`, { status:"Block"});

        localStorage.removeItem('id');
        localStorage.removeItem('name');
        toast.success('User Block Success');
        fetchdata();
      }
      else
      {
        await axios.patch(`http://localhost:3000/users/${id}`, { status: "Unblock"});
        toast.success('User Unblock Success');
        fetchdata();
      }
  }



  // const ondelete = (id) => {
  //   window.confirm("Are You Sure Want to Delete");
  //   fetch(
  //     `https://jainik-16f74-default-rtdb.firebaseio.com/users/${id}.json`,
  //     {
  //       method: "DELETE",
  //     }
  //   ).then((response) => {
  //     fetchdata();
  //   });
  // };


  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h2>Forms Page</h2>
              <h5>Welcome Jainik Rami , Love to see you back.</h5>
            </div>
          </div>

          {/* The Modal */}
          <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Modal Heading</h4>
                            <button type="button" className="close" data-dismiss="modal"></button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <form id="request" className="main_form">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3>Edit User</h3>
                                        <br />
                                    </div>
                                    <div className="col-md-12">
                                        <input className="form-control" placeholder="Name" onChange={onchange} value={formvalue.name} type="text" name="name" required />
                                        <br />
                                    </div>
                                    <div className="col-md-12">
                                        <input className="form-control" placeholder="Phone Number" onChange={onchange} value={formvalue.mobile} type="mobile" name="mobile" required />
                                        <br />
                                    </div>
                                    <div className="col-md-12">
                                        <input className="form-control" placeholder="Email ID" onChange={onchange} value={formvalue.email} type="email" name="email" required />
                                        <br />
                                    </div>
                                    <div className="col-md-12">
                                        <input className="form-control" placeholder="Password" onChange={onchange} value={formvalue.password} type="password" name="password" required />
                                        <br />
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn btn-primary" onClick={onupdate} data-dismiss="modal">Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

          {/* /. ROW  */}
          <hr />
          <div className="row">
            <div className="col-md-12">
              {/* Form Table */}
              <div className="panel panel-default">
                <div className="panel-heading">Form Table</div>
                {
                  loading == true ?
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>User Id</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Mobile</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          Object.keys(data).map((item, index, entarr) => {
                            return (
                              <tr>
                                <td>{data[item].id}</td>
                                <td>{data[item].name}</td>
                                <td>{data[item].mobile}</td>
                                <td>{data[item].email}</td>
                                <td>

                                <button className="btn btn-success" onClick={()=>status(item.id)}>
                                  {item.status}
                                </button>
                                <button className="btn btn-danger" onClick={()=>ondelete(item.id)}>
                                  Delete
                                </button>
                                <button className="btn btn-danger" data-toggle="modal" data-target="#myModal" onClick={() => onedit(item.id)}>Edit</button>
                              </td>
                            </tr>
                          );
                        })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
                : <div class="spinner-border"></div>
                }
              </div>
              {/* End  User Table */}
            </div>
          </div>

          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-12">
              <h3>More Customization</h3>
              <p>
                For more customization for this template or its components
                please visit official bootstrap website i.e getbootstrap.com or
                <a href="http://getbootstrap.com/components/" target="_blank">
                  click here
                </a>
                . We hope you will enjoy our template. This template is easy to
                use, light weight and made with love by binarycart.com
              </p>
            </div>
          </div>
          {/* /. ROW  */}
        </div>
        {/* /. PAGE INNER  */}
      </div>
      {/* /. PAGE WRAPPER  */}
    </div>
  );
}

export default Form;

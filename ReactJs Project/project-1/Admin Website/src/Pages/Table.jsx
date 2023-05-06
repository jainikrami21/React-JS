import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function Table() {


  useEffect(() => {
    fetchdata();
  }, []);

  const [data, setData] = useState([]);

  const fetchdata = async() => 
  {
    const res=await axios.get(`http://localhost:3000/contacts`);
        // console.log(res); 
        setData(res.data);
  }
    // fetch('https://jainik-16f74-default-rtdb.firebaseio.com/contact.json')
    //   .then((response) => response.json())
    //   .then((data) => {


  const ondelete = async(id) => {
    
    console.log(id);
    const res=await axios.delete(`http://localhost:3000/contacts/${id}`);
    toast.success('Contact Data Delete Success');
    fetchdata();
  }
  
  
    //   window.confirm("Are You Sure Want to Delete");
  //   fetch(
  //     `https://jainik-16f74-default-rtdb.firebaseio.com/contact/${id}.json`,
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
              <h2>Contact Page</h2>
              <h5>Welcome Jainik Rami , Love to see you back.</h5>
            </div>
          </div>
          {/* /. ROW  */}
          <hr />
          <div className="row">
            <div className="col-md-12">
              {/* Contact Table */}
              <div className="panel panel-default">
                <div className="panel-heading">Contact Table</div>
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>Contact Id</th>
                          <th>Name</th>
                          <th>Mobile</th>
                          <th>Email</th>
                          <th>Message</th>
                          <th>Action</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                            Object.keys(data).map((item, index, entarr) => {
                            return (
                              <tr className="odd gradeX">
                                <td>{data[item].id}</td>
                                <td>{data[item].name}</td>
                                <td>{data[item].mobile}</td>
                                <td>{data[item].email}</td>
                                <td>{data[item].msg}</td>
                                <td>
                                <button className="btn btn-danger" onClick={()=>ondelete(item.id)}>
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* End  Contact Table */}
            </div>
          </div>
        </div>
        {/* /. PAGE INNER  */}
      </div>
      {/* /. PAGE WRAPPER  */}
    </div>
  );
}

export default Table;

import React from 'react'
import { useEffect, useState } from "react";

function Logintable() {

    const [data, setData] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    fetch('https://jainik-16f74-default-rtdb.firebaseio.com/userslogin.json')
      .then((response) => response.json())
      .then((data) => {
        
        setData(data);
  });
}

  const ondelete = (id) => {
    window.confirm("Are You Sure Want to Delete");
    fetch(
      `https://jainik-16f74-default-rtdb.firebaseio.com/userslogin/${id}.json`,
      {
        method: "DELETE",
      }
    ).then((response) => {
      fetchdata();
    });
  };


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
              {/* Login Table */}
              <div className="panel panel-default">
                <div className="panel-heading">Contact Table</div>
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>Email</th>
                          <th>Password</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          Object.keys(data).map((item, index, entarr) => {
                            return (
                              <tr className="odd gradeX">
                                <td>{data[item].email}</td>
                                <td>{data[item].password}</td>
                                <td>
                                <button className="btn btn-danger" onClick={()=>ondelete(item)}>
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
              {/* End  Login Table */}
            </div>
          </div>
        </div>
        {/* /. PAGE INNER  */}
      </div>
      {/* /. PAGE WRAPPER  */}

    </div>
  )
}

export default Logintable
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Profile() {
  const redirect = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("id")) {
      return redirect("/");
    }
    fetchdata();
  }, []);

  const [data, setData] = useState("");
  const fetchdata = async () => {
    const res = await axios.get(
      `http://localhost:3000/users/${localStorage.getItem("id")}`
    );
    setData(res.data);
  };

  return (
    <div>
      {/* about section */}
      <div className="about">
        <div className="container">
          <div className="row d_flex">
            <div className="col-md-6 offset-md-3">
              <div className="titlepage">
                <h2>Manage Profile</h2>
                <p>Id : {data.id}</p>
                <p>Name : {data.name}</p>
                <p>Email : {data.email}</p>
                <p>Mobile : {data.mobile}</p>
              </div>
              <a
                className="read_more"
                href="javascript:void(0);"
                onClick={() => {
                  redirect(`/edit_profile/${data.id}`);
                }}
              >
                Edit Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* about section */}
    </div>
  );
}

export default Profile;

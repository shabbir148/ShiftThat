import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import UserItems from '../components/UserItems'
import ShowItems from "./ShowItems";
import "./profile.css"

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container-fluid" style={{backgroundImage: 'url('+'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Ftransport-background&psig=AOvVaw2VlHNU6XwB3__T04DJFpEE&ust=1621230447265000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiogKHAzfACFQAAAAAdAAAAABAD'+')', height: "300px", backgroundRepeat: "no-repeat"}}>
      <header className="jumbotron">
        <h3 >
          <strong style={{textTransform: "uppercase"}}>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <div className="col-md-12">
        <div className='container-fluid home p-5'>
        <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="form-control">
            {currentUser.username}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <div className="form-control">
            {currentUser.email}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username">Authorities</label>
            <div className="form-control">
            <div>
            {currentUser.roles &&
            currentUser.roles.map((role, index) => <span key={index}>{role}</span>)}
            </div>            
            </div>
          </div>
        </div>
        </div>
   
      </div>
   

    </div>
    
    

  );
};

export default Profile;

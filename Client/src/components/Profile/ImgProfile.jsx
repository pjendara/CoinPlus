import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import LogOut from '../Login/LogOut';
import LoginDetailBtn from '../Login/LoginDetailBtn.jsx';
import './profile.css';

export default function Profile() {
    const {user, isAuthenticated} = useAuth0()
  return (
    isAuthenticated && (
        <div className="profile-nav dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img className="img-profile-nav" src={user.picture} alt={user.name}/>
          </a>
          <ul class="dropdown-menu text-center p-0 justify-content-center ">
            <div className='modal_drop'>
                <img className="img-profile-details my-3" src={user.picture} alt={user.name}/>
                <h6>{user.name}</h6>
                <p>{user.email}</p>
            </div>
            <div className='justify-content-center d-flex m-2 gap-2'>
                <LogOut/>
                <LoginDetailBtn/>
            </div>
          </ul>
        </div>
    )
  )
}
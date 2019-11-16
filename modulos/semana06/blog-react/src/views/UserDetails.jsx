import React from 'react'
import {
    useParams
} from "react-router-dom";
import twitterIcon from "../assets/twitter.png"
import instagramIcon from "../assets/instagram.jpg"
import './UserDetails.css'
export default function UserDetails(props) {
    let { id } = useParams();
    const user = props.users.find(user => user._id === id);
   
    return user  ? 
        (
            <main className="main">
                <div className="content">
                    
                            <img className="avatar" src={user.avatar} alt="user avatar" />
                            <h2 className="user-name">{user.firstName} {user.lastName}</h2>
                            <div className="social-icons">

                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src={twitterIcon} alt="twitter logo" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={instagramIcon} alt="instagram logo" />
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
        
            </main>
        ) :
            (<main className = "main">
            <p>There is no data for that user</p >
        </main >)
        
}

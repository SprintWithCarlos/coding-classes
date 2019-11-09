import React from 'react'
import "./UserCard.css"
export default function UserCard(props) {
    const { avatar, firstName, lastName, email, _id} =props.user;
    return (
        <article className="card">
            <a href={"/users/" + _id}>
                <figure>
                    <img src={avatar} alt="user avatar" />
                </figure>
            </a>

            <div className="card-text">
                <h3>{firstName} {lastName}</h3>
                <small>{email}</small>
            </div>
        </article>
    )
}

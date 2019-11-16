import React from 'react'
import UserCard from '../components/UserCard'
export default function About(props) {

    return (
        <main className="main">
            <div id="users">
                <h1>Who we are?</h1>
                <section className="content">
                    <ul>
                        {props.users.map(user => {
                            const { avatar } = user
                            return (
                                <li>
                                    <UserCard user={user} />
                                </li>
                            )
                        })}
                    </ul>
                </section >
            </div >
        </main>
    )
}

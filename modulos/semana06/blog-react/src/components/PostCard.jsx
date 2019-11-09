import React from 'react'
import twitterIcon from "../assets/twitter.png"
import instagramIcon from "../assets/instagram.jpg"
export default function Card(props) {
    const { postImg, title, description, _id, author} = props.post
    return (
        <article className="card">
            <figure>
                <img src={postImg} alt="post" />
            </figure>
            <div className="card-text">
                <h2>{title}</h2>
                <p className="body">{description}</p>
                <a href={"/posts/" + _id}>Read More</a>
                <div className="user-info">
                    <div className="user-content">
                        <div className="w30">
                            <a href={"/users/" + author._id}>
                                <img src={author.thumbnail} alt="user avatar" className="thumbnail" />
                </a>
                    </div>
                    <div className="w70">
                        <p className="user-name">{ author.firstName }{ author.lastName }</p>
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
                </div>
            </div>
            </div>
        </article>

        
    )
}


import React from 'react'
import {
    useParams
} from "react-router-dom";
import './PostDetails.css';
import twitterIcon from "../assets/twitter.png"
import instagramIcon from "../assets/instagram.jpg"
export default function PostDetails(props) {
    let { id } = useParams();
    const post = props.posts.find(post=> post._id === id);
    return post ?  (
        <main className="main">
            <div id="postDetails">
            <div className="article-content" >
      <div>
                <figure>
                            <img src={post.postImg} alt="image pic" />
        </figure>
                <section className="content">
                    <h1>{ post.title }</h1>
                    <div className="user-info" >
                        <div className="user-content" >
                                    <img className="avatar" src={post.author.avatar} alt="user avatar" /> 
                                    <h2 className="user-name">{post.author.firstName} { post.author.lastName }</h2>
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
                    <div className="post-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quae id obcaecati repellendus, sit reiciendis voluptas consequuntur voluptatem minima fugit incidunt quod accusamus harum magni vitae quidem velit commodi praesentium possimus laudantium ipsa deleniti rem repellat! Deleniti illum iste, quibusdam magni eos vero asperiores architecto itaque aliquid natus accusamus.</p>
                    </div>
                </section>
            </div>
        </div>
  </div >
        </main>
    ) : <p>Undefined</p>
    

    
}

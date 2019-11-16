import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import PostsList from './views/PostsList';
import PostDetails from './views/PostDetails';
import About from './views/About';
import UserDetails from './views/UserDetails';
import './App.css'
import Footer from './components/Footer';
const URI = "http://localhost:3000/api"
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      posts: [],
      users: [],
    }
  }
  async getData(resource) {
    const response = await fetch(URI + resource);
    const result = await response.json()
    return result.data;

  }

  async componentDidMount() {
    const posts =await this.getData("/posts")
    console.log("resultados",
    posts)
    this.setState({ isLoading: true })
    try {
      const posts = await this.getData('/posts');
      const users = await this.getData('/users');
      this.setState({
        isLoading: false,
        users,
        posts
      })
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      })
    }
  }
  render() {
    const { users, posts } = this.state;

    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <PostsList posts={posts}/>
          </Route>
          <Route path="/posts/:id" 
            component={() => <PostDetails posts= { posts } />}
          />
          <Route path="/about">
            <About users={users}/>
          </Route>
          <Route path="/users/:id" component={() => <UserDetails users={users} />}  />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

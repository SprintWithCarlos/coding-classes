import React, { Component } from 'react'

function Card({data}) {
  const { poster, title, year, plot } = data;
  return (
    <>
      <p>data</p>
      <h2>{title}</h2>
      <img src={poster} alt={title}/>
      <p>{plot}</p>
      <p>{year}</p>
    </>
  )
}

export default class Movie extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: []
    }
  }
  async getMovies(){
    const response = await fetch('http://localhost:5000/api/movies')
    const result = await response.json()
    return result.data;
  }
  async componentDidMount(){
    const movies = await this.getMovies()
    this.setState({
      movies
    })
    console.log(this.state.movies)
  }
  render() {
    return(
      this.state.movies.map(movie => {
        return (<Card data={movie} />)
      })
    )
    
  }
}

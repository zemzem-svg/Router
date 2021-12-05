import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'

export const MovieCard = ({movie}) => {
    return (
        <div >
            <Link to={`/movie/${movie.id}`}>
            <Card style={{textDecoration:"none", width: '18rem' }} >
                <Card.Img variant="top" src={movie.posterurl} />
                <Card.Body>
                    <Card.Title>{movie.name}</Card.Title>
                    <Card.Text>
                  {movie.description}
                    </Card.Text>
                   <ReactStars
                        count={5}
                        edit={false}
                   // onChange={ratingChanged}
                     size={24}
                        activeColor="#ffd700"
                        value={movie.rating}
                     /> 
   
                    
                </Card.Body>
            </Card>
            </Link>
        </div>
    )
}

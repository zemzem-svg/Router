import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

export const MovieScreen = ({ movies }) => {
    console.log(movies);
    const params = useParams();
let movie = movies.find((el) => el.id == params.ala);
    return (
        <div><p>hello</p>
                <h1> {movie.name}</h1>
            {/* <Container>
                <Row>
             <Col>{""}
                        <img style={{ width: "100%" }} src={movie.posterurl} alt=''/>
             </Col>
                 <Col>
                      {""}
                        
                        <p>{movie.description}</p>
                            </Col>
                 </Row>
                 </Container>
           */}
            
        </div>
    )
}

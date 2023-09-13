import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { movie } from '../../redux/dashboardSlice/DashboardSlice'
import "./Details.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Details = () => {

    const { id } = useParams();

    const { movieData } = useSelector((state) => state.dashboardReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movie(id))
    }, [])
    return (
        <div className='header_main'>
            <div className='header'>
                {/* <Header /> */}
            </div>
            <div className='container_main'>
                <div>
                    <Container fluid="md">
                        <Row>
                            <Col>
                                <Card className='card_name' >
                                    <Card.Body className='card_body'>
                                        <Card.Title className='card_title'>Welcome.</Card.Title>
                                        <Card.Text className='card_text'>

                                            Millions of movies, TV shows and people to discover. Explore now.
                                        </Card.Text>
                                        <InputGroup className="mb-3">
                                            <Form.Control
                                                placeholder="Search for a movie, tv show, person......"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />
                                            <InputGroup.Text id="basic-addon2" className='search'>Search</InputGroup.Text>
                                        </InputGroup>
                                    </Card.Body>
                                </Card>
                                <div className='display_second'>

                                    <Card style={{ width: '18rem', }} className='display_cardss'
                                    // onClick={handleClick}
                                    >
                                        <Card.Img variant="top" src={movieData?.backdrop_path} />
                                        <Card.Body>
                                            <Card.Title>{movieData?.tagline
                                            }</Card.Title>

                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item>{movieData?.genres?.map((item, index) => (
                                                <span key={item.id}>
                                                    {item.name}
                                                    {index < movieData.genres.length - 1 ? ', ' : ''}
                                                </span>
                                            ))}</ListGroup.Item>
                                            <ListGroup.Item>{movieData?.status}</ListGroup.Item>
                                        </ListGroup>

                                    </Card>

                                </div>

                            </Col>
                        </Row>
                    </Container>

                </div>
            </div>
        </div>
    )
}

export default Details
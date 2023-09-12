import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "../dashboard/Dashboard.css"
import { removeItem } from '../../redux/dashboardSlice/DashboardSlice';
import { useNavigate } from 'react-router-dom';
const AddCart = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const { data } = useSelector((state) => state.dashboardReducer)

    const handleRemoveFromCart = (item) => {
        dispatch(removeItem(item));
        navigate("/")
    };
    return (
        <div>
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
                                        // onChange={(e) => setSearch(e.target.value)}
                                        />
                                        <InputGroup.Text id="basic-addon2" className='search' >Search</InputGroup.Text>
                                    </InputGroup>
                                </Card.Body>
                            </Card>
                            <div className='display'>
                                {
                                    data?.length > 0 &&
                                    data?.map((item) => {
                                        return (
                                            <>
                                                <div className='display_card'>

                                                    <Card style={{ width: '18rem', }} className=''
                                                    >
                                                        <Card.Img variant="top" src={item?.backdrop_path} />
                                                        <Card.Body>
                                                            <Card.Title>{item?.original_title
                                                            }</Card.Title>

                                                        </Card.Body>
                                                        <ListGroup className="list-group-flush">
                                                            <ListGroup.Item>{item?.overview}</ListGroup.Item>
                                                            <ListGroup.Item>{item?.release_date}</ListGroup.Item>
                                                        </ListGroup>
                                                    </Card>
                                                    <button type="button" class="btn btn-primary m-2 d-flex justify-content-center" onClick={() => handleRemoveFromCart(item)}>Remove Item</button>
                                                </div>
                                            </>
                                        )

                                    })

                                }
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default AddCart
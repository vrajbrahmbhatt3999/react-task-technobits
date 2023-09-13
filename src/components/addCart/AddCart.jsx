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
import { addToCart, getTotals, removeFromCart, removeItem } from '../../redux/dashboardSlice/DashboardSlice';
import { Link, useNavigate } from 'react-router-dom';
import "./AddCart.css"
const AddCart = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const cart = useSelector((state) => state.dashboardReducer);

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };

    const addMore = () => {
        navigate("/")
    }

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
                                    cart.cartItems.length === 0 ? (
                                        <div className="cart-empty">
                                            <p>Your Watch List is currently empty</p>
                                            <div className="start-shopping">
                                                <Link to="/">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        fill="currentColor"
                                                        className="bi bi-arrow-left"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                                        />
                                                    </svg>
                                                    <span>Add Watch List</span>
                                                </Link>
                                            </div>
                                        </div>
                                    ) : (
                                        <>

                                            {cart?.cartItems?.length > 0 &&
                                                cart?.cartItems?.map((item) => {
                                                    return (
                                                        <>
                                                            <div className='display_card'>

                                                                <Card className='cardMap'
                                                                >
                                                                    <Card.Img variant="top" src={item?.backdrop_path} />
                                                                    <Card.Body>
                                                                        <Card.Title>{item?.original_title
                                                                        }</Card.Title>

                                                                    </Card.Body>
                                                                    <ListGroup className="list-group-flush">
                                                                        <ListGroup.Item>{item?.release_date}</ListGroup.Item>
                                                                    </ListGroup>
                                                                </Card>
                                                                <button type="button" class="btn btn-primary m-2 d-flex justify-content-center" onClick={() => handleRemoveFromCart(item)}>Remove Watch List</button>
                                                            </div>
                                                        </>
                                                    )

                                                })}

                                        </>
                                    )

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
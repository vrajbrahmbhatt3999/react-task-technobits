import React, { useEffect, useState } from 'react';
import "./Dashboard.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { DiscoverData, SearchData, addItem, addToCart, dashboardData, removeItem } from "../../redux/dashboardSlice/DashboardSlice";
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../../common/pagination/Pagination';
import NavBar from '../../common/navbar/Navbar';

const Dashboard = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [page, setPage] = useState(1)
    const [search, setSearch] = useState()

    const { dashboardAllData } = useSelector((state) => state.dashboardReducer)

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const first10Data = dashboardAllData.slice(0, itemsPerPage);

    const handlePaginate = (item) => {
        setCurrentPage(item);
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    };

    useEffect(() => {
        dispatch(dashboardData())
    }, [])

    useEffect(() => {
        dispatch(dashboardData(currentPage))
    }, [currentPage])

    const handleClick = (item) => {
        dispatch(addToCart(item));
        navigate("/addCart")
    }

    const handleClickSearch = () => {
        dispatch(SearchData(search))
    }
    return (
        <>
            <div className='header_main'>
                <div className='header'>
                    <NavBar />
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
                                                    onChange={(e) => setSearch(e.target.value)}
                                                />
                                                <InputGroup.Text id="basic-addon2" className='search' onClick={handleClickSearch}>Search</InputGroup.Text>
                                            </InputGroup>
                                        </Card.Body>
                                    </Card>
                                    <div className='display'>
                                        {
                                            first10Data?.length > 0 &&
                                            first10Data?.map((item) => {
                                                return (
                                                    <>
                                                        <div className='display_card'>
                                                            <Link to={`/${item?.id}`} className='link'>
                                                                <Card className='cardMap'
                                                                >
                                                                    <Card.Img variant="top" src={item?.backdrop_path} />
                                                                    <Card.Body>
                                                                        <Card.Title>{item?.original_title
                                                                        }</Card.Title>

                                                                    </Card.Body>
                                                                    <ListGroup className="list-group-flush">
                                                                        {/* <ListGroup.Item>{item?.overview}</ListGroup.Item> */}
                                                                        <ListGroup.Item className='dateName'>{item?.release_date}</ListGroup.Item>
                                                                    </ListGroup>
                                                                </Card>
                                                            </Link>
                                                            <div className='memo'>
                                                            <button class="btn btn-primary m-2 d-flex justify-content-center" onClick={() => handleClick(item)}>Watchlist</button>
                                                        </div>
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

            </div>
            <div className="paginationContainer">
                <div>
                </div>
                <Pagination
                    data={dashboardAllData}
                    itemsPerPage={itemsPerPage}
                    handlePaginate={(item) => handlePaginate(item)}
                    active={currentPage}
                    handlePrevious={() => handlePrevious()}
                    handleNext={() => handleNext()}
                />
            </div>
        </>
    )
}

export default Dashboard
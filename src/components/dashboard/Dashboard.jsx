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
import { DiscoverData, SearchData, addItem, dashboardData, removeItem } from "../../redux/dashboardSlice/DashboardSlice";
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../../common/pagination/Pagination';

const Dashboard = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [page, setPage] = useState(1)
    const [search, setSearch] = useState()

    const { dashboardAllData, discoverAllData } = useSelector((state) => state.dashboardReducer)

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = dashboardAllData.slice(indexOfFirstItem, indexOfLastItem);  
    // const clientNames = OffshoreListTableData.map((item) => item.name);
    // let varible = Math.ceil(discoverAllData.length / itemsPerPage);
    const handlePaginate = (discoverAllData) => {
        setCurrentPage(discoverAllData);
    };

    const handlePrevious = () => {
        currentPage !== 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(1);
    };
    // const handleNext = () => {
    //     currentPage !== varible
    //         ? setCurrentPage(currentPage + 1)
    //         : setCurrentPage(currentPage);
    // };


    useEffect(() => {
        dispatch(dashboardData())
        dispatch(DiscoverData(page))
    }, [])


    const handleClick = (item) => {
        let data = []
        data.push(item)
        // localStorage.setItem("watchlist", JSON.stringify(data))
        dispatch(addItem(data));
        navigate("/addCart")
    }

    const handleClickSearch = () => {
        dispatch(SearchData(search))
    }
    return (
        <>
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
                                                    onChange={(e) => setSearch(e.target.value)}
                                                />
                                                <InputGroup.Text id="basic-addon2" className='search' onClick={handleClickSearch}>Search</InputGroup.Text>
                                            </InputGroup>
                                        </Card.Body>
                                    </Card>
                                    <div className='display'>
                                        {
                                            dashboardAllData?.length > 0 &&
                                            dashboardAllData?.map((item) => {
                                                return (
                                                    <>
                                                        <div className='display_card'>

                                                            <Link to={`/${item?.id}`} className='link'>
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
                                                            </Link>
                                                            <button class="btn btn-primary m-2 d-flex justify-content-center" onClick={() => handleClick(item)}>Watchlist</button>
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
                    {/* Showing {currentItems.length} from {dashboardAllData.length} data */}
                </div>
                {/* <Pagination
                    data={discoverAllData}
                    itemsPerPage={itemsPerPage}
                    handlePaginate={(item) => handlePaginate(item)}
                    active={currentPage}
                    handlePrevious={() => handlePrevious()}
                    handleNext={() => handleNext()}
                /> */}
            </div>
        </>
    )
}

export default Dashboard
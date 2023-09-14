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
    console.log('movieData', movieData.overview)
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
                                <div className='display_second'>
                                    <div className='left'>
                                        <Card style={{ width: '20rem', }} className='display_cardss'
                                        >
                                            <Card.Img className='imagesDetails' variant="top" src={"https://www.themoviedb.org/t/p/w440_and_h660_face/" + movieData?.poster_path} />

                                        </Card>
                                    </div>

                                    <div className='right'>
                                        <div className='titleName'>
                                            <h2 className='titleh2'>{movieData?.original_title}</h2>
                                        </div>
                                        <div  className='titleName'>
                                            <h4>{movieData?.release_date}</h4>
                                        </div>
                                        <div  className='titleName'>
                                            <h4>{movieData?.tagline}</h4>
                                        </div>
                                        <div  className='titleName' >
                                            <h5>Overview</h5>
                                            <h6>{movieData?.overview}</h6>
                                        </div>
                                    </div>
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
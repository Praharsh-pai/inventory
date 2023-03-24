import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../css/Categories.css";
import { Typography } from "@mui/material";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SearchIcon from '@mui/icons-material/Search';
const MainPage = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const products = [
        {
            name: "Product",
            image: require('../assets/images.jpg'),
        },
        {
            name: "Product",
            image: require('../assets/images.jpg'),
        },
        {
            name: "Product",
            image: require('../assets/images.jpg'),
        },
        {
            name: "Product",
            image: require('../assets/images.jpg'),
        },
        {
            name: "Product",
            image: require('../assets/images.jpg'),
        },
        {
            name: "Product",
            image: require('../assets/images.jpg'),
        },
        {
            name: "Product",
            image: require('../assets/images.jpg'),
        },
        {
            name: "Product",
            image: require('../assets/images.jpg'),
        },
        {
            name: "Product",
            image: require('../assets/images.jpg'),
        },
        {
            name: "Product",
            image: require('../assets/images.jpg'),
        },
        {
            name: "Product",
            image: require('../assets/images.jpg'),
        },
        {
            name: "Product",
            image: require('../assets/images.jpg'),
        },
        {
            name: "Product",
            image: require('../assets/images.jpg'),
        },
        {
            name: "Product",
            image: require('../assets/images.jpg'),
        },
    ];

    return (
        <>
            <div className='d-flex justify-content-center align-items-center flex-column ' style={{ height: '100vh' }} >
                <Carousel activeIndex={index} onSelect={handleSelect} style={{ width: '60%', height: '500px' }}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ height: '470px' }}
                            src={require('../assets/fruits.jpg')}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First Item</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ height: '470px' }}
                            src={require('../assets/vege.jpg')}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second Item</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ height: '470px' }}
                            src={require('../assets/fertilizer.jpg')}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third Item</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ height: '470px' }}
                            src={require('../assets/tools.jpg')}
                            alt="Fourth slide"
                        />

                        <Carousel.Caption>
                            <h3>Fourth Item</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ height: '470px' }}
                            src={require('../assets/vege.jpg')}
                            alt="Fifth slide"
                        />

                        <Carousel.Caption>
                            <h3>Fifth Item</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <p className='fs-1'><strong>Fresh of the DAY</strong></p>
            </div>

            <div className='d-flex justify-content-center align-items-center flex-column' style={{ marginBottom: '300px' }}>
                <div className='bgImg d-flex justify-content-center align-items-center flex-column'>
                    <p className='fs-1 text-light text-center'><strong>Search Product According to <br/>Your Desired Location</strong></p>
                    <Form className='d-flex my-5  w-50' style={{ height: '50px' }} >
                        <Form.Control type="text" placeholder="Enter Your Location..." className='mx-2'/>
                        <Button variant="success" type="button">
                            <SearchIcon/>
                        </Button>
                    </Form>
                </div>
            </div>





            <div className='d-flex justify-content-center align-items-center flex-column' style={{ marginBottom: '300px' }}>
                <p className='fs-1'><strong>NEW PRODUCTS</strong></p>
                <div className="cards">
                    {products.map((item, index) => {
                        console.log(item)
                        return (
                            <div key={index} className="card" style={{ marginBottom: "50px", display: 'flex', flexDirection: 'column' }}>
                                <img src={item.image} className="card" />
                                <Typography variant="h5" textAlign="center">{item.name}</Typography>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center flex-column' style={{ marginBottom: '300px' }}>
                <p className='fs-1'><strong>TRENDING</strong></p>
                <div className="cards">
                    {products.map((item, index) => {
                        console.log(item)
                        if (index <= 4) {
                            return (
                                <div key={index} className="card" style={{ marginBottom: "50px", display: 'flex', flexDirection: 'column' }}>
                                    <img src={item.image} className="card" />
                                    <Typography variant="h5" textAlign="center">{item.name}</Typography>
                                </div>
                            )
                        }
                    }
                    )}
                </div>
            </div>



        </>
    )
}

export default MainPage
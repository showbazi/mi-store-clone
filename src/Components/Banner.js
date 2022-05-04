import React from 'react'
import Carousel  from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CarouselItem } from 'react-bootstrap'

const Banner = ({banner}) => {
    return (
        // <div>
            
        // </div>
        <Carousel fade >
            {banner.end.map((item, index) => (
                <CarouselItem key={item.image} id="banner" interval={1000} keyboard={true}>
                    <img src={item.image} alt={`${index} banner`} className="d-block w-100" id="bannerImage" />
                    <Carousel.Caption>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>Source: {item.source}</p>
                        <u>Read more</u>
                    </Carousel.Caption>
                </CarouselItem>
            ))}
        </Carousel>
    )
}

export default Banner

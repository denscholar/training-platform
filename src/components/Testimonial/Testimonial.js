import React from 'react';
import './Testimonial.css';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import Slider from "react-slick";
import ImageView from '../../assets/image-view.jpg'

const Testimonial = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplaySpeed: 5000,
        // cssEase: "linear",
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }
    return (
        <div className='textimonials-control' id='test2'>
            <h2>Testimonials</h2>
            <Slider {...settings}>
                <div className='sliders-control'>
                    <TestimonialCard
                        text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur quasi architecto in expedita, doloribus labore distinctio maiores aut laboriosam quos similique molestiae eum officiis.'}
                        src={ImageView}
                        alt={ImageView}
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <TestimonialCard
                        text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur quasi architecto in expedita, doloribus labore distinctio maiores aut laboriosam quos similique molestiae eum officiis.'}
                        src={ImageView}
                        alt={ImageView}
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <TestimonialCard
                        text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur quasi architecto in expedita, doloribus labore distinctio maiores aut laboriosam quos similique molestiae eum officiis.'}
                        src={ImageView}
                        alt={ImageView}
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <TestimonialCard
                        text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur quasi architecto in expedita, doloribus labore distinctio maiores aut laboriosam quos similique molestiae eum officiis.'}
                        src={ImageView}
                        alt={ImageView}
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <TestimonialCard
                        text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur quasi architecto in expedita, doloribus labore distinctio maiores aut laboriosam quos similique molestiae eum officiis.'}
                        src={ImageView}
                        alt={ImageView}
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <TestimonialCard
                        text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur quasi architecto in expedita, doloribus labore distinctio maiores aut laboriosam quos similique molestiae eum officiis.'}
                        src={ImageView}
                        alt={ImageView}
                        width={100}
                        height={100}
                    />
                </div>
            </Slider>
        </div>
    )
}

export default Testimonial
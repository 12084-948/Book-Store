import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './freebook.css'
import Cards from './Cards';
import axios from 'axios'


const Freebook = () => {
    const [book, setBook] = useState([])
    useEffect(() =>{
        const getBook = async () => {
            try {
                const res = await axios.get('http://localhost:3000/book')
                const data = res.data.filter((data) =>
                data.category === "Free" )
                console.log(data)
                setBook(data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook()
    }, [])
    //filtering data which has free category
    // filter method only works with arrays
    // const filterData = list.filter((data) =>
    //     data.category === "Free"
    // )
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
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
        <>
            <div className='freeBook'>
                <h1>Free Offered course</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, earum corrupti excepturi tenetur omnis distinctio tempora, architecto asperiores reprehenderit provident molestiae nihil voluptatem soluta nemo, maxime fugit impedit iure libero.</p>
            </div>
            <div className='sildeDiv'>
                <Slider {...settings}>
                    {book.map((item) => (
                        <Cards item={item} key={item.id} />
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Freebook
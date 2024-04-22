import React, { useEffect, useState } from 'react'
import './course.css'
import Cards from '../components/Cards'
// axios helps us to get data from backend to frontend
import axios from 'axios'
import {Link} from 'react-router-dom'

const Course = () => {
    const [book, setBook] = useState([])
    useEffect(() =>{
        const getBook = async () => {
            try {
                const res = await axios.get('http://localhost:3000/book')
                console.log(res.data)
                setBook(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook()
    }, [])
    return (
        <>
            <div className='course'>
                <h1>
                    We're delighted to have you <span>here!</span>
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores quibusdam alias reiciendis accusamus ab, facilis sapiente tenetur, repudiandae sed vel laudantium labore voluptatem! Ducimus repudiandae obcaecati hic reprehenderit vitae quos at incidunt dicta. Earum possimus delectus ratione illum distinctio accusamus ipsa! Placeat cum aut similique, autem eveniet amet dolorum facere consequatur nobis consectetur iste ipsa! Eos aperiam optio facilis corrupti?</p>
               <Link to='/'><button>Back</button></Link> 

                <div className='cardsCourse'>
                    {
                        book.map((item)=>(
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course
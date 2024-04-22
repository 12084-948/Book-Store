import React from 'react'
import './banner.css'
import banner from '../assets/banner.jpg'

const Banner = () => {
    return (
        <>
            <div className='banner'>
                <div className='banDiv'>
                    <div className='space'>
                        <h1>
                            Hello, welcome here to learn something
                            <span> new everyday!!!</span>
                        </h1>
                        <p>Welcome to "Storybook Haven," where adventure awaits on every
                            shelf! Our bookstore is a magical place just for kids, filled
                            with colorful tales and exciting adventures waiting to be
                            discovered. Step into a world of imagination where friendly
                            dragons roam, brave knights embark on epic quests, and curious
                            animals go on thrilling journeys. From classic fairy tales to
                            modern adventures, we have books for every young reader's taste.
                            Explore our cozy reading nooks, where you can dive into a new
                            story or cuddle up with an old favorite. Our shelves are stocked
                            with picture books, chapter books, and everything in between,
                            so there's something for readers of all ages and interests.
                            Whether you're searching for a bedtime story to whisk you away
                            to dreamland or a mystery to solve with your friends, you'll
                            find it here at Storybook Haven, where every book is a ticket
                            to a new adventure!
                        </p>

                    </div>
                </div>
                <div className='banDiv'>
                    <img src={banner} alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner
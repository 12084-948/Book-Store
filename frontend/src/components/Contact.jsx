import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='formContainer'>
                <h1>Contact Us</h1>
                <form >
                    <input type="text" placeholder='Enter Your Name..' />
                    <input type="text" placeholder='Enter Your Email..' />
                    <input type="text" placeholder='Enter Subject..' />
                    <textarea placeholder='Enter Your Message' rows="4"></textarea>
                    <button className='cBtn'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
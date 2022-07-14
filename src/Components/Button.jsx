import React from 'react'
import '../Components/Button.css'

const Button = (props) => {
    return (
        <div className='mar'>
            <div>
                <button className='butt'>
                    {props.name}
                </button>
            </div>
        </div>
    )
}

export default Button

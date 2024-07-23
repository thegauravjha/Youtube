import React from 'react'

const Button = ({ buttonName }) => {
    return (
        <div className='bg-gray-200 px-4 py-2 my-4 mx-3 rounded-lg cursor-pointer text-sm'>
            {buttonName}
        </div>
    )
}

export default Button
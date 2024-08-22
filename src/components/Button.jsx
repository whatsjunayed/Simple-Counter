import React from 'react'

const Button = ({ children, className,onClick}) => {
    return <button onClick={onClick} className={`bg-green-600 text-white text-lg px-5 py-2 rounded-full ${className}`}>{ children}</button>;
}

export default Button

import React from 'react'

const Aboutvalues = ({icon,title,purpose}) => {
    return (
        <div className="bg">
            <i className={icon}></i>
            <h3>{title}</h3>
            <p>{purpose}</p>
        </div>
    )
}

export default Aboutvalues
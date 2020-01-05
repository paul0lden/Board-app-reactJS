import React, { Children } from 'react'

function AddCard(props) {
    return (
        <div 
            className={props.className}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    )
}

export default AddCard

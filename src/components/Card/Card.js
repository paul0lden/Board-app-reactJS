import React from 'react'

function Card (props) {
    
    const dragStart = e => {
        const target = e.target;
            
        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = "none";
        }, 0)
    }

    const dragOver = e => {
        e.stopPropagation();
    }
    
    const dragEnd = e => {
        const target = e.target;
        target.style.display = "block"
    }

    return (
        <div
            id={props.id}
            className={props.className}
            draggable="true"
            onDragStart={dragStart}
            onDragOver={dragOver}
            onDragEnd={dragEnd}
        >
            {props.children}
        </div>
    );
}

export default Card

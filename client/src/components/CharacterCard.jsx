import React, { useEffect, useState } from 'react'

export const CharacterCard = ({props}) => {
    return (
        <React.Fragment>
        <div className="card border-8" key={props.i}>
            <div className="flex">
                <h2 className="p-5">{props.name}</h2>
                <h2 className="p-5">{props.species}</h2>
                <h2 className="p-5">{props.gender}</h2>
            </div>
            <img src={props.image}/>
        </div>
    </React.Fragment>
    )
}
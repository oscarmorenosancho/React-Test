import React, { useEffect, useState } from 'react'
import { CharacterCard } from './CharacterCard';

export const Gallery = () => {
    const [content, setContent] = useState("Something");
    useEffect(() => {
        const urlRM = "https://rickandmortyapi.com/api/character"; 
        fetch(urlRM).then(response => response.json()).then((res)=>{setContent(res.results)});
    }, []);
    return <React.Fragment>
        <div className='container grid content-center'>
                {
                    [...content].map((el, i) => 
                        <CharacterCard props={el} />
                    )
                }
        </div>
    </React.Fragment>
}
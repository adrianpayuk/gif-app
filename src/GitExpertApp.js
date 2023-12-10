import React, { useState } from 'react'
import { AddCategories } from './Componentes/AddCategories';
import { GifGrid } from './Componentes/GifGrid';

export const GitExpertApp = () => {

    const [catergories, setCatergories] = useState(['One Punch']);

    // const handleApp = () => {
    //     const m='Monster Hunter';
    //     setCatergories([...catergories,m]);
    // }
    

    return (
        <>
            <h1>GitExpertApp</h1>
            <AddCategories setCatergories ={setCatergories}/>
            <hr />
            {/* <button onClick={handleApp}>Agregar</button> */}
            <h3>Imagenes</h3>
            <ol>
                {
                    catergories.map(category =>(
                        <GifGrid category={category} key={category}/>
                    ))
                }
            </ol>
        </>

    )
}

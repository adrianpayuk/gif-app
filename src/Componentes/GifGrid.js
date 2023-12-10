import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGif } from '../hooks/useFetchGif';

export const GifGrid = ({ category }) => {



    const { data: images, loading } = useFetchGif(category);



    return (
        <>
            <h2>{category}</h2>
            {loading && <p className='animate__animated animate__flash'>Loading</p>}

            <div className="card-grid">


                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }


            </div>
        </>
    )
}

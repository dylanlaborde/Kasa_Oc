import React from 'react'
import './Gallery.css'
import Thumb from '../Thumb/Thumb'
import logements from '../../data/logements.json'


function Gallery() {
    const datas = logements;

    return (
        <section className='home-gallery'>
            {datas.map((data,index) => (
                <Thumb
                    key={index}
                    id={data.id}
                    cover={data.cover}
                    title={data.title}
                />
            ))}
        </section>
  )
}



export default Gallery
import React from 'react'
import { Xamicalli } from '../svg/Xamicalli'

export const About = () => {
    return (
        <section className='p-4 h-[60vh] flex flex-col items-center' >
            <div className='max-w-full w-[40%] mx-auto ' >
                <Xamicalli />
            </div>
            <div className='max-w-full w-[700px] mx-auto text-center' >
                <p className='text-[#ff7b00] mt-20' >
                    Del náhuatl "Xamicali" que significa casa de Adobe
                </p>
                <p className='text-white' >
                    En una vieja casona, con un patio rodeado de columnas y arco de cantera en el corazón de la ciudad, se encuentra un club único, tanto por su arquitectura y diseño interior, como por el servicio y el ambiente que ofrece. <span className='text-[#ff7b00]' >"Xamicalli" o casa de adobe.</span>
                </p>
            </div>

        </section>
    )
}

'use client'

import React, { useLayoutEffect, useRef } from 'react'
import { Xamicalli } from '../svg/Xamicalli'
import { gsap } from 'gsap'

export const About = () => {

    const discRef = useRef<HTMLDivElement | null>(null)

    useLayoutEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: discRef.current,
                start: 'top bottom',
                end: 'top top-=1000',
                scrub: true,
            }
        })

        tl.to(discRef.current, {
            rotate: 10000
        })


        return () => {

        };
    }, [])

    return (
        <section className='p-4 h-[60vh] flex flex-col items-center relative my-10 overflow-x-hidden' >
            <h2 className='text-center text-white text-2xl font-bold uppercase'>¿Qué es Xamicalli?</h2>
            <div className='max-w-full w-[700px] mx-auto text-center mt-10 mb-20' >
                <p className='text-[#ff7b00]' >
                    Del náhuatl "Xamicali" que significa casa de Adobe
                </p>
                <p className='text-white' >
                    En una vieja casona, con un patio rodeado de columnas y arco de cantera en el corazón de la ciudad, se encuentra un club único, tanto por su arquitectura y diseño interior, como por el servicio y el ambiente que ofrece. <span className='text-[#ff7b00]' >"Xamicalli" o casa de adobe.</span>
                </p>
            </div>
            <div className='max-w-full w-[40%] mx-auto' >
                <Xamicalli />
            </div>
            <div ref={discRef} className='w-1/2 aspect-square absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 -z-10'>
                <img src='/disc.png' alt='' className='w-full h-full' />
            </div>
        </section>
    )
}

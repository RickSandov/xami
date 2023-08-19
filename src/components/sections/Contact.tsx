'use client'

import { gsap } from 'gsap';
import React, { useLayoutEffect, useRef } from 'react'
import { Facebook } from '../svg/Facebook';
import { Instagram } from '../svg/Instagram';



export const Contact = () => {

    const nexusRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: nexusRef.current,
                start: 'top bottom',
                end: 'top top-=1000',
                scrub: true,
            }
        })

        gsap.fromTo(mapRef.current, {
            rotateX: '220deg',
            rotateY: '25deg'
        }, {
            rotateX: '220deg',
            rotateY: '25deg'
        })

        tl.fromTo(nexusRef.current, {
            // rotateX: 80,
            // rotateY: -30,
            // rotate: -4
        }, {
            // rotateX: 80,
            // rotateY: -30,
            // rotate: -4
        })

        return () => {

        };
    }, []);


    return (
        <section id='contacto' className='flex flex-wrap gap-5 md:gap-10 justify-center items-center md:justify-between w-[1200px] mx-auto max-w-full h-[640px] p-4'>
            <div ref={mapRef} className='aspect-square w-[100%] md:w-[50%] relative top-10 max-w-full rounded-full overflow-hidden p-10 bg-[#F1F3F4] map' >
                <iframe
                    className='w-full h-full rotate-180 -scale-x-100'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.211658742621!2d-104.6735233!3d24.023600199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bc8162b3c4ef9%3A0x1b111c035ce7a813!2sXAMICALLI!5e0!3m2!1ses-419!2smx!4v1692313049238!5m2!1ses-419!2smx" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='max-w-full w-[400px] py-3 px-4'>
                <h3 className='text-4xl font-thin text-white uppercase'>Contacto</h3>
                <div className='flex flex-col gap-3 mt-5' >
                    <a href="mailto:gusfavela@xamicalli.com" className='font-bold text-[#3271E9]' >gusfavela@xamicalli.com</a>
                    <ul className='flex gap-3' >
                        <li className='w-8 h-8 fill-white stroke-white' ><a href="https://www.instagram.com/xamicalli/" target="_blank" rel="noreferrer" > <Instagram />
                        </a></li>
                        <li className='w-8 h-8 fill-white hover:fill-[#3b5998]' ><a href="https://www.facebook.com/xamicalli" target="_blank" rel="noreferrer" > <Facebook />
                        </a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

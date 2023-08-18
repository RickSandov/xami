'use client'

import { gsap } from 'gsap';
import React, { useLayoutEffect, useRef } from 'react'



export const Contact = () => {

    const nexusRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: nexusRef.current,
                start: 'top bottom',
                end: 'top top-=1000',
                scrub: true,
            }
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
        <section id='contacto' className='relative flex flex-col gap-0 justify-center items-center md:items-end md:justify-end overflow-hidden w-[1200px] mx-auto max-w-full -top-5 md:-top-16 md:h-[640px] p-4'>
            <div className='h-[400px] w-[650px] max-w-full ' >
                <iframe
                    className='w-full h-full'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.211658742621!2d-104.6735233!3d24.023600199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bc8162b3c4ef9%3A0x1b111c035ce7a813!2sXAMICALLI!5e0!3m2!1ses-419!2smx!4v1692313049238!5m2!1ses-419!2smx" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="relative md:absolute md:left-0 w-[400px] max-w-[90%] -mt-10 md:mt-0">
                <div ref={nexusRef} className="relative w-full h-full nexus">
                    <img src="/nexus.png" alt="" className='object-contain w-full h-full ' />
                    <a href='' className='absolute top-[20%] left-1/2 -translate-x-1/2 text-xs  text-[#BFF4FB]'>gusfavela<strong className='font-black text-[#3C8EE5]' >@xamicalli.com</strong> </a>
                </div>
            </div>
        </section>
    )
}
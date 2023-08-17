'use client'

import React, { useLayoutEffect, useRef } from 'react'
import { Xamicalli } from '../svg/Xamicalli'
import { gsap } from 'gsap'
import Image from 'next/image'
import { Tilt } from 'react-tilt'

export const About = () => {

    const discContainerRef = useRef<HTMLDivElement | null>(null);
    const discRef = useRef<HTMLImageElement | null>(null);
    const lightRef = useRef<HTMLDivElement | null>(null);
    const stylusRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {

        if (discContainerRef.current) {

            discContainerRef.current!.style.filter = 'drop-shadow(0 0 30px rgb(0, 0, 0))';
            discContainerRef.current!.style.perspective = '1000px';

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: discContainerRef.current,
                    start: 'top bottom',
                    end: 'top top-=1000',
                    scrub: true,
                }
            })
            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: discRef.current,
                    start: 'top bottom',
                    end: 'top top-=1000',
                    scrub: true,
                }
            })

            tl2.fromTo(discRef.current, {
                rotate: 0,
            }, {
                rotate: 10000
            })

            tl.fromTo(discContainerRef.current, {
                // rotateX: 120,
                // rotateY: 25,
                rotateX: 140,
                rotateY: 25,
                scale: 1.2,
            }, {
                // rotateX: 120,
                // rotateY: 25,
                rotateX: 140,
                rotateY: 25,
                scale: 1.2,
            })

            const stylusTl = gsap.timeline({
                scrollTrigger: {
                    trigger: stylusRef.current,
                    start: 'top bottom',
                    end: 'top top-=1000',
                    scrub: true,
                }
            });

            stylusTl.to(stylusRef.current, {
                rotate: -25
            })
        }
        return () => {

        };
    }, [])

    // useLayoutEffect(() => {

    //     const infoTl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: lightRef.current,
    //             start: 'top bottom',
    //             end: 'top top-=1000',
    //             scrub: true,
    //         }
    //     })

    //     infoTl.fromTo(lightRef.current, {
    //         // boxShadow: 'inset 0 0 30px #fff',
    //     }, {
    //         // boxShadow: 'inset 0 0 30px #fff',
    //     })

    //     return () => {

    //     };
    // }, [])


    return (
        <section className='p-4 min-h-[50vh] flex items-center justify-start relative my-10 overflow-y-visible' >
            <div ref={lightRef} className='absolute inset-0 z-50 light ' >

            </div>
            <div className="z-20 md:ml-28 md:mt-14">
                <h2 className='text-2xl font-bold text-center text-white uppercase'>¿Qué es Xamicalli?</h2>
                <div className='lg:w-[700px] max-w-[95%] mx-auto text-center mt-10 mb-20' >
                    <p className='text-[#ff7b00]' >
                        Del náhuatl &quot;Xamicali&quot; que significa casa de Adobe
                    </p>
                    <p className='leading-relaxed text-white' >
                        En una vieja casona, con un patio rodeado de columnas y arco de cantera en el corazón de la ciudad, se encuentra un club único, tanto por su arquitectura y diseño interior, como por el servicio y el ambiente que ofrece. <span className='text-[#ff7b00]' >&quot;Xamicalli&quot; o casa de adobe.</span>
                    </p>
                </div>
                <div className='max-w-full w-[40%] mx-auto' >
                    <Xamicalli />
                </div>
            </div>
            <div className='absolute z-10 top-2/3 w-full translate-x-1/2 -translate-y-1/2 right-[10%] md:w-1/2 aspect-square '>
                <div className="relative flex items-center justify-center w-full h-full">
                    <div ref={discContainerRef} className='w-full h-full vynil'>
                        <Image ref={discRef} fill src='/vinyl.png' alt='' className='w-full h-full' />
                    </div>

                    <div ref={stylusRef} className="absolute top-0 left-0 flex justify-end w-full h-full stylus">
                        {/* <Image src='/stylus.png' alt='' className='' fill /> */}
                        <img src="/stylus.png" alt="" className='object-contain max-h-[60%] -mr-48 -mt-48' />
                    </div>

                </div>
            </div>

        </section >
    )
}

'use client'
import { gsap } from 'gsap';
import React, { useLayoutEffect, useRef } from 'react'

// will receive props

const event = {
    img: '/redjungle.png',
    title: 'Red Jungle',
    date: 'sábado 05'
}
export const NextEvent = () => {

    const imgRef = useRef<HTMLImageElement | null>(null);

    useLayoutEffect(() => {

        const imageTl = gsap.timeline({
            scrollTrigger: {
                trigger: imgRef.current,
                start: 'top-=100 bottom+=200',
                end: 'top center+=20%',
                scrub: true,
                // markers: true
            }
        })

        imageTl.fromTo(imgRef.current, {
            y: 300,
        },
            {
                y: -300,
            })


    }, [])

    return (
        <main ref={imgRef} className='w-full h-[90vh] flex flex-col justify-between items-center mt-16 relative gap-16' >
            <img className='max-h-full z-20' src={event.img} alt="" />
            <EventInfo />
        </main >
    )
}


const EventInfo = () => {

    const dateRef = useRef<HTMLParagraphElement | null>(null);
    const titleRef = useRef<HTMLParagraphElement | null>(null);


    useLayoutEffect(() => {

        const titleTl = gsap.timeline();
        const dateTl = gsap.timeline();

        titleTl.fromTo(titleRef.current, {
            x: '-100%'
        }, {
            x: 0
        });

        dateTl.to(dateRef.current, {
            x: '-100%'
        });

        const masterTl = gsap.timeline({
            scrollTrigger: {
                trigger: dateRef.current,
                start: 'top-=1200 center',
                end: 'bottom top-=1500',
                scrub: true,
                // markers: true
            }
        });

        masterTl.add(titleTl, 0);
        masterTl.add(dateTl, 0);
        return () => {

        };
    }, [])

    return (
        <div className='text-white w-full uppercase font-bold whitespace-nowrap' >
            <p ref={dateRef} className='block p-0 m-0 text-lg relative text-[#ff7b00]'>
                {
                    Array.from({ length: 20 }).map((_, i) => {
                        return (
                            <span key={i} className='mx-5'>
                                {`${event.date}`}
                            </span>
                        )
                    })
                }
            </p>
            <p ref={titleRef} className='block p-0 m-0 text-4xl'>
                {
                    Array.from({ length: 20 }).map((_, i) => {
                        return (
                            <span key={i} className='mx-5'>
                                {`${event.title}`}
                            </span>
                        )
                    })
                }
            </p>
        </div >
    )
}

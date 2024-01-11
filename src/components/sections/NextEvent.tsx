'use client'
import { gsap } from 'gsap';
import Image from 'next/image';
import React, { useLayoutEffect, useRef, useState } from 'react'
import { Tilt } from 'react-tilt';

// will receive props

// const event = {
//     img: '/redjungle.png',
//     slogan: '#BIMTENYEARS',
//     title: 'BORN IN MEXICO 10 YEARS',
//     date: 'sábado 19 de agosto',
//     color: '#575757',
//     description: 'La séptima fiesta del aniversario 10 de BORN IN MEXICO llega a XAMICALLI, una fiesta que sin duda no te puedes perder.',
//     djs: [
//         {
//             name: 'mysteryaffair',
//             to: 'https://www.instagram.com/mysteryaffair/'
//         },
//         {
//             name: 'vongold',
//             to: 'https://www.instagram.com/vongold_/'
//         },
//     ],
//     tickets: 'https://www.eventbrite.com.mx/e/born-in-mexico-10-years-tickets-679828233547',
//     flyer: '/flyer.png',
//     patrons: [
//         {
//             name: 'jagermeistermx',
//             to: 'https://www.instagram.com/jagermeistermx/'
//         },
//         {
//             name: 'redbullmexico',
//             to: 'https://www.instagram.com/redbullmexico/'
//         },
//         {
//             name: 'dosequismx',
//             to: 'https://www.instagram.com/dosequismx/'
//         },
//     ],
// }
const event = {
    img: '/redjungle.png',
    slogan: 'Adam Ten',
    title: 'Adam Ten',
    date: 'Sábado, 13 de Enero',
    color: '#9E3F3F',
    description: 'Desde Tel Aviv, ADAM TEN nos visita para el cierre de los festejos de XAMICALLI 8, una noche que sin duda será inolvidable.',
    djs: [
        // {
        //     name: '',
        //     to: ''
        // },
    ],
    tickets: 'https://www.eventbrite.com.mx/e/adam-ten-tickets-779776972917',
    flyer: '/flyer.png',
    patrons: [
        // {
        //     name: 'jagermeistermx',
        //     to: 'https://www.instagram.com/jagermeistermx/'
        // },
        // {
        //     name: 'redbullmexico',
        //     to: 'https://www.instagram.com/redbullmexico/'
        // },
        // {
        //     name: 'dosequismx',
        //     to: 'https://www.instagram.com/dosequismx/'
        // },
    ],
}
export const NextEvent = () => {

    const { title, description, djs, tickets, flyer, patrons, color } = event;

    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    return (
        <main id='proximo' className='relative flex flex-col items-center justify-start w-full gap-8 py-16' >
            <Tilt options={defaultOptions} className='relative w-[500px] max-w-[90%] aspect-square duration-1000' >
                <Image priority alt={title} src={flyer} fill className='object-contain' />
            </Tilt>
            {/* <EventInfo /> */}
            <div className='my-5 w-[500px] max-w-[95%] flex flex-col items-center gap-4 text-center text-white text-sm'>
                <h2 className='text-2xl text-[#9E3F3F]'>{title}</h2>
                <p className='text-sm' >{description}</p>
                <ul className='mt-3 text-lg' >
                    {/* {djs.map((dj, i) => (
                        <li key={i}>
                            <a href={dj.to}
                                target="_blank"
                                rel="noreferrer"
                                className='text-[#9E3F3F] hover:text-white underline'
                            >
                                @{dj.name}
                            </a>
                        </li>
                    ))} */}
                </ul>
                <ul>
                    {/* {patrons.map((patron, i) => (
                        <li key={i}>
                            <a href={patron.to}
                                target="_blank"
                                rel="noreferrer"
                                className='text-white hover:text-[#9E3F3F]'
                            >
                                @{patron.name}
                            </a>
                        </li>
                    ))} */}
                </ul>
                <div className='flex flex-wrap items-center justify-center gap-4 mt-3' >
                    <a href={tickets} target="_blank" rel="noreferrer" className='text-white w-[200px] max-w-full transition-colors hover:text-[#9E3F3F] py-2 px-5 flex-1 rounded-sm bg-[#9E3F3F] hover:bg-white'>Tickets</a>
                </div>
            </div>
            <div className='w-full overflow-hidden' >
                <EventInfo />
            </div>
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
        <div className='w-full font-bold text-white uppercase whitespace-nowrap' >
            <p ref={dateRef} className={`block p-0 m-0 text-lg relative text-[#727473]`}>
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
                                {`${event.slogan}`}
                            </span>
                        )
                    })
                }
            </p>
        </div >
    )
}

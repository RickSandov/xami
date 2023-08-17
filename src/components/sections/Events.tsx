'use client'

import { events } from '@/events'
import { gsap } from 'gsap'
import Image from 'next/image'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { Tilt } from 'react-tilt'

const defaultOptions = {
    reverse: true,  // reverse the tilt direction
    max: 10,     // max tilt rotation (degrees)
    perspective: 50,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 5000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    glare: true,    // Add a glare effect.
}

const Events = () => {
    const itemsPerPage = 4;
    const [visibleEvents, setVisibleEvents] = useState(events.slice(0, itemsPerPage));
    const [visibleCount, setVisibleCount] = useState(itemsPerPage);
    const [sectionLenght, setSectionLenght] = useState(0);

    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const listRef = useRef<HTMLUListElement | null>(null);


    // useLayoutEffect(() => {


    //     const sections = gsap.utils.toArray('.event-item');
    //     setSectionLenght(sections.length);

    //     console.log({ length: sections.length })

    //     const scrollTween = gsap.to(sections, {
    //         xPercent: -100,
    //         ease: 'none',
    //         scrollTrigger: {
    //             trigger: listRef.current,
    //             pin: true,
    //             scrub: true,
    //             end: '+=3000'
    //         }
    //     })

    //     return () => {

    //     };
    // }, [sectionLenght]);



    const loadMore = () => {
        const newVisibleCount = visibleCount + itemsPerPage;
        setVisibleEvents(events.slice(0, newVisibleCount));
        setVisibleCount(newVisibleCount);
    };

    return (
        <section id='eventos' className='inset-0 p-4 py-16 mt-24' >
            <h1 ref={titleRef} className='mb-8 text-5xl text-center text-white uppercase'> Eventos</h1>
            <ul ref={listRef} className='flex items-center overflow-scroll flex-nowrap'>
                {visibleEvents.map((event, index) => (
                    <li className='relative text-white min-w-[300px] h-44 img event-item' key={index} >
                        <div className='info transition-all absolute bottom-0 left-0 z-10 w-full bg-[#000000b1] translate-y-full p-3 flex justify-between items-center' >
                            <div>
                                <h3 className='font-bold' >{event.title}</h3>
                                <p className='text-xs' >{event.date}</p>
                            </div>
                            <a href="#" className='text-white max-w-full transition-colors hover:text-[#ff7b00] py-1 px-3 rounded-sm bg-[#ff7b00] hover:bg-white'>Ver</a>
                        </div>
                        <Image className='object-cover' fill src={event.image} alt={event.title} />
                    </li>
                ))}
                {visibleCount < events.length && (
                    <button className="z-50 p-3 mx-auto text-white transition-colors rounded-sm hover:text-primary bg-primary hover:bg-white" onClick={loadMore}>
                        Cargar más
                    </button>
                )}
            </ul>

        </section >
    )
}

export default Events


// const eventsRef = useRef<HTMLUListElement | null>(null)

// useLayoutEffect(() => {

    // let observer = new IntersectionObserver((entries, self) => {
    //     let targets = entries.map((entry) => {
    //         if (entry.isIntersecting) {
    //             self.unobserve(entry.target);
    //             return entry.target;
    //         }
    //     })

    //     gsap.to(targets, {
    //         opacity: 1,
    //         y: 20
    //     })
    // })

    // let targets = document.querySelectorAll('.img')
    // targets.forEach((target) => {
    //     observer.observe(target);
    // })


    // const tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.img',
    //         scrub: true
    //         // markers: true
    //     }
    // })
    //     .from('.img', {
    //         stagger: .2,
    //         x: '100%'
    //     })
    // .to('.img', {
    //     stagger: .2,
    //     y: -700
    // })


//     return () => {

//     };
// }, [])
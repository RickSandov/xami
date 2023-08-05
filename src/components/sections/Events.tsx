'use client'

import { events } from '@/events'
import { gsap } from 'gsap'
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'
import { Tilt } from 'react-tilt'

const defaultOptions = {
    reverse: true,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 5000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    glare: true,    // Add a glare effect.
}

const Events = () => {
    // const eventsRef = useRef<HTMLUListElement | null>(null)

    useLayoutEffect(() => {

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


        return () => {

        };
    }, [])

    return (
        <section className='inset-0 p-4 py-16 overflow-y-scroll' >
            <ul className='grid grid-cols-auto-fill gap-10'>
                {
                    events.map((event, index) => (
                        <Tilt className='text-red-500 h-44 relative img' key={index} >
                            <Image className='object-cover' fill src={event.image} alt={event.title} />
                        </Tilt>
                    ))
                }
            </ul>
        </section>
    )
}

export default Events
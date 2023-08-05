

import { events } from '@/events'
import Image from 'next/image'
import React from 'react'
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

    return (
        <section className='inset-0 p-4 py-16 overflow-y-scroll' >
            <ul className='grid grid-cols-auto-fill gap-10'>
                {
                    events.map((event, index) => (
                        <Tilt options={defaultOptions} className='text-red-500 h-44 relative' key={index} >
                            <Image className='object-cover' fill src={event.image} alt={event.title} />
                        </Tilt>
                    ))
                }
            </ul>
        </section>
    )
}

export default Events
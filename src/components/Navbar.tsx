'use client'

import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { twMerge } from 'tailwind-merge'

const navItems: {
    to: string,
    content: () => React.ReactElement
}[] = [
        {
            to: '#',
            content: () => (
                <span>LIVE</span>
            )
        },
        {
            to: '#',
            content: () => (
                //TODO: To SVG
                <img src="/XAMICREW.png" alt="xamicrew" className='max-w-full' />
            )
        },
        {
            to: '#home',
            content: () => (
                <span></span>
            )
        },
        {
            to: '#events',
            content: () => (
                <span>EVENTOS</span>
            )
        },
        {
            to: '#rsv',
            content: () => (
                <span>RSV</span>
            )
        },
    ]
export const Navbar = () => {

    useLayoutEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#homeAnchor',
                // base on hero height or window height
                start: 'bottom -calc(1 + 320px',
                end: 'bottom -550px',
                // start: 'bottom -320px',
                // end: 'bottom -550px',
                scrub: true,
                // markers: true
            }
        })

        tl.to('#homeAnchor', {
            width: '70px',
        })

        return () => {

        };
    }, [])

    return (
        <nav className="fixed top-0 left-0 w-full flex justify-center items-center p-4 gap-4 z-20 bg-black">
            {
                navItems.map(({ content, to }, i) => {
                    const isHomeItem = to === '#home';
                    return (
                        <a key={i} id={`${isHomeItem ? 'homeAnchor' : i}`} className={twMerge('w-14 text-white text-lg text-center ', isHomeItem ? 'opacity-0 w-0' : '')}>
                            {content()}
                        </a>
                    )
                })
            }
        </nav>
    )
}

'use client'

import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { twMerge } from 'tailwind-merge'
import { Youtube } from './svg/Youtube'

const navItems: {
    to: string,
    content: () => React.ReactElement
}[] = [
        {
            to: 'https://www.youtube.com/@xamicalliclub1933',
            content: () => (
                // <span>LIVE</span>
                <div className='flex justify-center h-8' >
                    <Youtube />
                </div>
            )
        },
        {
            to: 'https://www.youtube.com/@xamicalliclub1933',
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
            to: '#eventos',
            content: () => (
                <span>EVENTOS</span>
            )
        },
        {
            to: 'https://www.instagram.com/xamicalli/',
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
        <nav className="fixed top-0 left-0 z-40 flex items-center justify-center w-full gap-4 p-4 bg-black">
            {
                navItems.map(({ content, to }, i) => {
                    const isHomeItem = to === '#home';
                    return (
                        to.includes('#') ? (
                            <span onClick={() => {
                                const nextEvent = document.querySelector(to);
                                var headerOffset = 65;
                                var elementPosition = nextEvent!.getBoundingClientRect().top;
                                var offsetPosition = elementPosition + window.scrollY - headerOffset;

                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: "smooth",
                                });
                            }} key={i} id={`${isHomeItem ? 'homeAnchor' : i}`} className={twMerge('w-14 text-white text-lg text-center fill-white cursor-pointer', isHomeItem ? 'opacity-0 w-0' : '')}>
                                {content()}
                            </span>
                        ) : (
                            <a target='_blank' href={to} key={i} id={`${isHomeItem ? 'homeAnchor' : i}`} className={twMerge('w-14 text-white text-lg text-center fill-white cursor-pointer', isHomeItem ? 'opacity-0 w-0' : '')}>
                                {content()}
                            </a>
                        ))
                })
            }
        </nav>
    )
}

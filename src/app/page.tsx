'use client'

import { Hero } from '@/components/sections/Hero'
import Events from '@/components/sections/Events'
import { Navbar } from '@/components/Navbar'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    let width = 0, height = 0;

    if (backgroundRef.current) {
      const particleCount = 100;
      const container = backgroundRef.current;

      width = container.offsetWidth;
      height = container.offsetHeight;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('span');
        'absolute w-2 h-2 bg-white rounded-full'.split(' ').forEach((className) => particle.classList.add(className));
        container.appendChild(particle);
        gsap.set(particle, {
          x: gsap.utils.random(0, width),
          y: gsap.utils.random(0, height),
          scale: gsap.utils.random(0.1, 0.6),
          opacity: gsap.utils.random(0.1, 1),
        });
        animate(particle);
      }
    }
    function animate(el: HTMLSpanElement) {
      gsap.to(el, {
        duration: 150,
        x: gsap.utils.random(0, width),
        y: gsap.utils.random(0, height),
        repeat: -1,
        yoyo: true,
      });
      gsap.to(el, {
        duration: 5,
        opacity: gsap.utils.random(0, 1),
        scale: gsap.utils.random(0.1, 0.6),
        repeat: -1,
        ease: 'power2.inOut',
        yoyo: true,
      });
    }

    return () => {

    }
  }, [])


  return (
    <>
      {/* <div className="stars"></div>
      <div className="twinkling"></div> */}
      <Navbar />
      <Hero />
      <Events />
      <div ref={backgroundRef} className='fixed inset-0 bg-black -z-50'>
      </div>
    </>
  )
}

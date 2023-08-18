'use client'

import { useLayoutEffect, useRef, useState } from 'react'
// import { ReactLenis } from '@studio-freight/react-lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Hero } from '@/components/sections/Hero'
import Events from '@/components/sections/Events'
import { Navbar } from '@/components/Navbar'
import { Logo } from '@/components/svg'
import Lenis from '@studio-freight/lenis'
import { NextEvent } from '@/components/sections/NextEvent'
import { About } from '@/components/sections/About'
import Image from 'next/image'
import { Contact } from '@/components/sections/Contact'

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    // Lenis config with gsap
    ScrollTrigger.normalizeScroll(true);

    const lenis = new Lenis({
      lerp: 0.1
    })

    lenis.on('scroll', ScrollTrigger.update)

    function ticker(time: number) {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {

    };
  }, [])

  useLayoutEffect(() => {
    // particles background 
    let width = 0, height = 0;

    if (backgroundRef.current) {
      const particleCount = 100;
      const container = backgroundRef.current;
      container.innerHTML = '';

      width = container.offsetWidth;
      height = container.offsetHeight;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('span');
        'absolute w-2 h-2 bg-[#ffaa4f] rounded-full'.split(' ').forEach((className) => particle.classList.add(className));
        // 'absolute w-2 h-2 bg-[#ff6a00] rounded-full'.split(' ').forEach((className) => particle.classList.add(className));
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
        duration: 50,
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
    // <ReactLenis>
    <>

      <Navbar />
      <Hero isPlaying={isPlaying} />
      <NextEvent />
      <div id='pista' className='relative w-full h-40' >
      </div>
      <About />
      <Contact />
      <Events />
      <div ref={backgroundRef} className='fixed inset-0 bg-black -z-50'>
      </div>
      {/* <div className='fixed -bottom-[2000px] left-0 w-[2000px] rounded-full background-light h-[2000px] -z-50' />
      <div className='fixed -bottom-[2000px] right-0 w-[2000px] rounded-full background-light h-[2000px] -z-50' /> */}

      <LogoIllustration radius={150} numLines={450} setIsPlaying={setIsPlaying} />
      {/* </ReactLenis> */}
    </>
  )
}

const LogoIllustration = ({ radius, numLines, setIsPlaying }: { radius: number, numLines: number, setIsPlaying: (value: boolean) => void }) => {
  const audioElmRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [audioAnalizerExists, setAudioAnalizerExists] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  // const [audioAnalisis, setAudioAnalisis] = useState<null | { analyzer: AnalyserNode, bufferLength: number, dataArray: Uint8Array }>(null)

  useLayoutEffect(() => {
    if (logoRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: logoRef.current,
          start: 'bottom center+=62',
          end: 'bottom top',
          scrub: true,
        }
      });
      tl.to(logoRef.current, {
        scale: 0.3,
        top: '-30px',
      })
    }
    return () => {

    }
  }, [])


  function audioAnalyzer() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const analyzer = audioCtx.createAnalyser();
    analyzer.fftSize = 1024;
    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const source = audioCtx.createMediaElementSource(audioElmRef.current!);
    source.connect(analyzer);
    source.connect(audioCtx.destination);

    // setAudioAnalisis({ analyzer, bufferLength, dataArray });
    setAudioAnalizerExists(true);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = radius * 2;
    canvas.height = radius * 2;

    function draw() {
      analyzer.getByteFrequencyData(dataArray);
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      const maxBarHeight = radius;

      for (let i = 0; i < bufferLength; i++) {
        const amplitude = dataArray[i] / 255; // Normalize the amplitude between 0 and 1
        const scaledAmplitude = Math.pow(amplitude, 0.5); // Apply a square root or any other scaling function as needed
        const barHeight = scaledAmplitude * maxBarHeight;
        const angle = (i * (360 / numLines)) * (Math.PI / 180);
        const x1 = barHeight * Math.cos(angle) + radius;
        const y1 = barHeight * Math.sin(angle) + radius;
        const x2 = radius - (x1 - radius);
        const y2 = radius - (y1 - radius);

        ctx!.beginPath();
        ctx!.moveTo(x1, y1);
        ctx!.lineTo(x2, y2);
        ctx!.lineWidth = 2;
        ctx!.strokeStyle = '#B27944';
        ctx!.stroke();
        ctx!.closePath();

        ctx!.beginPath();
        ctx!.arc(x1, y1, 1, 0, 2 * Math.PI);
        ctx!.arc(x2, y2, 1, 0, 2 * Math.PI);
        ctx!.fillStyle = '#ffb861';
        ctx!.stroke();
        ctx!.fill();
        ctx!.closePath();
      }

      requestAnimationFrame(draw);
    }

    draw();
  }

  return (
    <div className='fixed inset-0 z-50 pointer-events-none ' >
      <div className="relative flex items-center justify-center w-full h-full">
        <div ref={logoRef} className="absolute -translate-y-4 pointer-events-auto h-40 w-40 overflow-visible scale-[100%]" onClick={() => {
          if (audioElmRef.current!.paused) {
            setIsPlaying(true)
            audioElmRef.current!.play()
          } else {
            setIsPlaying(false)
            audioElmRef.current!.pause()
          }
          !audioAnalizerExists && audioAnalyzer();
        }}>
          <audio className='absolute -bottom-[100%] left-0 hidden' ref={audioElmRef}>
            <source src="/TrippyCandy_(OriginalMix).mp3" type="audio/mpeg" />
            tu navegador no permite la reproducción de audios
          </audio>
          <Logo />
          <canvas
            ref={canvasRef}
            width={radius * 2}
            height={radius * 2}
            className='absolute overflow-visible -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 -z-20'
          />
          <div id='pupila' className="absolute bg-black rounded-full inset-4 -z-10">
            .
          </div>
          {/* <div className="absolute inset-0 -z-20 bg-yellow-600 opacity-20 scale-[2] rounded-full"></div> */}
        </div>
      </div>
    </div>
  );
};


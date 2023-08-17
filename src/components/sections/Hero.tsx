'use client'

import React, { useRef } from 'react';
import { Logo, Xamiclub } from '../svg';
import { PlayArrow, ArrowDown } from '../svg';
import { Source_Code_Pro } from 'next/font/google'
import Lenis from '@studio-freight/lenis';
const source = Source_Code_Pro({ subsets: ['latin'] });

export const Hero = ({ isPlaying }: { isPlaying: boolean }) => {

    const nextEventRef = useRef<HTMLDivElement | null>(null);

    // useLayoutEffect(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: nextEventRef.current,
    //             start: 'top bottom-=200',
    //             end: 'bottom+=100 center',
    //             scrub: true,
    //             // markers: true
    //         }
    //     })

    //     tl.to(nextEventRef.current, {
    //         y: 300
    //     })
    // })

    return (
        <header className='min-h-[95vh] flex justify-center items-end z-10 relative'>

            {/* Make it conditional if audio not playing */}
            {
                !isPlaying ? (
                    <div className="animate-pulse flex items-end justify-start absolute z-30 top-[62%] left-1/2 -translate-x-1/2">
                        <div className="w-8 h-10">
                            <PlayArrow />
                        </div>
                        <p className='font-mono text-xs text-white'>play me</p>
                    </div>
                ) : null
            }

            <div ref={nextEventRef} className='flex flex-col items-center justify-between w-full gap-2 mb-3 text-white ' >
                <div className='w-8 h-8'>
                    {/* <LogoWhite /> */}
                    <Logo color='fill-white' />
                </div>
                <h1 className='text-3xl text-center uppercase'>
                    PRÓXIMO EVENTO
                    {/* ¡Happy Birthday! */}
                    {/* <strong className='block text-xl'>francisco diez</strong> */}
                </h1>
                <div className='w-28 max-w-[95%]'>
                    <Xamiclub />
                </div>
                <div
                    onClick={() => {
                        const nextEvent = document.querySelector('#proximo');
                        var headerOffset = 65;
                        var elementPosition = nextEvent!.getBoundingClientRect().top;
                        var offsetPosition = elementPosition + window.scrollY - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                        });
                    }}
                    className='mt-2 scale-110 stroke-white animate-bounce' >
                    <ArrowDown />
                </div>
            </div>
        </header>
    );
};





// import React, { useEffect, useRef, useState } from 'react'
// import { Logo } from './Logo'

// export const Hero = () => {

//     return (
//         <header className='h-[100vh] flex justify-center items-center' >
//             <LogoIllustration numLines={450} radius={150} />
//         </header>
//     )
// }

// const LogoIllustration = ({ numLines, radius }: { numLines: number, radius: number }) => {
//     const audioElmRef = useRef<HTMLAudioElement>(null);
//     const [lines, setLines] = useState<React.JSX.Element[]>([]);
//     const [audioContext, setAudioContext] = useState<null | AudioContext>(null);
//     const [audioAnalisis, setAudioAnalisis] = useState<null | { analyzer: AnalyserNode, bufferLength: number, dataArray: Uint8Array }>(null)

//     useEffect(() => {
//         audioAnalyzer()
//         const context = new AudioContext();
//         setAudioContext(context);
//     }, []);

//     function audioAnalyzer() {
//         const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
//         const analyzer = audioCtx.createAnalyser();
//         analyzer.fftSize = 1024;
//         const bufferLength = analyzer.frequencyBinCount;
//         const dataArray = new Uint8Array(bufferLength);
//         const source = audioCtx.createMediaElementSource(audioElmRef.current!);
//         source.connect(analyzer);
//         source.connect(audioCtx.destination);
//         setAudioAnalisis({ analyzer, bufferLength, dataArray });

//         const newLines = [];
//         for (let i = 0; i < bufferLength; i++) {
//             const amplitude = dataArray[i] / 255; // Normalize the amplitude between 0 and 1
//             const scaledAmplitude = Math.pow(amplitude, 0.5); // Apply a square root or any other scaling function as needed
//             const barHeight = getRandomNumber(radius * .8, radius);
//             const angle = (i * (360 / numLines)) * (Math.PI / 180);
//             const x1 = barHeight * Math.cos(angle);
//             const y1 = barHeight * Math.sin(angle);
//             const x2 = -x1;
//             const y2 = -y1;
//             newLines.push(
//                 <g key={i} >
//                     <circle cx={x1} cy={y1} r={1} className='circle fill-[#B27944] drop-shadow-sm' />
//                     <line x1={x1} y1={y1} x2={x2} y2={y2} className='stroke-[#B27944] transition-all' />
//                     <circle cx={x2} cy={y2} r={1} className='circle fill-[#B27944] drop-shadow-sm' />
//                 </g>
//             );
//         }

//         function update() {
//             requestAnimationFrame(update);
//             analyzer.getByteFrequencyData(dataArray);
//             const newLines = [];
//             const maxBarHeight = radius; // Maximum height you want for the bars
//             for (let i = 0; i < bufferLength; i++) {
//                 const amplitude = dataArray[i] / 255; // Normalize the amplitude between 0 and 1
//                 const scaledAmplitude = Math.pow(amplitude, 0.5); // Apply a square root or any other scaling function as needed
//                 const barHeight = scaledAmplitude * maxBarHeight;
//                 const angle = (i * (360 / numLines)) * (Math.PI / 180);
//                 const x1 = barHeight * Math.cos(angle);
//                 const y1 = barHeight * Math.sin(angle);
//                 const x2 = -x1;
//                 const y2 = -y1;
//                 newLines.push(
//                     <g key={i} >
//                         <circle cx={x1} cy={y1} r={1} className='circle fill-[#B27944] drop-shadow-sm' />
//                         <line x1={x1} y1={y1} x2={x2} y2={y2} className='stroke-[#B27944] transition-all duration-[100]' />
//                         <circle cx={x2} cy={y2} r={1} className='circle fill-[#B27944] drop-shadow-sm' />
//                     </g>
//                 );
//             }
//             setLines(newLines);
//         }
//         update();
//     };
//     function getRandomNumber(min: number, max: number) {
//         const randomDecimal = Math.random();
//         const randomNumber = min + randomDecimal * (max - min);
//         return Math.floor(randomNumber)
//     }
//     return (
//         <div className="relative w-40 h-40 overflow-visible" onClick={() => {
//             audioElmRef.current!.play();
//         }}>
//             <audio controls autoPlay className='absolute -bottom-[100%] left-0' ref={audioElmRef}>
//                 <source src="/music2.mp3" type="audio/mpeg" />
//                 tu navegador no permite la reproducción de audios
//             </audio>
//             <Logo className='z-50 fill-yellow-500' />
//             <svg
//                 width={radius * 2}
//                 height={radius * 2}
//                 viewBox={`-${radius} -${radius} ${radius * 2} ${radius * 2}`}
//                 className='absolute overflow-visible -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 -z-20'
//             >
//                 {lines}
//             </svg>
//             {/* <div className="absolute inset-0 -z-20 bg-yellow-600 opacity-20 scale-[2] rounded-full"></div> */}
//             <div id='pupila' className="absolute bg-black rounded-full inset-4 -z-10"></div>
//         </div>

//     );
// };
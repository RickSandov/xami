'use client'

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Logo } from './Logo'

export const Hero = () => {

    return (
        <header className='h-[100vh] flex justify-center items-center' >
            <LogoIllustration numLines={450} radius={150} />
        </header>
    )
}

const LogoIllustration = ({ numLines, radius }: { numLines: number, radius: number }) => {
    const [lines, setLines] = useState<React.JSX.Element[]>([]);
    const audioElmRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        audioAnalyzer()
    }, [])

    function audioAnalyzer() {
        // create a new AudioContext
        const audioCtx = new (window.AudioContext)();
        // create an analyzer node with a buffer size of 2048
        const analyzer = audioCtx.createAnalyser();
        analyzer.fftSize = 1024;
        const bufferLength = analyzer.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        const source = audioCtx.createMediaElementSource(audioElmRef.current!);
        source.connect(analyzer);
        source.connect(audioCtx.destination);

        function update() {
            requestAnimationFrame(update);
            analyzer.getByteFrequencyData(dataArray);
            const newLines = [];
            const maxBarHeight = radius; // Maximum height you want for the bars
            for (let i = 0; i < bufferLength; i++) {
                const amplitude = dataArray[i] / 255; // Normalize the amplitude between 0 and 1
                const scaledAmplitude = Math.pow(amplitude, 0.5); // Apply a square root or any other scaling function as needed
                const barHeight = scaledAmplitude * maxBarHeight;
                const angle = (i * (360 / numLines)) * (Math.PI / 180);
                const x1 = barHeight * Math.cos(angle);
                const y1 = barHeight * Math.sin(angle);
                const x2 = -x1;
                const y2 = -y1;
                newLines.push(
                    <g key={i} >
                        <circle cx={x1} cy={y1} r={1} className='circle fill-[#B27944] drop-shadow-sm' />
                        <line x1={x1} y1={y1} x2={x2} y2={y2} className='stroke-[#B27944] transition-all' />
                        <circle cx={x2} cy={y2} r={1} className='circle fill-[#B27944] drop-shadow-sm' />
                    </g>
                );
            }
            setLines(newLines);
        }
        update();
    };
    function getRandomNumber(min: number, max: number) {
        // Generar un número aleatorio entre 0 (inclusive) y 1 (exclusivo)
        const randomDecimal = Math.random();

        // Escalar el número al rango deseado (max - min) y luego sumar min para desplazarlo
        const randomNumber = min + randomDecimal * (max - min);

        // Usar Math.floor() para obtener un número entero
        return Math.floor(randomNumber)
    }
    return (
        <div className="relative h-40 w-40 overflow-visible" onClick={() => {
            audioElmRef.current!.play();
        }}>
            <audio controls className='absolute -bottom-[100%] hidden' ref={audioElmRef}>
                <source src="/music.mp3" />
            </audio>
            <Logo className='fill-yellow-500 z-50' />
            {/* SVG */}
            <svg
                width={radius * 2}
                height={radius * 2}
                viewBox={`-${radius} -${radius} ${radius * 2} ${radius * 2}`}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 overflow-visible'
            >
                {lines}
            </svg>
            {/* <div className="absolute inset-0 -z-20 bg-yellow-600 opacity-20 scale-[2] rounded-full"></div> */}
            <div id='pupila' className="absolute inset-4 -z-10 bg-black rounded-full"></div>
        </div>

    );
};



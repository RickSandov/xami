import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const CircleLines = ({ numLines, radius, lineWidth }) => {
  const linesRef = useRef();
  const [linesArray, setLinesArray] = useState([]);

  // Función para crear las líneas en forma de círculo y devolver un array de líneas
  const createLines = () => {
    const lines = [];

    function getRandomNumber(min, max) {
      // Generar un número aleatorio entre 0 (inclusive) y 1 (exclusivo)
      const randomDecimal = Math.random();
    
      // Escalar el número al rango deseado (max - min) y luego sumar min para desplazarlo
      const randomNumber = min + randomDecimal * (max - min);
    
      // Usar Math.floor() para obtener un número entero
      return randomNumber
    }

    for (let i = 0; i < numLines; i++) {
      const angle = (i / numLines) * Math.PI * 2;

      const x = Math.cos(angle) * getRandomNumber(radius*.8,radius);
      const y = Math.sin(angle) * getRandomNumber(radius*.8,radius);
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(x, y, 0),
      ]);
      const material = new THREE.LineBasicMaterial({ color: '#9D6D3E', linewidth: lineWidth });
      const line = new THREE.Line(geometry, material);
      lines.push(line);
    }

    return lines;
  };

  useLayoutEffect(() => {
    setLinesArray(createLines());
  }, [])

  useFrame(() => {
    // Animar las líneas (opcional)
    linesRef.current.rotation.z += 0.0005;
  });

  // useFrame(() => {
  //   setLinesArray(prev => prev.map((line) => {
  //     const angle = Math.atan2(line.geometry.vertices[1].y, line.geometry.vertices[1].x);
  //     const randomLength = Math.random() * radius;
  //     line.geometry.vertices[1].x = Math.cos(angle) * radius * randomLength;
  //     line.geometry.vertices[1].y = Math.sin(angle) * radius * randomLength;
  //     line.geometry.verticesNeedUpdate = true;
  //   }))
  //   linesRef.current.rotation.z += 0.0005;
  // })

  return   <group ref={linesRef}>
  {linesArray.map((line, index) => (
    <primitive key={index} object={line} />
  ))}
</group>
};



import { Canvas } from '@react-three/fiber'
import React, { PropsWithChildren, Suspense } from 'react'
import { Xamicalli } from './Xamicalli'
import { Environment, OrbitControls, ScrollControls, Stars, Circle, Extrude } from '@react-three/drei';
import { Stars as MyStars } from './Stars';
import { CircleLines } from './CircleLines'
import * as THREE from 'three';

interface Props extends PropsWithChildren { };
// Define tu grupo de líneas (lines) aquí
const lines = new THREE.Group();

// Agrega objetos 3D al grupo lines aquí, por ejemplo:
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
lines.add(cube);
export const ThreeScene = ({ children }: Props) => {

    const circleShape = new THREE.Shape();
    circleShape.absarc(0, 0, 2.5, 0, Math.PI * 2, false);

    // Definimos los parámetros para la extrusión
    const extrudeSettings = {
        steps: 64,
        depth: 1, // Profundidad del objeto
        bevelEnabled: false,
    };
    return (
        <div
            className='h-[100vh] w-[100%] bg-black'
        >
            <Suspense fallback={null} >
                <Canvas
                    camera={{
                        fov: 65,
                        position: [0, 0, 15.3]
                    }}
                >
                    {/* <spotLight intensity={1} position={[5, -7, 6]} angle={Math.PI / 6} penumbra={1} /> */}
                    < ScrollControls pages={6} damping={.25} >
                        < Stars />
                        <MyStars />
                        < CircleLines numLines={450} radius={7} lineWidth={0.1} />
                        <Circle args={[2.5, 64]} position={[0, 0, .006]}>
                            <meshPhongMaterial attach="material" color="black" />
                        </Circle>
                        <Circle args={[7.5, 64]} position={[0, 0, 0.0001]}>
                            <meshBasicMaterial color="#9d6e3e" transparent opacity={0.2} />
                        </Circle>
                        <Xamicalli />
                    </ScrollControls>
                    <ambientLight />
                    <Environment files={'/models/abandoned_tiled_room_1k.hdr'} />

                </Canvas>
            </Suspense>
            {/* <Events /> */}
        </div >
    )
}

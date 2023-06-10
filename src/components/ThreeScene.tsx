import { Canvas } from '@react-three/fiber'
import React, { PropsWithChildren, Suspense } from 'react'
import { Model } from './Model'
import { Environment } from '@react-three/drei'

interface Props extends PropsWithChildren { };

export const ThreeScene = ({ children }: Props) => {
    return (
        <div
            className='h-[100vh] w-[100vw] bg-black'
        >
            <Suspense fallback={null} >
                <Canvas
                    camera={{
                        fov: 65,
                        position: [0, 0, 8.3]
                    }}
                >
                    <Model />
                    <ambientLight />
                    <Environment files={'/models/abandoned_tiled_room_1k.hdr'} />
                </Canvas>
            </Suspense>
        </div>
    )
}

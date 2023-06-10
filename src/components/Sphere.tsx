import React from 'react'
import { Vector3 } from 'three';

interface Props {
    color?: string;
    position: Vector3;
}

export const Sphere = ({ color = '#00ff00', position }: Props) => {
    return (
        <mesh position={position} >
            <sphereGeometry />
            <meshStandardMaterial color={color} wireframe />
        </mesh>
    )
}


import React, { useLayoutEffect, useRef } from "react";
import { OrbitControls, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from 'gsap'

export function Xamicalli(props) {
    const { nodes, materials } = useGLTF("/models/xamicalli.glb");
    return (
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve.geometry}
          material={materials.gold}
          position={[0.08, -.13, .29]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={28.577}
        />
        <OrbitControls enableZoom={true} />
      </group>
    );
  }
  
  useGLTF.preload("/models/xamicalli.glb");



// export function Model(props) {
//     const { nodes, materials } = useGLTF("/models/Artics.glb");
//     // const { nodes, materials } = useGLTF("/models/xamicalli.glb");
//     const scrollControl = useScroll();
//     const timeline = useRef()

//     // meshes ref
//     const generalGroupRef = useRef();
//     const rightCoverGroupRef = useRef();

//     useLayoutEffect(() => {
//       timeline.current = gsap.timeline();

//       timeline.current.to(
//         generalGroupRef.current.rotation, {
//             y: Math.PI * 2,
//             duration: 3
//         },
//         2.5
//       );
//       timeline.current.to(
//         rightCoverGroupRef.current.position, {
//             y: 0,
//             duration: 3
//         },
//         2.5
//       );
//     }, [])

//     useFrame(() => {
// timeline.current.seek(scrollControl.offset * timeline.current.duration());
//     })
//     return (
//         <>
//         <group {...props} dispose={null} ref={generalGroupRef} >
//             <mesh
//                 name="Inside_1"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Inside_1.geometry}
//                 material={materials.Blue_Metallic}
//                 position={[0.01, 0, 0]}
//             />
//             <mesh
//                 name="Inside_2"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Inside_2.geometry}
//                 material={materials.Orage_Mertallic}
//                 position={[0.01, 0, 0]}
//             />
//             <mesh
//                 name="Sounds"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Sounds.geometry}
//                 material={materials.Orange_Plastic}
//             />
//             <mesh
//                 name="Neon"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Neon.geometry}
//                 material={materials.Material}
//             />
//             <mesh
//                 name="Battery"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Battery.geometry}
//                 material={materials.Battery_Texture}
//             />
//             <mesh
//                 name="Cylinders"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Cylinders.geometry}
//                 material={materials.ArticsMaterial}
//             />
//             <mesh
//                 name="Pads"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Pads.geometry}
//                 material={materials.ArticsMaterial}
//             />
//             <mesh
//                 name="Headband_Inner"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Headband_Inner.geometry}
//                 material={materials.ArticsMaterial}
//             />
//             <mesh
//                 name="Battery_Holder"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Battery_Holder.geometry}
//                 material={materials.ArticsMaterial}
//                 position={[0, 0.01, 0]}
//             />
//             <mesh
//                 name="Cover_Left_Inn"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Cover_Left_Inn.geometry}
//                 material={materials.ArticsMaterial}
//                 position={[0, 0.01, 0]}
//             />
//             <mesh
//                 name="Cover_Right_Inn"
//                 ref={rightCoverGroupRef}
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Cover_Right_Inn.geometry}
//                 material={materials.ArticsMaterial}
//                 position={[0, 0.01, 0]}
//             />
//             <mesh
//                 name="Supports"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Supports.geometry}
//                 material={materials.ArticsMaterial}
//             />
//             <mesh
//                 name="Cover_Right"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Cover_Right.geometry}
//                 material={materials.ArticsMaterial}
//             />
//             <mesh
//                 name="Brand"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Brand.geometry}
//                 material={materials.ArticsMaterial}
//             />
//             <mesh
//                 name="Headband_outter"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Headband_outter.geometry}
//                 material={materials.ArticsMaterial_Headband}
//             />
//             <mesh
//                 name="Cover_Left"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Cover_Left.geometry}
//                 material={materials.ArticsMaterial_CoverLeft}
//             />
//         </group>
//         <OrbitControls enableZoom={false} />
//         </>
//     );
// }

// useGLTF.preload("/models/Artics.glb");

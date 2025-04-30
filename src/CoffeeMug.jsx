import { OrbitControls, Environment, Center } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import { a, useSpring } from '@react-spring/three'
import { motion } from 'framer-motion'

function FloatingMug(props) {
    const { scene } = useGLTF('/models/coffee_mug_additions.glb')
    const ref = useRef()
    const [lifting, setLifting] = useState(false)
    const [intervalTime] = useState(10)

    const { positionY, rotationZ } = useSpring({
        positionY: lifting ? 1.5 : 0,
        rotationZ: lifting ? -Math.PI / 4 : 0,
        config: { tension: 120, friction: 10 },
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setLifting(true)
            setTimeout(() => setLifting(false), 600)
        }, intervalTime * 1000)
        return () => clearInterval(interval)
    }, [intervalTime])

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime()
        if (ref.current) {
            ref.current.rotation.y = t * 0.1
        }
    })

    return (
        <a.primitive
            ref={ref}
            object={scene}
            position-y={positionY}
            rotation-z={rotationZ}
            {...props}
        />
    )
}

export default function CoffeeMug() {
    const lightRef = useRef(null)
    const [isOpen, setIsOpen] = useState(true)

    return (
        <motion.div
            animate={{ width: isOpen ? '25vw' : '2vw' }}
            className={`top-0 left-0 h-[100vh] w-[25vw] bg-white/30 z-20 overflow-hidden backdrop-blur-md shadow`}
        >


            <div className="h-[92vh]">
                {isOpen && (
                    <Canvas camera={{ position: [0, 10, 20], fov: 45 }}>
                        <ambientLight intensity={0.3} />
                        <directionalLight ref={lightRef} intensity={1} />
                        <OrbitControls enablePan={false} enableZoom={false} />
                        <Environment preset="studio" background={false} />
                        <Center>
                            <FloatingMug />
                        </Center>
                    </Canvas>
                )}
            </div>

            {/* Toggle Button */}
            <div className={`right-[-12px] h-auto ${isOpen ? '' : 'flex justify-center'}`}>
                <motion.button
                    animate={{ rotate: isOpen ? 0 : 180 }}
                    onClick={() => setIsOpen(prev => !prev)}
                    className={`bg-none text-sm px-1 py-0.5 rounded cursor-pointer bg-transparent w-12 dark:text-gray-100`}
                >
                    {'<'}
                </motion.button>
            </div>

            {/* Credit */}
            
                <motion.p className="text-xs text-center mt-2 text-gray-600 whitespace-nowrap dark:text-gray-100"
                animate={{ y: isOpen ? 0 : 25 }}>
                    Model credit:{" "}
                    <a
                        href="https://free3d.com/3d-model/tea-mug-791329.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        Tea Mug 3D Model by [enaam3]
                    </a>
                </motion.p>
            

        </motion.div>
    )
}

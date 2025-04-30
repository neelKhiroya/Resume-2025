import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setExpended] = useState(false);
    const animationRef = useRef(isExpanded);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setDarkMode(document.documentElement.classList.contains('dark'));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        animationRef.current = isExpanded;
    }, [isExpanded])

    const getVariants = (darkMode) => ({
        open: {
            width: "100dvw",
            height: "100dvh",
            borderRadius: "0%",
            backgroundColor: darkMode ? "#3b4648" : "#cbf3f0", // <-- fix here
            top: 0,
            left: 0,
        },
        closed: {
            width: "48px",
            height: "48px",
            borderRadius: "25px",
            backgroundColor: darkMode ? "#a7a5a5" : "#2ec4b6",
            top: ".5rem",
            left: ".5rem",
        }
    });


    const toggleNav = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Animated Expanding Circle */}
            <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={getVariants(darkMode)}
                onClick={() => { !isOpen && toggleNav() }}
                onAnimationComplete={() => {
                    if (isOpen) {
                        setExpended(true);
                    } else {
                        setExpended(false);
                    }
                }
                }
                className="fixed z-40 overflow-hidden"
            >

                <div className={`h-full w-full flex items-center justify-center`}>
                    <AnimatePresence>
                        {!isOpen ? (
                            <motion.div
                                key="hamburger"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-1"
                                onClick={toggleNav}
                            >
                                <div className="w-6 h-0.5 bg-black/50 dark:bg-white/70" />
                                <div className="w-6 h-0.5 bg-black/50 dark:bg-white/70" />
                                <div className="w-6 h-0.5 bg-black/50 dark:bg-white/70" />
                            </motion.div>
                        ) : isExpanded && (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onAnimationComplete={(def) => {
                                    // This fires for both "animate" and "exit", so we need a check
                                    if (!animationRef.current) {
                                        setIsOpen(false); // Now it's safe to shrink
                                    }
                                }}
                                className='flex flex-col items-center justify-between h-full w-full'
                            >
                                <div className='mt-8 font-bold text-3xl text-black underline dark:text-white'>
                                    Neel Khiroya
                                </div>
                                <ul className="flex flex-col gap-6 text-lg text-gray-800 underline dark:text-gray-200">
                                    <li>
                                        <a
                                            href="https://github.com/neelKhiroya"
                                            className="hover:scale-105 transition-transform py-2"
                                        >
                                            GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/in/neel-khiroya-71a177239/"
                                            className="hover:scale-105 transition-transform py-2"
                                        >
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="mailto:neel@khiroya.ca"
                                            className="hover:scale-105 transition-transform py-2"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>

                                <div
                                    className="text-black dark:text-white text-3xl font-bold mb-2"
                                    onClick={() => setExpended(false)}
                                >×</div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

        </>
    );
};

export default MobileNavBar;

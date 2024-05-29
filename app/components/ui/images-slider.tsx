import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';

type ImagesSliderProps = {
    images: string[];
    children?: React.ReactNode;
    overlay?: boolean;
    overlayClassName?: string;
    className?: string;
    autoplay?: boolean;
};

export const ImagesSlider = ({
    images,
    children,
    overlay = true,
    overlayClassName,
    className,
    autoplay = true
}: ImagesSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [loadedImages, setLoadedImages] = useState<string[]>([]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        loadImages();
    }, []);

    const loadImages = () => {
        setLoading(true);
        const loadPromises = images.map((image) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = image;
                img.onload = () => resolve(image);
                img.onerror = reject;
            });
        });

        Promise.all(loadPromises)
            .then((loadedImages) => {
                setLoadedImages(loadedImages as string[]);
                setLoading(false);
            })
            .catch((error) => console.error('Failed to load images', error));
    };

    useEffect(() => {
        let interval: any;
        if (autoplay) {
            interval = setInterval(() => {
                handleNext();
            }, 7500);
        }

        return () => {
            clearInterval(interval);
        };
    }, [autoplay, handleNext]);

    const slideVariants = {
        initial: {
            opacity: 0,
            x: '100%'
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        },
        exit: {
            opacity: 0,
            x: '-100%',
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        }
    };

    const areImagesLoaded = loadedImages.length > 0;

    return (
        <div
            className={cn(
                'overflow-hidden h-full w-full relative flex items-center justify-center',
                className
            )}
            style={{
                perspective: '1000px'
            }}
        >
            {areImagesLoaded && (
                <>
                    {overlay && (
                        <div
                            className={cn(
                                'absolute inset-0 bg-black/60 z-40',
                                overlayClassName
                            )}
                        />
                    )}
                    <AnimatePresence initial={false}>
                        <motion.img
                            key={currentIndex}
                            src={loadedImages[currentIndex]}
                            initial="initial"
                            animate="visible"
                            exit="exit"
                            variants={slideVariants}
                            className="image h-full w-full absolute inset-0 object-cover object-center"
                        />
                    </AnimatePresence>
                </>
            )}
            {areImagesLoaded && children}
        </div>
    );
};

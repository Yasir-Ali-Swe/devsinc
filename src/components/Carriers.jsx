"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Carriers = () => {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
        };

        handleResize(); // Set initial value
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const videoWidth = useTransform(scrollYProgress, [0, 1], ["100%", "45%"]);
    const videoHeight = useTransform(scrollYProgress, [0, 1], ["110vh", "110vh"]);
    const contentOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

    return (
        <div ref={containerRef} className={`relative ${isMobile ? "" : "min-h-[900vh]"}`}>
            {isMobile ? (
                <div className="flex flex-col">
                    <div className="w-full h-[50vh]">
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source
                                src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/6798985ffa243f5e7673e433_careers%20(1)-transcode.webm"
                                type="video/webm"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="px-6 py-10 flex flex-col justify-center bg-white">
                        <h1 className="text-2xl font-medium text-primary uppercase">Careers</h1>
                        <h2 className="mt-3 text-4xl font-black text-black leading-tight">
                            Human-first is our foundation.
                        </h2>
                        <p className="mt-4 text-xl text-stone-700 font-light">
                            Join a culture that celebrates excellence and diversity, Globally!
                        </p>
                        <button className="bg-primary text-white  font-semibold px-6 py-2 rounded-4xl w-auto inline-block">
                            Join Us
                        </button>
                    </div>
                </div>
            ) : (
                <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row scrollbar-hide">
                    <motion.div
                        className="overflow-hidden bg-black flex-shrink-0 w-full md:w-auto "
                        style={{
                            width: videoWidth,
                            height: videoHeight,
                        }}
                    >
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source
                                src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/6798985ffa243f5e7673e433_careers%20(1)-transcode.webm"
                                type="video/webm"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                    <motion.div
                        style={{ opacity: contentOpacity }}
                        className="w-full md:w-1/2 px-6 md:px-12 py-10 md:py-20 flex flex-col justify-center items-start bg-white"
                    >
                        <h1 className="text-2xl md:text-3xl font-medium text-primary uppercase">
                            Careers
                        </h1>
                        <h2 className="mt-3 text-4xl md:text-6xl font-black text-black leading-tight">
                            Human-first is our foundation.
                        </h2>
                        <p className="mt-4 text-xl md:text-2xl text-stone-700 font-light">
                            Join a culture that celebrates excellence and diversity, Globally!
                        </p>
                        <button className="bg-primary text-white  font-semibold px-6 py-2 rounded-4xl w-auto inline-block">
                            Join Us
                        </button>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Carriers;

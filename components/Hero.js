
import React from 'react';
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative">
            <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 m--14 lg:mt28">
                {/* content */}
                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                        A Simple Bookmark Manager
                    </h2>
                    <p className="text-grey text-lg text-center lg:text-left mb-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="flex justify-center flex-wrap gap-6">

                        <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black">Get it on chrome</button>
                        <button type="button" className="btn btn-white hover:bg-bookmark-purple hover:text-white">Get it on Firebase</button>
                    </div>
                </div>
                {/* image section */}
                <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                    <Image className="w-5/6  h-5/6 sm:w-4/3 sm:h-4/3 md:w-full md:h-full" src="/hero-bg.png" alt="hero background" width="400" height="400" />
                </div>
            </div>
            {/* rounded ractangle */}
            <div
                className="
          hidden
          md:block
          overflow-hidden
          bg-bookmark-purple
          rounded-l-full
          absolute
          h-80
          w-2/4
          top-32
          right-0
          lg:
          -bottom-28
          lg:-right-36
        "
            ></div>
        </section>
    );
};

export default Hero;
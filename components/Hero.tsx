import { Spotlight } from "./ui/Spotlight"


const Hero = () => {
    return (
        <div className="bt-36 pb-20">
            <div>
                <Spotlight fill="white" className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" />
                <Spotlight fill="purple" className="top-10 left-full h-[80vh] w-[50vw]" />
                <Spotlight fill="blue" className="top-28 left-80 md:-left-32 md:-top-20 h-[80vh] w-[50vw]" />
            </div>
            <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                    Backgrounds
                </p>
            </div>
        </div>
    )
}

export default Hero
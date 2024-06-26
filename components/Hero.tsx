import { Spotlight } from "./ui/Spotlight"


const Hero = () => {
    return (
        <div className="bt-36 pb-20">
            <div>
                <Spotlight fill="white" className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" />
                <Spotlight fill="purple" className="top-10 left-full h-[80vh] w-[50vw]" />
                <Spotlight fill="blue" className="top-28 left-80 md:-left-32 md:-top-20 h-[80vh] w-[50vw]" />
            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.3] relative flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
        </div>
    )
}

export default Hero
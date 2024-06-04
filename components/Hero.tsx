import { Spotlight } from "./ui/Spotlight"


const Hero = () => {
  return (
    <div className="bt-36 pb-20">
        <Spotlight fill="white" className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" />
        <Spotlight fill="purple" className="top-10 left-full h-[80vh] w-[50vw]" />
        <Spotlight fill="blue" className="top-28 left-80 md:-left-32 md:-top-20 h-[80vh] w-[50vw]" />
    </div>
  )
}

export default Hero
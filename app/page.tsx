import Hero from "@/component/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <Hero />
      </div>
    </main>
  )
};
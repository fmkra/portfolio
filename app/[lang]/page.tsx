export default function Page() {
    return (
        <>
            <div className="w-screen h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
                <div>
                    <p>Hi, my name is</p>
                    <h1 className="text-[clamp(1.5rem,min(10vw,10vh),4rem)]">Filip Krawczyk</h1>
                    <p className="text-right">and I am a</p>
                    <h2 className="text-[clamp(1.5rem,min(7vw,7vw),2.8rem)]">Full stack web developer</h2>
                </div>
            </div>
            <div className="h-10">Test</div>
        </>
    )
}

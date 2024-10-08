import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div
                    className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center"
                    bis_skin_checked={1}
                >
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
                        bis_skin_checked={1}
                    >
                        <h1 className="title-font sm:text-4xl font-bold text-4xl mb-4 text-white">
                            Before they sold out
                            <br className="hidden lg:inline-block" />
                            readymade gluten
                        </h1>
                        <p className="mb-8 leading-relaxed text-white">
                            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                            plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
                            tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
                            chambray.
                        </p>
                        <div className="flex justify-center" bis_skin_checked={1}>
                            <button className="inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
                            Purchase
                            </button>
                            <button className="ml-4 inline-flex bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 text-white rounded text-lg">
                                30-day-Trial
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" bis_skin_checked={1}>
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src="https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/haseeburrehmanjs%40gmail.com%20%2B%201725185488243?alt=media&token=1971c4e1-94a3-4124-8913-920c375fd2b3"
                        />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero

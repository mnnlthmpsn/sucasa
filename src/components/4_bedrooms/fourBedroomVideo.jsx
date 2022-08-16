export const FourBedRoomVideo = () => {
    return (
        <div className="snap-end h-screen w-full">
            <div className="grid lg:grid-cols-8">
                <div className="col-span-6 h-screen">
                <video className="h-screen bg-black"
                        preload="auto" playsInline="" data-autoplay-desktop={true} data-autoplay-portrait={true} data-autoplay-mobile={true}
                        data-play-on-hover={false} muted={true} loop={true} controls={false}
                        data-src-desktop="/videos/temp.mp4"
                        data-src-portrait="/video/temp.mp4"
                        data-src-mobile="/videos/temp.mp4"
                        data-src="/videos/temp.mp4"
                        data-object-fit="true" src="/videos/temp.mp4" data-loaded={true} autoPlay={true}></video>
                </div>
                <div className='flex flex-col px-8 py-24 col-span-2 justify-between'>
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <p className='text-xl'>Luxurious</p>
                            <p className='font-gothamBold text-2xl'>Affordable 4 Bedroom Homes</p>
                        </div>
                        <p className="font-semibold">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi obcaecati veritatis sequi dignissimos reprehenderit dolore iusto nesciunt? Ex, iusto magni fugit perspiciatis excepturi, ullam deserunt odit eum dicta, odio neque?
                        </p>
                    </div>
                    <div className="w-full">
                        <button className="order_btn bg-primary uppercase tracking-wider text-white">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
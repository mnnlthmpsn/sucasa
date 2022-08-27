import { useState } from "react"

export const FourBedRoomSectionTwo = () => {

    const [activeSlide, setActiveSlide] = useState(0)

    const slides = [
        { image: "/images/4_bed_room_1.png", title: "Executive Suite", description: "An executive suite that covers 200sq/ft and with endless features, tuck yourself away in absolute privacy" },
        { image: "/images/4_bed_room_2.png", title: "Family Area", description: "Thoughtfully situated on the first floor with its own balcony, serves as a get-away from guests in the main living room on those days" },
        { image: "/images/4_bed_room_3.png", title: "Your Home’s Heart", description: "Accomodating, extremely functional with features you didn’t think of, soft-close doors and rhythm that guide the flow of movement in the heart of your home" },
        { image: "/images/4_bed_room_1.png", title: "Easy Floor Access", description: "Takes you from the bottom to the top of the world without breaking a sweat" },
        { image: "/images/4_bed_room_2.png", title: "Giant Windows", description: "Huge windows from ceiling to the floor allowing for a lot of natural light in your home and improving air quality due to the increased amount of oxygen circulating indoors" }
    ]

    return (
        <div className="snap-end h-screen w-full bg-black">
            {/* <div className="grid lg:grid-cols-8">
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
                        <button className="order_btn bg-primary uppercase text-white">Order Now</button>
                    </div>
                </div>
                <div className="col-span-6 h-screen">
                    <img src="/images/4_bed_room_2.png" className="h-screen w-full object-cover" alt="4_bed_room_2" />
                </div>

            </div> */}

            <div className="flex flex-col items-center pt-[8vh] h-screen w-screen">
                <div className="w-3/4 h-4/6">
                    <div className="relative w-full h-full">
                        {
                            slides.map((slide, index) => (
                                <img src={slide.image} className={`absolute w-full h-full object-cover rounded-lg duration-200 ${activeSlide === index ? 'visible' : 'invisible'}`} key={index} alt="" />
                            ))
                        }
                    </div>
                    <div className="mx-auto max-w-screen-sm py-5">
                        <div className="flex justify-start space-x-2">
                            {
                                slides.map((_, index) => (
                                    <div onClick={() => setActiveSlide(index)} key={index} className={`p-[6px] rounded-full duration-300 cursor-pointer ${activeSlide === index ? 'bg-white' : 'bg-gray-500'}`}></div>
                                ))
                            }
                        </div>
                        <div className="flex flex-col justify-start items-start text-white py-6 space-y-3">
                            <p className="font-bold text-lg">{slides[activeSlide].title}</p>
                            <p className="text-sm">{slides[activeSlide].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const TwoBedRoomSectionTwo = () => {
    return (
        <div className="snap-end h-screen w-full">
            <div className="grid lg:grid-cols-8">
                <div className='flex flex-col px-8 py-24 col-span-2 justify-between'>
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <p className='text-xl'>Luxurious</p>
                            <p className='font-gothamBold text-2xl'>Affordable 2 Bedroom Homes</p>
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
                    <img src="/images/2_bed_room_2.png" className="h-screen w-full object-cover" alt="4_bed_room_2" />
                </div>

            </div>
        </div>
    )
}
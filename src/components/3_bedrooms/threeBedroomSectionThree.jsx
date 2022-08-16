export const ThreeBedRoomSectionThree = () => {
    return (
        <div className="snap-end h-screen w-full">
            <div className="grid lg:grid-cols-8">
                <div className="col-span-6 p-16 h-screen">
                    <img src="/images/3_bed_room_3.png" className="h-full rounded-xl w-full object-cover" alt="4_bed_room_2" />
                </div>
                <div className='flex items-center px-8 py-24 col-span-2 space-y-10'>
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <p className='text-xl'>Luxurious</p>
                            <p className='font-gothamBold text-2xl'>Affordable 3 Bedroom Homes</p>
                        </div>
                        <p className="font-semibold">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi obcaecati veritatis sequi dignissimos reprehenderit dolore iusto nesciunt? Ex, iusto magni fugit perspiciatis excepturi, ullam deserunt odit eum dicta, odio neque?
                        </p>
                        <div className="w-full">
                            <button className="order_btn bg-primary uppercase text-white">Order Now</button>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}
export const FourBedRoomSectionOne = () => {
    return (
        <div className="snap-end h-screen w-screen flex flex-col">
            <div className="h-2/3 w-full">
                <img src="/images/4_bed_room_1.png" alt="four_bed_room_1" className="h-full w-screen object-cover object-center" />
            </div>
            <div className="grow container items-start pt-10 gap-x-10 grid lg:grid-cols-3">
                <div className="col-span-1 flex flex-col space-y-6">
                    <div>
                        {/* <p className="text-lg">Contemporary Meets Warmth</p> */}
                        <p className="font-gothamBold text-2xl">Contemporary Meets Warmth</p>
                    </div>
                    <div className="w-2/3">
                        <button className="order_btn_outline">ORDER NOW</button>
                    </div>
                </div>
                <div className="col-span-2 pl-10">
                    <p className="font-semibold">Best of both worlds, a marriage between straight lines of modern design and elements of classic design births a product like no other. Giving you aesthetic pleasantries while allowing you to ease into the warmth of a home</p>
                </div>
            </div>
        </div>
    )
}
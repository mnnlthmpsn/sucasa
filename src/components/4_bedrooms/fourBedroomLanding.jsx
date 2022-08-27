export const FourBedRoomLanding = () => {
    return (
        <div className="snap-end h-screen w-screen bg-cover bg-center text-white bg-[url('/images/4_hero_1.jpg')]">
            {/* <div className="h-screen w-screen absolute top-0 bg-gradient-to-white from-black opacity-75"></div> */}
            <div className="container absolute h-screen top-0 inset-0">
                <div>
                    <p className="text-center font-gothamBold text-[45px] pt-[12vh]">4 Bedroom</p>
                    <p className="font-semibold text-center ">Order now for 16 week delivery</p>
                </div>
                <div className="grid grid-cols-3 items-center lg:grid-cols-5 justify-center pt-[62vh] text-white space-x-6">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-3xl font-bold">5,470</p>
                        <p>sq/ft</p>
                    </div>
                    <p className="font-bold text-lg">Executive Suite</p>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-3xl font-bold">4</p>
                        <p>Bedrooms</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-3xl font-bold">6</p>
                        <p>Washrooms</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-3xl font-bold">1</p>
                        <p>Out House</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
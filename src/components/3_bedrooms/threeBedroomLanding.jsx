export const ThreeBedRoomLanding = () => {
    return (
        <div className="snap-end h-screen w-screen bg-cover bg-center text-white bg-[url('/images/3_hero_2.jpg')]">
            <div className="h-1/3 w-screen absolute top-0 bg-gradient-to-b from-primary opacity-75"></div>
            <div className="container absolute h-screen top-0 inset-0">
                <div>
                    <p className="text-center font-gothamBold text-[45px] pt-[12vh]">3 Bedrooms</p>
                    <p className="font-semibold text-center ">Some short text here for 3 Bedrooms</p>
                </div>
                <div className="flex justify-center pt-[70vh] text-white space-x-6">
                    <p>Three bedrooms</p>
                </div>
            </div>
        </div>
    )
}
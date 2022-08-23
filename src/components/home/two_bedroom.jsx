import { HomeHeader } from "../../shared/home_header"
import useUtilities from "../../utilities/useUtilities"

export const TwoBedRoom = () => {

    const { navigateTo } = useUtilities()

    return (
        <div className="relative">
            <div className="h-1/3 w-screen absolute top-0 bg-gradient-to-b from-primary opacity-75"></div>
            <div className="snap-end h-screen w-screen bg-cover bg-center bg-[url('/images/2_hero_1.png')]">
                <div className="container absolute inset-0">
                    <div className="text-white z-50">
                        <p className="text-center font-gothamBold text-[45px] pt-[25vh]">2 Bedroom</p>
                        <div className="flex relative justify-center font-semibold text-center">Order now for <p className="border-b hover:text-blue-500 px-0 cursor-pointer ml-2"> 16 week delivery</p></div>
                    </div>
                    <div className="flex justify-center pt-[50vh] space-x-6">
                        <button className="order_btn_primary">CUSTOM HOME</button>
                        <button className="order_btn_secondary">EXISTING HOMES</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
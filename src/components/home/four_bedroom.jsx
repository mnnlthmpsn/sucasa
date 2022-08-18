import { HomeHeader } from "../../shared/home_header"
import useUtilities from "../../utilities/useUtilities"

export const FourBedRoom = () => {

    const { navigateTo } = useUtilities()

    return (
        <div className="relative">
            <HomeHeader show={true} color="text-white" />
            <div className="snap-end h-screen w-screen bg-cover bg-center text-white bg-[url('/images/4_hero_2.jpg')]">
                <div className="container">
                    <div className="text-white">
                        <p className="text-center font-gothamBold text-[45px] pt-[25vh]">4 Bedroom</p>
                        <div className="flex justify-center font-semibold text-center">Order now for <p className="border-b px-0 cursor-pointer ml-2"> 16 week delivery</p></div>
                    </div>
                    <div className="flex justify-center w-full pt-[50vh] space-x-6">
                        <button className="order_btn_primary">CUSTOM HOME</button>
                        <button className="order_btn_secondary">EXISTING HOMES</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
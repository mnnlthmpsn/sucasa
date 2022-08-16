import { Header } from "../../shared/header"
import useUtilities from "../../utilities/useUtilities"

export const FourBedRoom = () => {

    const { navigateTo } = useUtilities()

    return (
        <div className="relative">
            <Header color="text-white" />
            <div className="snap-end h-screen w-screen bg-cover bg-center text-white bg-[url('/images/4_hero_2.jpg')]">
                <div className="container">
                    <div className="text-white">
                        <p className="text-center font-gothamBold text-[45px] pt-[12vh]">4 Bedrooms</p>
                        <p className="font-semibold text-center">Order online for touchless delivery</p>
                    </div>
                    <div className="flex justify-center w-full pt-[60vh] space-x-6">
                        <button className="order_btn_primary">ORDER NOW</button>
                        <button className="order_btn_secondary" onClick={() => navigateTo('/four-bed-rooms')}>LEARN MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
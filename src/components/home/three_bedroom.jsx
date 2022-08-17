import { Header } from "../../shared/header"
import useUtilities from "../../utilities/useUtilities"

export const ThreeBedRoom = () => {

    const { navigateTo } = useUtilities()

    return (
        <div className="relative">
            <Header color="text-white" />
            <div className="snap-end h-screen w-screen bg-cover bg-center bg-[url('/images/3_hero_1.jpg')]">
                <div className="container">
                    <div className="text-white">
                        <p className="text-center font-gothamBold text-[45px] pt-[12vh]">3 Bedrooms</p>
                        <p className="font-semibold text-center ">Order now for 16 week delivery</p>
                    </div>
                    <div className="flex justify-center pt-[60vh] space-x-6">
                        <button className="order_btn_primary">CUSTOM HOME</button>
                        <button className="order_btn_secondary">EXISTING HOMES</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { FourBedRoom, ThreeBedRoom, TwoBedRoom } from "../components/home"
import { HomeHeader } from "../shared/home_header"

export const Home = () => {
    return (
        <>
            <HomeHeader show={true} color="text-white" />
            <div className="hidden lg:block h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth relative">
                <FourBedRoom />
                <ThreeBedRoom />
                <TwoBedRoom />
            </div>

            <div className="lg:hidden h-screen w-screen flex items-center justify-center p-12">
                <p className="font-gothamBold text-xl text-center">Mobile Version Coming Soon</p>
            </div>
        </>
    )
}
import { FourBedRoom, ThreeBedRoom, TwoBedRoom } from "../components/home"

export const Home = () => {
    return (
        <>
            <div className="hidden lg:block h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth">
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
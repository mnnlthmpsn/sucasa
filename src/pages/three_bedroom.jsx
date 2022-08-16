import { ThreeBedRoomLanding, ThreeBedRoomSectionOne, ThreeBedRoomSectionTwo, ThreeBedRoomVideo, ThreeBedRoomSectionThree } from "../components/3_bedrooms"
import { Header } from "../shared/header"

export const ThreeBedRooms = () => {
    return (
        <div className="relative h-screen w-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            <Header color="text-white" />
            <ThreeBedRoomLanding />
            <ThreeBedRoomVideo />
            <ThreeBedRoomSectionOne />
            <ThreeBedRoomSectionTwo />
            <ThreeBedRoomSectionThree />
        </div>
    )
}
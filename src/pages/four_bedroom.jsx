import { FourBedRoomLanding, FourBedRoomSectionOne, FourBedRoomSectionTwo, FourBedRoomVideo, FourBedRoomSectionThree } from "../components/4_bedrooms"
import { Header } from "../shared/header"

export const FourBedRooms = () => {
    return (
        <div className="relative h-screen w-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            <Header color="text-white" />
            <FourBedRoomLanding />
            <FourBedRoomVideo />
            <FourBedRoomSectionOne />
            <FourBedRoomSectionTwo />
            <FourBedRoomSectionThree />
        </div>
    )
}
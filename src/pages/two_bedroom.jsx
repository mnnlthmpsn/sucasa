import { TwoBedRoomLanding, TwoBedRoomSectionOne, TwoBedRoomSectionTwo, TwoBedRoomSectionThree } from "../components/2_bedrooms"
import { Header } from "../shared/header"

export const TwoBedRooms = () => {
    return (
        <div className="relative h-screen w-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            <Header color="text-white" />
            <TwoBedRoomLanding />
            <TwoBedRoomSectionThree />
            <TwoBedRoomSectionOne />
            <TwoBedRoomSectionTwo />
        </div>
    )
}
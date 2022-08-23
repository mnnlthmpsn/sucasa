import { useState } from "react"

const useSharedService = () => {

    const [toggleSidebar, setToggleSidebar] = useState(false)

    return { toggleSidebar, setToggleSidebar }
}

export default useSharedService
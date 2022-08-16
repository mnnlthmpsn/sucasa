import { useNavigate } from 'react-router-dom'

const useUtilities = () => {

    const router = useNavigate()

    const navigateTo = route => router(route)

    return { navigateTo }
}

export default useUtilities
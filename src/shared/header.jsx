import useUtilities from '../utilities/useUtilities'

export const Header = ({ color }) => {

    const { navigateTo } = useUtilities()

    const menuItems = [
        { title: '4 Bedrooms', route: '/four-bed-rooms' },
        { title: '3 Bedrooms', route: '/three-bed-rooms' },
        { title: '2 Bedrooms', route: '/two-bed-rooms' },
    ]

    return (
        <div className={color}>
            <div className="flex z-30 justify-between absolute top-0 max-w-screen-xl mx-auto inset-0 h-24 font-bold bg-transparent w-screen items-center">
                <div className='cursor-pointer' onClick={() => navigateTo('/')}>
                    <img src="/images/logo_full.png" alt="logo" className='h-24 w-auto' />
                </div>
                <div className="flex space-x-8">
                    {menuItems.map((menuItem, index) => (
                        <p className="menu-link" onClick={() => navigateTo(menuItem.route)} key={index}>{menuItem.title}</p>
                    ))}
                </div>
                <div className="flex space-x-8">
                    <p className="menu-link">Shop</p>
                    <p className="menu-link">Menu</p>
                </div>
            </div>
        </div>
    )
}
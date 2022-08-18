import useUtilities from '../utilities/useUtilities'

export const HomeHeader = ({ color, show }) => {

    const { navigateTo } = useUtilities()

    const menuItems = [
        { title: '4 Bedroom', route: '/four-bed-rooms' },
        { title: '4 Bedroom EXT', route: '/four-bed-rooms' },
        { title: '3 Bedroom', route: '/three-bed-rooms' },
        { title: '3 Bedroom EXT', route: '/three-bed-rooms' },
        { title: '2 Bedroom', route: '/two-bed-rooms' },
    ]

    return (
        <>
            <div className={color}>
                <div className={`fixed z-40 w-screen items-center justify-center top-0 h-12 bg-white ${show ? 'flex' : 'hidden'}`}>
                    <p className='text-primary font-semibold border-b border-primary cursor-pointer'>Read our Blog</p>
                </div>
                <div className="flex z-30 justify-between absolute top-14 max-w-screen-xl mx-auto inset-0 h-24 font-bold bg-transparent w-screen items-center">
                    <div className='cursor-pointer' onClick={() => navigateTo('/')}>
                        <img src="/images/logo_full.png" alt="logo" className='h-24 w-auto' />
                    </div>
                    <div className="flex space-x-2">
                        {menuItems.map((menuItem, index) => (
                            <p className="menu-link" onClick={() => navigateTo(menuItem.route)} key={index}>{menuItem.title}</p>
                        ))}
                    </div>
                    <div className="flex space-x-2">
                        <p className="menu-link">Shop</p>
                        <p className="menu-link">Login</p>
                        <p className="menu-link">Menu</p>
                    </div>
                </div>
            </div>
        </>
    )
}
import { XIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import useSharedService from "./service"

export const Menu = ({ toggle, setToggle }) => {

    const menu_items = [
        { label: 'Existing Inventory', route: '/' },
        { label: 'Certified Pre-Owned', route: '/' },
        { label: 'Trade-In', route: '/' },
        { label: 'Live-In', route: '/' },
        { label: 'Furniture', route: '/' },
        { label: 'Home Automation', route: '/' },
        { label: 'Renovations', route: '/' },
        { label: 'Accessories', route: '/' },
        { label: 'Commercial Real Estate', route: '/' },
    ]

    return (
        <div className={`fixed top-0 z-20 backdrop-blur-sm h-screen w-screen bg-white/10 ${toggle ? 'visilbe' : 'invisible'}`}>
            <div className={`${ toggle ? 'translate-x-0' : 'translate-x-full' } bg-white h-screen fixed w-1/5 right-0 z-40 duration-300`}>
                <div className="flex justify-end p-12">
                    <XIcon className='h-6 cursor-pointer' onClick={setToggle}/>
                </div>

                <div className="flex flex-col px-8 space-y-2">
                    {
                        menu_items.map((menu_item, index) => (
                            <p className='py-2 px-4 rounded-lg font-bold cursor-pointer hover:bg-gray-100 w-full'>{menu_item.label}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
"use client"
import React, { useRef, useState, useEffect } from 'react';
import '@styles/header.css'

const Header = () => {

    const [isOpen, setIsOpen] = useState<any>(false);
    const popRef = useRef<any>(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
    }, []);

    const handleOutsideClick = (event: any) => {
        if (popRef.current && !popRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    return (
        <>
            <div className="relative bg-white">
                <nav className="px-4 py-4">
                    <div className="mx-auto flex justify-end items-center">
                        <div>Superadmin, Superadmin</div>
                        <div className="ml-4" onClick={() => setIsOpen(!isOpen)} ref={popRef}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>
                            {isOpen && <ul className="border border-gray-300 bg-white rounded fixed z-50 top-12 right-3 p-2 drop-shadow-lg" >
                                <li className='border-bottom hover:bg-gray-200 rounded px-2 py-[2px] mb-1'>
                                    <a className='flex justify-around'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                                        </svg>
                                        <span className='ml-2'>Profile</span>
                                    </a>
                                </li>
                                <div className='border border-gray-200 border-dashed'></div>
                                <li className='hover:bg-gray-200 rounded px-2 py-[2px] mt-1'>
                                    <a className='flex justify-around'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z" clipRule="evenodd" />
                                        </svg>
                                        <span className='ml-2'>Logout</span>
                                    </a>
                                </li>
                            </ul>}
                        </div>
                    </div>
                </nav>
            </div>
            <div className='bg-gray-300 h-[3px]'></div>
        </>
    )
}

export default Header
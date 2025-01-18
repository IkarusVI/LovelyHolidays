'use client';
import {useState} from 'react'
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
const Burger = dynamic(() => import('./burger'));
const Stairs = dynamic(() => import('./stairs'));
const Menu = dynamic(() => import('./menu'));

export default function () {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <div className="z-50 h-32 absolute">
            <Burger openMenu={() => {setMenuIsOpen(true)}}/>
            <AnimatePresence mode="wait">
            {
                menuIsOpen && <>
                <Stairs />
                <Menu closeMenu={() => {setMenuIsOpen(false)}}/>
                </>
            }
            </AnimatePresence>
        </div>
    )
}

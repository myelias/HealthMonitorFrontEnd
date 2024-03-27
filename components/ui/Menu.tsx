import React, { useState } from 'react'
import MenuButton from './MenuButton';
import { AnimatePresence, delay, motion } from 'framer-motion';
import DescPar from './DescPar';

export default function Menu({isActive, setIsActive}) {

    const MenuList = [
        {title: "Get Started", href: '/getstarted'},
        {title: "About us", href: '/aboutus'},
        {title: "Our Mission", href: '/ourmission'},
        {title: "Contact", href: '/contact'},   
    ]

    const menu = {
        open: {  
            width: "480px", 
            height: "650px", 
            top: "-25px",
            right: "-25px",
            transition: { duration: 0.50, type: "tween", ease: [0.76, 0, 0.24, 1]},
            className: 'text-white'
    
        },
    
        closed: {
            width: "60px",
            height: "60px",
            top: "0px",
            right: "0px",
            transition: { duration: 0.70, delay: 0.25, type: "tween", ease: [0.76, 0, 0.24, 1]}
        }
    
    }  

    const inOutEffect = {
        initial:{
            opacity: 0,
        },
        in: (index) => ({
            opacity: 1,
            transition: {delay: 0.2 + (index * 0.2)}
        }),
        out: (index) => ({
            opacity: 0,
            transition: {delay: 0.1 + (index * 0.05)},
        })
    }

    return (
        
        <div className='fixed top-14 right-12 flex items-center justify-center'>
            <motion.div 
                className=' bg-gradient-to-br from-[#693fe6] to-[#983dfa] rounded-3xl relative '
                variants={menu}
                animate={isActive ? menu["open"] : menu["closed"]}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Content MenuList={MenuList} inOutEffect={inOutEffect}/>} 
                </AnimatePresence>
            </motion.div>
            <MenuButton isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>
        </div>

    )
}

function Content({inOutEffect, MenuList}){
    return (
        <motion.div className='p-12 pt-28 flex flex-col justify-left items-left space-y-4'>
            {
                MenuList.map((page, index) => {
                        return (
                        <motion.div key = {index} className=' text-5xl text-gray-200' custom={index}  variants = {inOutEffect} initial = "initial" animate="in" exit="out">
                            <a href={page.href}>{page.title}</a>
                        </motion.div>
                        )
                    }
                )
            }       
        </motion.div>
    )
}
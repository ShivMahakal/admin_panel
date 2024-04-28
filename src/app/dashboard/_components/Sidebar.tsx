"use client"
import LeftbarMenu from "@/app/(components)/LeftbarMenu"
import Image from "next/image"
import { useState } from "react"

export const Sidebar = () => {
    const [toggleMenu, setToggleMenu] = useState<any>(false)
    
    return (
        <div className="side-bar padding-left-zero max-left-width" style={{ width: toggleMenu ? "140px" : "280px" }}>
            <div className="arrow-btn" onClick={() => setToggleMenu((prev:any) => !prev)}>
                <Image src="/assets/images/arrow.svg" width={16} height={16} alt="arrow" />
            </div>
            <LeftbarMenu  toggleMenu={toggleMenu}/>
        </div>
    )
}
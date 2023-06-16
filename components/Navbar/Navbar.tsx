
import styles from "./Navbar.module.scss"
import {BurgerMenu} from "@/components/BurgerMenu/BurgerMenu";
import Image from "next/image";

export const Navbar = (): JSX.Element => {
    return (
    <div className="pt-12">
        <div className="homedesktop">bureau</div>
        <div className="mobiledesktop">
            <div className="flex flex-row justify-between items-center"><Image alt="menu-burger" src="/logo_mobile.svg" width={82} height={42} /><BurgerMenu/></div>
    </div></div>
        )
}
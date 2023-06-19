
"use client";

import { usePathname } from "next/navigation";
import {Navbar} from "@/components/Navbar/Navbar";



export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    return (<>
            <section className={pathname == '/' ? 'w-screen h-screen inset-0 bg-bgblue bg-opacity-20 z-0' : 'w-screen inset-0'}>
                <section className={pathname != '/' ? 'flex flex-row' : ''}>
                    {pathname != '/' ?
                    <Navbar/> : null}
                {children}
                </section>
                
            </section>
        </>
        );
}
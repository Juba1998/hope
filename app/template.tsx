import {Navbar} from "@/components/Navbar/Navbar";



export default function Template({ children }: { children: React.ReactNode }) {
    return (<>
            <section className={'w-screen'}>
                <section className="flex flex-row">
                    <Navbar/>
                {children}
                </section>
                
            </section>
        </>
        );
}
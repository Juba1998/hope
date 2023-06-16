import {Navbar} from "@/components/Navbar/Navbar";

export default function Template({ children }: { children: React.ReactNode }) {
    return (<>
            <section className={'hero'}>
                <Navbar/>
                {children}
            </section>
            <footer>aa</footer>
        </>
        );
}
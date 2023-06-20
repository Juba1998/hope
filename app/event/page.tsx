import Image from "next/image";
import styles from "../App.module.scss";

const testPage = () => {
    return (
        <section className="w-full bg-blue-50 h-screen pt-12">
      <section className="bg-white m-auto rounded-lg shadow-lg flex flex-row justify-center items-center gap-16" style={{ height: '81px', width: '1008px' }}>
        <Image
          width={790}
          height={29}
          src={"./navbar/search.svg"}
          priority={true}
          alt="user"
        />
        <button className="bg-darkbluehope text-white text-xs rounded-lg" style={{ width: '102px', height: '49px' }}>Rechercher</button>
      </section>
      <section className="overflow-x-scroll">
        <div className="flex flex-nowrap gap-8 overflow-x-hidden w-full">
          <article className="bg-white rounded-lg" style={{ width: '380px', height: '220px' }}></article>
          <article className="bg-white rounded-lg" style={{ width: '380px', height: '220px' }}></article>
          <article className="bg-white rounded-lg" style={{ width: '380px', height: '220px' }}></article>
          <article className="bg-white rounded-lg" style={{ width: '380px', height: '220px' }}></article>
          <article className="bg-white rounded-lg" style={{ width: '380px', height: '220px' }}></article>
          <article className="bg-white rounded-lg" style={{ width: '380px', height: '220px' }}></article>
        </div>
      </section>
    </section>
    )
}
export default testPage
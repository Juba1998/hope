import Image from "next/image";

const Home = () => {
  return (
    <section className="w-full h-screen flex flex-col">
    <section className="w-full px-10 pt-12">
      <section className="w-full flex flex-row justify-between items-center mb-10">
        <article>
          <Image
            width={306}
            height={104}
            src={"./navbar/profil2.svg"}
            priority={true}
            alt="user"
          />
        </article>
        <article className=" flex flex-row gap-2 items-center">
          <div
            className="bg-greyhover rounded-lg flex flex-row items-center justify-center cursor-pointer "
            style={{ width: "48px", height: "48px" }}
          >
            <Image
              width={30}
              height={6}
              src={"./navbar/dots.svg"}
              priority={true}
              alt="user"
            />
          </div>
          <div
            className="bg-darkbluehope rounded-lg cursor-pointer flex flex-row gap-3 items-center justify-center"
            style={{ width: "182px", height: "48px" }}
          >

            <Image
              width={24}
              height={24}
              src={"./navbar/add.svg"}
              priority={true}
              alt="user"
            />
            <p className="text-white text-sm">Ajouter un widget</p>
          </div>
        </article>
      </section>
      
    </section>
    <section className="pl-10 flex flex-row gap-8">
        <article className="border-b-2 border-b-darkbluehope text-sm cursor-pointer">Fonctionnalités</article>
        <article className="text-grey2 text-sm cursor-pointer">Paramètres</article>

    </section>
    <section className="bg-greybg w-full flex-grow px-10 py-6">
        <article className="bg-white rounded-2xl shadow-sm p-6" style={{width: '281px', height: '220px'}}>

        </article>

    </section>
    </section>
  );
};
export default Home;

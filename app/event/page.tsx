import Image from "next/image";
import styles from "./Event.module.scss";

const testPage = () => {
    return (
        <section className="w-full bg-blue-50 h-screen pt-12 overflow-y-scroll">
      <section className="bg-white w-11/12 m-auto rounded-lg shadow-lg flex flex-row justify-center items-center gap-16" style={{ height: '81px' }}>
        <Image
          width={790}
          height={29}
          src={"./navbar/search.svg"}
          priority={true}
          alt="user"
        />
        <button className="bg-darkbluehope text-white text-xs rounded-lg" style={{ width: '102px', height: '49px' }}>Rechercher</button>
      </section>
      {/* <section className="max-w-md mx-auto">
    <div className="overflow-x-scroll flex">
      <article className="bg-white rounded-lg" style={{ width: '380px', height: '220px' }}></article>
      <article className="bg-white rounded-lg" style={{ width: '380px', height: '220px' }}></article>
      <article className="bg-white rounded-lg" style={{ width: '380px', height: '220px' }}></article>
      <article className="bg-white rounded-lg" style={{ width: '380px', height: '220px' }}></article>
      <article className="bg-white rounded-lg" style={{ width: '380px', height: '220px' }}></article>
      <article className="bg-white rounded-lg" style={{ width: '380px', height: '220px' }}></article>
    </div>
  </section> */}
<section className="flex flex-col gap-4 w-11/12 m-auto mt-12">
  <div className="text-sm">Evénements les plus populaire</div>
<div className="flex flex-col  max-w-6xl">
      <div
        className="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
        <div
          className="flex flex-nowrap gap-6 "
        >
          <div className="inline-block">
            <div
            style={{width: '280px', height: '162px'}}
              className="flex flex-col relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
             <Image
          width={282}
          height={132}
          src={"/navbar/eventimg1.png"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <div className="bg-white z-10 absolute bottom-0 rounded-lg px-4 py-3 flex flex-row justify-between items-center"style={{width: '280px', height: '47px'}}>
          <article className="flex flex-col gap-1"><p className="text-xxs">Forum sur la Cybersécurité et la Vie Privée en Ligne</p>
          <article className="flex flex-row gap-2">
          <Image
          width={10}
          height={9}
          src={"/navbar/calendar.svg"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <p className="text-xxs">28 juin 2023 - 11h30</p>
            </article>
            
            </article>
            <p className="text-blue-500 text-xs cursor-pointer">Voir</p>

        </div>

            </div>
          </div>
          <div className="inline-block px-3">
            <div
            style={{width: '280px', height: '162px'}}
              className="flex flex-col relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
             <Image
          width={282}
          height={132}
          src={"/navbar/event1.png"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <div className="bg-white z-10 absolute bottom-0 rounded-lg px-4 py-3 flex flex-row justify-between items-center"style={{width: '280px', height: '47px'}}>
          <article className="flex flex-col gap-1"><p className="text-xxs">Congrès sur la Protection des Données </p>
          <article className="flex flex-row gap-2">
          <Image
          width={10}
          height={9}
          src={"/navbar/calendar.svg"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <p className="text-xxs">30 juin 2023 - 14h30</p>
            </article>
            
            </article>
            <p className="text-blue-500 text-xs cursor-pointer">Voir</p>

        </div>

            </div>
          </div>
          <div className="inline-block px-3">
            <div
            style={{width: '280px', height: '162px'}}
              className="flex flex-col relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
             <Image
          width={282}
          height={132}
          src={"/navbar/event2.png"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <div className="bg-white z-10 absolute bottom-0 rounded-lg px-4 py-3 flex flex-row justify-between items-center"style={{width: '280px', height: '47px'}}>
          <article className="flex flex-col gap-1"><p className="text-xxs">Salon sur les impacts des réseaux sociaux</p>
          <article className="flex flex-row gap-2">
          <Image
          width={10}
          height={9}
          src={"/navbar/calendar.svg"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <p className="text-xxs">30 juin 2023 - 14h30</p>
            </article>
            
            </article>
            <p className="text-blue-500 text-xs cursor-pointer">Voir</p>

        </div>

            </div>
          </div>
          <div className="inline-block px-3">
            <div
            style={{width: '280px', height: '162px'}}
              className="flex flex-col relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
             <Image
          width={282}
          height={132}
          src={"/navbar/eventimg1.png"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <div className="bg-white z-10 absolute bottom-0 rounded-lg px-4 py-3 flex flex-row justify-between items-center"style={{width: '280px', height: '47px'}}>
          <article className="flex flex-col gap-1"><p className="text-xxs">Forum sur la Cybersécurité et la Vie Privée en Ligne</p>
          <article className="flex flex-row gap-2">
          <Image
          width={10}
          height={9}
          src={"/navbar/calendar.svg"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <p className="text-xxs">28 juin 2023 - 11h30</p>
            </article>
            
            </article>
            <p className="text-blue-500 text-xs cursor-pointer">Voir</p>

        </div>

            </div>
          </div>
          <div className="inline-block px-3">
            <div
            style={{width: '280px', height: '162px'}}
              className="flex flex-col relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
             <Image
          width={282}
          height={132}
          src={"/navbar/event2.png"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <div className="bg-white z-10 absolute bottom-0 rounded-lg px-4 py-3 flex flex-row justify-between items-center"style={{width: '280px', height: '47px'}}>
          <article className="flex flex-col gap-1"><p className="text-xxs">Congrès sur la Protection des Données </p>
          <article className="flex flex-row gap-2">
          <Image
          width={10}
          height={9}
          src={"/navbar/calendar.svg"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <p className="text-xxs">30 juin 2023 - 14h30</p>
            </article>
            
            </article>
            <p className="text-blue-500 text-xs cursor-pointer">Voir</p>

        </div>

            </div>
          </div>
          
          
          
        </div>
      </div>
</div></section>
<section className="flex flex-col gap-4 w-11/12 m-auto mt-3">
  <div className="text-sm">Evénements sur les réseaux sociaux</div>
<div className="flex flex-col  max-w-6xl">
      <div
        className="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
        <div
          className="flex flex-nowrap gap-6 "
        >
          <div className="inline-block">
            <div
            style={{width: '280px', height: '162px'}}
              className="flex flex-col relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
             <Image
          width={282}
          height={132}
          src={"/navbar/event4.png"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <div className="bg-white z-10 absolute bottom-0 rounded-lg px-4 py-3 flex flex-row justify-between items-center"style={{width: '280px', height: '47px'}}>
          <article className="flex flex-col gap-1"><p className="text-xxs">Réseaux sociaux, impact chez les enfants - en ligne</p>
          <article className="flex flex-row gap-2">
          <Image
          width={10}
          height={9}
          src={"/navbar/calendar.svg"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <p className="text-xxs">25 juillet 2023 - 10h30</p>
            </article>
            
            </article>
            <p className="text-blue-500 text-xs cursor-pointer">Voir</p>

        </div>

            </div>
          </div>
          <div className="inline-block px-3">
            <div
            style={{width: '280px', height: '162px'}}
              className="flex flex-col relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
             <Image
          width={282}
          height={132}
          src={"/navbar/event5.png"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <div className="bg-white z-10 absolute bottom-0 rounded-lg px-4 py-3 flex flex-row justify-between items-center"style={{width: '280px', height: '47px'}}>
          <article className="flex flex-col gap-1"><p className="text-xxs">Le pouvoir de guérir de l’addiction </p>
          <article className="flex flex-row gap-2">
          <Image
          width={10}
          height={9}
          src={"/navbar/calendar.svg"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <p className="text-xxs">01 août 2023 - 18h30</p>
            </article>
            
            </article>
            <p className="text-blue-500 text-xs cursor-pointer">Voir</p>

        </div>

            </div>
          </div>
          <div className="inline-block px-3">
            <div
            style={{width: '280px', height: '162px'}}
              className="flex flex-col relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
             <Image
          width={282}
          height={132}
          src={"/navbar/event6.png"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <div className="bg-white z-10 absolute bottom-0 rounded-lg px-4 py-3 flex flex-row justify-between items-center"style={{width: '280px', height: '47px'}}>
          <article className="flex flex-col gap-1"><p className="text-xxs">Isoskele - Salon sur l’impact des réseaux sociaux</p>
          <article className="flex flex-row gap-2">
          <Image
          width={10}
          height={9}
          src={"/navbar/calendar.svg"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <p className="text-xxs">09 septembre 2023 - 13h30</p>
            </article>
            
            </article>
            <p className="text-blue-500 text-xs cursor-pointer">Voir</p>

        </div>

            </div>
          </div>
          <div className="inline-block px-3">
            <div
            style={{width: '280px', height: '162px'}}
              className="flex flex-col relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
             <Image
          width={282}
          height={132}
          src={"/navbar/eventimg1.png"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <div className="bg-white z-10 absolute bottom-0 rounded-lg px-4 py-3 flex flex-row justify-between items-center"style={{width: '280px', height: '47px'}}>
          <article className="flex flex-col gap-1"><p className="text-xxs">Forum sur la Cybersécurité et la Vie Privée en Ligne</p>
          <article className="flex flex-row gap-2">
          <Image
          width={10}
          height={9}
          src={"/navbar/calendar.svg"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <p className="text-xxs">28 juin 2023 - 11h30</p>
            </article>
            
            </article>
            <p className="text-blue-500 text-xs cursor-pointer">Voir</p>

        </div>

            </div>
          </div>
          <div className="inline-block px-3">
            <div
            style={{width: '280px', height: '162px'}}
              className="flex flex-col relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
             <Image
          width={282}
          height={132}
          src={"/navbar/event2.png"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <div className="bg-white z-10 absolute bottom-0 rounded-lg px-4 py-3 flex flex-row justify-between items-center"style={{width: '280px', height: '47px'}}>
          <article className="flex flex-col gap-1"><p className="text-xxs">Congrès sur la Protection des Données </p>
          <article className="flex flex-row gap-2">
          <Image
          width={10}
          height={9}
          src={"/navbar/calendar.svg"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <p className="text-xxs">30 juin 2023 - 14h30</p>
            </article>
            
            </article>
            <p className="text-blue-500 text-xs cursor-pointer">Voir</p>

        </div>

            </div>
          </div>
          
          
          
        </div>
      </div>
</div></section>
<section className="flex flex-col gap-4 w-11/12 m-auto mt-3">
  <div className="text-sm">Evénements passé</div>
<div className="flex flex-col  max-w-6xl">
      <div
        className="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
        <div
          className="flex flex-nowrap gap-6 "
        >
          <div className="inline-block">
            <div
            style={{width: '280px', height: '162px'}}
              className="flex flex-col relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
             <Image
          width={282}
          height={132}
          src={"/navbar/event7.png"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <div className="bg-white z-10 absolute bottom-0 rounded-lg px-4 py-3 flex flex-row justify-between items-center"style={{width: '280px', height: '47px'}}>
          <article className="flex flex-col gap-1"><p className="text-xxs">Forum sur la Cybersécurité et la Vie Privée en Ligne</p>
          <article className="flex flex-row gap-2">
          <Image
          width={10}
          height={9}
          src={"/navbar/calendar.svg"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <p className="text-xxs">28 juin 2023 - 11h30</p>
            </article>
            
            </article>
            <p className="text-blue-500 text-xs cursor-pointer">Voir</p>

        </div>

            </div>
          </div>
          <div className="inline-block px-3">
            <div
            style={{width: '280px', height: '162px'}}
              className="flex flex-col relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
             <Image
          width={282}
          height={132}
          src={"/navbar/event6.png"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <div className="bg-white z-10 absolute bottom-0 rounded-lg px-4 py-3 flex flex-row justify-between items-center"style={{width: '280px', height: '47px'}}>
          <article className="flex flex-col gap-1"><p className="text-xxs">Isoskele - Salon sur l’impact des réseaux sociaux</p>
          <article className="flex flex-row gap-2">
          <Image
          width={10}
          height={9}
          src={"/navbar/calendar.svg"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <p className="text-xxs">09 septembre 2023 - 13h30</p>
            </article>
            
            </article>
            <p className="text-blue-500 text-xs cursor-pointer">Voir</p>

        </div>

            </div>
          </div>
          <div className="inline-block px-3">
            <div
            style={{width: '280px', height: '162px'}}
              className="flex flex-col relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
             <Image
          width={282}
          height={132}
          src={"/navbar/event5.png"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <div className="bg-white z-10 absolute bottom-0 rounded-lg px-4 py-3 flex flex-row justify-between items-center"style={{width: '280px', height: '47px'}}>
          <article className="flex flex-col gap-1"><p className="text-xxs">Le pouvoir de guérir de l’addiction </p>
          <article className="flex flex-row gap-2">
          <Image
          width={10}
          height={9}
          src={"/navbar/calendar.svg"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <p className="text-xxs">01 août 2023 - 18h30</p>
            </article>
            
            </article>
            <p className="text-blue-500 text-xs cursor-pointer">Voir</p>

        </div>

            </div>
          </div>
          
          <div className="inline-block px-3">
            <div
            style={{width: '280px', height: '162px'}}
              className="flex flex-col relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
             <Image
          width={282}
          height={132}
          src={"/navbar/eventimg1.png"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <div className="bg-white z-10 absolute bottom-0 rounded-lg px-4 py-3 flex flex-row justify-between items-center"style={{width: '280px', height: '47px'}}>
          <article className="flex flex-col gap-1"><p className="text-xxs">Forum sur la Cybersécurité et la Vie Privée en Ligne</p>
          <article className="flex flex-row gap-2">
          <Image
          width={10}
          height={9}
          src={"/navbar/calendar.svg"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <p className="text-xxs">28 juin 2023 - 11h30</p>
            </article>
            
            </article>
            <p className="text-blue-500 text-xs cursor-pointer">Voir</p>

        </div>

            </div>
          </div>
          <div className="inline-block px-3">
            <div
            style={{width: '280px', height: '162px'}}
              className="flex flex-col relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
             <Image
          width={282}
          height={132}
          src={"/navbar/event2.png"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <div className="bg-white z-10 absolute bottom-0 rounded-lg px-4 py-3 flex flex-row justify-between items-center"style={{width: '280px', height: '47px'}}>
          <article className="flex flex-col gap-1"><p className="text-xxs">Congrès sur la Protection des Données </p>
          <article className="flex flex-row gap-2">
          <Image
          width={10}
          height={9}
          src={"/navbar/calendar.svg"}
          priority={true}
          alt="user"
          className="z-0"
        />
        <p className="text-xxs">30 juin 2023 - 14h30</p>
            </article>
            
            </article>
            <p className="text-blue-500 text-xs cursor-pointer">Voir</p>

        </div>

            </div>
          </div>
          
          
          
        </div>
      </div>
</div></section>



    </section>
    )
}
export default testPage
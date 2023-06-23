"use client"
import Image from "next/image";
import { useState } from "react";


const Home = () => {
  const [params, setParams] = useState(false);

  const handleClick = () => {

    setParams(!params);

  }
 
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
            <p className="text-white text-sm">Ajouter un Widget</p>
          </div>
        </article>
      </section>
      
    </section>
    <section className="pl-10 flex flex-row gap-8">
        <article onClick={handleClick} className={ !params ? "border-b-2 border-b-darkbluehope text-sm cursor-pointer" : "text-grey2 text-sm cursor-pointer"}>Fonctionnalités</article>
        <article onClick={handleClick} className={ !params ?"text-grey2 text-sm cursor-pointer" : "border-b-2 border-b-darkbluehope text-sm cursor-pointer" }>Paramètres</article>

    </section>
    {!params? <section className="bg-greybg w-full flex-grow px-10 py-10">
        <section className="h-full flex flex-row gap-7">
        <section className="flex flex-col justify-between h-full">
            <section className="flex flex-col gap-5">
            <Image
                width={145}
                height={15}
                src={"./navbar/pourcenttitle.svg"}
                priority={true}
                alt="user"
                />
            <section className="flex flex-row gap-7">
            <article className="bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between" style={{width: '281px', height: '220px'}}>
                
                <article className="flex flex-row justify-between text-xs items-center"><p>En pourcentage</p> <Image
                width={33}
                height={8}
                src={"./navbar/dots2.svg"}
                priority={true}
                alt="user"
                /></article>
                <Image
                width={171}
                height={65}
                src={"./navbar/pourcent1.svg"}
                priority={true}
                alt="user"
                />
                <article className="flex flex-row justify-between items-center"><Image
                width={24}
                height={24}
                src={"./navbar/cloche.svg"}
                priority={true}
                alt="user"
                /><Image
                width={126}
                height={20}
                src={"./navbar/date1.svg"}
                priority={true}
                alt="user"
                /></article>
                
            </article>
            <article className="bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between" style={{width: '281px', height: '220px'}}>
                <article className="flex flex-row justify-between text-xs items-center"><p>En pourcentage</p> <Image
                width={33}
                height={8}
                src={"./navbar/dots2.svg"}
                priority={true}
                alt="user"
                /></article>
                <Image
                width={171}
                height={65}
                src={"./navbar/pourcent2.svg"}
                priority={true}
                alt="user"
                />
                <article className="flex flex-row justify-between items-center"><Image
                width={24}
                height={24}
                src={"./navbar/cloche.svg"}
                priority={true}
                alt="user"
                /><Image
                width={148}
                height={20}
                src={"./navbar/date2.svg"}
                priority={true}
                alt="user"
                /></article>
                
                
            </article>
            </section>
            </section>
            <section className="flex flex-col gap-5 ">
            <Image
                width={79}
                height={15}
                src={"./navbar/actutitle.svg"}
                priority={true}
                alt="user"
                />
                <Image className="cursor-pointer"
                width={590}
                height={150}
                src={"./navbar/actu.svg"}
                priority={true}
                alt="user"
                />
            
            </section>
        </section>
       <section className="overflow-hidden rounded-lg bg-white shadow-sm" style={{height: '500px'}}>
        <Image className=""
                height={500}
                width={420}
                src={"./navbar/twit2.svg"}
                priority={true}
                alt="user"
                />
        
        </section></section>
            
    </section> : <section className="bg-greybg w-full flex-grow px-10 py-10">
      
      <article className="flex flex-row" style={{gap:'34px', marginBottom: '48px'}}>
    <Image className=""
                height={89}
                width={89}
                src={"/navbar/profil.svg"}
                priority={true}
                alt="user"
                />
                <article className="flex flex-row items-center" style={{ gap: '8px' }}>
                <button className="bg-darkbluehope text-white text-xs rounded-lg" style={{ width: '148px', height: '34px' }}>Changer mon avatar</button>
                <button className="bg-red-500 text-white text-xs rounded-lg" style={{ width: '90px', height: '34px' }}>Supprimer</button>
                </article>
      </article>
      <section className="flex flex-col" style={{gap :'20px'}}>
        <article className="flex flex-row" style={{gap :'41px'}}>
      <article className="flex flex-col gap-2 justify-start">

          <p>Prénom*</p>
            <input style={{width : '485px', height: '42px'}} type="text" className=" border border-greyhover p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkbluehope placeholder:text-greyhover placeholder:font-light" placeholder="Saisir votre prénom"></input>
          </article>
      <article className="flex flex-col gap-2 justify-start">

          <p>Nom de famille *</p>
            <input style={{width : '485px', height: '42px'}} type="text" className=" border border-greyhover p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkbluehope placeholder:text-greyhover placeholder:font-light" placeholder="Saisir votre nom de famille"></input>
          </article>


      </article>
        <article className="flex flex-row" style={{gap :'41px'}}>
      <article className="flex flex-col gap-2 justify-start">

          <p>Numéro de téléphone (Facultatif)</p>
            <input style={{width : '485px', height: '42px'}} type="text" className=" border border-greyhover p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkbluehope placeholder:text-greyhover placeholder:font-light" placeholder="Saisir votre numéro de téléphone"></input>
          </article>
      <article className="flex flex-col gap-2 justify-start">

          <p>Email</p>
            <input style={{width : '485px', height: '42px'}} type="text" className=" border border-greyhover p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkbluehope placeholder:text-greyhover placeholder:font-light" placeholder="Saisir votre adresse email"></input>
          </article>


      </article>
        <article className="flex flex-row " style={{gap : '20px'}}>
      <article className="flex flex-col gap-2 justify-start">

          <p>Adresse</p>
            <input style={{width : '258px', height: '42px'}} type="text" className=" border border-greyhover p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkbluehope placeholder:text-greyhover placeholder:font-light" placeholder="Saisir votre adresse"></input>
          </article>
      <article className="flex flex-col gap-2 justify-start">

          <p>Code Postal</p>
            <input style={{width : '258px', height: '42px'}} type="text" className=" border border-greyhover p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkbluehope placeholder:text-greyhover placeholder:font-light" placeholder="Saisir votre code postal"></input>
          </article>
      <article className="flex flex-col gap-2 justify-start">

          <p>Ville</p>
            <input style={{width : '258px', height: '42px'}} type="text" className=" border border-greyhover p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkbluehope placeholder:text-greyhover placeholder:font-light" placeholder="Saisir votre ville"></input>
          </article>
      <article className="flex flex-col gap-2 justify-start">

          <p>Pays</p>
            <input style={{width : '176px', height: '42px'}} type="text" className=" border border-greyhover p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkbluehope placeholder:text-greyhover placeholder:font-light" placeholder="Saisir votre pays"></input>
          </article>
      


      </article>

      <article className="flex flex-col gap-2 justify-start">

          <p>Couleur du thème</p>
          <Image className=""
                width={513}
                height={44}
                src={"./navbar/colors.svg"}
                priority={true}
                alt="user"
                />
          <p className="text-grey2 text-xs">Veuillez sélectionner une couleur afin de personnaliser votre interface</p>
          </article>
      


        </section></section>
            
    }
    
    </section>
  );
};
export default Home;

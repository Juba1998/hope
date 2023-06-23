import Image from "next/image";

const testPage = () => {
  return (
    <section
      className="flex flex-col gap-8 items-center"
      style={{ padding: "24px", width: "1207px" }}
    >
      <section className="flex flex-row" style={{ gap: "16px" }}>
        <button
          className="bg-darkbluehope text-white text-xs rounded-lg"
          style={{ width: "185px", height: "41px" }}
        >
          Respect de la vie privée
        </button>
        <button
          className="bg-white text-black border border-black text-xs rounded-lg"
          style={{ width: "224px", height: "41px" }}
        >
          Transparence de l'information
        </button>
        <button
          className="bg-white text-black border border-black text-xs rounded-lg"
          style={{ width: "168px", height: "41px" }}
        >
          Responsabilité sociale
        </button>
        <button
          className="bg-white text-black border border-black text-xs rounded-lg"
          style={{ width: "168px", height: "41px" }}
        >
          Évite le harcèlement
        </button>
        <button
          className="bg-white text-black border border-black text-xs rounded-lg"
          style={{ width: "168px", height: "41px" }}
        >
          Promotion de l'inclusivité
        </button>
      </section>
      <section
        className="bg-white rounded-lg shadow-lg w-full flex flex-row justify-between"
        style={{ padding: "24px", height: "220px" }}
      >
        <article className=" flex flex-col gap-2 w-2/3">
          <p className="text-lg font-medium mb-2">
            Le respect de la vie privée
          </p>
          <p className="text-sm leading-4 font-light">
            Le respect de la vie privée sur les réseaux sociaux concerne la{" "}
            <span className="font-semibold">
              protection des informations personnelles
            </span>{" "}
            et la préservation de l'autonomie individuelle lors de l'utilisation
            de ces plateformes.
          </p>
          <p className="text-sm leading-4 font-light">
            Cela implique la{" "}
            <span className="font-semibold">confidentialité </span>des données
            personnelles, la gestion des paramètres de confidentialité, la
            protection contre la collecte excessive de données, la sécurité des
            informations, le contrôle sur le contenu partagé, ainsi que la{" "}
            <span className="font-semibold">sensibilisation</span> et
            l'éducation des utilisateurs.
          </p>
          <p className="text-sm leading-4 font-light">
            Le respect de la <span className="font-semibold">vie privée</span>{" "}
            est une responsabilité partagée entre les utilisateurs et les
            plateformes, qui doivent prendre des mesures pour garantir la
            confidentialité et la sécurité des données.
          </p>
        </article>
        <Image
          width={281}
          height={187}
          src={"/navbar/respect.png"}
          priority={true}
          alt="user"
        />
      </section>
      <div className="bg-black" style={{height: '1px', width: '1000px'}}></div>
      <section className="flex flex-row justify-between w-full">
      <section className="flex flex-col" style={{gap: '8px', width: '458px'}}>

        <article className="flex flex-row bg-white shadow-md rounded-lg px-6 py-4 items-center justify-between" style={{height: '80px', width: '455px'}}>
            <article className="flex flex-row items-center gap-2">
            <div className="rounded-full border border-black text-sm font-light flex flex-row items-center justify-center " style={{height: '27px', width: '36px'}}>1</div>
        <Image
          width={48}
          height={48}
          src={"/navbar/first.png"}
          priority={true}
          alt="user"
        /></article>
        <article className="flex flex-col " style={{}}>
            <p className="font-normal text-sm">Administrateur</p>
            <p className="font-semibold text-sm">Marco <span className="font-normal">Lambertini</span></p>

        </article>
        <p className="font-medium">Score : 10/10</p>
        <Image
          width={44}
          height={44}
          src={"/navbar/crowny.svg"}
          priority={true}
          alt="user"
        />
        </article>
        <article className="flex flex-row bg-white shadow-md rounded-lg px-6 py-4 items-center justify-between" style={{height: '80px', width: '455px'}}>
            <article className="flex flex-row items-center gap-2">
            <div className="rounded-full border border-black text-sm font-light flex flex-row items-center justify-center " style={{height: '27px', width: '36px'}}>2</div>
        <Image
          width={48}
          height={48}
          src={"/navbar/sec.png"}
          priority={true}
          alt="user"
        /></article>
        <article className="flex flex-col " style={{}}>
            <p className="font-normal text-sm">Commerçiale</p>
            <p className="font-semibold text-sm">Paolo <span className="font-normal">Loubert</span></p>

        </article>
        <p className="font-medium">Score : 9/10</p>
        <Image
          width={44}
          height={44}
          src={"/navbar/crowng.svg"}
          priority={true}
          alt="user"
        />
        </article>
        <article className="flex flex-row bg-white shadow-md rounded-lg px-6 py-4 items-center justify-between" style={{height: '80px', width: '455px'}}>
            <article className="flex flex-row items-center gap-2">
            <div className="rounded-full border border-black text-sm font-light flex flex-row items-center justify-center " style={{height: '27px', width: '36px'}}>3</div>
        <Image
          width={48}
          height={48}
          src={"/navbar/third.png"}
          priority={true}
          alt="user"
        /></article>
        <article className="flex flex-col " style={{}}>
            <p className="font-normal text-sm">UX Designer</p>
            <p className="font-semibold text-sm">Jean <span className="font-normal">Debros</span></p>

        </article>
        <p className="font-medium">Score : 8/10</p>
        <Image
          width={44}
          height={44}
          src={"/navbar/crownb.svg"}
          priority={true}
          alt="user"
        />
        </article>
        <article className="flex flex-row bg-white shadow-md rounded-lg px-6 py-4 items-center justify-between" style={{height: '80px', width: '455px'}}>
            <article className="flex flex-row items-center gap-2">
            <div className="rounded-full border border-black text-sm font-light flex flex-row items-center justify-center " style={{height: '27px', width: '36px'}}>4</div>
        <Image
          width={48}
          height={48}
          src={"/navbar/four.png"}
          priority={true}
          alt="user"
        /></article>
        <article className="flex flex-col " style={{}}>
            <p className="font-normal text-sm">Retail</p>
            <p className="font-semibold text-sm">London <span className="font-normal">Bertrot</span></p>

        </article>
        <p className="font-medium">Score : 6/10</p>
        <Image
          width={44}
          height={44}
          src={"/navbar/crownw.svg"}
          priority={true}
          alt="user"
        />
        </article>
        <button
          
          className="bg-white text-darkbluehope text-xs rounded-lg"
          style={{ width: "455px", height: "39px" }}
        >
          Voir plus
        </button>

      </section>
      <section className=" flex justify-center bg-white rounded-lg shadow-md" style={{height: '371px', width: '634px'}} >
      <section className="flex flex-col" style={{ gap: '14px'}}>
        <article>
      <p className="text-3xl italic">Quizz</p>
      <p className="text-sm text-darkbluehope">Question 1/10</p>
      </article>
      <p className="text-lg">Qu'est-ce que le respect de la vie privée sur les réseaux sociaux ?</p>
      <article className="flex flex-col" style={{gap: '14px'}}></article>
      <article className="flex flex-row" style={{gap: '14px'}}>
        <article className="bg-white rounded-lg shadow-md flex flex-row items-center justify-center gap-4" style={{height: '85px', width: '249px'}}>
          <div className="rounded-full border border-black "style={{height: '22px', width: '22px'}}></div>
          <p className="text-center text-xs">Protéger ses informations <br></br>personnelles uniquement.</p>
        </article>
        <article className="bg-white rounded-lg shadow-md flex flex-row items-center justify-center gap-2" style={{height: '85px', width: '249px'}}>
          <div className="rounded-full border border-black "style={{height: '22px', width: '22px'}}></div>
          <p className="text-center text-xs">Préserver l'autonomie individuelle <br></br>lors de l'utilisation des réseaux.</p>
        </article>
      </article>
      <article className="flex flex-row" style={{gap: '14px'}}>
      <article className="bg-white rounded-lg shadow-md flex flex-row items-center justify-center gap-2" style={{height: '85px', width: '249px'}}>
          <div className="rounded-full border border-black "style={{height: '22px', width: '22px'}}></div>
          <p className="text-center text-xs">Éviter les interactions sociales<br></br> en ligne.</p>
        </article>
      <article className="bg-white rounded-lg shadow-md flex flex-row items-center justify-center gap-10" style={{height: '85px', width: '249px'}}>
          <div className="rounded-full border border-black "style={{height: '22px', width: '22px'}}></div>
          <p className="text-center text-xs">Publier les coordonnées <br></br> postale de son domicile</p>
        </article>
     
      </article>
      <button
          className="bg-darkbluehope text-white text-xs rounded-lg"
          style={{ width: "512px", height: "39px" }}
        >
         Valider 
        </button>
      </section></section>
      </section>
    </section>
  );
};
export default testPage;

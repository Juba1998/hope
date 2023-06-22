"use client";
import Image from "next/image";
import { useState } from "react";
import { Loading } from "react-loading-dot";
import styles from "./Post.module.scss";

const testPage = () => {
  const [loading, setLoading] = useState(false);
  const [postdrag, setPostdrag] = useState(false);
  const [posttext, setPosttext] = useState(false);
  const [search, setSearch] = useState(false);

  const handleClick = () => {
    if (postdrag && posttext) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSearch(true);
      }, 3000);

    }
  };

  const handleClick2 = () => {
    setPostdrag(true);
  };
  const handleClick3 = () => {
    setPosttext(true);
  };

  const reset = () => {
    setPostdrag(false);
    setPosttext(false);
    setSearch(false);
    setLoading(false);

  };

  return (
    <section
      className="flex flex-row"
      style={{
        paddingLeft: "19.5px",
        paddingRight: "19.5px",
        paddingTop: "40.63px",
        paddingBottom: "40.63px",
        gap: "40.53px",
      }}
    >
      <section className="flex flex-col" style={{ gap: "40.63px" }}>
        {!postdrag ? (
          <Image
            onClick={handleClick2}
            width={471}
            height={433}
            src={"./navbar/postdrag.svg"}
            priority={true}
            alt="user"
          />
        ) : (
          <Image
            width={471}
            height={433}
            src={"/navbar/maeva.png"}
            priority={true}
            alt="user"
          />
        )}
        {!posttext ? (
          <Image
            onClick={handleClick3}
            width={471}
            height={162}
            src={"./navbar/posttext.svg"}
            priority={true}
            alt="user"
          />
        ) : (
          <Image
            width={471}
            height={162}
            src={"./navbar/maevatext.svg"}
            priority={true}
            alt="user"
          />
        )}
        {!search ? <button
          onClick={handleClick}
          className="bg-darkbluehope text-white text-xs rounded-lg"
          style={{ width: "471px", height: "39px" }}
        >
          Analyser ma publication
        </button>: <button
          onClick={reset}
          className="bg-white text-darkbluehope text-xs rounded-lg"
          style={{ width: "471px", height: "39px" }}
        >
          Réinitialiser
        </button>}
      </section>
          { search ? <section
          className="flex flex-col items-center "
          style={{ width: "550px", gap: "19.51px" }}
        >
          <article className="flex flex-col" style={{ gap: "13px" }}>
            <Image
              width={238}
              height={47}
              src={"./navbar/vdplogo.svg"}
              priority={true}
              alt="user"
              className="m-auto"
            />
            <div
              className="bg-greyhover"
              style={{ width: "490px", height: "0.81px" }}
            ></div>
            <p className="text-xs">
              Le validateur va t’aider à améliorer tes publications, dans un
              contexte de bienveillance.
            </p>
          </article>
          <article className="flex flex-col items-center justify-center">
            <div className="bg-white rounded-lg shadow-md flex flex-col justify-between" style={{ width: "491px", height: "200px" , padding: '19.51px'}} > 
            <div className="rounded-lg flex flex-row justify-start items-center gap-2" style={{ height: "39px" , padding: '10px', backgroundColor: '#D2DEFB'}}>
            <Image
              width={22.57}
              height={17.79}
              src={"./navbar/imgicon.svg"}
              priority={true}
              alt="user"
              className=""
            />
            <p>Image</p>
            </div>
            <div className="flex flex-col items-start" style={{gap: '4px'}}>
              <article className="flex flex-row justify-start items-center gap-2 ">
              <Image
              width={16}
              height={16}
              src={"./navbar/cross.svg"}
              priority={true}
              alt="user"
              className="m-auto"
            />
            <p>Contenu à caractère pornographique</p>
              </article>
              <article className="flex flex-row justify-start items-center gap-2 ">
              <Image
              width={16}
              height={16}
              src={"./navbar/cross.svg"}
              priority={true}
              alt="user"
              className="m-auto"
            />
            <p>Fake news</p>
              </article>
              <article className="flex flex-row justify-start items-center gap-2 ">
              <Image
              width={16}
              height={16}
              src={"./navbar/cross.svg"}
              priority={true}
              alt="user"
              className="m-auto"
            />
            <p>Post non signalé sponsorisé</p>
              </article>
              <article className="flex flex-row justify-start items-center gap-2 ">
              <Image
              width={16}
              height={16}
              src={"./navbar/cross.svg"}
              priority={true}
              alt="user"
              className="m-auto"
            />
            <p>Incitation à la haine</p>
              </article>
           
              
            </div>
            </div>
          
          </article>
          <article className="flex flex-col items-center justify-center">
            <div className="bg-white rounded-lg shadow-md flex flex-col justify-between" style={{ width: "491px", height: "200px" , padding: '19.51px'}} > 
            <div className="rounded-lg flex flex-row justify-start items-center gap-2" style={{ height: "39px" , padding: '10px', backgroundColor: '#D2DEFB'}}>
            <Image
              width={12}
              height={14}
              src={"./navbar/texticon.svg"}
              priority={true}
              alt="user"
              className=""
            />
            <p>Texte</p>
            </div>
            <div className="flex flex-col items-start" style={{gap: '4px'}}>
              <article className="flex flex-row justify-start items-center gap-2 ">
              <Image
              width={16}
              height={16}
              src={"./navbar/cross.svg"}
              priority={true}
              alt="user"
              className="m-auto"
            />
            <p>Insultes</p>
              </article>
              <article className="flex flex-row justify-start items-center gap-2 ">
              <Image
              width={16}
              height={16}
              src={"./navbar/cross.svg"}
              priority={true}
              alt="user"
              className="m-auto"
            />
            <p>Hashtag non représentatif de la publication</p>
              </article>
              <article className="flex flex-row justify-start items-center gap-2 ">
              <Image
              width={16}
              height={16}
              src={"./navbar/cross.svg"}
              priority={true}
              alt="user"
              className="m-auto"
            />
            <p>Incitation à la haine</p>
              </article>
              <article className="flex flex-row justify-start items-center gap-2 ">
              <Image
              width={16}
              height={16}
              src={"./navbar/cross.svg"}
              priority={true}
              alt="user"
              className="m-auto"
            />
            <p>Vente d’un programme interdit aux enfants</p>
              </article>
           
              
            </div>
            </div>
          
          </article>
          <button
          
          className="bg-darkbluehope text-white text-xs rounded-lg"
          style={{ width: "491px", height: "39px" }}
        >
          Retrouver votre guide des pratiques
        </button>
          <button
          
          className="bg-white text-darkbluehope text-xs rounded-lg"
          style={{ width: "491px", height: "39px" }}
        >
          Signaler une informations qui vous sembles sensible sur cette publication
        </button>
        </section> :  
          <>
      {loading ? (
        <section
          className="flex flex-col justify-between"
          style={{ width: "550px" }}
        >
          <article className="flex flex-col" style={{ gap: "13px" }}>
            <Image
              width={238}
              height={47}
              src={"./navbar/vdplogo.svg"}
              priority={true}
              alt="user"
              className="m-auto"
            />
            <div
              className="bg-greyhover"
              style={{ width: "490px", height: "0.81px" }}
            ></div>
            <p className="text-xs">
              Le validateur va t’aider à améliorer tes publications, dans un
              contexte de bienveillance.
            </p>
          </article>
          <article className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center p-5">
              <div className="flex space-x-2 ">
                <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce delay-100 "></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full  animate-bounce delay-150"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full  animate-bounce delay-200"></div>
              </div>
            </div>
          </article>
          <article></article>
        </section>
      ) : (
        <section
          className="flex flex-col justify-between"
          style={{ width: "550px" }}
        >
          <article className="flex flex-col" style={{ gap: "13px" }}>
            <Image
              width={238}
              height={47}
              src={"./navbar/vdplogo.svg"}
              priority={true}
              alt="user"
              className="m-auto"
            />
            <div
              className="bg-greyhover"
              style={{ width: "490px", height: "0.81px" }}
            ></div>
            <p className="text-xs">
              Le validateur va t’aider à améliorer tes publications, dans un
              contexte de bienveillance.
            </p>
          </article>
          <article className="flex flex-col items-center justify-center">
            <p className="text-lg font-semibold">Aucun résultats</p>
            <p className="text-center text-xs gap-2">
              Analyser une publication pour démarrer le validateur
            </p>
          </article>
          <article></article>
        </section>
      )}</>}
    </section>
  );
};
export default testPage;

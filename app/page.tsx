import styles from "./App.module.scss"
import { Button } from "@/components/_UI/button"
import Image from "next/image";
import Link from "next/link";


export default function Home() {

  return (
    <section className="h-screen flex flex-row justify-center items-center">
      <div className="bg-white flex flex-col items-center shadow-lg gap-12 justify-around p-16" style={{width: '480px', height: '675px', borderRadius: "0.5rem" }}>
        <article>
        <Image
            width={144}
            height={24}
            src={"./navbar/logoiso.svg"}
            priority={true}
            alt="logo"
          />
        </article>
        <article className="flex flex-col items-center gap-4">
          <p className="text-3xl font-medium">Bienvenue sur Hope !</p>
          <p className="text-sm font-light">Connectez-vous pour accéder à Hope</p>
        </article>
        <section className="flex flex-col gap-4" style={{width: '432px'}}>
          <article className="flex flex-col gap-2 justify-start">
          <p>Adresse e-mail</p>
            <input className="w-full border border-greyhover h-12 p-4 rounded-lg focus:border-2 focus:border-darkbluehope focus:outline-none placeholder:text-greyhover placeholder:font-light" placeholder="Saisir une adresse e-mail"></input>
          </article>
          <article className="flex flex-col gap-2 justify-start">
          <p>Mot de Passe</p>
            <input type="password" className="w-full border border-greyhover h-12 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-darkbluehope placeholder:text-greyhover placeholder:font-light" placeholder="Saisir un mot de passe"></input>
          </article>
          <article className="p-4">
            <p className="text-darkbluehope">Mot de passe oublié &apos;?</p>
          </article>
        </section>
        <article className="flex flex-col gap-4 w-full">
        <Link
              className="bg-darkbluehope text-white w-full flex flex-row items-center justify-center"
              href={"/home"}
              style={{height: '48px', borderRadius: '8px'}}
            >
              Connexion
            </Link>
            <p className="text-darkbluehope text-xs text-center">Utiliser l&apos;empreinte digitale ou la reconnaissance faciale</p>

       </article>
      </div>
    </section>
  )
}

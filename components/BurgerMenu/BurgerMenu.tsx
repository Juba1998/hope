"use client";
import styles from "./BurgerMenu.module.scss";
import { useState } from "react";
import Image from "next/image";

export const BurgerMenu = (): JSX.Element => {
  const [burger, setBurger] = useState<boolean>(false);

  return (
    <div>
      <div className="" onClick={() => setBurger(true)}>
        <Image alt="menu-burger" src="/burger.svg" width={32} height={32} />
      </div>
      {burger ? (
        <section
          className="fixed inset-0 z-50 pt-28"
          style={{ backgroundColor: "#0D0601" }}
        >
          <section className="flex flex-col items-center gap-8 ">
            <Image
              alt="menu-burger"
              src="/close-burger.svg"
              width={48}
              height={48}
              className="mb-8 "
              onClick={() => setBurger(false)}
            />
            <button
              className="w-64 h-14 rounded-lg flex flex-row gap-8 justify-center items-center"
              style={{ backgroundColor: "#FFFEF0" }}
            >
              <p className="uppercase text-xl font-semibold">Rechercher</p>
              <Image
                alt="menu-burger"
                src="/search-icon.svg"
                width={32}
                height={32}
              />
            </button>
            <article>
              <p
                className="uppercase text-xl font-semibold"
                style={{ color: "#FFFEF0" }}
              >
                Contact
              </p>
            </article>
            <article>
              <p
                className="uppercase text-xl font-semibold"
                style={{ color: "#FFFEF0" }}
              >
                À Propos
              </p>
            </article>
          </section>
        </section>
      ) : null}
    </div>
  );
};

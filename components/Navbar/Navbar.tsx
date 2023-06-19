"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

export const Navbar = (): JSX.Element => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="w-64 h-screen bg-white p-6">
      <section className="flex flex-col gap-12 2xl:gap-4">
        <section>
          <Image
            width={88}
            height={94}
            src={"./navbar/logo.svg"}
            priority={true}
            alt="logo"
          />
        </section>

        <section className="flex flex-col gap-4 2xl:gap-2">
          <p className="text-2xl 2xl:text-xl font-semibold">Général</p>

          <article
            className={
              pathname == "/home"
                ? "cursor-pointer bg-purplehope w-52 h-11 flex flex-row items-center gap-4 pl-6"
                : "cursor-pointer w-52 h-11 flex flex-row items-center gap-4 pl-6"
            }
            style={{ borderRadius: "0.5rem" }}
          >
            {pathname == "/home" ? (
              <Image
                width={30}
                height={25}
                src={"./navbar/dashboardwhite.svg"}
                priority={true}
                alt="logo"
              />
            ) : (
              <Image
                width={30}
                height={25}
                src={"./navbar/dashboard.svg"}
                priority={true}
                alt="logo"
              />
            )}

            <Link
              className={
                pathname == "/home"
                  ? "text-white font-medium"
                  : "text-black font-medium"
              }
              href={"/home"}
            >
              Dashboard
            </Link>
          </article>
          <article
            className={
              pathname == "/event"
                ? "cursor-pointer bg-purplehope w-52 h-11 flex flex-row items-center gap-4 pl-6"
                : "cursor-pointer w-52 h-11 flex flex-row items-center gap-4 pl-6"
            }
            style={{ borderRadius: "0.5rem" }}
          >
            {pathname == "/event" ? (
              <Image
                width={28}
                height={28}
                src={"./navbar/eventwhite.svg"}
                priority={true}
                alt="logo"
              />
            ) : (
              <Image
                width={28}
                height={28}
                src={"./navbar/event.svg"}
                priority={true}
                alt="logo"
              />
            )}

            <Link
              className={
                pathname == "/event"
                  ? "text-white font-medium"
                  : "text-black font-medium"
              }
              href={"/event"}
            >
              Évènements
            </Link>
          </article>
        </section>

        <section className="flex flex-col gap-4 2xl:gap-2">
          <p className="text-2xl 2xl:text-xl font-semibold">Ressources</p>

          <article
            className={
              pathname == "/plugin"
                ? "cursor-pointer bg-purplehope w-52 h-11 flex flex-row items-center gap-4 pl-6"
                : "cursor-pointer w-52 h-11 flex flex-row items-center gap-4 pl-6"
            }
            style={{ borderRadius: "0.5rem" }}
          >
            {pathname == "/plugin" ? (
              <Image
                width={30}
                height={25}
                src={"./navbar/pluginwhite.svg"}
                priority={true}
                alt="logo"
              />
            ) : (
              <Image
                width={30}
                height={25}
                src={"./navbar/plugin.svg"}
                priority={true}
                alt="logo"
              />
            )}

            <Link
              className={
                pathname == "/plugin"
                  ? "text-white font-medium"
                  : "text-black font-medium"
              }
              href={"/plugin"}
            >
              Plugin
            </Link>
          </article>
          <article
            className={
              pathname == "/post"
                ? "cursor-pointer bg-purplehope w-52 h-11 flex flex-row items-center gap-4 pl-6"
                : "cursor-pointer w-52 h-11 flex flex-row items-center gap-4 pl-6"
            }
            style={{ borderRadius: "0.5rem" }}
          >
            {pathname == "/post" ? (
              <Image
                width={28}
                height={28}
                src={"./navbar/postwhite.svg"}
                priority={true}
                alt="logo"
              />
            ) : (
              <Image
                width={28}
                height={28}
                src={"./navbar/post.svg"}
                priority={true}
                alt="logo"
              />
            )}

            <Link
              className={
                pathname == "/post"
                  ? "text-white font-medium"
                  : "text-black font-medium"
              }
              href={"/post"}
            >
              ValideTonPost
            </Link>
          </article>
          <article
            className={
              pathname == "/guide"
                ? "cursor-pointer bg-purplehope w-52 h-11 flex flex-row items-center gap-4 pl-6"
                : "cursor-pointer w-52 h-11 flex flex-row items-center gap-4 pl-6"
            }
            style={{ borderRadius: "0.5rem" }}
          >
            {pathname == "/guide" ? (
              <Image
                width={28}
                height={28}
                src={"./navbar/bookwhite.svg"}
                priority={true}
                alt="logo"
              />
            ) : (
              <Image
                width={28}
                height={28}
                src={"./navbar/book.svg"}
                priority={true}
                alt="logo"
              />
            )}

            <Link
              className={
                pathname == "/guide"
                  ? "text-white font-medium text-sm text-left leading-5"
                  : "text-black font-medium text-sm"
              }
              href={"/guide"}
            >
              Guide des bonnes pratiques
            </Link>
          </article>
        </section>
        <section className="flex flex-col gap-4 2xl:gap-2">
          <p className="text-2xl 2xl:text-xl font-semibold">Paramètres</p>

          <article
            className={
              pathname == "/settings"
                ? "cursor-pointer bg-purplehope w-52 h-11 flex flex-row items-center gap-4 pl-6"
                : "cursor-pointer w-52 h-11 flex flex-row items-center gap-4 pl-6"
            }
            style={{ borderRadius: "0.5rem" }}
          >
            {pathname == "/settings" ? (
              <Image
                width={30}
                height={25}
                src={"./navbar/settingswhite.svg"}
                priority={true}
                alt="logo"
              />
            ) : (
              <Image
                width={30}
                height={25}
                src={"./navbar/settings.svg"}
                priority={true}
                alt="logo"
              />
            )}

            <Link
              className={
                pathname == "/settings"
                  ? "text-white font-medium"
                  : "text-black font-medium"
              }
              href={"/settings"}
            >
              Configuration
            </Link>
          </article>
          <article
            className={
              pathname == "/access"
                ? "cursor-pointer bg-purplehope w-52 h-11 flex flex-row items-center gap-4 pl-6"
                : "cursor-pointer w-52 h-11 flex flex-row items-center gap-4 pl-6"
            }
            style={{ borderRadius: "0.5rem" }}
          >
            {pathname == "/access" ? (
              <Image
                width={28}
                height={28}
                src={"./navbar/accesswhite.svg"}
                priority={true}
                alt="logo"
              />
            ) : (
              <Image
                width={28}
                height={28}
                src={"./navbar/access.svg"}
                priority={true}
                alt="logo"
              />
            )}

            <Link
              className={
                pathname == "/access"
                  ? "text-white font-medium"
                  : "text-black font-medium"
              }
              href={"/access"}
            >
              Accessiblité
            </Link>
          </article>
        </section>
        <article className="flex flex-col items-center justify-center bottom-4 absolute">
          <Image width={208} height={64} src={"./navbar/userinfo.svg"} alt="userinfo"/>
          <div className="flex justify-center cursor-pointer" style={{width:"208px", height:"48px"}}><span className="text-red-500">Se déconnecter</span></div>
        </article>

      </section>
    </div>
  );
};

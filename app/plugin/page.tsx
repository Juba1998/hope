const testPage = () => {
    return (
        <section className="flex flex-row items-center m-auto">
           <section className="flex flex-col items-center" style={{gap: '24px'}}>
            <p className="text-2xl">Télécharger le plugin</p>
            <p className="text-sm text-center font-light">Télécharger le plugin, pour pouvoir profiter de toute l’expérience de Hope
partout sur le web.</p>
        <article className="flex flex-row" style={{gap: '24px'}}>
        <button
          className="bg-white border border-darkbluehope text-darkbluehope text-xs rounded-lg"
          style={{ width: "250px", height: "48px" }}
        >
         En savoir plus
        </button>
        <button
          className="bg-darkbluehope text-white text-xs rounded-lg"
          style={{ width: "250px", height: "48px" }}
        >
         <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/61md25BviKdkwfo5n85ZaZ/Hackathon---JUIN?page-id=135%3A2[…]-zoom&disable-default-keyboard-nav=1&hotspot-hints=0&hide-ui=1">Télécharger </a>
        </button>
        </article>
           </section>
        </section>
    )
}
export default testPage
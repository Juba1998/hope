import styles from "./App.module.scss"
import { Button } from "@/components/_UI/button"


export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Trouvez la voiture de vos rêves</h1>
      <Button>Recherche</Button>
    </main>
  )
}

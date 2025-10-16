import React from "react"
import Header from "./components/Header/Header"
import { ReactLenis, useLenis } from "lenis/react"
import Footer from "./components/footer/Footer"

function App() {
  const lenisRef = React.useRef()

  React.useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time)
    }

    const rafId = requestAnimationFrame(update)

    return () => cancelAnimationFrame(rafId)
  }, [])



  return (
    <>
      <ReactLenis root /><ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <Header />
      <main className="container">
        {/* <div className="in-progress-container">
          <h1>🚧 Website Under Construction 🚧</h1>
        </div> */}

        <div className="about">
          <div>
            <h1>Fuzer DEV</h1>
            <p>Hi! My name is João,  I'm 23 years old and I'm from Brazil. Let's built more than a website a <strong> experience!</strong></p>
          </div>
          <div className="dwight-image">
            <img src="./luci.png" alt="" />
          </div>

        </div>
        <section className="projects-section">
          <h2>Projects (?)</h2>
          <div className="projects-cards">
            <div className="card-projects">
              <p>1. Quiz interativo</p>
              <div className="card-img">
                <p>Um quiz interativo, com 5 perguntas diretas. Você possui 3 vidas e a cada resposta errada você perde uma delas. Após perder todas as 3 vidas o quiz recomeça.</p>
              </div>
            </div>

            <div className="card-projects">
              <p>2. Cineboxd</p>
              <div className="card-img">
                <p>Uma nova forma de avaliar e salvar filmes que já assistiu. Atualmente em fase inicial de desenvolvimento, mas a ideia é fazer algo parecido com o letterboxd</p>
              </div>

            </div>

            <div className="card-projects">
              <p>3. Galos Foda</p>
              <div className="card-img">
                <p>Em breve...</p>
              </div>

            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App

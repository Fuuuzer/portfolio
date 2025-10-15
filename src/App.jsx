import React from "react"
import Header from "./components/Header/Header"
import { ReactLenis, useLenis } from "lenis/react"

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
        <div className="in-progress-container">
          <h1>🚧 Website Under Construction 🚧</h1>
        </div>

        <div className="about">
          <div>
            <h1>Fuzer DEV</h1>
            <p>Hi! My name is João,  I'm 23 years old and I'm from Brazil. Let's built more than a website a <strong> experience!</strong></p>
          </div>
          <div className="dwight-image">
            <img src="./dwight.webp" alt="" />
          </div>

        </div>
        <section className="projects-section">
          <h2>Projects (?)</h2>
          <div className="projects-cards">
            <div className="card-projects">
              <div className="card-img">
                <p>imagem aqui</p>
              </div>
              <p>1. Quiz interativo</p>
            </div>

            <div className="card-projects">
              <div className="card-img">
                <p>imagem aqui</p>
              </div>
              <p>2. Cineboxd</p>
            </div>

            <div className="card-projects">
              <div className="card-img">
                <p>imagem aqui</p>
              </div>
              <p>3. Galos Foda</p>
            </div>

          </div>
        </section>


      </main>
    </>
  )
}

export default App

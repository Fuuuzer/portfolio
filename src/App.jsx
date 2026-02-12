import React from "react"
import Header from "./components/Header/Header"
import { ReactLenis, useLenis } from "lenis/react"
import Footer from "./components/footer/Footer"

function App() {
  const lenisRef = React.useRef();
  const [bg, setBg] = React.useState('');
  const [openProject, setOpenProject] = React.useState(false);

  React.useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time)
    }

    setTimeout(() => {
      setBg(() => 'anima')
    }, 1000)

    const rafId = requestAnimationFrame(update)

    return () => cancelAnimationFrame(rafId)
  }, [])

  function handleClick() {
    setOpenProject((prevState) => !prevState);
  }

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
            <h1>João Fuzer</h1>
            <p>Eai! Meu nome é João, moro no Brasil e adoro criar websites. Esse é meu portfolio e aqui você pode ver alguns projetos pessoais que desenvolvi.</p>
          </div>
          <div className="profile-image">
            <img src="./joaofuzer.jfif" alt="" />
          </div>

        </div>
        <section className="projects-section">
          <h2>Projetos</h2>

          <div className="projects-cards">

            <div onClick={handleClick} className="card-projects">
              <a target="blank" href="https://fuuuzer.github.io/quiz-brabo/">
                <p>1. Quiz interativo</p>
                <div className="card-img">
                  <p>Um quiz interativo, com 5 perguntas diretas. Você possui 3 vidas e a cada resposta errada você perde uma delas. Após perder todas as 3 vidas o quiz recomeça.</p>
                </div>
              </a>
            </div>

            <div className="card-projects">
              <a target="blank" href="https://github.com/Fuuuzer/cineboxd">
                <p>2. Cineboxd</p>
                <div className="card-img">
                  <p>Uma nova forma de avaliar e salvar filmes que você já assistiu. Atualmente em fase inicial de desenvolvimento, mas a ideia é fazer algo parecido com o letterboxd</p>
                </div>
              </a>
            </div>

            <div className="card-projects">
              <a href="https://gabrielleorezko.com" target="_blank" rel="noopener noreferrer">
                <p>3. Portfólio Gabrielle</p>
                <div className="card-img">
                  <p>Portfólio criado para a fotógrafa Gabrielle, usado algumas animações e boas práticas de SEO.</p>
                </div>
              </a>
            </div>
            <div className="card-projects">
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygULcmljayBhc3RsZXnSBwkJTQoBhyohjO8%3D" target="_blank" rel="noopener noreferrer">
                <p>3. Surpresa</p>
                <div className="card-img">
                  <p>Clique e descubra!</p>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="contact">
          <h2>Contato</h2>
        </section>
      </main >
      <Footer />
    </>
  )
}

export default App

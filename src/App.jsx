import React from "react"
import Header from "./components/Header/Header"

function App() {

  return (
    <>
      <Header />
      <main className="container">
        <div className="card">
          <h1>Fuzer DEV</h1>
          <p>Hi! My name is João,  I'm 23 years old and I'm from Brazil. Let's built more than a website a experience!</p>
        </div>
        <section className="projects-section">
          <h2>Projects(2)</h2>
          <div className="projects-cards">
            <div className="card"></div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App

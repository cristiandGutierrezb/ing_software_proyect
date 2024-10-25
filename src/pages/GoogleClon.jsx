import './GoogleClon.css'

export function GoogleClon() {
  return (
    <main className='general'>
      <header>
        <nav>
          <p>Gmail</p>
          <p>Imagenes</p>
          <img src="/vite.svg" alt="" />
          <button>Acceder</button>
        </nav>
      </header>
      <section className='general__search'>
        <section>
          <h1>Google</h1>
          <div className='general__search-input'>
            <img src="/vite.svg" alt="" />
            <input type="text" />
            <img src="/vite.svg" alt="" />
            <img src="/vite.svg" alt="" />
          </div>
          <div>
            <button>Buscar con Google</button>
            <button>No van a tener suerte</button>
          </div>
        </section>
      </section>
      <footer>
        <section>
          <p>Colombia</p>
        </section>
        <section>
          <div>
            <a href='#'>Sobre google</a>
            <a href='#'>Publicidad</a>
            <a href='#'>Negocios</a>
            <a href='#'>Como funciona la busqueda</a>
          </div>
          <div>
            <a href='#'>Privacidad</a>
            <a href='#'>Condiciones</a>
            <a href='#'>Configuracion</a>
          </div>
        </section>
      </footer>
    </main>
  )
}

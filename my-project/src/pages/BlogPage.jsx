import HeaderComponent from "../components/HeaderComponent"
import "./BlogPage.css"

function BlogPage() {
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log('El formulario se ha enviado');
  }

  return (
    <>
    <HeaderComponent></HeaderComponent>
    <div className="form-container">
      <div>
        <h1 className="page-title">Blog Page</h1>
      <hr/>
        <form onSubmit={handlesubmit}>
        <fieldset>
          <input type="text" id="username" placeholder=" " />
          <label htmlFor="username">Nombre:</label>
        </fieldset>
        <fieldset>
          <input type="text" id="comentario" placeholder=" "/>
          <label htmlFor="comentario">Comentario</label>
        </fieldset>
        <button>Enviar</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default BlogPage
import HeaderComponent from "../components/HeaderComponent"
import "./HomePage.css"

function HomePage() {
  const saySomething =() =>{
    console.log('Di Algo');
    alert('Ahora');
  }
  return (
    <>
    <HeaderComponent/>
    <div className="home-container">
      <div>HomePage</div>
    <hr/>
    <button onClick={saySomething}>Pulsa Click</button>
    </div>
    </>
  )
}

export default HomePage
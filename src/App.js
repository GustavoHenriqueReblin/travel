import './reset.scss';
import './global.scss';
import './App.scss';
import bg from './Images/background.jpg';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
</style>

const arrowIconStyle = { 
  color: "white", fontSize: "1.8rem", margin: "0 10px", cursor: "pointer"
}

function App() {
  return (
    <>
      <img className='img-background' src={bg} alt="Just to the background" />
      <div className='container'>
        <section className='home'>
          <div className='header'>
            <div className='logo-area'>
              <h2 className='logo'>Toury</h2>
            </div>
            <div className='routes-area'>
              <ul className='routes'>
                <li className='routes-item'>Home</li>
                <li className='routes-item'>Order</li>
                <li className='routes-item'>Contact</li>
              </ul>
            </div>
            <div className='login-area'>
              <button className='login'>Login</button>
            </div>
          </div>

          <h1 className='title pt-20'>Tour around the world</h1>
          <h2 className='title'>with the new destination</h2>

          <div className='description-area'>
            <div className='description'>
              We believe in a traveling experience by providing our tour plan that suits your the best!
            </div>
          </div>

          <div className='button-area'>
            <button className='button'>Explore Now</button>
          </div>
        </section>

        <section className='explore'>
          <div className='header-explore'>
            <div className='title-explore-area'>
              <h3 className='title-explore'>Explore place around the world</h3>
            </div>
            <div className='arrow-explore-area'>
              <div className='arrow-explore'>
                
                <FaLongArrowAltLeft style={arrowIconStyle} />
                <FaLongArrowAltRight style={arrowIconStyle} />
              </div>
            </div>
          </div>
          <div className='cards-explore-area'>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='invisible-card'></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

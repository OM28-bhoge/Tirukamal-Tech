import React  from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  
  return (
    <div className='home1'> 
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/logo.png" alt="Logo" width="200" height="70" className="d-inline-block align-top mr-4" />
               
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
  <a className="nav-link active" aria-current="page" href="/LoginPage" >Login</a>
</li>

              <li className="nav-item">
                 <Link to="/Registration" className="nav-link active">Registration</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='welcome-section'>
        <h1 >WELCOME</h1>
        <h1 id='abc'> TO TIRUKAMAL</h1>
        <div className="about-us">
          <h2 id='heading-nav'>About Us</h2>
          <p className='passage-nav'>We are dedicated to providing the best experience for our customers...
          We work on high-value apt cost model.  We specialize in ways to save money, for you as well as ourselves.</p>
          
        </div>
      </div>
      
    </div>


  );
}

export default Home;


import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import ButtonTab from './components/ButtonTab';
import BookingTab from './components/BookingTab';
import ChooseUs from './components/ChooseUs';
import FooterTab from './components/FooterTab';
import './App.css';

function App() {
  return(
    <div className='app-container'>
      <Navbar />
      <ContactForm />
      <div className='logo-container'>
        <div className='sub-logo-card'>
          <img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290685/Ellipse_16_n9boyg.svg' alt='nabllogo' width="50px" height="50px" className='limg' />
          <p className='l-para'>NABL Accredited Labs</p>
        </div>
        <div className='sub-logo-card'>
          <img src='https://res.cloudinary.com/gopi-enterprises/image/upload/v1695290682/Rectangle_81_xaz3gs.png' alt='nabllogo' width="50px" height="50px" className='limg' />
          <p className='l-para'>NABL Accredited Labs</p>
        </div>
      </div>
      <ButtonTab />
      <div className="ctrs2">
        <BookingTab  /> </div>
      <div className='tabs-gb-container'>
        <div className="ctrs1">
        <BookingTab  /> </div>
        <ChooseUs />
      </div>
      <FooterTab />
    </div>
  )
}

export default App;

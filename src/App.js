import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LogoAnimation from './Components/Navbar/LogoAnimation/LogoAnimation';
import FrontPage from './Components/Navbar/FrontPage/FrontPage';
import Fleshblend from './Components/Navbar/Freshblend/Fleshblend';
import Collection from './Components/Navbar/Collection/Collection';
function App() {
  return (
    <>
    <Navbar />
    <FrontPage />
    <Fleshblend />
    <Collection />
    </>
  );
}

export default App;

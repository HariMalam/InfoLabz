import logo from './logo.svg';
import './App.css';
import Bdgmain, { Btnbadge, Failbadge, Passbadge, Pillsuccessbadge } from './Navbar';
import Resulttable from './Table';

function App() {
  return (
    <div className="App">
      <Bdgmain/>
      <Btnbadge/>
      <Pillsuccessbadge/>

      <Resulttable/>

    </div>
  );
}

function First() {
  return(
    <>
    </>
  );
}

function Second() {
  return(
    <>
    <Bdgmain></Bdgmain>
    </>
  );
}

export default App;
export {Second};
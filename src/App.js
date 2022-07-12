// import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import LikeButton from "./components/LikeButton";
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import maxence from './assets/images/maxence.png';
import maxenGlass from './assets/images/maxence-glasses.png';
import diceEmpty from './assets/images/dice-empty.png';
import dice1 from './assets/images/dice1.png';
import dice2 from './assets/images/dice2.png';
import dice3 from './assets/images/dice3.png';
import dice4 from './assets/images/dice4.png';
import dice5 from './assets/images/dice5.png';
import dice6 from './assets/images/dice6.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
     <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>


<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>


<Random min={1} max={6}/>
<Random min={1} max={100}/>

<BoxColor r={128} g={255} b={255} />


<LikeButton />


<ClickablePicture
  img={maxence}
  imgClicked={maxenGlass}
/>


<Dice />


</header>
    </div>
  );
}

export default App;

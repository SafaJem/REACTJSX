import logo from './logo.svg';
import './style.css';

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title red">Your name here</h1>

<br />

<img src={logo} alt ='myImage' ></img>

<br />

<img src="./logo192.png" alt ='myImage'></img>

</div>

<video style= {{width:320 , height:240}} controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;

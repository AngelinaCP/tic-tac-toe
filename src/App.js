import logo from './logo.svg';
import './App.css';
import Button1 from "./components/button1";
import Game from './components/Game'

function App() {

    let timer = '1'
    function foo() {

         timer = '10:60:79'
        console.log(timer)
    }




    return (
        <div className="App">
            <Button1 name = 'name'/>
            {timer}
            <button onClick={foo} > start</button>
            <Game/>

        </div>
    );
}

export default App;

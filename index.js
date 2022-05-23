function Greet(props) {
    {/* props is ONE big object that contains all your funciton arguments as properties of the object */ }
    {/* props = { 
        personName: '',
        cityName: ''
      } */}

    return <p> My name is {props.personName} and I live in {props.cityName}</p>
}

function AppTitle() {
    return <h1 className="App">Hello Ironhackers</h1>

}

const name1 = 'Marco'
const name2 = 'Fede'
function App() {
    return (
        <div>
            <AppTitle />
            <Greet personName={name1} cityName='Barcelona' />
            <Greet personName={name2} />
        </div>
    )
}

// ReactDOM.render injects all of the React app code into the DOM
ReactDOM.render(<App />, document.getElementById("root"));

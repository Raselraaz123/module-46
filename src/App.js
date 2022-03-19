
import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}















/*  function LoadCountries() {
  const [countries, setCountries] = useState([]);
  console.log(countries)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  },[])
  return (
    <div>
      <h1> Visiting Every country of the world </h1>
      <h1>Total : {countries.length}</h1>

      {countries.map((country) => (
        <Country
          name={country.name.common}
          area={country.area}
          region={country.region}
          flags={country.flags.png}
        ></Country>
      ))}
    </div>
  );
};

function Country(props) {
  return (
    <div className='body-style'>
      <h1>Name : {props.name}</h1>
      <p>area : {props.area}</p>
      <p>region : {props.region}</p>
      <img src={props.flags} alt="" />
    </div>
  );
}

*/
export default App;

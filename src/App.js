
import './App.css';
import CustomHook from './components/CustomHook';
import Profile from './components/Profile';

// in this file having custom hook and props drilling concepts
// make sure that use both in one file only...


function App() {
  let name="syamsundarsai"
  return (
    <div className="App">
      <h1>welcome to custome hooks...</h1>
      {/* <Profile name={name}></Profile> */}
      <CustomHook></CustomHook>
     
    </div>
  );
}

export default App;

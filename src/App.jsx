import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';


function App() { 
  const [data, setData]=useState([]);
  const getData = () =>{

    axios
    .get('https://pokeapi.co/api/v2/pokemon/')
    .then((resp)=>{
      console.log(resp)
      setData(resp.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    getData()
  }, [])

  return (
    <>
    {data.data?.map((item)=>{
      return <div className="box">
        {item.map((i)=>{
          return <h1>{item.name}</h1>
        })}
        
      </div>
      
    })}
    {/* <div className="App">
 
         <div className='box-image'> 
        <img id='image' src='./logo192.png' alt="img"/>
    </div>     
      <div className='box2'>
        <h1 id='titre-number'>$18</h1>
        <h1 id='titre'>Scroll image</h1>
      </div>
      <div className='btn'>
        <button id='button'>Get other pokemon</button>
      </div>
    </div> */}
  </>);
}

export default App;

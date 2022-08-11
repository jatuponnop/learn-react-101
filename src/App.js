import MyBar from './MyBar';
import './App.css';
import MyCard from './MyCard';
import './MyCard.css'
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://www.mecallapi.com/api/attractions/")
      .then(res => res.json())
      .then((result) => {
        setData(result)
      }).catch(ex => {
        console.log(ex);
      });
  }, []);
  return (
    <>
      <MyBar></MyBar>
      <h1 style={{ paddingLeft: "10px" }}>Attractions</h1>
      <div className='grid-container'>
        {
          data.map(item => (
            <MyCard key={item.id} name={item.name}
              coverImage={item.coverimage}
              detail={item.detail}></MyCard>
          ))
        }
      </div>
    </>
  );
}

export default App;

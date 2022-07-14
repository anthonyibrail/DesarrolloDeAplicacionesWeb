import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {
// 1) Reemplaza estas variables por useState, puedes utilizar los valores iniciales que ya traen las variables
  //let temperatureColor = 'cold'
  //let temperatureValue = '10'
  const [temperatureColor, settemperatureColor] = useState("cold")
  const [temperatureValue, settemperatureValue] = useState(10)
 
// 2) Agregar las funciones para manejar los eventos de Click a los botones para que 
//     cuando se presionen se incremente o decremente el valor de la temperatura. 
  const aumentarTemperatura =() =>{
    //Si dejaba el 20 el color cambiaba cuando se mostraba el 22°C
    (temperatureValue >= 19) ? settemperatureColor("hot") : settemperatureColor("cold");

    if (temperatureValue < 30) settemperatureValue(temperatureValue + 1)
  } 

  const decrementarTemperatura =() =>{
    //Si dejaba el 20 el color cambiaba hasta que se mostrara el 18°C
    (temperatureValue < 21) ? settemperatureColor("cold") : settemperatureColor("hot")

    if (temperatureValue > 0) settemperatureValue(temperatureValue - 1)
  } 

// 3) Agrega una lógica para que al momento de que el valor sea >= 20 grados, la variable 'temperatureColor' cambie a 'hot'
//    De igual manera si la temperatura baja a <20 grados, la variable cambie a 'cold'
  
// Para fines prácticos, agrega una regla que evite que los valores suban arriba de 30. Es decir al llegar a 30, no se podrá incrementar más.
// De igual manera al llegar los valores a 0 no se podrá decrementas más.

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={aumentarTemperatura}>+</button>
        <button onClick={decrementarTemperatura}>-</button>
      </div>
    </div>
  );
}

export default App;

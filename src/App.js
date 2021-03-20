import './App.css';
import Mensaje from "./componentes/Messege";
import Nota from "./componentes/nota";
import Estadoo from "./componentes/estadou";

function App() {
  return (
    <div className="App">
        <div className="containerr">
          <div className='header'>
      
            <h1> Calendario </h1>
            <h3>{Date().toLocaleString()}</h3>

          </div>

          <div className= "calendarBody">
            <Mensaje day = 'Lunes' fondo='coral'/>
            <Mensaje day = 'Martes' fondo="coral"/>
            <Mensaje day = 'Miércoles' fondo="coral"/>
            <Mensaje day = 'Jueves' fondo="coral"/>
            <Mensaje day = 'Viernes' fondo="coral"/>
            <Mensaje day = 'Sábado' fondo="coral"/>
            <Mensaje day = 'Domingo' fondo="coral"/>
              <br/>
            <Mensaje day = 'Lunes' fondo='lightgreen'/>
            <Mensaje day = 'Martes' fondo="lightgreen"/>
            <Mensaje day = 'Miércoles' fondo="lightgreen"/>
            <Mensaje day = 'Jueves' fondo="lightgreen"/>
            <Mensaje day = 'Viernes' fondo="lightgreen"/>
            <Mensaje day = 'Sábado' fondo="lightgreen"/>
            <Mensaje day = 'Domingo' fondo="lightgreen"/>
              <br/>
            <Mensaje day = 'Lunes' fondo='pink'/>
            <Mensaje day = 'Martes' fondo="pink"/>
            <Mensaje day = 'Miércoles' fondo="pink"/>
            <Mensaje day = 'Jueves' fondo="pink"/>
            <Mensaje day = 'Viernes' fondo="pink"/>
            <Mensaje day = 'Sábado' fondo="pink"/>
            <Mensaje day = 'Domingo' fondo="pink"/>
              <br/>
            <Mensaje day = 'Lunes' fondo='red'/>
            <Mensaje day = 'Martes' fondo="coral"/>
            <Mensaje day = 'Miércoles' fondo="coral"/>
            <Mensaje day = 'Jueves' fondo="coral"/>
            <Mensaje day = 'Viernes' fondo="coral"/>
            <Mensaje day = 'Sábado' fondo="coral"/>
            <Mensaje day = 'Domingo' fondo="coral"/>

          </div>
      </div>
  </div>
  );
}

export default App;


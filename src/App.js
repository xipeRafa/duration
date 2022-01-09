import React, {useState} from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale("es", es);

const App = ()=> {

const [fecha, setFecha]=useState()

const onChange=fecha=>{
  setFecha(fecha);
  console.log(fecha)
  /* console.log('parse:', Date.parse(fecha)) parse te convierte con horas */

  let today = fecha.getTime() //convierte la fecha en microsegundos
  let tomorrow = today + 86400000
  console.log(today)
  console.log(tomorrow)
}  

const mostrarFecha = fecha=>{
  const options = {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'};
  console.log(fecha.toLocaleDateString('es-ES', options));
}

    return (
      <>
        <div className="contenedor">
          <div className="center">
           <DatePicker  selected={fecha} onChange={onChange} locale="es" className="pickers" 
                        dateFormat="dd 'de' MMMM 'de' yyyy"/>
           <br /><br />
           
           <input type="button" value="Mostrar Fecha" className="btn btn-primary" 
                  onClick={()=>mostrarFecha(fecha)}/>

          </div>
        </div>
      </>
    );

}


export default App
import React, {useState} from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale("es", es);

const App = ()=> {

   // const formateador = new Intl.DateTimeFormat("es-MX", {
   //      dateStyle: "long",
   //      timeStyle: "short",
   //  });

   //  const milisegundosComoFecha = (milisegundos) => {
   //      return formateador.format(new Date(milisegundos));
   //  };



  



  const [ hoy, setHoy ]=useState() // miliseconds 
  const [fecha, setFecha]=useState() //Fri Feb 03 2023 00:00:00 GMT-0700 (hora estándar del Pacífico de México)

  const handlerDuration = e => setHoy(e.target.value)

  const onChangeDatePicker = fecha => {
      setFecha(fecha);
      /* console.log('parse:', Date.parse(fecha)) parse te convierte con horas */
      let today = fecha.getTime()   // .getTime() convierte la fecha en microsegundos
      setHoy(today)
  }  
 

  let date = new Date(Number(hoy)).toLocaleDateString("es-CL", {
      weekday: "long", // narrow, short
      year: "numeric", // 2-digit
      month: "long", // numeric, 2-digit, narrow, long
      day: "numeric", // 2-digit
  })

  const hora = new Date(Number(hoy)).toLocaleTimeString("es-CL") 


  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  let fechaDate = fecha?.toLocaleDateString('es-ES', options)



  return (
      
        <div className="container bg-dark  py-5 m-5 row">

            <p className="text-white m-0">Select the Day 86400000</p>
         

            <div className="my-5 col-md-3">
                <DatePicker 
                    selected={fecha}
                    onChange={onChangeDatePicker} 
                    locale="es" 
                    className="pickers form-control" 
                    dateFormat="dd 'de' MMMM 'de' yyyy"
                />
            </div>

            <p className={fecha !== undefined ? 'text-white' : 'd-none'}> {fechaDate} hora: {hora} </p>              

            <div className="my-5 col-md-3">
              <input 
                    className="form-control mb-1" 
                    type="text" 
                    onChange={handlerDuration} 
                    value={hoy} 
                    placeholder='miliseconds'
              />
            </div>


          <p className={hoy > 0 ? 'text-white' : 'd-none'}> 
               {date}-----{hora} 
          </p>

        </div>
      
  );

}


export default App

import React, {useState} from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale("es", es);

const App = ()=> {

    const formateador = new Intl.DateTimeFormat("es-MX", {
         dateStyle: "long",
         timeStyle: "short",
    })

    const milisegundosComoFecha = (milisegundos) => {  // '8 de agosto de 2024, 12:08 a.m.'

         return formateador.format(new Date(milisegundos))

    }



  



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
      hour:'numeric',
      minute:'numeric',
      second:'numeric',
  })

  const hora = new Date(Number(hoy)).toLocaleTimeString("es-CL") 


  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  let fechaDate = fecha?.toLocaleDateString('es-ES', options).replace(/\b\w/g, l => l.toUpperCase().replace('','').replace('D','d')) // .replace(/\b\w/g, l => l.toUpperCase().replace('D','d'))










  const nowDate =()=> {   // 'Viernes, 16 de Agosto de 2024'

      const options = {
          weekday: "long", // narrow, short
          year: "numeric", // 2-digit
          month: "long", // numeric, 2-digit, narrow, long
          day: "numeric", // 2-digit
          //hour:'numeric',
          //minute:'numeric',
          //second:'numeric',
      }

      return new Date().toLocaleString('es-ES', options)
      
  }




  const msecToDate =(milliseconds)=> {   // 'viernes, 16 de agosto de 2024, 13:36:10'

     const options = {
          weekday: "long", // narrow, short
          year: "numeric", // 2-digit
          month: "long", // numeric, 2-digit, narrow, long
          day: "numeric", // 2-digit
          hour:'numeric',
          minute:'numeric',
          second:'numeric'
      }

      return new Date(milliseconds).toLocaleString('es-ES', options)

  }


  const msecToDateNumbers =(milliseconds)=>{ // '16/8/2024, 12:00:00 a.m.'
      return new Date(milliseconds).toLocaleString()
  }



  const nowDayCero =()=> { // 1723791600000
      return new Date( new Date().toLocaleString().slice(0,9).split('/').reverse().toString() ).getTime()
  }

  const nowDayCeroStr =()=> { // '1723791600000'
      return String( new Date( new Date().toLocaleString().slice(0,9).split('/').reverse().toString() ).getTime() )
  }

  const nowNumberDate =()=> { // '16/8/2024'
      return new Date().toLocaleString().slice(0,9)
  }

  const nowNumberDateReverse =()=> { // '2024/8/16'
    return new Date().toLocaleString().slice(0,9).split('/').reverse().toString().replace(',', '/').replace(',', '/')
  }

  Date.parse(nowNumberDateReverse()) //1723791600000

  const nowMonthYear =()=> { // '8/2024'
      return new Date().toLocaleString().slice(3,9)
  }

  const nowYear =()=>{ // '2024'
     return String( new Date().getFullYear() )
  } 


  


    const capitalizer = (str) => {
            return str.toLowerCase()
                    .trim()
                    .split(' ')
                    .map( v => v[0].toUpperCase() + v.substr(1) )
                    .join(' ')  
    }



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

            <p className={fecha !== undefined ? 'text-white' : 'd-none'}> {fechaDate }, hora: { hora} </p>              

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

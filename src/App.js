import React, {useState} from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale("es", es);

const App = ()=> {

  const [fecha, setFecha]=useState()

  const [hoy, setHoy]=useState()
  const [ma, setMa]=useState()

  const onChange=fecha=>{
    setFecha(fecha);

    /* console.log('parse:', Date.parse(fecha)) parse te convierte con horas */

    let today = fecha.getTime() //convierte la fecha en microsegundos
    let tomorrow = today + 86400000

    setHoy(today)
    setMa(tomorrow)
  }  

  const [duration, setDuration]=useState()

  const [sec, setSec]=useState()

  const handlerDuration = (e) =>{
    setDuration(e.target.value)
  }

  const onSubmit = (e)=>{
    e.preventDefault()
    setSec(duration)
  }


  let date = new Date(sec * 1).toLocaleDateString("es-CL", {
    weekday: "long", // narrow, short
    year: "numeric", // 2-digit
    month: "long", // numeric, 2-digit, narrow, long
    day: "numeric", // 2-digit
  })

  const time = new Date(sec * 1).toLocaleTimeString("es-CL") 



  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

  let fechaa = fecha?.toLocaleDateString('es-ES', options)

  const hora = new Date(hoy).toLocaleTimeString("es-CL")


  return (
      
        <div className="container bg-dark  py-5 m-5 row">

          <p className="text-white m-0">86 400 000 let today00 = Date.parse(new Date().toDateString())</p>

          <div className="my-5 col-md-3">
           <DatePicker  selected={fecha} onChange={onChange} locale="es" className="pickers form-control" 
                        dateFormat="dd 'de' MMMM 'de' yyyy"/>
          </div>

          <div className={fecha !== undefined ? 'text-white' : 'd-none'}>
            <p className="m-0 mb-1">
              {fechaa}: {hoy} <span className="text-dark"> ---- </span>hora: {hora}
            </p>
            <p className="m-0">
              <span className="text-dark"> ------------------ </span> un dia mas: {ma}
              <span className="text-dark"> ----</span>hora: {hora}
            </p>
          </div>

            <br/>
          <form onSubmit={onSubmit} className="col-md-3 my-5">
            <input className="form-control" type="text" onChange={handlerDuration}/>
          </form>

          <div>
            <p className={sec > 0 ? 'text-white' : 'd-none'}>  
              {date} <span className="text-dark"> ---- </span>hora: {time} 
            </p>
          </div>

        </div>
      
  );

}


export default App

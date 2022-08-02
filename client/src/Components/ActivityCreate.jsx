import React from "react";
import {useState, useEffect} from 'react'
import {useHistory,Link} from 'react-router-dom'
import { postActivity, getActivities, getAllCountries } from "../actions";
import{useDispatch,useSelector} from 'react-redux'
import estilos from '../style/ActivityCreate.module.css'
import {IoCloseCircleOutline ,IoArrowBackSharp} from 'react-icons/io5'
import Swal from 'sweetalert'

export default function ActivityCreate (){
    const dispatch = useDispatch()
    // const activities = useSelector((state)=>state.activity)
    const allCountries = useSelector((state) => state.allCountries)
    const history = useHistory()
    const [errors,setErrors]= useState({})
    
    const [input,setInput] = useState({
        name : '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    })

    function handleDelete(e){
        setInput({
            ...input,
            countries: input.countries.filter(c=>c!==e)
        })
    }

    function validate(input){
        let errors= {}
        if(!input.name){
            errors.name ='Requiere un nombre'
        }
        return errors
    }
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleCountry(e){
        setInput({
            ...input,
            countries:[...input.countries,e.target.value]
        })
    }

    function handleDificultad(e){
        setInput({
            ...input,
            difficulty:[...input.countries,e.target.value]
        })
    }

    function handleDuracion(e){
        setInput({
            ...input,
            duration:[...input.countries,e.target.value]
        })
    }

    function handleTemporada(e){
        
            setInput({
                ...input,
                season: e.target.value
            })
    }

    function handleSubmit(e){
        e.preventDefault()
       if(Object.keys(validate(input)).length===0){
        dispatch(postActivity(input))
            // alert('Actividad creada!')
            Swal(
                'Actividad Creada!','','success',{buttons:false,timer:2000}
              )
            setInput({ name : '',
            difficulty: '',
            duration: '',
            season: '',
            countries: []
            })
            document.getElementById("dificultad").selectedIndex = 0;
            document.getElementById("duracion").selectedIndex = 0;
            document.getElementById("temporada").selectedIndex = 0;
            history.push('/home')
             
       } else {
        alert ('Requiere un nombre')
       }
    }

    useEffect(() => {
        dispatch(getActivities())
      }, [dispatch])
      useEffect(() => {
        dispatch(getAllCountries())
    }, [dispatch])
    
      const dificultad = [1,2,3,4,5]
      const duracion = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    return(
        <div className={estilos.contTotal}>
            <div className={estilos.volver}>
            <Link style={{ textDecoration: 'none' }} to ='/home'><button><IoArrowBackSharp/></button></Link>
            </div>
            <div className={estilos.titulo}>
            <h1>Crear Actividad</h1>
            </div>
            <form onSubmit={(e)=>handleSubmit(e)} >
                <div className={estilos.nombre}>
                    <label>Actividad:</label>
                        <input
                    type="text" 
                    value={input.name}
                    name='name'
                    placeholder="Nombre de la Actividad.."
                    onChange={handleChange}
                    required
                    />
                    {errors.name && (       <p>{errors.name}</p>
                      )}
                </div>
                <div className={estilos.selected}>
                    <label>Dificultad:</label>
                    <select onChange={(e)=>handleDificultad(e)} required id="dificultad">
                    <option value="" hidden>Seleccionar una opcion</option>
                    {dificultad.map((e)=>(
                        <option key={e.index} value={e}name='dificultad'>{e}</option>
                    ))}
                    </select>

                    <label >Duracion:</label>
                    <select onChange={(e)=>handleDuracion(e)} required id="duracion">
                    <option value="" hidden>Seleccionar Duracion</option>
                    {duracion.map((e)=>(
                        <option value={e}name='duracion' key={e.index}>{e}</option>
                    ))}
                    </select>

                <label >Temporada:</label>
                <select onChange={(e)=>handleTemporada(e)} id='temporada'>
        <option value="" hidden>
                  Seleccionar Temporada
                </option>
          <option name="Verano" key="Verano"> Verano </option>
          <option name="Primavera" key="Primavera"> Primavera </option>
          <option name="Invierno" key="Invierno"> Invierno</option>
          <option name="Otoño" key="Otoño"> Otoño </option>
        </select>
                   
                <label >Pais:</label>
                    <select onChange={(e)=>handleCountry(e)}>
                    <option value="" hidden>Seleccionar Paises</option>
                        {allCountries.map((c)=>(
                         <option value={c.id} name="countries"key={c.id}>{c.name}</option>
                        
                        ))}
                    </select>
                    <div>
                      <ul>
                        <div className={estilos.eliminar}>
                        <li style={{ listStyle: 'none' }}>{input.countries.map(el=>
                        <div >
                            {el}
                            <button key={el} onClick={()=>handleDelete(el)} type='button'><IoCloseCircleOutline/></button>
                        </div>)} </li>
                        </div>
                    </ul>   
                    </div>
                    
                    </div>
                    <div className={estilos.enviar}>
                <button type="submit">Crear Actividad</button>
                    </div>
            </form>
        </div>
    )
}
import React from "react";
import {useState, useEffect} from 'react'
import {useHistory,Link} from 'react-router-dom'
import { postActivity, getActivities, getAllCountries } from "../actions";
import{useDispatch,useSelector} from 'react-redux'


export default function ActivityCreate (){
    const dispatch = useDispatch()
    // const activities = useSelector((state)=>state.activity)
    const allCountries = useSelector((state) => state.allCountries)
    const history = useHistory()
    const [input,setInput] = useState({
        name : '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
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
        if(e.target.checked){
            setInput({
                ...input,
                season: e.target.value
            })
        }
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(input)
        dispatch(postActivity(input))
        alert('Actividad creada!')
        setInput({ name : '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
        })
        document.getElementById("dificultad").selectedIndex = 0;
        document.getElementById("duracion").selectedIndex = 0;
        history.push('/home')
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
        <div>
            <Link to ='/home'><button>Volver</button></Link>
            <h1>Crear Actividad</h1>
            <form onSubmit={(e)=>handleSubmit(e)} >
                <div>
                    <label>Actividad:</label>
                    <input 
                    type="text" 
                    value={input.name}
                    name='name'
                    placeholder="Nombre de la Actividad.."
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <label>Dificultad:</label>
                    <select onChange={(e)=>handleDificultad(e)} required id="dificultad">
                    <option value="" hidden>Seleccionar una opcion</option>
                    {dificultad.map((e)=>(
                        <option value={e}name='dificultad'>{e}</option>
                    ))}
                    </select>
                </div>
                <div>
                    <label >Duracion:</label>
                    <select onChange={(e)=>handleDuracion(e)} required id="duracion">
                    <option value="" hidden>Seleccionar Duracion</option>
                    {duracion.map((e)=>(
                        <option value={e}name='duracion' key={e.index}>{e}</option>
                    ))}
                    </select>
                </div>
                <div>
                <label >Temporada:</label>
                <label><input 
                    type="checkbox" 
                    name='Verano'
                    value='Verano'
                    onChange={(e)=>handleTemporada(e)}
                    />Verano </label>
                    <label><input 
                    type="checkbox" 
                    name='Otoño'
                    value='Otoño'
                    onChange={(e)=>handleTemporada(e)}
                    />Otoño </label>
                    <label><input 
                    type="checkbox" 
                    name='Invierno'
                    value='Invierno'
                    onChange={(e)=>handleTemporada(e)}
                    />Invierno </label>
                    <label><input 
                    type="checkbox" 
                    name='Primavera'
                    value='Primavera'
                    onChange={(e)=>handleTemporada(e)}
                    />Primavera </label>
                </div>
                <label >Pais:</label>
                    <select onChange={(e)=>handleCountry(e)}>
                    <option value="" hidden>Seleccionar Paises</option>
                        {allCountries.map((c)=>(
                         <option value={c.id} name="countries"key={c.id}>{c.name}</option>
                        ))}
                    </select>
                    <ul>
                        <li>{input.countries.map(el=>el+',')}</li>
                    </ul>
                <button type="submit">Crear Actividad</button>
            </form>
        </div>
    )
}
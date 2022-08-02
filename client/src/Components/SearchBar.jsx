import React from "react";
import {useDispatch} from 'react-redux'
import{useState} from 'react'
import { getNameCountry} from "../actions";
import {IoSearch} from 'react-icons/io5'
import estilos from '../style/SearchBar.module.css'

export default function SearchBar (props){
    const dispatch = useDispatch()
    const [name,setName]= useState('')
    

function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
    
}

function handleSubmit(e){
    e.preventDefault()
    dispatch(getNameCountry(name))
    setName('')
    props.pagActual(1)
}
    return(
        <div className={estilos.buscador}>
           <div className={estilos.caja}>
            <input type="text"
            placeholder="Buscar.."
            onChange={(e)=>handleInputChange(e)}
            value={name}
            />
            <div className={estilos.boton}>
            <button type="submit"  onClick={(e)=>handleSubmit(e)}><IoSearch/></button>
            </div>
        </div> 
        </div>
        
    )
}

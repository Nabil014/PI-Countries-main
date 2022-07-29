import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// Acciones:
import { getAllCountries, getByContinent, getActivities, byActivity, byOrder,byPoblation } from '../actions/index'

//Componentes:
import Card from './Card'
import Paginado from './Paginado'
import SearchBar from './SearchBar'

export default function Home() {
  const dispatch = useDispatch()
  //GLOBAL
  const allCountries = useSelector((state) => state.countries)
  const activity = useSelector((state)=> state.activity)

  //LOCAL
  const [orden,setOrden] = useState('')

  //------------------------ PAGINADO --------------------------
  const [pagActual,setPagActual] = useState(1)
  const [countriesPorPag,setCountriesPorPag] = useState(10) //Porque el readme me pide 10 por pagina
  
  const indexLastCountry = 
  pagActual === 1 ? 9 : pagActual* countriesPorPag -1;

  const indexFirstCountry = 
  pagActual === 1 ? 0 : indexLastCountry -countriesPorPag

  const pagCountryActual = allCountries.slice(indexFirstCountry,indexLastCountry)

  const paginado = (pageNumber)=>{
    setPagActual(pageNumber)
  }


  useEffect(() => {
    dispatch(getAllCountries())
    dispatch(byActivity())
  }, [dispatch])


  function handleClick(e) {
    e.preventDefault()
    setPagActual(1)
    dispatch(getAllCountries())
    document.getElementById("FilterContinent").selectedIndex = 0;
    document.getElementById('FilterActivity').selectedIndex = 0;
    document.getElementById('FilterOrder').selectedIndex = 0;
  }

  function handleFilterContinent(e){
    setPagActual(1)
    dispatch(getByContinent(e.target.value))
  }

  function handleActivity(e){
    e.preventDefault()
    setPagActual(1)
    dispatch(byActivity(e.target.value))
  }
  function handleOrder(e){
    e.preventDefault()
    dispatch(byOrder(e.target.value))
    setPagActual(1)
    setOrden(e.target.value)
  }
  function handlePoblation(e){
    e.preventDefault()
    dispatch(byPoblation(e.target.value))
    setPagActual(1)
    setOrden(e.target.value)
  }
  useEffect(() => {
    dispatch(getActivities())
  }, [dispatch])

  return (
    <div>
      <Link to="/activities">Crear Actividad</Link>
      <SearchBar />
      <h1>Paises:</h1>
      <button
        onClick={(e) => {
          handleClick(e)
        }}
      >
        Volver a cargar
      </button>
      <div>
        <select onChange={e=>handleOrder(e)} id='FilterOrder'>
        <option value="" hidden>Ordenar</option>
          <option value="AZ">A-Z</option>
          <option value="ZA">Z-A</option>
        </select>
        <select onChange={e=>handlePoblation(e)} id='FilterPoblation'>
          <option value="" hidden>Poblacion...</option>
          <option value="asc" key='asc'>Ascendente</option>
          <option value="desc" key='desc'>Descendente</option>
        </select>
        <select onChange={e=>handleFilterContinent(e)} id='FilterContinent'>
        <option value="" hidden>
                  Filtrar por Continente...
                </option>
          <option value="All" key="All"> TODOS </option>
          <option value="Africa" key="Africa"> AFRICA </option>
          <option value="South America" key="South America"> AMERICA DEL SUR</option>
          <option value="North America" key="North America"> AMERICA DEL NORTE </option>
          <option value="Antarctica" key="Antarctica"> ANTARTIDA </option>
          <option value="Asia" key="Asia"> ASIA </option>
          <option value="Europe" key="Europe"> EUROPA </option>
          <option value="Oceania" key="Oceania"> OCEANIA </option>
        </select>
        <select name="ActivTuristica" onChange={e=>handleActivity(e)} id='FilterActivity'>
        <option value="" hidden>
                  Filtrar por Actividades...
                </option>
          <option value="All">Todas</option>
          {
            activity.map(e=>(
              <option value={e.name}key={e.id}>{e.name}</option>
              
            ))}
        </select>
        <Paginado
        countriesPorPag={countriesPorPag}
        allCountries = {allCountries.length}
        paginado={paginado}
        />
        {React.Children.toArray(pagCountryActual?.map((elem) => {
          return (
            <div>
              <Link to={"/home"+elem.id}>
                <Card
              key={elem}
              name={elem.name}
              image={elem.flag}
              continent={elem.continent}
                />
              </Link>
            </div>
            
          )
        }))}

        
      </div>
    </div>
  )
}
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../actions'
import { useEffect } from 'react'
import {IoArrowBackSharp} from 'react-icons/io5'
import estilos from '../style/Details.module.css'

export default function Detail(props) {
  const dispatch = useDispatch()
  const countryDet = useSelector((state) => state.detail)
  useEffect(() => {
    dispatch(getDetail(props.match.params.id))
  }, [dispatch])

  const activities = countryDet.activities?.map((e) => {
    return {
      name: e.name,
      difficulty: e.difficulty,
      duration: e.duration,
      season: e.season,
    }
  })
  return (
    <div className={estilos.cont}>
      <div>
        <div className={estilos.volver}>
          <Link style={{ textDecoration: 'none' }} to="/home">
          <button><IoArrowBackSharp/></button>
          </Link>
        </div>
        <div className={estilos.nombre}>
      <h1>{countryDet.name}</h1>
        </div>
      <div className={estilos.imagen}>
        <img src={countryDet.flag} alt="img" />
      </div>
      <div className={estilos.descrip}>
        <div className={estilos.detalles}>
        <h3>Detalles:</h3>
        <p>Code: {countryDet.id}</p>
        <p>Continente: {countryDet.continent}</p>
        <p>Capital: {countryDet.capital}</p>
        <p>Poblacion: {countryDet.population}</p>
        <p>
          Subregion:{' '}
          {countryDet.subregion ? countryDet.subregion : 'No tiene subregion'}
        </p>
      </div>
      <div className={estilos.actividades}>
        <h3>Actividades:</h3>
        {activities?.length > 0
          ? activities.map((e) => {
              return (
                <div>
                  <p>Nombre: {e.name}</p>
                  <p>Dificultad: {e.difficulty}</p>
                  <p>Duracion: {e.duration}</p>
                  <p>Temporada: {e.season}</p>
                </div>
              )
            })
          : 'No tiene actividades..'}
         </div>
      </div>
      </div>
    </div>
      )
}

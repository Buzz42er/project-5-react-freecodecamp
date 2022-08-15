import React from 'react'
import data from '../data'
import PlaceCard from './Place'

const Main = () => {
    const Place = data.map((item) => {
        return (
        <PlaceCard  key={item.id} {...item}/>
        )
    })
  return (
    <div className='MainSection'>
        {Place}
    </div>
  )
}

export default Main

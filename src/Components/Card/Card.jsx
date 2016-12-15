import React from 'react'

import './card.css'

import CardHeader from './CardHeader'
import CardImage from './CardImage'
import CardContents from './CardContents'


function Card() {
  return (
    <article className="card">
      <CardHeader />
      <CardImage />
      <CardContents />
    </article>
  )
}

export default Card

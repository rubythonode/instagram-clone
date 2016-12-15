import React from 'react'

import './card.css'

import CardContentsCommentsItem from './CardContentsCommentsItem'

function CardContentsComments() {
  return (
    <ul className="commentsList">
      <CardContentsCommentsItem />
    </ul>
  )
}

export default CardContentsComments

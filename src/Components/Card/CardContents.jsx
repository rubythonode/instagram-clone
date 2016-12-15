import React from 'react'

import './card.css'

import CardContentsLikes from './CardContentsLikes'
import CardContentsComments from './CardContentsComments'
import CardContentsAddComment from './CardContentsAddComment'

function CardContents() {
  return (
    <div className="cardContents">
      <CardContentsLikes />
      <CardContentsComments />
      <CardContentsAddComment />
    </div>
  )
}

export default CardContents

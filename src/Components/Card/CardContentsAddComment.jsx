import React from 'react'

import './card.css'

import LikeButton from '../LikeButton/LikeButton'
import CommentForm from '../CommentForm/CommentForm'

function CardContentsAddComment() {
  return (
    <section className="commentSection">
      <LikeButton />
      <CommentForm />
      <button className="commonbg" />
    </section>
  )
}

export default CardContentsAddComment

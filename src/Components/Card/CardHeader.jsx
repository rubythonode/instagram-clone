import React from 'react'

import './card.css'

function CardHeader() {
  return (
    <header>
      <a className="userLink">
        <img className="" src="https://scontent.cdninstagram.com/t51.2885-19/s150x150/14733352_1693934057601947_5708220546672492544_a.jpg" role="presentation" />
      </a>
      <div className="userName">
        <a title="cristiano" href="/cristiano/">cristiano</a>
      </div>
      <a className="userTime">
        <time dateTime="2016-12-13T07:00:57.000Z" title="Dec 13, 2016">1d</time>
      </a>
    </header>
  )
}

export default CardHeader

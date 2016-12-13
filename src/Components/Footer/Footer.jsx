import React, { Component } from 'react'
import { Link } from 'react-router'
import './footer.css'

class Footer extends Component {
  render() {
    const links = [
      {
        url: "http://yuby.github.io/personal/",
        name: "ABOUT ME",
      },
      {
        url: "https://kr.linkedin.com/in/성엽-이-9482b15b",
        name: "LINKEDIN",
      },
      {
        url: "https://github.com/yuby",
        name: "GITHUB",
      },
      {
        url: "http://yubylab.tistory.com/",
        name: "BLOG",
      },
    ]
    const listItems = links.map(link =>
      <li key={link.name}>
        <a href={link.url}>{link.name}</a>
      </li>,
    )
    return (
      <footer className="footer" role="contentinfo">
        <div className="footerContents">
          <nav>
            <ul>
              {listItems}
            </ul>
          </nav>
          <span>© 2016 Instagram Clone</span>
        </div>
      </footer>
    )
  }
}
export default Footer

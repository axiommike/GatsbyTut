import * as React from 'react'
import { Link } from 'gatsby'
import SearchAppBar from './header'
import Header from './header'
const Layout = ({ pageTitle, children }) => {
  return (
    <main>
<Header/>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  )
}
export default Layout
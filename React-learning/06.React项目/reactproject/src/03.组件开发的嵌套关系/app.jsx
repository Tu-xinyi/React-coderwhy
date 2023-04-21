import React, { Component } from 'react'
import Header from './c-cpns/Header'
import Footer from './c-cpns/Footer'
import Main from './c-cpns/Main'

export class app extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
        <Main/>
      </div>
    )
  }
}

export default app
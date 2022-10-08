import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layouts = (props) => {
  return (
    <main>
     <Header />
      <div className="min-h-screen">
      <div className="container px-auto">{props.children}</div>
      </div>
      <Footer />
    </main>
  )
}

export default Layouts

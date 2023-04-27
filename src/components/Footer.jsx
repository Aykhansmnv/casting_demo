import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-6 col-md-8 col-xs-12">
                    <div className="row">
                        <div className="col">
                            <Link to="/"><p>About us</p></Link>
                            <Link to="/"><p>Contact us</p></Link>
                        </div>
                        <div className="col-3">
                            <Link to="/"><p>Help</p></Link>
                            <Link to="/"><p>Blog</p></Link>
                        </div>
                        <div className="col">
                            <Link to="/"><p>Terms of Use</p></Link>
                            <Link to="/"><p>Privacy Policy</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
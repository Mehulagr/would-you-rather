import React from "react"
import { Link } from "react-router-dom";

const NotFound = ({ history }) => (
  <div className='container'>
      <div className="card flex-row flex-wrap">
            <div className="card-block p-4 card-content text-center w-100">
            <h4 className="card-title">Oops!</h4>
            <p>You are lost.</p>
            <Link className="btn btn-outline-primary" to={`/`}>Go to home</Link>
            </div>
        </div>
  </div>
);

export default NotFound
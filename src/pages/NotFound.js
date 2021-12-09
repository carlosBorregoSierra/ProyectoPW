import React from "react";
import {Link} from "react-router-dom"

export const NotFound= () => {
    return(
        <div className="container d-flex flex-column justify-content-center align-items-center">
            <div className="text-center">
                {/*<img src="https://p4.wallpaperbetter.com/wallpaper/593/55/679/404-not-found-wallpaper-preview.jpg" />*/}
            </div>
            <h1>Esta página no existe</h1>
            <Link to="/" className="btn btn-info text-white mt-3">Go Home</Link>
        </div>
    )
}
import React from "react"
import NavBar from "./NavigationBar"
import "./AppStyles.css"; 

export function Comics(){
    return (
        <div className="comic-page">
            <NavBar/>
            <h2>This is Our amazing <strong>ComicVerse</strong>Page</h2>
            <p>This component is under construction. Check back later!</p>
            <p>Keep waiting......</p>
        </div>
    )
}

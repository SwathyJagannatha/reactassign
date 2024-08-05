import React from "react"
import NavBar from "./NavigationBar"
import "./AppStyles.css"; 

export function Home(){
    return (
        <div className="home-page">
            <NavBar/>
            <h2>Welcome to Our amazing <strong>ComicVerse</strong> Home Page</h2>
            <p>Dive into the World of Comics</p>
            <p>Discover Your Next Favorite Comic</p>
            <p>At ComicVerse, we bring you an endless universe of stories, characters, and adventures. From classic heroes to indie gems, there's a comic for every reader.</p>
        </div>
    )
}

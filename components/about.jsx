"use client"
import React from "react"



function About(){
    
    return(
        <section className="w-full flex min-h-screen items-start justify-between">
            <div className="w-2/4 h-[80%] flex items-center justify-center">
               <img className="w-11/12 h-11/12" src="/hiking.jpg" alt="laoding" />
            </div>
            <div className="w-2/4  flex items-start justify-start">
             <div>
                <h3 className="text-7xl">About Me</h3>
                <p className="w-45">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic natus, ullam deserunt corporis quos in! Sed ab ullam vero deleniti nulla tempora aperiam nemo quae necessitatibus, facere, fugit deserunt fugiat!</p>
             </div>
            </div>
        </section>
    )
}

export default About
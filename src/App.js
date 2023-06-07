import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data.js"




export default function App(){
    const card=data.map(item =>{
    return(
       <Card 
       key={item.id}
       {...item}
        />
    )
}
)
    return(
    <div>
       <Header/>
       {card}
    </div>
)
}

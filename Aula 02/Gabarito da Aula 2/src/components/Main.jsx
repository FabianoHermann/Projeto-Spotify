import React from "react";
import ListItem from "./ListItem";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";



const Main = () => {
  return (
  <div className="main">
    {/* LIST ITEM DE ARTISTAS */}
    <ListItem  title="Artistas" items ={5} itemsArray={artistArray} path='/artists'/>
    
    {/* LIST ITEM DE Músicas */}
    <ListItem title="Músicas" items = {20} itemsArray={ songsArray }path='/songs'/>
  </div>
  );
};

export default Main;
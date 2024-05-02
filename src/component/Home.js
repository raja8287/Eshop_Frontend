import React from 'react'
import style from "./css/Home.css"
import Ad from './ad';
import Content1 from './content1';
import Advi from './Advi';
import SliderTOW from './recom';
import Footer from './footer';
import AD2 from './ad2';

function HOME(){
    return(<>
    <div id='Home'>
<Ad/>
<Content1/>
<Advi/>
<Content1/>


    </div>
    
    </>)
}
export default HOME;
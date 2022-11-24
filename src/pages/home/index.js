import { useState } from "react";
import Button from "../../components/Button";
import {useNavigate} from 'react-router-dom';
import background from "../../assets/imagen1.jpg";
import background2 from "../../assets/imagen2.jpg";




function Home() {

    const navigate=useNavigate();

    const onClickButton=(url) => {
        navigate(url);
    }
    const [changeBackground,setchangeBackground]=useState(background)
    
    return (
        <section className="hero is-medium is-fullheight" style={{backgroundImage:`url(${changeBackground})`, backgroundSize:'cover'}}>;
            <div className="hero-body">   
                <div className="container has-text-centered">
                    <Button onClick={()=>onClickButton("/game")} text="Inicia el juego"/>
                    <br/>
                    <button onClick={()=>setchangeBackground(background2)}>Cambia de albúm</button> 
                    <br/>
                </div>
            </div>  
        </section>
)
}
            


export default Home;
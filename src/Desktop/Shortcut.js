import React, {useState, useEffect} from 'react'
import { gsap } from "gsap";
import  Draggable from "gsap/Draggable";
import Window from './Window/Window';
import './Shortcut.css';

const application_list = require('../data/applications.json');

export const Shortcut = (props) => {
    gsap.registerPlugin(Draggable, {
        bounds: document.querySelector('.Desktop')
    });

    const app_data = application_list[props.prop_key];
    const img_src = require(`../images/${app_data.icon}`);
    app_data.key = props.prop_key;

    let [window_open, setWindow] = useState(false);

    const openApplication = () => {
        if(!window_open) {
            setWindow(true);
        }
    }

    useEffect( () => {
        Draggable.create(`#${props.prop_key}`, {
            type: "x,y",
            zIndexBoost: false
        });
        Draggable.zIndex = 2;
    })

    
    return(
        <div className="ShortCut__Container">
            <div className="ShortCut" id={props.prop_key} onClick={openApplication} style={{top:`${app_data.position.top}%`,left: `${app_data.position.left}%`}}>
                <img className="ShortCut__Icon" src={img_src}/>
                <div className="ShortCut__Text">{app_data.title}</div>
            </div>
            { window_open && <Window setWindow={setWindow} window_data={app_data}></Window> }
        </div>
    )
}

export default Shortcut;
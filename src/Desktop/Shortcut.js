import React, {useState, useEffect} from 'react'
import Window from './Window/Window';
import './Shortcut.css';

const application_list = require('../data/applications.json');

export const Shortcut = (props) => {

    const application_data = application_list[props.prop_key]
    application_data.title = props.display;

    const img_src = require(`../images/${props.icon}`)

    let [window_open, setWindow] = useState(false);

    const openApplication = () => {
        if(!window_open) {
            setWindow(true);
        }
    }
    
    return(
        <div onClick={openApplication} style={{top:`${props.top}%`,left: `${props.left}%`}} className="ShortCut">
            <img className="ShortCut__Icon" src={img_src}/>
            <div className="ShortCut__Text">{props.display}</div>
            { window_open && <Window setWindow={setWindow} window_data={application_data}></Window> }
        </div>
    )
}

export default Shortcut;
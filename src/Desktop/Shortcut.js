import React, {useState} from 'react'
import Window from './Window/Window';
import './Shortcut.css';

const application_list = require('../data/applications.json');

export const Shortcut = (props) => {

    const app_data = application_list[props.prop_key];
    const img_src = require(`../images/${app_data.icon}`);

    let [window_open, setWindow] = useState(false);

    const openApplication = () => {
        if(!window_open) {
            setWindow(true);
        }
    }
    
    return(
        <div onClick={openApplication} style={{top:`${app_data.position.top}%`,left: `${app_data.position.left}%`}} className="ShortCut">
            <img className="ShortCut__Icon" src={img_src}/>
            <div className="ShortCut__Text">{app_data.title}</div>
            { window_open && <Window setWindow={setWindow} window_data={app_data}></Window> }
        </div>
    )
}

export default Shortcut;
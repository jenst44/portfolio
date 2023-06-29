import {createRef, useEffect} from 'react'
import './Window.css';
import NotePad from './NotePad';
import Flappy from './Flappy';
import { gsap } from "gsap";
import  Draggable from "gsap/Draggable";
import CaseStudies from './CaseStudies/CaseStudies';

export const Window = (props) => {

    const ref = createRef();
    const data = props.window_data;
    let expanded = false;

    const closeWindow = () => {
        props.setWindow(false);
    }

    const expandWindow = () => {
        if(!expanded) {
            ref.current.style.top = "25px";
            ref.current.style.left = "0";
            ref.current.style.bottom = "0";
            ref.current.style.right = "0";
        } else {
            ref.current.style.top = "10%";
            ref.current.style.left = "10%";
            ref.current.style.bottom = "10%";
            ref.current.style.right = "10%";

        }
        expanded = !expanded;
    }

    useEffect( () => {
        Draggable.create(`#${props.window_data.key}`, {
            type: "x,y",
            zIndexBoost: false,
            trigger: ".Window__TopBar"
        });
        Draggable.zIndex = 2;
    })

    return(
        <div key={props.window_data.key} id={props.window_data.key} ref={ref} className="Window">
            <div className="Window__TopBar">
                <div className="Window__TopBar__LeftButtons">
                    <div onClick={closeWindow} className="Window__TopBar__LeftButtons__Button Window__TopBar__LeftButtons__Close"></div>
                    <div onClick={closeWindow} className="Window__TopBar__LeftButtons__Button Window__TopBar__LeftButtons__Minimize"></div>
                    <div onClick={expandWindow} className="Window__TopBar__LeftButtons__Button Window__TopBar__LeftButtons__Expand"></div>
                </div>
                <div className="Window__TopBar__Title">{data.title}</div>
            </div>
            <div className="Window__MainContent">
                {data.type === "NotePad" && <NotePad app_data={data}></NotePad>}
                {data.type === "CaseStudies" && <CaseStudies app_data={data}></CaseStudies>}
                {data.type === "Flappy" && <Flappy app_data={data}></Flappy>}
            </div>
        </div>
    )
}

export default Window;
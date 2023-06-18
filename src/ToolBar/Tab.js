import React, {useState, useRef, useEffect} from 'react'
import './Tab.css';
import './ToolBar';

const Tab = (props) => {

    var [display_dropdown, setDisplay] = useState(false);
    const ref = useRef(null);
    const { onClickOutside } = props;

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
                setDisplay(false);
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {};
    }, [ onClickOutside ]);

    var displayDropdown = function(){
        setDisplay(!display_dropdown);
    }
    
    return (
        <div ref={ref} className="Tab">
            <div onClick={displayDropdown} className="Tab__Display">{props.display}</div>
            {display_dropdown && 
                <div className="Tab__DropDown">
                    {props.children}
                </div>
            }
        </div>
    );
  }
  
  export default Tab;
  
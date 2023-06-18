import './Desktop.css';
import Shortcut from './Shortcut';

export const Desktop = () => {

    return(
        <div className='Desktop'>
            <Shortcut key="about_me" prop_key="about_me" display="About me" icon="notepad.png" top="10" left="10"></Shortcut>
            <Shortcut key="about_the_site" prop_key="about_the_site" display="About the site" icon="notepad.png" top="30" left="80"></Shortcut>
            <Shortcut key="case_studies" prop_key="case_studies" display="Work Examples" icon="notepad.png" top="50" left="10"></Shortcut>
        </div>
    )
}

export default Desktop;
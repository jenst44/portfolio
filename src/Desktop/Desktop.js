import './Desktop.css';
import Shortcut from './Shortcut';

export const Desktop = () => {

    return(
        <div className='Desktop'>
            <Shortcut key="about_me" prop_key="about_me"></Shortcut>
            <Shortcut key="about_the_site" prop_key="about_the_site"></Shortcut>
            <Shortcut key="case_studies" prop_key="case_studies"></Shortcut>
            <Shortcut key="flappy" prop_key="flappy"></Shortcut>
        </div>
    )
}

export default Desktop;
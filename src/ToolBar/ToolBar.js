import './ToolBar.css';
import DateTime from './DateTime';
import Icons from './Icons';
import Tab from './Tab';
import coder from '../images/coding.svg';

function ToolBar() {

    return (
        <div className="ToolBar">
            <div className="ToolBar__Left">
                <img className="ToolBar__Logo" src={coder} />
                <Tab key="phone" display="Info">
                    <ul>
                        <li>Phone: <a href="tel:360-472-0409">+1 (360) 472 0409</a></li>
                        <li>Email: <a href="mailto:jenst44@gmail.com">jenst44@gmail.com</a></li>
                        <li>Location: Seattle, WA</li>
                    </ul>
                </Tab>
                <Tab key="email" display="Interests">
                    <ul>
                        <li>Golf</li>
                        <li>Video Games</li>
                        <li>Boating</li>
                        <li>Gardening</li>
                    </ul>
                </Tab>
            </div>
            <div className="ToolBar__Right">
                <Icons></Icons>
                <DateTime></DateTime>
            </div>
        </div>
    );
  }
  
  export default ToolBar;
  
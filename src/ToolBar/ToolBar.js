import './ToolBar.css';
import DateTime from './DateTime';
import Icons from './Icons';
import Tab from './Tab';

function ToolBar() {

    return (
        <div className="ToolBar">
            <div className="ToolBar__Left">
                <Tab key="phone" display="Info">
                    <ul>
                        <li>ph: <a href="tel:360-472-0409">+1 (360) 472 0409</a></li>
                        <li>email: <a href="mailto:jenst44@gmail.com">jenst44@gmail.com</a></li>
                        <li>location: Seattle, WA</li>
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
  
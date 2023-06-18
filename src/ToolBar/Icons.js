import './Icons.css';
import battery from '../images/battery.png';
import bluetooth from '../images/bluetooth.svg';

export const Icons = () => {

    return(
        <div className='Icons'>
            <img className="Icons__Bluetooth Icons__Icon" src={bluetooth}/>
            <img className="Icons__Battery Icons__Icon" src={battery}/>
        </div>
    )
}

export default Icons;
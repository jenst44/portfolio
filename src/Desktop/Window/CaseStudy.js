import './CaseStudy.css';
import React, {useState} from 'react'
import loadable from '@loadable/component'

const MainContent = loadable(({study_data}) => import(`./CaseStudies/${study_data.key}`))

export const CaseStudy = ({study_data}) => {

    const [expanded, setExpanded] = useState(false)
    const header_img = require(`../../images/${study_data.img}`);

    const toggleExpand = () => {
        setExpanded(!expanded);
    }
    
    return(
        <div className="CaseStudy">
            <div onClick={toggleExpand} className="CaseStudy__Tile">
                <h4 className="CaseStudy__Tile__Title">{study_data.title}</h4>
                <img className="CaseStudy__Tile__Image" src={header_img}/>
            </div>
            {expanded && 
                <div className="CaseStudy__MainContent">
                    <MainContent study_data={study_data}></MainContent>

                </div>
            }
        </div>
    )
}

export default CaseStudy;
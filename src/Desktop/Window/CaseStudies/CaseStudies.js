import './CaseStudies.css';
import CaseStudy from './CaseStudy';
import {useState} from 'react'
import CaseStudyTile from './CaseStudyTile';
import header_img from '../../../images/detective.png';
const case_studies = require('../../../data/case_studies.json');

export const CaseStudies = ({app_data}) => {

    const [current_case_study, setCaseStudy] = useState(false);

    const openCaseStudy = (e) => {
        setCaseStudy(e.target.getAttribute('ref_key'));
    }

    const closeCaseStudy = () => {
        setCaseStudy(false);
    }

    return(
        <div className="CaseStudies">
            <div className="CaseStudies__Header">
                <img className="CaseStudies__Header__Image" src={header_img}/>
                <div>
                    <h2 className="CaseStudies__Header__Title">{app_data.title}</h2>
                    <p>Can you crack the big case...</p>
                </div>
            </div>
            {
                !current_case_study && 
                <div className="CaseStudies__Body">
                    <h3 className="CaseStudies__Body__Title">Case Studies</h3>
                    <div className="CaseStudies__Body__Studies">
                        {case_studies.map(function(case_study, index){
                            return <CaseStudyTile key={ index } open={openCaseStudy} study_data={case_study}></CaseStudyTile>;
                        })}
                    </div>
                </div>
            }
            {
                current_case_study && 
                <div className="CaseStudies__Body">
                    <div className="CaseStudies__Body__Study">
                        <CaseStudy close_case_study={closeCaseStudy} key={current_case_study} study_key={current_case_study}></CaseStudy>
                    </div>
                </div>
            }
        </div>
    )
}

export default CaseStudies;
import './CaseStudies.css';
import CaseStudy from './CaseStudy';
const case_studies = require('../../data/case_studies.json');

export const CaseStudies = ({app_data}) => {

    return(
        <div className="CaseStudies">
            {case_studies.map(function(case_study, index){
                return <CaseStudy key={ index } study_data={case_study}></CaseStudy>;
            })}
        </div>
    )
}

export default CaseStudies;
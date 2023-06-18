import './CaseStudies.css';
import CaseStudy from './CaseStudy';
import header_img from '../../images/detective.png';
const case_studies = require('../../data/case_studies.json');

export const CaseStudies = ({app_data}) => {

    return(
        <div className="CaseStudies">
            <div className="CaseStudies__Header">
                <img className="CaseStudies__Header__Image" src={header_img}/>
                <div>
                    <h2 className="CaseStudies__Header__Title">{app_data.title}</h2>
                    <p>Can you crack the big case...</p>
                </div>
            </div>
            <div className="CaseStudies__Body">
                <h3>Articles</h3>
                <div className="CaseStudies__Body__Studies">
                    {case_studies.map(function(case_study, index){
                        return <CaseStudy key={ index } study_data={case_study}></CaseStudy>;
                    })}
                </div>
            </div>
        </div>
    )
}

export default CaseStudies;
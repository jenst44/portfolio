import './CaseStudy.css';
import React, {useState} from 'react'
import loadable from '@loadable/component'
const case_studies = require('../../../data/case_studies.json');

const MainContent = loadable(({study_key}) => import(`./studies/${study_key}`));

export const CaseStudy = ({study_key}) => {

    console.log(study_key)

    const study_data = case_studies.find(study => study.key == study_key)
    
    return(
        <div className="CaseStudy">
            <div className="CaseStudy__Tile">
                <h4 className="CaseStudy__Tile__Title">{study_data.title}</h4>
                <div className="CaseStudy__MainContent">
                    <MainContent study_data={study_data}></MainContent>
                </div>
            </div>
        </div>
    )
}

export default CaseStudy;
import './CaseStudy.css';
import React, {useState} from 'react'
import loadable from '@loadable/component'
const case_studies = require('../../../data/case_studies.json');

const MainContent = loadable( ({study_key}) => import(`./studies/${study_key}`));

export const CaseStudy = ({study_key, close_case_study}) => {

    const study_data = case_studies.find(study => study.key == study_key)
    
    return(
        <div className="CaseStudy">
            <div className="CaseStudy__Inner">
                <button className="CaseStudy__Back" onClick={close_case_study}>&larr; Back</button>
                <h2 className="CaseStudy__Title">{study_data.title}</h2>
                <p className="CaseStudy__Description">{study_data.description}</p>
                <div className="CaseStudy__MainContent">
                    <MainContent study_key={study_data.key}></MainContent>
                </div>
            </div>
        </div>
    )
}

export default CaseStudy;
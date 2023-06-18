import './CaseStudy.css';

export const CaseStudy = ({study_data}) => {
    const html = require(`./CaseStudies/${study_data.key}.html`);

    console.log(html);

    return(
        <div className="CaseStudy">
            
        </div>
    )
}

export default CaseStudy;
import './CaseStudyTile.css';

export const CaseStudyTile = ({study_data, open}) => {

    return(
        <div className="CaseStudyTile">
                <div className="CaseStudyTile__Top">
                    <h4 onClick={open} ref_key={study_data.key} className="CaseStudyTile__Top__Title">{study_data.title}</h4>
                    <p className="CaseStudyTile__Top__Date">{study_data.date}</p>
                </div>
                <p className="CaseStudyTile__Description">{study_data.description}</p>
                <div className="CaseStudyTile__Tags">
                    { study_data.tags.map( tag => {
                        return <div className="CaseStudyTile__Tag">{tag}</div>
                    } )}
                </div>
        </div>
    )
}

export default CaseStudyTile;
import './NotePad.css';

export const NotePad = ({app_data}) => {

    return(
        <div className="NotePad" dangerouslySetInnerHTML={{ __html: app_data.content}}></div>
    )
}

export default NotePad;
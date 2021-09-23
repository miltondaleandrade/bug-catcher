import { useParams } from "react-router-dom";

export default function Bug(props) {
    // const params = useParams(props);
    const { bug, species, imageURL, imageReference, information, schmidtPainIndex, schmidtPainIndexFull, fieldReference } = props.bug.fields;
    // const bug = props.bugs.find((bug) => (bug.id === params.id));



    return (
        <div>
        <img src={imageURL} alt={imageReference} />
        <h2>Name: {bug}</h2>
        <h3>Species: <i>{species}</i></h3>
        <h3>Pain Index: {schmidtPainIndex}</h3>
        <p>Field Guide Information: {information}</p>
        <button onClick={() => window.open(`${fieldReference}`, "_blank")}>More Information</button>
        <button onCLick={() => (<div className="bugModal hide"></div>)}>Hide</button>
        </div>
    )
}
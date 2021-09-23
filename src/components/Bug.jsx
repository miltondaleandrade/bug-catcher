import { useParams } from "react-router-dom";

export default function Bug(props) {
    const params = useParams(props);
    //  const { bug, species, imageURL, imageReference, information, schmidtPainIndex, schmidtPainIndexFull, fieldReference } = props.bug.fields;
    const bug = props.bugs.find((bug) => (bug.id === params.id));



    return (
        <div>
        <img src={bug.fields.imageURL} alt={bug.fields.imageReference} />
        <h2>Name: {bug.fields.bug}</h2>
        <h3>Species: <i>{bug.fields.species}</i></h3>
        <h3>Pain Index: {bug.fields.schmidtPainIndex}</h3>
        <p>Field Guide Information: {bug.fields.information}</p>
        <button onClick={() => window.open(`${bug.fields.fieldReference}`, "_blank")}>More Information</button>
        </div>
    )
}
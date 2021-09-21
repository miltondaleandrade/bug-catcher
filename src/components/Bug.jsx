import { useParams } from "react-router-dom";

export default function Bug(props) {
    const params = useParams(props);
     const { bug, species, imageURL, imageReference, information, schmidtPainIndex, schmidtPainIndexFull, fieldReference } = props.bug.fields;
    // const buggies = props.bugs.find((bug) => bug.id === params.id);
    // console.log(buggies, params);



    return (
        <div>
        <img src={imageURL} alt={imageReference} />
        <h2>Name: {bug}</h2>
        <h3>Species: <i>{species}</i></h3>
        <h3>Pain Index: {schmidtPainIndex}</h3>
        <p>Pain Index Info: {schmidtPainIndexFull}</p>
        <p>Field Guide Information: {information}</p>
        <button onClick={() => window.open(`${fieldReference}`, "_blank")}>More Information</button>
        </div>
    )
}
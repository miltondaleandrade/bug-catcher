export default function Bug(props) {
    const { bug, species, imageURL, imageReference, information, schmidtPainIndex, schmidtPainIndexFull } = props.bug.fields;

    return (
        <div>
        <img src={imageURL} alt={imageReference} />
        <h2>Name: {bug}</h2>
        <h3>Species: <i>{species}</i></h3>
        <h3>Pain Index: {schmidtPainIndex}</h3>
        <p>Pain Index Info: {schmidtPainIndexFull}</p>
        <p>Field Guide Information: {information}</p>
        </div>
    )
}
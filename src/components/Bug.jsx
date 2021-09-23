export default function Bug(props) {
  const {
    bug,
    species,
    imageURL,
    imageReference,
    information,
    schmidtPainIndex,
    fieldReference,
  } = props.bug.fields;

  return (
    <div>
      <img src={imageURL} alt={imageReference} />
      <h2>Name: {bug}</h2>
      <h3>
        Species: <i>{species}</i>
      </h3>
      <h3>Pain Index: {schmidtPainIndex}</h3>
      <p>Field Guide Information: {information}</p>
      <button onClick={() => window.open(`${fieldReference}`, "_blank")}>
        More Information
      </button>
      <button onCLick={() => <div className="bugModal hide"></div>}>
        Hide
      </button>
    </div>
  );
}

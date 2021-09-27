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
    <div className="bug">
      <img src={imageURL} alt={imageReference} />
      <h2>Name: {bug}</h2>
      <h3>
        Species: <i>{species}</i>
      </h3>
      {schmidtPainIndex != null ? (
        <h3>Pain Index: {schmidtPainIndex}</h3>
      ) : null}
      <p>Field Guide Information: {information}</p>
      <a
        className="bug-btn"
        rel="noreferrer"
        href={fieldReference}
        target="_blank"
      >
        <button>More Information</button>
      </a>
    </div>
  );
}

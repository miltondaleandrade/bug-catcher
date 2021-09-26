import { useHistory, useParams } from "react-router";

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
  const history = useHistory();
  

  return (
    <div className="bug">
      <button className="close-btn" onClick={() => history.push("/")}>
        X
      </button>
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

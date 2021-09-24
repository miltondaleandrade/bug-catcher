import { useParams, useHistory } from "react-router-dom";
export default function BugModal(props) {
  const history = useHistory();
  const params = useParams();
  const bug = props.bugs.find((bug) => bug.id === params.id);

  if (!bug) {
    return <div>Loading...</div>;
  }
  return (
    <div className="modal-content">
      <button className="close-btn" onClick={() => history.push("/")}>
        X
      </button>
      <img src={bug.fields.imageURL} alt={bug.fields.imageReference} />
      <h2>{bug.fields.bug}</h2>
      <h3>
        <i>{bug.fields.species}</i>
      </h3>
      {bug.fields.schmidtPainIndex != null ? (
        <h3>Pain Index: {bug.fields.schmidtPainIndex}</h3>
      ) : (
        <h3>{null}</h3>
      )}
      <p>{bug.fields.information}</p>
      <a
        className="modal-btn-1"
        rel="noreferrer"
        href={bug.fields.fieldReference}
        target="_blank"
      >
        <button>More Information</button>
      </a>
      
    </div>
  );
}

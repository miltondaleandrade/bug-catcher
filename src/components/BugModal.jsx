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
        <img src={bug.fields.imageURL} alt={bug.fields.imageReference} />
        <h2>Name: {bug.fields.bug}</h2>
        <h3>
          Species: <i>{bug.fields.species}</i>
        </h3>
        {(bug.fields.schmidtPainIndex != null) ?<h3>"Pain Index:" {bug.fields.schmidtPainIndex}</h3> : <h3>{null}</h3>}
        <p>Field Guide Information: {bug.fields.information}</p>
        <button
        className="modal-btn-1"
          onClick={() => window.open(`${bug.fields.fieldReference}`, "_blank")}
        >
          More Information
        </button>
        <button className="modal-btn-2" onClick={() => history.push("/")}>Close</button>
      </div>
    
  );
}

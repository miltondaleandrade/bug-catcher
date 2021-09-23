import { useParams } from "react-router-dom";
export default function BugModal(props) {
  const params = useParams(props);
  const bug = props.bugs.find((bug) => bug.id === params.id);

  
  return (
    <div className="bug-modal">
      <div className="modal-content">
        <img src={bug.field.imageURL} alt={props.bugs.imageReference} />
        <h2>Name: {props.bugs.bug}</h2>
        <h3>
          Species: <i>{props.bugs.species}</i>
        </h3>
        <h3>Pain Index: {props.bugs.schmidtPainIndex}</h3>
        <p>Pain Index Info: {props.bugs.schmidtPainIndexFull}</p>
        <p>Field Guide Information: {props.bugs.information}</p>
        <button onClick={() => window.open(`${props.bugs.fieldReference}`, "_blank")}>
          More Information
        </button>
      </div>
    </div>
  );
}

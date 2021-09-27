import { useHistory } from "react-router";

export default function CloseButton() {
  const history = useHistory();
  return (
    <button className="close-btn" onClick={() => history.push("/")}>
      X
    </button>
  );
}

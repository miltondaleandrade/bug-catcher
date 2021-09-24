import axios from "axios";
import { useState } from "react";
import { baseURL, config } from "../services";

export default function Form(props) {
  const [bug, setBug] = useState("");
  const [species, setSpecies] = useState("");
  const [schmidtPainIndex, setSchmidtPainIndex] = useState(0);
  const [imageURL, setImageUrl] = useState("");
  const [information, setInformation] = useState("");
  const [fieldReference, setFieldReference] = useState("");
  const [imageReference, setImageReference] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBug = {
      bug,
      species,
      schmidtPainIndex,
      imageURL,
      information,
      fieldReference,
      imageReference,
    };

    await axios.post(baseURL, { fields: newBug }, config);
  };

  return (
    <>
    <h3>Create a bug!</h3>
    <p>Please include an Image and Image reference!</p>
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Bug Name"
        required
        value={bug}
        onChange={(e) => setBug(e.target.value)}
      />
      <input
        type="text"
        placeholder="Species"
        required
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
      />
      <input
        type="text"
        placeholder="Schmidt Index"
        value={schmidtPainIndex}
        onChange={(e) => setSchmidtPainIndex(e.target.valueAsNumber)}
      />
      <input
        type="text"
        placeholder="Image URL"
        required
        value={imageURL}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Information"
        required
        value={information}
        onChange={(e) => setInformation(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Info Reference"
        required
        value={fieldReference}
        onChange={(e) => setFieldReference(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Image Reference"
        required
        value={imageReference}
        onChange={(e) => setImageReference(e.target.value)}
      ></input>
      <button type="submit">Create!</button>
    </form>
    </>
  );
}

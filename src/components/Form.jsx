import axios from "axios";
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router";
import { baseURL, config } from "../services";

export default function Form(props) {
    const [bug, setBug] = useState("");
    const [species, setSpecies] = useState("");
    const [schmidtIndex, setSchmidtIndex] = useState(0);
    const [imageURL, setImageUrl] = useState("");
    const [information, setInformation] = useState("");
    const history = useHistory();
    const params = useParams();

    // useEffect(() => {
    //     if (params.id) {
    //         const Bugs = props.bugs.find((bug) => bug.id === params.id);
    //         if (bug) {
    //             setBug(bug.fields.bug);
    //             setSpecies(bug.fields.species);
    //             setSchmidtIndex(bug.fields.schmidtIndex);
    //             setImageUrl(bug.fields.imageURL);
    //             setInformation(bug.fields.information);
    //         } 
    //     }
    // }, [params.id, props.bugs]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBug = {
            fields: {
            bug,
            species,
            schmidtIndex,
            imageURL,
            information,
            }
        }
        
            await axios.post(baseURL, { fields: newBug }, config);
        

    }
    return(
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Bug Name" required value={bug} onChange={(e) => setBug(e.target.value)}/>
            <input type="text" placeholder="Species" required value={species} onChange={(e) => setSpecies(e.target.value)}/>
            <input type="text" placeholder="Schmidt Index (Optional)" value={schmidtIndex} onChange={(e) => setSchmidtIndex(e.target.valueAsNumber)}/>
            <input type="text" placeholder="Image URl" required value={imageURL} onChange={(e) => setImageUrl(e.target.value)}/>
            <textarea type="text" cols="30" rows="10" placeholder="Information" required value={information} onChange={(e) => setInformation(e.target.value)}></textarea>
            <button type="submit">Create!</button>
        </form>
    )
}
import { useParams } from "react-router-dom";

const Lines = () => {

    const {id} = useParams();
    const name = id.slice(1,id.length)
    return <h1>{name}</h1>
}

export default Lines;
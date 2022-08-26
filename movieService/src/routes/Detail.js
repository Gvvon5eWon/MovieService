import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
    const {id} = useParams();
    const getMovie = async () => {
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return <h1>ing 이건 아직 구현 안했지</h1>
}

export default Detail;
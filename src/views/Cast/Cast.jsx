import { useState, useEffect } from "react";
import { fetchMovieCast } from "../../services/movieApi";
import s from "./Cast.module.css";

const BASE_URL = "https://image.tmdb.org/t/p/w500";

function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then((response) => setCast(response.cast));
  }, [movieId]);
  return (
    <>
      <ul className={s.list}>
        {cast.map((item) => (
          <li key={item.id}>
            {!item.profile_path && (
              <img
                src="http://p17-spb.ru.images.1c-bitrix-cdn.ru/upload/no-photo.jpg?147384517418059"
                alt={item.name}
                width="100"
              />
            )}
            {item.profile_path && (
              <img
                src={`${BASE_URL}${item.profile_path}`}
                alt={item.name}
                width="100"
              />
            )}
            <p>{item.name}</p>
          </li>
        ))}
      </ul>{" "}
    </>
  );
}

export default Cast;

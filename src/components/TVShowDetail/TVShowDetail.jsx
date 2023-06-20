import { FiveStarRaiting } from "../FiveStarRating/FiveStarRaiting"
import s from "./style.module.css"

export function TVShowDetail({tvShow}){
    const rating = tvShow.vote_average / 2
    return (
    <div>
        <div className={s.title}>{tvShow.original_title}</div>
        <div className={s.rating_container}>
            <FiveStarRaiting rating ={rating} />
            <div className={s.rating}>{rating.toFixed(1)}/5</div>
        </div>
        <div className={s.overview}>{tvShow.overview}</div>
    </div>
    )
}
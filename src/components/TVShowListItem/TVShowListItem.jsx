import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import clapperboard from '../../assets/images/clapperboardMin.png'
export function TVShowListItem({ tvShow, onClick }) {
  return (
    <div onClick={() => onClick(tvShow)} className={s.container}>
      <img
        className={s.img}
        alt={tvShow.original_title}
        src={tvShow.backdrop_path ? SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path : clapperboard}
      />
      <div className={s.title}>{tvShow.original_title}</div>
    </div>
  );
}

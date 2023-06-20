import s from "./style.module.css"

export function Logo({image, title, subtitle}){
    return(
        <div>
            <div className={s.container}>
                <img alt="logo" src={image} className={s.img} />
                <span className={s.title}>{title}</span>
            </div>
            <span className={s.subtitle} >{subtitle}</span>
        </div>
    )
}
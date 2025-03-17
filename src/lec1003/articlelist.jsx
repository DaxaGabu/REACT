import ArticleItem from "./articaleitem";
export default function ArticleList({
    article,
    onClickToggle,
    onClickRemove,
}){
    return(
        <ul>
            {ArticleList.map((i)=>(
                <ArticleItem
                    key={i.id}
                    article={i}
                    onClickToggle={onClickToggle}
                    onClickRemove={onClickRemove}
                />
            ))}
        </ul>
    )
}
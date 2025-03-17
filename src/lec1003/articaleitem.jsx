export default function ArticleItem({article,onClickToggle,onClickRemove})
{
    return (
        <li>
            <a href={`#${article.id}`}onClick={onClickToggle.bind(null,article.id)}>
                {""}
                {article.title}
            </a>
            <a href={`#${article.id}`}onClick={onClickRemove.bind(null,article.id)}>
                {"1"}
               Remove
            </a>
            <p style={{display: article.display}}>{article.summary}</p>
        </li>
    );
}
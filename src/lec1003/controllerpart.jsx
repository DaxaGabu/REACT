const id = (function () {
    let i =1;
    while (true)
    {
        yield i++;
    }
})();

function Controller123({addArticle,artlelist})
{
   const [articles, setContent] = useState([
    { id: id.next(), title: "Title1", summary: "Summary1", display: "none" },
    { id: id.next(), title: "Title2", summary: "Summary2", display: "none" },
    { id: id.next(), title: "Title3", summary: "Summary3", display: "none" },
    { id: id.next(), title: "Title4", summary: "Summary4", display: "none" },
   ]);
   const [title, setTitle] = useState("");
   const [summary, setSummary] = useState("");
   function onChangeTitle(e) {
    setTitle(e.target.value);
   }
   function onChangeSummary(e) {
    setSummary(e.target.value);
   }    
}
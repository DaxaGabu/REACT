import React from 'react';
const id = (function* () {
    let i = 0;
    while(true){
        yield i++;
    }
})();


class Monolithic extends React.Component {
    state = {
        articles: [
            {id: id.next(), title:"title1", summary:"Summary1", display:"none"},
            {id: id.next(), title:"title2", summary:"Summary2", display:"none"},
            {id: id.next(), title:"title3", summary:"Summary3", display:"none"},
            {id: id.next(), title:"title4", summary:"Summary4", display:"none"},
        ],
        title:"",
        summary:"",
    };

    onChangeTitle = (e) => {
            this.setState({title:e.target.value});
    };
}
export default Monolithic;
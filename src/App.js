import React, {useState} from "react";
import './styles/App.css'
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description 2'},
        {id: 3, title: 'Javascript 3', body: 'Description 3'}
    ])
    const [posts2, setPosts2] = useState([
        {id: 1, title: 'python', body: 'Description'},
        {id: 2, title: 'python 2', body: 'Description 2'},
        {id: 3, title: 'python 3', body: 'Description 3'}
    ])
    return (
        <div className="App">
<PostList posts={posts} title='Список постов про JS'/>
            <PostList posts={posts2} title='Список постов про PTN'/>
        </div>
    );
}

export default App;

import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/MySelect";
import MyInput from "./Components/UI/Input/MyInput";
import PostFilter from "./Components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'сс', body: 'мм'},
        {id: 2, title: 'ааа 2', body: 'оо 2'},
        {id: 3, title: 'нн 3', body: 'дд 3'}
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})


    const sortedPosts = useMemo(() => {
        console.log("сортед постс работает")

        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    const createPost = (NewPost) => {
        setPosts([...posts, NewPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: "15px 0"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов про JS'/>


        </div>
    );
}

export default App;

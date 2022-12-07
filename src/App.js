import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";

import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import MyButton from "./Components/UI/Button/MyButton";
import {usePosts} from "./hooks/UsePosts";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'сс', body: 'мм'},
        {id: 2, title: 'ааа 2', body: 'оо 2'},
        {id: 3, title: 'нн 3', body: 'дд 3'}
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const createPost = (NewPost) => {
        setPosts([...posts, NewPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={()=> setModal(true)}>
                Новый пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: "15px 0"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов про JS'/>


        </div>
    );
}

export default App;

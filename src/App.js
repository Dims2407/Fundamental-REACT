import React, {useEffect, useState} from "react";
import './styles/App.css'
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import MyButton from "./Components/UI/Button/MyButton";
import {usePosts} from "./hooks/UsePosts";
import PostService from "./API/PostServise";

function App() {
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [isPostsLoading, setIsPostsLoading] = useState(false)

    useEffect(()=> {
        fetchPosts()
    }, [])

    const createPost = (NewPost) => {
        setPosts([...posts, NewPost])
        setModal(false)
    }

    async function fetchPosts() {
        setIsPostsLoading(true)
        setTimeout(async ()=> {
            const posts = await PostService.getAll()
            setPosts(posts)
            setIsPostsLoading(false)
        }, 1000)

    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Новый пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: "15px 0"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {isPostsLoading
                ? <h1>Идёт загрузка...</h1>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов про JS'/>

            }



        </div>
    );
}

export default App;

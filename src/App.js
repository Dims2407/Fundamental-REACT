import React, {useState} from "react";
import './styles/App.css'
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'сс', body: 'мм'},
        {id: 2, title: 'ааа 2', body: 'оо 2'},
        {id: 3, title: 'нн 3', body: 'дд 3'}
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const createPost = (NewPost) => {
        setPosts([...posts, NewPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

const sortPost = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
}

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: "15px 0"}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPost}

                    defaultValue='Сортировка:'
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'}
                    ]}/>
            </div>
            {posts.length
                ? <PostList remove={removePost} posts={posts} title='Список постов про JS'/>
                : <h1 style={{textAlign: "center"}}>Посты не найдены!</h1>
            }


        </div>
    );
}

export default App;

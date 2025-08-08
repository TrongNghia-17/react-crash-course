import Post from "./Post";
import NewPost from "./NewPost";
import Classes from "./PostsList.module.css";

function PostList() {
    return (
        <>
            <NewPost />
            <ul className={Classes.posts}>
                <Post author="Nghia" body="6 mui" />
                <Post author="Han" body="day dan" />
            </ul>
        </>
    );
}

export default PostList;

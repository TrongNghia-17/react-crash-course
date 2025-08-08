import Post from "./Post";
import Classes from "./PostsList.module.css";

function PostList() {
    return (
        <ul className={Classes.posts}>
            <Post author="Nghia" body="6 mui" />
            <Post author="Han" body="day dan" />
        </ul>
    );
}

export default PostList;

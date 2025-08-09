import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Classes from "./PostsList.module.css";
import Modal from "./Modal";

function PostList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {isPosting ? <Modal onClose={onStopPosting}>
                <NewPost
                    onCancel={onStopPosting}
                    onAddPost={addPostHandler}
                />
            </Modal> : false}

            <ul className={Classes.posts}>
                <Post author="Nghia" body="6 mui" />
            </ul>
        </>
    );
}

export default PostList;

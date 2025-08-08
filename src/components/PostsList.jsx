import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Classes from "./PostsList.module.css";
import Modal from "./Modal";

function PostList() {
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            {modalIsVisible ? <Modal onClose={hideModalHandler}>
                <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
            </Modal> : false}

            <ul className={Classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author={enteredAuthor} body={enteredBody} />
            </ul>
        </>
    );
}

export default PostList;

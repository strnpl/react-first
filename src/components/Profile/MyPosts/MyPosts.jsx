import posts from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={posts.profile}>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={posts.posts}>
        <Post message="Hi, how are you?" likesCount="0"/>
        <Post message="It's my first post" likesCount="23"/>
      </div>
    </div>
  );
};

export default MyPosts;

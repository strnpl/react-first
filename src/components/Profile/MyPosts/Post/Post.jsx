import posts from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={posts.profile__post}>
      <img src="https://i.ytimg.com/vi/Y5GLCBjHR8U/maxresdefault.jpg"/>
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;

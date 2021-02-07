import posts from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={posts.profile}>
      <div>
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg">
        </img>
      </div>
      <div>Profile Picture</div>
      <MyPosts />
    </div>
  );
};

export default Profile;

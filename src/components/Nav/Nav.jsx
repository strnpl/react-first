import classes from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.item}>
          <a href="http://www.vk.com/strnpl">Profile</a>
        </li>
        <li className={classes.item}>
          <a href="#">Messages</a>
        </li>
        <li className={classes.item}>
          <a href="#">News</a>
        </li>
        <li className={classes.item}>
          <a href="#">Music</a>
        </li>
        <li className={classes.item}>
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

import classes from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.item}>
          <a href="/profile">Profile</a>
        </li>
        <li className={classes.item}>
          <a href="/dialogs">Messages</a>
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

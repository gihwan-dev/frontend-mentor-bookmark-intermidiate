import Image from "next/image";
import LoginBtn from "./button/loginBtn";
import Icon from "public/images/logo-bookmark.svg";
import styles from "./navBar.module.scss";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Image src={Icon} alt={"logo"} />
        <ul>
          <li>FEATURES</li>
          <li>PRICING</li>
          <li>CONTACT</li>
          <LoginBtn />
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

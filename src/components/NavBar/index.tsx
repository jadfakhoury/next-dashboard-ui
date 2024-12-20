import Image from "next/image";
import styles from "./styles.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      {/* Search Bar */}
      <div className={styles.search}>
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
      </div>

      {/* Icons and User */}
      <div className={styles.icons}>
        <div className={styles.messages}>
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className={styles.annoucements}>
          <Image src="/announcement.png" alt="" width={20} height={20} />
          <div className={styles.notifications}>1</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.role}>Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt=""
          width={36}
          height={36}
          style={{ borderRadius: "9999px" }}
        />
      </div>
    </div>
  );
};

export default NavBar;

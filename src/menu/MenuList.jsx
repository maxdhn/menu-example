import styles from "./MenuList.module.css";
import { MenuListItem } from "./MenuListItem";
import { memo } from "react";

export const MenuList = memo(({ submenu, onClick }) => {
  return (
    <ul className={styles.list}>
      {submenu.map((m, i) => (
        <MenuListItem {...m} key={i} onClick={onClick}></MenuListItem>
      ))}
    </ul>
  );
});

import styles from "./MenuListItem.module.css";
import { MdArrowForward } from "react-icons/md";
import { memo } from "react";

export const MenuListItem = memo(({ label, children, onClick }) => {
  return (
    <li className={styles.item} onClick={() => onClick(children)}>
      <span>{label}</span>
      {!!children ? <MdArrowForward /> : ""}
    </li>
  );
});

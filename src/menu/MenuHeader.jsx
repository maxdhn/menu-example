import styles from "./MenuHeader.module.css";
import { MdArrowBack } from "react-icons/md";
import { memo } from "react";

export const MenuHeader = memo(({ children, backward }) => {
  return (
    <div className={styles.header}>
      {backward ? (
        <MdArrowBack className={styles.back} onClick={backward} />
      ) : (
        ""
      )}
      {children}
    </div>
  );
});

import "./transition.css";
import styles from "./Menu.module.css";
import { useState, useRef, useEffect, useCallback, memo } from "react";
import { MenuList } from "./MenuList";
import { MenuHeader } from "./MenuHeader";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Menu = memo(({ items, children }) => {
  const [menu, setMenu] = useState(items);
  const [history, setHistory] = useState([items]);
  const [slide, setSlide] = useState(false);
  const [height, setHeight] = useState("auto");

  const refMenu = useRef(null);

  const forward = useCallback((m) => {
    setSlide(true);
    setMenu(m);
    setHistory([...history, menu]);
  });

  const backward = useCallback(() => {
    setSlide(false);
    const newHistory = [...history];
    const previousMenu = newHistory.pop();
    setHistory(newHistory);
    setMenu(previousMenu);
  });

  useEffect(() => {
    setHeight(`${refMenu.current.clientHeight}px`);
  }, [menu]);

  return (
    <div className={styles.host} style={{ height: `${height}` }}>
      <TransitionGroup
        className={`${styles.container} ${slide ? "forward" : "backward"}`}
      >
        <CSSTransition key={menu} timeout={325} classNames="slide">
          <div ref={refMenu} className={styles.wrapper}>
            <MenuHeader backward={history.length === 1 ? false : backward}>
              {history.length === 1 ? children : ""}
            </MenuHeader>
            <MenuList submenu={menu} onClick={(m) => forward(m)}></MenuList>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
});

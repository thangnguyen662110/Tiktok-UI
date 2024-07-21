import { upload } from "@testing-library/user-event/dist/upload";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  children,
  primary = false,
  outline = false,
  to,
  href,
  onClick,
  iconLeft,
  small = false,
  large = false,
  upload = false,
  disabled = false,
  iconRight,
  passProps,
}) {
  let Comp = "button";

  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    large,
    upload,
    disabled,
  });

  return (
    <Comp className={classes} {...props}>
      {iconLeft && <span className={cx("icon")}>{iconLeft}</span>}
      <span className={cx("title")}>{children}</span>
      {iconRight && <span className={cx("icon")}>{iconRight}</span>}
    </Comp>
  );
}

export default Button;

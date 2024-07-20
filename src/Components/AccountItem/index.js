import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/2d7fc7afa25a1d84e98ad63769c2c220.jpeg?lk3s=a5d48078&nonce=58118&refresh_token=53c0daa84a6516b7e638cb2d528422e7&x-expires=1721628000&x-signature=EFS6A%2BzbBdZLYnLa%2FAL8hfNUSPk%3D&shp=a5d48078&shcp=81f88b70"
        alt="account.."
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyễn Văn A</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>Anv</span>
      </div>
    </div>
  );
}

export default AccountItem;

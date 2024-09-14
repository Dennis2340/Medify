import type { NextPage } from 'next';
import styles from './log.module.css';
const LogOut:NextPage = () => {
return (
<div className={styles.logOut}>
<div className={styles.settings}>
<div className={styles.listItem}>
<div className={styles.content}>
<div className={styles.title}>Saved Messages</div>
</div>
<img className={styles.rightButtonIcon} alt="" src="Right Button.svg" />
</div>
<img className={styles.dividerIcon} alt="" src="Divider.svg" />
<div className={styles.listItem}>
<div className={styles.content}>
<div className={styles.title}>Recent Calls</div>
</div>
<img className={styles.rightButtonIcon} alt="" src="Right Button.svg" />
</div>
<img className={styles.dividerIcon} alt="" src="Divider.svg" />
<div className={styles.listItem}>
<div className={styles.content}>
<div className={styles.title}>Devices</div>
</div>
<img className={styles.rightButtonIcon} alt="" src="Right Button.svg" />
</div>
<img className={styles.dividerIcon} alt="" src="Divider.svg" />
<div className={styles.listItem}>
<div className={styles.content}>
<div className={styles.title}>Notifications</div>
</div>
<img className={styles.rightButtonIcon} alt="" src="Right Button.svg" />
</div>
<img className={styles.dividerIcon} alt="" src="Divider.svg" />
<div className={styles.listItem}>
<div className={styles.content}>
<div className={styles.title}>Appearance</div>
</div>
<img className={styles.rightButtonIcon} alt="" src="Right Button.svg" />
</div>
<img className={styles.dividerIcon} alt="" src="Divider.svg" />
<div className={styles.listItem}>
<div className={styles.content}>
<div className={styles.title}>Language</div>
</div>
<img className={styles.rightButtonIcon} alt="" src="Right Button.svg" />
</div>
<img className={styles.dividerIcon} alt="" src="Divider.svg" />
<div className={styles.listItem}>
<div className={styles.content}>
<div className={styles.title}>{`Privacy & Security`}</div>
</div>
<img className={styles.rightButtonIcon} alt="" src="Right Button.svg" />
</div>
<img className={styles.dividerIcon} alt="" src="Divider.svg" />
<div className={styles.listItem}>
<div className={styles.content}>
<div className={styles.title}>Storage</div>
</div>
<img className={styles.rightButtonIcon} alt="" src="Right Button.svg" />
</div>
</div>
<div className={styles.profileInfo}>
<img className={styles.avatarIcon} alt="" src="Avatar.png" />
<div className={styles.name}>
<div className={styles.lucasScott}>Lucas Scott</div>
<div className={styles.lucasscott3}>@lucasscott3</div>
</div>
</div>
<div className={styles.iosStatusBar} />
<div className={styles.iosHomeIndicator} />
<div className={styles.navBar}>
<b className={styles.pageTitle}>Settings</b>
</div>
<div className={styles.tabBar}>
<div className={styles.tab1}>
<img className={styles.icon} alt="" src="Icon.svg" />
<div className={styles.tabName}>Chats</div>
</div>
<div className={styles.tab1}>
<img className={styles.icon} alt="" src="Icon.svg" />
<div className={styles.tabName}>Friends</div>
</div>
<div className={styles.tab3}>
<img className={styles.icon} alt="" src="Icon.svg" />
<div className={styles.button}>Settings</div>
</div>
</div>
<div className={styles.overlay} />
<div className={styles.buttonDialog}>
<div className={styles.content8}>
<div className={styles.title8}>Log out</div>
<div className={styles.description}>Are you sure you want to log out? You'll need to login again to use the app.</div>
</div>
<div className={styles.actions}>
<div className={styles.action1}>
<div className={styles.button}>Cancel</div>
</div>
<div className={styles.action2}>
<div className={styles.button}>Log out</div>
</div>
</div>
</div>
</div>);
};
export default LogOut;

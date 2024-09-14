import type { NextPage } from 'next';
import styles from './settings.module.css';

const Settings: NextPage = () => {
    return (
        <div className={styles.settings}>
            <div className={styles.settingsList}>
                <div className={styles.listItem}>
                    <div className={styles.content}>
                        <div className={styles.title}>Health Profile</div>
                    </div>
                    <img className={styles.rightButtonIcon} alt="Right Button" src="Right Button.svg" />
                </div>
                <img className={styles.dividerIcon} alt="Divider" src="Divider.svg" />
                <div className={styles.listItem}>
                    <div className={styles.content}>
                        <div className={styles.title}>Pharmacies</div>
                    </div>
                    <img className={styles.rightButtonIcon} alt="Right Button" src="Right Button.svg" />
                </div>
                <img className={styles.dividerIcon} alt="Divider" src="Divider.svg" />
                <div className={styles.listItem}>
                    <div className={styles.content}>
                        <div className={styles.title}>Alerts</div>
                    </div>
                    <img className={styles.rightButtonIcon} alt="Right Button" src="Right Button.svg" />
                </div>
                <img className={styles.dividerIcon} alt="Divider" src="Divider.svg" />
                <div className={styles.listItem}>
                    <div className={styles.content}>
                        <div className={styles.title}>Drugs</div>
                    </div>
                    <img className={styles.rightButtonIcon} alt="Right Button" src="Right Button.svg" />
                </div>
                <img className={styles.dividerIcon} alt="Divider" src="Divider.svg" />
                <div className={styles.listItem}>
                    <div className={styles.content}>
                        <div className={styles.title}>Doc Bot</div>
                    </div>
                    <img className={styles.rightButtonIcon} alt="Right Button" src="Right Button.svg" />
                </div>
                <img className={styles.dividerIcon} alt="Divider" src="Divider.svg" />
                <div className={styles.listItem}>
                    <div className={styles.content}>
                        <div className={styles.title}>Language</div>
                    </div>
                    <img className={styles.rightButtonIcon} alt="Right Button" src="Right Button.svg" />
                </div>
                <img className={styles.dividerIcon} alt="Divider" src="Divider.svg" />
                <div className={styles.listItem}>
                    <div className={styles.content}>
                        <div className={styles.title}>Privacy & Security</div>
                    </div>
                    <img className={styles.rightButtonIcon} alt="Right Button" src="Right Button.svg" />
                </div>
                <img className={styles.dividerIcon} alt="Divider" src="Divider.svg" />
            </div>
            <div className={styles.profileInfo}>
                <img className={styles.avatarIcon} alt="Avatar" src="Avatar.png" />
                <div className={styles.name}>
                    <div className={styles.fullName}>Lucas Scott</div>
                    <div className={styles.username}>@lucasscott3</div>
                </div>
            </div>
            <div className={styles.navBar}>
                <b className={styles.pageTitle}>Settings</b>
            </div>
            <div className={styles.tabBar}>
                <div className={styles.tab}>
                    <img className={styles.icon} alt="Icon" src="Icon.svg" />
                    <div className={styles.tabName}>Find A Pharmacy</div>
                </div>
                <div className={styles.tab}>
                    <img className={styles.icon} alt="Icon" src="Icon.svg" />
                    <div className={styles.tabName}>Alerts</div>
                </div>
                <div className={styles.tab}>
                    <img className={styles.icon} alt="Icon" src="Icon.svg" />
                    <div className={styles.tabName}>Settings</div>
                </div>
            </div>
        </div>
    );
};

export default Settings;

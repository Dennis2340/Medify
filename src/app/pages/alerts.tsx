import type { NextPage } from 'next';
import styles from './alerts.module.css';

const Alerts: NextPage = () => {
    return (
        <div className={styles.alerts}>
            <div className={styles.searchBar}>
                <img className={styles.searchIcon} alt="Search icon" src="Search.svg" />
                <div className={styles.text}>
                    <div className={styles.search}>Search</div>
                </div>
            </div>
            <div className={styles.chats}>
                <div className={styles.listItem}>
                    <div className={styles.supportingVisuals}>
                        <img className={styles.avatarIcon} alt="Avatar" src="Avatar.svg" />
                    </div>
                    <div className={styles.content}>
                        <b className={styles.title}>MoHs</b>
                        <div className={styles.description}>The breakout of MPOX has spread wide</div>
                    </div>
                    <div className={styles.badge}>
                        <div className={styles.div}>9</div>
                    </div>
                </div>
                <div className={styles.listItem}>
                    <div className={styles.supportingVisuals}>
                        <img className={styles.avatarIcon} alt="Avatar" src="Avatar.svg" />
                    </div>
                    <div className={styles.content}>
                        <b className={styles.title}>Dr. Phil</b>
                        <div className={styles.description}>Hope you’ve been taking your medications?</div>
                    </div>
                </div>
                <div className={styles.listItem}>
                    <div className={styles.supportingVisuals}>
                        <img className={styles.avatarIcon} alt="Avatar" src="Avatar.svg" />
                    </div>
                    <div className={styles.content}>
                        <b className={styles.title}>Doc Bot</b>
                        <div className={styles.description}>Your weight is increasing and this may</div>
                    </div>
                    <div className={styles.badge}>
                        <div className={styles.div}>2</div>
                    </div>
                </div>
                <div className={styles.listItem}>
                    <div className={styles.supportingVisuals}>
                        <img className={styles.avatarIcon} alt="Avatar" src="Avatar.svg" />
                    </div>
                    <div className={styles.content}>
                        <b className={styles.title}>WHO</b>
                        <div className={styles.description}>Did you know that Amphetamine B is a very </div>
                    </div>
                </div>
                <div className={styles.listItem}>
                    <div className={styles.supportingVisuals}>
                        <img className={styles.avatarIcon} alt="Avatar" src="Avatar.svg" />
                    </div>
                    <div className={styles.content}>
                        <b className={styles.title}>Health Tips 101</b>
                        <div className={styles.description}>Vegetables are a very good source of roughage</div>
                    </div>
                </div>
            </div>
            <div className={styles.navBar}>
                <b className={styles.pageTitle}>Alerts</b>
                <div className={styles.rightButton}>Edit</div>
            </div>
            <div className={styles.tabBar}>
                <div className={styles.tab1}>
                    <img className={styles.icon} alt="Find A Pharmacy icon" src="Icon.svg" />
                    <div className={styles.tabName}>Find A Pharmacy</div>
                </div>
                <div className={styles.tab1}>
                    <img className={styles.icon} alt="Alerts icon" src="Icon.svg" />
                    <div className={styles.tabName}>Alerts</div>
                </div>
                <div className={styles.tab1}>
                    <img className={styles.icon} alt="Settings icon" src="Icon.svg" />
                    <div className={styles.tabName}>Settings</div>
                </div>
            </div>
        </div>
    );
};

export default Alerts;

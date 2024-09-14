import type { NextPage } from 'next';
import styles from './sign.module.css';
const SignUp:NextPage = () => {
return (
<div className={styles.signUp}>
<div className={styles.loginOptions}>
<div className={styles.text}>
<div className={styles.signUp1}>Sign up</div>
<div className={styles.createAnAccount}>{`Create an account to get started `}</div>
</div>
<div className={styles.form}>
<div className={styles.textField}>
<b className={styles.title}>Name</b>
<div className={styles.field}>
<div className={styles.content}>
<div className={styles.text1}>
<div className={styles.placeholder}>Luc</div>
<img className={styles.cursorIcon} alt="" src="Cursor.svg" />
</div>
</div>
</div>
</div>
<div className={styles.textField}>
<b className={styles.title}>Email Address</b>
<div className={styles.field1}>
<div className={styles.content}>
<div className={styles.content}>
<div className={styles.placeholder}>name@email.com</div>
</div>
</div>
</div>
</div>
<div className={styles.textField}>
<b className={styles.title}>Password</b>
<div className={styles.field2}>
<div className={styles.content}>
<div className={styles.content}>
<div className={styles.placeholder}>Create a passaword</div>
</div>
</div>
<img className={styles.icon} alt="" src="Icon.png" />
</div>
</div>
<div className={styles.textField3}>
<div className={styles.field3}>
<div className={styles.content}>
<div className={styles.content}>
<div className={styles.placeholder}>Confirm password</div>
</div>
</div>
<img className={styles.icon} alt="" src="Icon.png" />
</div>
</div>
</div>
<div className={styles.checkboxParent}>
<div className={styles.checkbox} />
<div className={styles.iveReadAndContainer}>
<span className={styles.iveReadAnd}>{`I've read and agree with the `}</span>
<span className={styles.termsAndConditions}>Terms and Conditions</span>
<span className={styles.iveReadAnd}>{` and the `}</span>
<span className={styles.termsAndConditions}>Privacy Policy</span>
<span className={styles.iveReadAnd}>.</span>
</div>
</div>
</div>
<div className={styles.iosKeyboardPortrait}>
<div className={styles.alphabet}>
<div className={styles.bottomRow}>
<div className={styles.z}>
<div className={styles.letter}>Z</div>
</div>
<div className={styles.x}>
<div className={styles.letter}>X</div>
</div>
<div className={styles.c}>
<div className={styles.letter}>C</div>
</div>
<div className={styles.v}>
<div className={styles.letter}>V</div>
</div>
<div className={styles.b}>
<div className={styles.letter}>B</div>
</div>
<div className={styles.n}>
<div className={styles.letter}>N</div>
</div>
<div className={styles.m}>
<div className={styles.letter}>M</div>
</div>
</div>
<div className={styles.middleRow}>
<div className={styles.a}>
<div className={styles.letter}>A</div>
</div>
<div className={styles.s}>
<div className={styles.letter}>S</div>
</div>
<div className={styles.d}>
<div className={styles.letter}>D</div>
</div>
<div className={styles.f}>
<div className={styles.letter}>F</div>
</div>
<div className={styles.g}>
<div className={styles.letter}>G</div>
</div>
<div className={styles.h}>
<div className={styles.letter}>H</div>
</div>
<div className={styles.j}>
<div className={styles.letter}>J</div>
</div>
<div className={styles.k}>
<div className={styles.letter}>K</div>
</div>
<div className={styles.l}>
<div className={styles.letter}>L</div>
</div>
</div>
<div className={styles.topRow}>
<div className={styles.q}>
<div className={styles.letter}>Q</div>
</div>
<div className={styles.w}>
<div className={styles.letter}>W</div>
</div>
<div className={styles.e}>
<div className={styles.letter}>E</div>
</div>
<div className={styles.r}>
<div className={styles.letter}>R</div>
</div>
<div className={styles.t}>
<div className={styles.letter}>T</div>
</div>
<div className={styles.y}>
<div className={styles.letter}>Y</div>
</div>
<div className={styles.u}>
<div className={styles.letter}>U</div>
</div>
<div className={styles.i}>
<div className={styles.letter}>I</div>
</div>
<div className={styles.o}>
<div className={styles.letter}>O</div>
</div>
<div className={styles.p}>
<div className={styles.letter}>P</div>
</div>
</div>
<img className={styles.icon2} alt="" src="Icon.svg" />
<img className={styles.icon3} alt="" src="Icon.svg" />
</div>
<div className={styles.controller}>
<div className={styles.homeIndicator} />
<img className={styles.micIcon} alt="" src="Mic.svg" />
<img className={styles.emojisIcon} alt="" src="Emojis.svg" />
<div className={styles.space}>
<div className={styles.space1}>space</div>
</div>
<div className={styles.return}>
<div className={styles.space1}>return</div>
</div>
<div className={styles.div}>
<div className={styles.space1}>123</div>
</div>
</div>
</div>
<div className={styles.iosStatusBar} />
</div>);
};
export default SignUp;
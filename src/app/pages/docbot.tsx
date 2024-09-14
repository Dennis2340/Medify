import type { NextPage } from 'next';
import styles from './bot.module.css';

// ChatBubble Component for Reusability
const ChatBubble = ({ sender, message, isUser }: { sender: string; message: string; isUser?: boolean }) => (
  <div className={isUser ? styles.messageBubbleUser : styles.messageBubble}>
    <b className={styles.name}>{sender}</b>
    <div className={styles.message}>{message}</div>
  </div>
);

const DocBot: NextPage = () => {
  return (
    <div className={styles.docBot}>
      <ChatBubble sender="Doc Bot" message="How may I help you today?" />
      <ChatBubble sender="Lucas" message="I want to know whether it's advisable to overeat while on menstrual cycle?" isUser />
      <ChatBubble sender="Lucas" message="Thanks, Doc. You're the best!" isUser />
      <ChatBubble sender="Doc Bot" message="It is not advisable to eat a lot during the menstrual cycle. Binge eating can contribute to PCOS and menstrual irregularities." />

      {/* Input Field */}
      <div className={styles.messageInputWrapper}>
        <div className={styles.messageInput}>
          <div className={styles.moreOptions}>
            <img className={styles.addIcon} alt="Add" src="/add.svg" />
          </div>
          <div className={styles.textInput}>
            <div className={styles.message}>Type a message...</div>
          </div>
        </div>
      </div>

      {/* Home Indicator for iOS */}
      <div className={styles.iosHomeIndicator}>
        <div className={styles.homeIndicator} />
      </div>
    </div>
  );
};

export default DocBot;

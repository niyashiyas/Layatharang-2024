import styles from "./ResultCard.module.css";
export default function ResultCard({ result }) {
  return (
    <div className={styles.container}>
      <span className={styles.leftborder}></span>
      <span className={styles.rightborder}></span>
      <h1 className="font-base absolute text-xl text-gray-200 md:text-2xl">
        {result.name}
      </h1>
    </div>
  );
}

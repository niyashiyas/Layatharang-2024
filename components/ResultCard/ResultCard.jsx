"use client";
import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./ResultCard.module.css";
export default function ResultCard({ result }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className={styles.container}
        onClick={() => setShowModal(!showModal)}
      >
        <span className={styles.leftborder}></span>
        <span className={styles.rightborder}></span>
        <h1 className="font-base absolute text-xl text-gray-200 md:text-2xl">
          {result.name}
        </h1>
      </div>
      {showModal && <Modal setShowModal={setShowModal} result={result} />}
    </>
  );
}

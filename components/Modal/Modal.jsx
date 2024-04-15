import { motion } from "framer-motion";
import CrossIcon from "./CrossIcon";
import styles from "./Modal.module.css";
export default function Modal({ result, setShowModal }) {
  console.log(result);
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 grid h-screen w-full place-items-center bg-black/70">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.container}
      >
        <span className={styles.leftborder}></span>
        <span className={styles.rightborder}></span>
        <CrossIcon
          classNames={"absolute top-5 right-5 md:scale-100 scale-75"}
          handler={() => setShowModal(false)}
        />
        <h1 className="mb-4 mt-8 text-center text-2xl font-bold md:mb-8 md:mt-16 md:text-3xl">
          {result.name}
        </h1>
        <div className="mb-3 grid grid-cols-3 place-items-center">
          <h1 className="font-semibold md:text-xl">Position</h1>
          <h1 className="font-semibold md:text-xl">House name</h1>
          <h1 className="font-semibold md:text-xl">Participant</h1>
        </div>
        {result.results.map((value) => {
          return (
            <div key={value.id} className="grid grid-cols-3 place-items-center">
              <h1 className="md:text-xl">{value.position}</h1>
              <h1 className="my-2 md:text-xl">{value.house.name}</h1>
              <h1 className="md:text-xl">{value.participant}</h1>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

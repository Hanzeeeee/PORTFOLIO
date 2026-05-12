import { motion } from 'framer-motion';

const pageMotion = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.35, ease: 'easeIn' } },
};

export default function PageTransition({ children }) {
  return (
    <motion.main className="page-frame" {...pageMotion}>
      {children}
    </motion.main>
  );
}

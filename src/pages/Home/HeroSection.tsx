import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import hero from '@/assets/macbook-exposed 1.png';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const intro = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 5,
        staggerChildren: 0.25,
        delayChildren: 0.8,
      },
    },
  };

  const IntroChild = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, type: 'spring', bounce: 0.5 },
    },
  };

  return (
    <Container className="grid h-[calc(100vh - 64px)] lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 place-items-center my-[2rem]">
      <motion.div variants={intro} initial="hidden" animate="visible">
        <motion.h1 variants={IntroChild} className="text-7xl font-bold">
          <span className="text-gray">Don't Worry,</span>
          <br />
          <span>We'll fix it</span>
        </motion.h1>
        <motion.p
          variants={IntroChild}
          className="mt-10 mb-5 text-dark-gray max-w-[50ch] text-lg"
        >
          Welcome to{' '}
          <span className="text-primary-foreground font-semibold">iRepair</span>
          , your one-stop place for all kinds of{' '}
          <span className="text-primary-foreground font-semibold">
            Macbook repairs
          </span>{' '}
          and diagnostics.
        </motion.p>
        <motion.div variants={IntroChild}>
          <Button>Book a service</Button>
        </motion.div>
      </motion.div>
      <div>
        <img src={hero} alt="hero image" />
      </div>
    </Container>
  );
};

export default HeroSection;

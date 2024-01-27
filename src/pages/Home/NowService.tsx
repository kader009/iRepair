import Container from '@/components/ui/Container';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const NowService = () => {
  const componentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ['0 1', '1.2 1'],
  });

  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <Container>
      <div className="text-center flex flex-col justify-center items-center">
        <h1>
          <span className="text-[#00E0B0] ">Services</span> that we provide.
        </h1>
        <p className="max-w-[80ch] mt-8 mb-6 text-[18px] text-[#1D1D1F]">
          We provide various computer repair services and solutions for our new
          and regular customers. Feel free to find out more below.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-[20px]">
        <motion.div
          style={{ scale: scaleValue }}
          ref={componentRef}
          className="bg-[#F2F2F2] h-[415px] rounded-2xl col-span-12 sm:col-span-12 flex justify-center items-center sm:flex-col lg:flex-row"
        >
          <div className="m-[22px] flex flex-col gap-20 sm:gap-4 lg:gap-20">
            <p className="text-[20px] sm:mt-[1px] mt-[25px] lg:mt-[25px] text-[#000000]">
              Battery Replacement
            </p>
            <p className="mb-24 sm:mb-0 sm:text-[22px] text-[36px] lg:mb-24 lg:text-[36px]">
              Get back to 100% battery health. With 6 month replacement
              warranty.
            </p>
          </div>
          <div className=" h-[400px] w-full mt-[10px] bg-cover bg-no-repeat black-img bg-right"></div>
        </motion.div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-5"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-7"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default NowService;

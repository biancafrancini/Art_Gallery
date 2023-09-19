import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { imgDreaming, imgFutureHistory, imgHuman, imgMarbles, imgPlaces } from "../utilities/images";
import { Modals } from "./Modals";

export const ResponsiveApp = () => {
    const carousel = useRef();
    const [isModalOpen, setModalOpen] = useState(false);
    const [pic, setPic] = useState({
        image: "",
        title: "",
        story: "",
        dims: "",
        price: "",
      });

      const handleImageClick = (imageViewed) => {
        setModalOpen(true);
        setPic({
          image: imageViewed.image,
          title: imageViewed.title,
          story: imageViewed.story,
          dims: imageViewed.dims,
          price: imageViewed.price,
        });
      };
    
      const handleModalClose = () => {
        setModalOpen(false);
      };

  return (
    <div>
      <div className="container-h1 mx-auto text-center min-w-screen">
        <div className="title text-7xl text-white mt-24 py-4 flex justify-center min-h-screen">
          <motion.p
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
            }}
            transition={{ duration: 1.2, delay: 1.1, effect: "easeInOut" }}
          >
            F
          </motion.p>
          <motion.p
            animate={{
              scale: 1,
              width: "5%",
              color: "#E7EAEF",
              y: "5%",
              x: "-150%",
            }}
            transition={{ duration: 2.5, delay: 1.1 }}
          >
            AI
          </motion.p>{" "}
          <motion.p
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
            }}
            transition={{ duration: 1.2, delay: 1.1, effect: "easeInOut" }}
          >
            KE
          </motion.p>
          <motion.p
            animate={{
              scale: 1,
              width: "5%",
              color: "#E7EAEF",
              y: "15%",
              x: "-190%"
            }}
            transition={{ duration: 2.5, delay: 1.1 }}
          >
            {" "}
            ART
          </motion.p>
        </div>
        <div className="motionp-container-resp">
          <motion.p
            className="citation text-white p-6 text-md w-42"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: "-280%",
              x: "-2%"
            }}
            transition={{ duration: 2.5, delay: 2 }}
          >
            The most captivating mysteries are those that 
            <br />
            reside within us... the uncharted landscapes of 
            <br />
            our dreams and emotions.
          </motion.p>
        </div>
      </div>

        <motion.div
          className="carousel"
          ref={carousel}
          whileHover="cursor"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 2,
            y: "-20%",
          }}
          transition={{ duration: 2.5, delay: 3.5 }}
        >
        <motion.div
          className="inner-carousel"
        >
          {imgPlaces.map((image, index) => {
            return (
              <motion.div
                className="item"
                key={index}
                whileTap={{ scale: 1.9 }}
                transition={{ duration: 2 }}
                onClick={() => handleImageClick(image)}
              >
                <img src={image.image} alt="" />
              </motion.div>
            );
          })};
        </motion.div>
        <motion.div
          className="inner-carousel mt-12"
        >
          {imgDreaming.map((image, index) => {
            return (
              <motion.div
                className="item"
                key={index}
                whileTap={{ scale: 1.9 }}
                transition={{ duration: 2 }}
                onClick={() => handleImageClick(image)}
              >
                <img src={image.image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="inner-carousel mt-12"
        >
          {imgMarbles.map((image, index) => {
            return (
              <motion.div
                className="item"
                key={index}
                whileTap={{ scale: 1.9 }}
                transition={{ duration: 2 }}
                onClick={() => handleImageClick(image)}
              >
                <img src={image.image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="inner-carousel mt-24"
        >
          {imgFutureHistory.map((image, index) => {
            return (
              <motion.div
                className="item"
                key={index}
                whileTap={{ scale: 1.9 }}
                transition={{ duration: 2 }}
                onClick={() => handleImageClick(image)}
              >
                <img src={image.image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="inner-carousel mt-12"
        >
          {imgHuman.map((image, index) => {
            return (
              <motion.div
                className="item"
                key={index}
                whileTap={{ scale: 1.9 }}
                transition={{ duration: 2 }}
                onClick={() => handleImageClick(image)}
              >
                <img src={image.image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
        </motion.div>

        {isModalOpen && <Modals piece={pic} action={handleModalClose} />}
    </div>
  );
};

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Background } from "./components/Background";
import { imgDreaming, imgFutureHistory, imgHuman, imgMarbles, imgPlaces } from "./utilities/images";
import RoboArtist from "./assets/roboArtist.jpeg";

import "./styles/App.css";
import { useWindowSize } from "./utilities/useWindowSize";
import { ResponsiveApp } from "./components/ResponsiveApp";
import { Modals } from "./components/Modals";

export const App = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  const [pic, setPic] = useState({
    image: "",
    title: "",
    story: "",
    dims: "",
    price: "",
  });

  const sizeScreen = useWindowSize();

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
  // useEffect(() => {
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);

  return (
    <div className="App relative">
      <Background />
      <nav className="min-w-full h-16 pl-6 pt-4">
        <img
          className="roboartist-pic max-h-full max-w-full rounded-full"
          src={RoboArtist}
          alt="Faike Art mascotte"
        />
      </nav>
      {sizeScreen.width > 1000 ? <><div className="container-h1 mx-auto text-center py-24 mb-12 min-w-screen">
      <div className="title text-white pt-4 flex justify-center min-h-screen">
          <motion.p
            initial={{ opacity: 1 }}
            animate={{
              //color: "transparent",
              opacity: 0,
              scale: 0.5,
            }}
            transition={{ duration: 1.2, delay: 1.1, effect: "easeInOut" }}
          >
            F
          </motion.p>
          <motion.p
            animate={{
              scale: 1.5,
              width: "5%",
              color: "#E7EAEF",
              y: "15%",
              x: "-15%",
            }}
            transition={{ duration: 2.5, delay: 1.1 }}
          >
            AI
          </motion.p>{" "}
          <motion.p
            initial={{ opacity: 1 }}
            animate={{
              //color: "transparent",
              opacity: 0,
              scale: 0.5,
            }}
            transition={{ duration: 1.2, delay: 1.1, effect: "easeInOut" }}
          >
            KE
          </motion.p>
          <motion.p
            animate={{
              scale: 1.5,
              width: "5%",
              color: "#E7EAEF",
              y: "25%",
              x: "-30%",
            }}
            transition={{ duration: 2.5, delay: 1.1 }}
          >
            {" "}
            ART
          </motion.p>
        </div>
        <div className="motionp-container">
          <motion.p
            className="citation text-white pb-20 text-4xl max-w-1/2 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: "-200%",
              x: "-8%",
            }}
            transition={{ duration: 2.5, delay: 2 }}
          >
            The most captivating mysteries are those that reside within us...
            <br />
            the uncharted landscapes of our dreams and emotions.
          </motion.p>
        </div>
      </div>
     <motion.div
        className="carousel mt-2"
        ref={carousel}
        whileHover="cursor"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: "-18%",
        }}
        transition={{ duration: 2.5, delay: 3.5 }}
      >
        <motion.div
          className="inner-carousel mt-12"
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
          className="inner-carousel mt-24"
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
          className="inner-carousel mt-24"
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
          className="inner-carousel mt-24"
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
      </motion.div> </> : <ResponsiveApp />}

   {isModalOpen && <Modals piece={pic} action={handleModalClose} />}
    </div>
  );
};

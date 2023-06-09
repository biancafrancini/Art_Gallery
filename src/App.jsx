import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Background } from "./components/Background";
import {LuMailQuestion} from "react-icons/lu"
import { images } from "./utilities/images";
import RoboArtist from "./assets/RoboArtist.jpeg";

import "./styles/App.css";

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
      <div className="container-h1 mx-auto text-center py-24 mb-12 min-w-screen">
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
              y: "-160%",
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
        className="carousel mt-4"
        ref={carousel}
        whileHover="cursor"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: "-80%",
        }}
        transition={{ duration: 2.5, delay: 3.5 }}
      >
        <motion.div
          className="inner-carousel"
        >
          {images.map((image, index) => {
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

      {isModalOpen && (
        <motion.div
          className="modal-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="modal-content text-black">
         
            <div className="modal-grid grid grid-cols-2 h-full items-center">
              <div className="h-full">
                <img
                  className="picture-modal h-full rounded-s-2xl"
                  src={pic.image}
                  alt="modal picture"
                />
              </div>
              <div className="pl-8 h-full">
              <h2 className="text-5xl py-10 font-bold">{pic.title}</h2>
                <div className="story-container pb-12 w-3/4">
                <h4 className="story text-lg italic font-bold mt-6 py-2">Once upon a time...</h4>
                <p className="whitespace-pre">{pic.story}</p>
                </div>
                <div className="artpiece-info py-12">
                  <p>
                    <strong>Dimensions: </strong>
                    {pic.dims}
                  </p>
                <div className="py-10 w-full font-bold flex flex-cols items-center">
                 <p className="more-info-btn pr-2 justify-right">Get more info</p> 
                 <div className="rounded-full border-2 border-red-500 bg-red-200 h-8 w-8 flex items-center justify-center hover:bg-white">
                  <LuMailQuestion />
                  </div>
                </div>
                </div>
              </div>
            </div>
            <button className="close-button text-white" onClick={handleModalClose}>
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

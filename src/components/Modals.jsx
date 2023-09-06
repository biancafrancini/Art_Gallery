import { LuMailQuestion } from "react-icons/lu";
import { motion } from "framer-motion";
import { useState } from "react";

export const Modals = ({ piece, action }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [pic, setPic] = useState({
    image: "",
    title: "",
    story: "",
    dims: "",
    price: "",
  });

  return (
    <div>
      <motion.div
        className="modal-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="modal-content text-black">
          <div className="modal-grid grid md:grid-cols-2 grid-cols-1 md:h-full h-200 items-center">
            <div className="h-full">
              <img
                className="picture-modal h-full md:rounded-s-2xl rounded-2xl"
                src={piece.image}
                alt="modal picture"
              />
            </div>
            <div className="md:pl-8 h-full">
              <h2 className="md:text-5xl text-md md:py-10 py-2 font-bold">{piece.title}</h2>
              <div className="story-container md:pb-12 w-3/4">
                <h4 className="story md:text-lg text-sm italic font-bold md:mt-6 md:py-2">
                  Once upon a time...
                </h4>
                <p className="md:whitespace-pre text-xs md:text-lg">{piece.story}</p>
              </div>
              <div className="artpiece-info md:py-12">
                <p>
                  <strong>Dimensions: </strong>
                  {piece.dims}
                </p>
                <div className="md:py-10 w-full font-bold flex flex-cols items-center">
                  <p className="more-info-btn pr-2 justify-right">
                    Get more info
                  </p>
                  <div className="rounded-full border-2 border-red-500 bg-red-200 h-8 w-8 flex items-center justify-center hover:bg-white">
                    <LuMailQuestion />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="close-button text-white" onClick={action}>
            Close
          </button>
        </div>
      </motion.div>

      {isModalOpen && <Modals piece={pic} action={handleModalClose} />}
    </div>
  );
};
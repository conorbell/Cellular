import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import gsap from 'gsap/gsap-core.js';
import { useGSAP } from '@gsap/react';
import { Row } from './Row.jsx';
import useSound from 'use-sound';
// import videoBg from '../../assets/video/desktop_bg.mp4';

// import { PiPhoneFill } from 'react-icons/pi';
import { useMovie } from '../../functions/filmContext.jsx';

gsap.registerPlugin(useGSAP);

const Modal = lazy(() => import('../Modal.jsx'));

export const Dialpad = () => {
  const { changeMovie, movie, context, festival } = useMovie();
  const [openModal, setOpenModal] = useState(false);

  const modalRef = useRef();

  const audio = new Map();

  for (let i = 0; i <= 9; i++) {
    const soundPath = `/audio/0${i}_DialTone_${i}.mp3`;
    audio.set(i, useSound(soundPath));
  }

  audio.set('*', useSound('/audio/10_DialTone_Star.mp3'));
  audio.set('#', useSound('/audio/12_DialTone_Pound.mp3'));

  const keyPad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];

  const handleButtonClick = (content) => {
    const sound = audio.get(content);
    console.log('sound', sound);

    if (sound) sound[0]();

    changeMovie(content);
    handleModalOpen();
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  // useEffect(() => {
  //   const handleCloseModalOutside = (event) => {
  //     if (openModal) {
  //       document.addEventListener('mousedown', handleModalClose);
  //     }
  //   };

  //   handleCloseModalOutside();
  // }, [openModal]);

  return (
    <>
      <section className="dial-container w-[100vw] items-center md:w-full md:mx-[5%] ">
        <div className=" dialpad h-[76vh] items-center ml-16 grid grid-rows-5 gap-2 mx-auto mt-10 w-auto sm:mx-[2%] sm:ml-0">
          {keyPad.map((num, i) => (
            <Row
              key={`r${i}`}
              row={i}
              boxes={num}
              handleButtonClick={handleButtonClick}
              handleModalOpen={handleModalOpen}
            />
          ))}
          {/* <div className="iphone-container flex justify-center items-center ">
            <button
              className="button bg-green-500 mr-[140px] rounded-full w-24 h-24 flex justify-center items-center sm:w-20 sm:h-20 sm:mr-12 "
              id="green-button"
            >
              <PiPhoneFill className="text-[3em]" color="white" />
            </button>
          </div> */}
        </div>

        {openModal && (
          <div ref={modalRef}>
            <Suspense>
              <Modal movie={movie} context={context} festival={festival} />
            </Suspense>
            {/* Close button */}
            <button
              onClick={handleModalClose}
              className="absolute top-0 right-0  pr-7 pt-2 text-3xl text-white font-bold rounded-full"
            >
              Return
            </button>
          </div>
        )}
      </section>
    </>
  );
};

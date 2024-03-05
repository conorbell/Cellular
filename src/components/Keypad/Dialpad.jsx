import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { Row } from './Row.jsx';
import useSound from 'use-sound';
import squish11 from '../../assets/squish1.wav';
import squish22 from '../../assets/squish2.wav';
import { PiPhoneFill } from 'react-icons/pi';
import { useMovie } from '../../functions/filmContext.jsx';

const Modal = lazy(() => import('../Modal.jsx'));

export const Dialpad = () => {
  const { changeMovie, movie, context, festival } = useMovie();
  const [openModal, setOpenModal] = useState(false);
  const [soundTrue, setSound] = useState(false);
  const modalRef = useRef(null);

  const [squish1] = useSound(squish11);
  const [squish2] = useSound(squish22);

  const keyPad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];

  const handleButtonClick = (content) => {
    squish1();
    setSound(true);
    changeMovie(content);
    handleModalOpen();
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const handleCloseModalOutside = (event) => {
      if (openModal) {
        document.addEventListener('mousedown', handleModalClose);
      }
    };

    if (soundTrue === false) {
      squish2();
    } else {
      setSound(false);
    }

    handleCloseModalOutside();
  }, [openModal]);

  return (
    <>
      <section className=" h-screen w-full  mx-auto items-center">
        <div className=" items-center ml-16 grid grid-rows-5 gap-2 mx-auto h-auto w-auto">
          {keyPad.map((num, i) => (
            <Row
              key={`r${i}`}
              row={i}
              boxes={num}
              handleButtonClick={handleButtonClick}
              handleModalOpen={handleModalOpen}
            />
          ))}
          <div className="flex justify-center items-center">
            <button className="bg-green-500 mr-[140px] rounded-full w-28 h-28 flex justify-center items-center ">
              <PiPhoneFill className="text-[4em]" color="white" />
            </button>
          </div>
        </div>
        {openModal && (
          <div ref={modalRef}>
            <Suspense>
              <Modal movie={movie} context={context} festival={festival} />
            </Suspense>
          </div>
        )}
      </section>
    </>
  );
};

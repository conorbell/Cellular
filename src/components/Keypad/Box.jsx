import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const Box = (props) => {
  const { row, column, content, handleButtonClick } = props;
  const [animationPlayed, setAnimationPlayed] = useState(false);

  // function intro() {
  //   const tl = gsap.timeline();
  //   tl.fromTo(
  //     '#button-1',
  //     {
  //       y: 10,
  //       x: 100,

  //       ease: 'sine.inOut',
  //     },
  //     {
  //       y: 0,
  //       x: 0,
  //       duration: 0.4,
  //     },
  //   );

  //   tl.fromTo(
  //     '#button-2',
  //     {
  //       y: 20,
  //       x: 60,

  //       ease: 'sine.inOut',
  //     },
  //     {
  //       y: 0,
  //       x: 0,
  //       duration: 1.4,
  //     },
  //   );

  //   tl.to(
  //     '#button-3',
  //     {
  //       y: -20,
  //       x: -60,

  //       ease: 'sine.inOut',
  //     },
  //     {
  //       y: 0,
  //       x: 0,
  //       duration: 1.4,
  //     },
  //   );

  //   tl.to('#button-4', {});

  //   tl.to('#button-5', {});

  //   tl.to('#button-6', {});

  //   tl.to('#button-7', {});

  //   tl.to('#button-8', {});

  //   tl.to('#button-9', {});

  //   tl.to('#button-10', {});

  //   tl.to('#button-star', {});

  //   tl.to('#button-pound', {});

  //   tl.to('#button-0', {});
  //   return tl;
  // }

  function bounce() {
    gsap.to('.button', {
      y: 10,
      // x: 200,
      yoyo: true,
      duration: 1.002,
      repeat: -1,
      ease: 'sine.in',
      stagger: {
        grid: [3, 4],
        amount: 0.3,
        axis: 'x',
        from: 'end',
      },
    });
  }

  useGSAP(() => {
    bounce();
  });

  const generateButtonId = (content) => {
    if (content === '*') {
      return 'button-star';
    } else if (content === '#') {
      return 'button-pound';
    } else {
      return `button-${content}`;
    }
  };

  return (
    <div className="mr-2">
      <button
        onClick={() => {
          handleButtonClick(content);
        }}
        className={`button  mr-32 flex flex-col p-0   items-center bg-gray-button justify-center btn-circle w-24 h-24 backdrop-blur-[100em] sm:w-20 sm:h-20 sm:mr-10 sm:justify-center ${
          content === '*' || content === '#' ? 'font-bold text-xl' : 'font-Rounded'
        }`}
        id={generateButtonId(content)}
      >
        {' '}
        {content}
        <div className="">
          {content === 2 && (
            <div className="text-sM" id="but-1">
              ABC
            </div>
          )}
          {content === 3 && (
            <div className="text-sM" id="but-2">
              DEF
            </div>
          )}
          {content === 4 && (
            <div className="text-sM" id="but-3">
              GHI
            </div>
          )}
          {content === 5 && (
            <div className="text-sM" id="but-4">
              JKL
            </div>
          )}
          {content === 6 && (
            <div className="text-sM" id="but-5">
              MNO
            </div>
          )}
          {content === 7 && (
            <div className="text-sM" id="but-6">
              PQRS
            </div>
          )}
          {content === 8 && (
            <div className="text-sM" id="but-7">
              TUV
            </div>
          )}
          {content === 9 && (
            <div className="text-sM" id="but-8">
              WXYZ
            </div>
          )}
          {content === 0 && (
            <div className="h-2 font-sans m-0 mt-[-9px] " id="but-9">
              +
            </div>
          )}
        </div>
      </button>
    </div>
  );
};

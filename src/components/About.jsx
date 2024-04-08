import gsap from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/src/all';
import { useState, useEffect } from 'react';
// import ScrambleText from 'scramble-text';
import ConorScramble from '../functions/conorScramble';
gsap.registerPlugin(useGSAP, TextPlugin);
export const About = () => {
  const [isScramblingComplete, setIsScramblingComplete] = useState(false);

  const textScrambler = (text, last) => {
    const scramble = new ConorScramble(text, { fps: 10 });

    scramble.play();

    setTimeout(() => {
      scramble.stop();
      setIsScramblingComplete(true);
      text.innerText = '';
      last();
    }, 5000);
  };

  useEffect(() => {});

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'bounce.inOut', stagger: 10 } });

    const last = () => {
      if (setIsScramblingComplete) {
        gsap.fromTo(
          '#five',
          {
            text: 'undefined',
            x: 0,
          },
          {
            x: 20,
            duration: 1,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
          },
        );
      }
    };
    // Define the animations in a timeline
    tl.to('#one', { y: 20, duration: 1.4, text: 'Hello' })
      .to('#two', { x: -30, duration: 1.2, text: 'My Name is Alice' })
      .to('#three', { x: 40, duration: 2, text: 'and I am the admin' })
      .to('#four', { y: -40, duration: 1.9, text: 'of thecellular' })
      .to('#five', {
        duration: 1.9,
        text: 'dot-net experience',
        // onComplete: () => {
        //   const newText = document.getElementById('five').innerText;
        //   setSplitText(newText);
        //   setFive(true);
        // },
      })
      .to('#five', {
        // Add a delay before starting the next animation
        duration: 0.5, // Adjust duration as needed
        delay: 1, // Delay before starting next animation
        text: 'dot-net experience',
        onComplete: () => {
          const newText = document.getElementById('five');
          textScrambler(newText, last);
        },
      });

    // if (isScramblingComplete) {
    //   gsap.to('#five', {
    //     text: undefined,
    //     x: 10,
    //     yoyo: true,
    //     repeat: -1,
    //   });
    // }
  });

  // const five = ;

  return (
    <div className=" m-auto mt-10 flex flex-col gap-20 items-center font-Rounded text-black w-[70%]">
      <h1 id="one"></h1>

      <h1 className="pr-[50%]" id="two"></h1>

      <h1 className="pr-[43%]" id="three">
        {' '}
      </h1>

      <h1 className="mt-[10%] pr-[33%] " id="four"></h1>
      <h5 className=" pr-[33%] " id="five"></h5>
    </div>
  );
};

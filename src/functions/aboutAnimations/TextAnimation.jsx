import gsap from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/src/all';
import { useTextScrambler } from './useTextScrambler';

gsap.registerPlugin(useGSAP, TextPlugin);

export const TextAnimation = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'bounce.inOut', stagger: 10 } });

    tl.to('#one', { y: 20, x: -70, duration: 1.4, text: 'Hello' })
      .to('#two', { x: -30, duration: 1.2, text: 'My Name is Alice' })
      .to('#three', { x: 40, duration: 2, text: 'and I am the admin' })
      .to('#four', { y: -40, duration: 1.9, text: 'of thecellular' })
      .to('#five', {
        duration: 1.9,
        text: 'dot-net experience',
        onComplete: () => {
          const newText = document.getElementById('five');
          useTextScrambler(newText);
        },
      });
  });

  return (
    <div className="m-auto mt-10 flex flex-col gap-20 items-center font-Rounded text-[#008f11] font-medium text-2xl w-[70%] sm:gap-10 sm:text-xl">
      <h1 id="one"></h1>
      <h1 className="pr-[50%]" id="two"></h1>
      <h1 className="pr-[43%]" id="three"></h1>
      <h1 className="mt-[10%] pr-[33%]" id="four"></h1>
      <h5 className="pr-[33%]" id="five"></h5>
    </div>
  );
};

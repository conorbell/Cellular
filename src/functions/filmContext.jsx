import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  // console.log("children", children)
  const [movie, setMovie] = useState();
  const [context, setContext] = useState("");
  const [festival, setFestival] = useState(null)

  const changeMovie = (val) => {
  
    switch(val){
      case 1: 
      setMovie("https://player.vimeo.com/video/724078898?h=8fe022aa51" ); 
      setContext(`Greg is calling his internet provider because no one showed up to install his WiFi. Please take out your cellular device and learn how representative, Alice, takes care of a disgruntled customer like Greg.`
     )
     setFestival(`A private, friends' screening of the phone-interactive short film, "Quality Assurance."
     At the 2:22 mark, viewers/participants' phones get synced up with the short. From that point on, a conversation unfolds between the movie's audio and the phones within the venue.
     `)
      break; 
      case 2: 
      setMovie("https://player.vimeo.com/video/216716676?h=06378cbadb");
      setContext(`George fears his phone calls are being recorded. He's trying to reach his sister to tell her, but keeps reaching her voicemail. Cellular is an interactive short film. Please take out your cellular devices and make George's nightmare a reality.`);
      setFestival([
        [`7/22/18 - Mozilla & Rooftop Films’ “Terms of Service” (Brooklyn, NY)`],
      
      [`9/28/18 - The Block Film and Art Festival (Logan, UT)`],

      [`10/2/18 - Mozilla & Rooftop Films’ “Terms of Service” (Toronto, Canada)`],

      [`10/3/18 - Mozilla & Rooftop Films’ “Terms of Service” (Austin, TX)`],

      [`11/9/18 - Mozilla & Rooftop Films’ “Terms of Service” (Berlin, Germany)`],

     [` 12/14/18 - Mozilla & Rooftop Films’ “Terms of Service” (Brooklyn, NY)`],

     [` 3/29/19 - Underexposed Film Festival YC (Rock Hill, SC)`],

     [` 9/15/19 - The Eyeslicer Season Two -- First Edition`],

      ])
      break; 
      case 3: 
      setMovie("https://www.youtube.com/embed/MhwMYFDnSgY?si=jZgO3xqP4-RRg1K7")
      setContext(`On October 6th, 2020, thecellular.net hosted a live, call-in broadcast where people got to tell Slackattack something. Some very special guests also stopped by..`)
      setFestival(null)
      break; 
      case 4: 
      setMovie("https://player.vimeo.com/video/437486140?h=bfa2098430")
      setContext(`On March 25th, 2020, thecellular.net hosted a live, call-in broadcast where people left voice messages sharing what they were doing at that moment. `)
      setFestival(null)
      break; 
      case 5: 
      setMovie("https://player.vimeo.com/video/416341071?h=b1ca326961")
      setContext(`On May 7th, 2020, thecellular.net hosted a live, call-in broadcast where people got to share what they had for breakfast that day.`)
      setFestival(null)
      break; 
      case 6: 
      setMovie("https://player.vimeo.com/video/401425766?h=7bb8ba79b2")
      setContext(`On July 9th, 2020, thecellular.net hosted a live, call-in broadcast where people got to tell Conor something.`)
      setFestival(null)
      break; 
      case 7: 
      setMovie("https://www.youtube.com/embed/E773L1CG7e8?si=6NvV5WW-ALuMG5XR")
      setContext(`On October 6th, 2020, thecellular.net hosted a live, call-in broadcast where people got to tell Slackattack something. Some very special guests also stopped by.`)
      setFestival(null)
      break; 
      default: 
      setMovie("https://www.youtube.com/embed/rrPosTPSXxw?si=FCCLcPYpm4LP0GyW" )
      setFestival(null)
    }

  };

  const value = {
    festival,
    context,
    movie,
    setMovie,
    changeMovie,
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

const useMovie = () => {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error('useMovie must be used within a movie provider');
  } else {
    return context;
  }
};

export { MovieProvider, useMovie };

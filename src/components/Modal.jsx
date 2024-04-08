export default function Modal(props) {
  const { movie, context, festival } = props;

  return (
    <section
      className="fixed
       top-0 
       left-0 
       right-0 
       bottom-0
        w-[100vw]
        h-[100vh]
        flex justify-center 
        items-center 
        bg-black
         bg-opacity-50"
    >
      <div className="  mb-96 absolute max-w-full max-h-[39%]">
        <iframe
          title="movie"
          className="w-[640px] h-[360px] border-0 "
          src={movie}
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
        {festival && !Array.isArray(festival) && (
          <div className=" grid grid-cols-2 w-[640px]  text-sm break-words bg-gray-800 text-white rounded-md">
            <div className="col-span-1 pr-2">
              <h2>Plot:</h2>
              <p>{context}</p>
            </div>
            <div className="col-span-1">
              <h2>Screenings:</h2>
              <p>{festival}</p>
            </div>
          </div>
        )}
        {festival && Array.isArray(festival) && (
          <div className="grid grid-cols-2 w-[640px] mx-auto text-sm break-words bg-gray-800 text-white rounded-md ">
            <div className="col-span-1 pr-2">
              <h2>Plot:</h2>
              <p>{context}</p>
            </div>
            <div className="col-span-1">
              <h2>Screenings:</h2>
              {festival.map((el, i) => (
                <ul key={`date${i}`}>{el}</ul>
              ))}
            </div>
          </div>
        )}
        {!festival && (
          <div className="absolute mx-auto text-sm break-words bg-gray-800 text-white px-3 py-1 rounded-md">
            <h2>Plot:</h2>
            <p>{context}</p>
          </div>
        )}
      </div>
    </section>
  );
}

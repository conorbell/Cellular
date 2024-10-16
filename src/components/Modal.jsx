export default function Modal({ movie, context, festival }) {
  return (
    <section className="fixed  inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="relative w-[90%] max-w-[640px] bg-white rounded-lg shadow-lg">
        {/* Video Section */}
        <div className="w-full">
          <iframe
            title="movie"
            className="w-full h-[56.25vw] max-h-[360px] rounded-t-lg"
            src={movie}
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture"
          ></iframe>
        </div>

        {/* Content Section */}
        <div className="p-4 text-sm bg-gray-800 text-white">
          <h2 className="font-bold mb-2">Plot:</h2>
          <p className="break-words">{context}</p>
        </div>

        {festival && (
          <div className="p-4 text-sm bg-gray-800  text-white">
            <h2 className="font-bold mb-2">Screenings:</h2>
            {Array.isArray(festival) ? (
              <ul className="list-disc list-inside">
                {festival.map((el, i) => (
                  <li key={i} className="break-words">
                    {el}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="break-words">{festival}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

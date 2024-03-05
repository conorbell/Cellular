import useSound from 'use-sound';

export const Box = (props) => {
  const { row, column, content, handleButtonClick } = props;

  return (
    <div className="mr-2">
      <button
        onClick={() => {
          handleButtonClick(content);
        }}
        className={`animate-[float_7s_ease-in-out_infinite] bg-slate-500 mr-32 items-center justify-center btn-circle w-28 h-28 ${
          content === '*' || content === '#' ? 'font-bold text-xl' : 'font-Rounded'
        }`}
      >
        {' '}
        {content}
        <div className="">
          {content === 2 && <div className="text-sM">ABC</div>}
          {content === 3 && <div className="text-sM">DEF</div>}
          {content === 4 && <div className="text-sM">GHI</div>}
          {content === 5 && <div className="text-sM">JKL</div>}
          {content === 6 && <div className="text-sM">MNO</div>}
          {content === 7 && <div className="text-sM">PQRS</div>}
          {content === 8 && <div className="text-sM">TUV</div>}
          {content === 9 && <div className="text-sM">WXYZ</div>}
          {content === 0 && <div className="text-xl font-bold">+</div>}
        </div>
      </button>
    </div>
  );
};

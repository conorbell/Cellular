import { Box } from './Box.jsx';
export const Row = (props) => {
  const { row, boxes, sRow, sBoxes, handleButtonClick, handleModalOpen } = props;

  return (
    <div className="my-7 grid grid-cols-3 justify-center items-center m-auto">
      {boxes &&
        boxes.map((box, i) => (
          <Box key={`r${row}c${i}`} row={row} column={i} content={box} handleButtonClick={handleButtonClick} />
        ))}
    </div>
  );
};

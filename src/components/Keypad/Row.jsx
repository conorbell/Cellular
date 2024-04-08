import { Box } from './Box.jsx';
export const Row = (props) => {
  const { row, boxes, sRow, sBoxes, handleButtonClick, handleModalOpen } = props;

  // Calculate the width of each column
  const columnWidth = 100 / 3 + '%';

  // Define different background positions for different viewport widths
  let backgroundPositionX;

  // Media query for viewport width between 0px and 768px
  // Example: background positioned at 40% from the left
  if (window.innerWidth <= 768) {
    backgroundPositionX = '30%';
  }
  // Media query for viewport width between 769px and 1024px
  // Example: background positioned at 50% from the left
  else if (window.innerWidth <= 1024) {
    backgroundPositionX = '30%';
  }
  // Media query for viewport width greater than 1024px
  // Example: background positioned at 60% from the left
  else if (window.innerWidth <= 1090) {
    backgroundPositionX = '60%';
  }

  return (
    <div className="my-7 grid grid-cols-3 justify-center items-center m-auto">
      {boxes &&
        boxes.map((box, i) => (
          <Box key={`r${row}c${i}`} row={row} column={i} content={box} handleButtonClick={handleButtonClick} />
        ))}

      <style>
        {`
          body {
            background-position: ${backgroundPositionX} center;
          }
          .col {
            width: ${columnWidth};
          }
        `}
      </style>
    </div>
  );
};

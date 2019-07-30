import React from 'react';

const MasonryLayout = (props) => {
  const columnWrapper = {};
  const result = [];
  // create columns
  for (let i = 0; i < props.columns; i += 1) {
    columnWrapper[`column${i}`] = [];
  }

  // Divide the children into columns as shown below.
  for (let i = 0; i < props.children.length; i += 1) {
    const columnIndex = i % props.columns;
    columnWrapper[`column${columnIndex}`].push(
      <div key={i} style={{ marginBottom: `${props.gap}px`, minWidth: '237px' }}>
        {props.children[i]}
      </div>,
    );
  }

  // The next step will be wrapping the items in each column with a div and pushing it into the result array as shown below.
  for (let i = 0; i < props.columns; i += 1) {
    result.push(
      <div
        key={i}
        style={{
          marginLeft: `${i > 0 ? props.gap : 0}px`, // `${i > 0 ? props.gap : 0}px`,  `${props.gap}px`
          flex: 1,
          flexBasis: '0',
          // alignItems: "stretch"
        }}
      >
        {columnWrapper[`column${i}`]}
      </div>,
    );
  }

  return (
    <div className="d-flex mt-5">
      {result}
    </div>
  );
};

export default MasonryLayout;

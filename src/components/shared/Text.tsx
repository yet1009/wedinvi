import React from 'react';

const Text = ({ children }: { children: string }) => {
  console.log(children);
  const message = children.split('\n').map((str, idx, arr) => {
    return (
      <React.Fragment key={`tt_${idx}`}>
        {str}
        {idx === arr.length - 1 ? null : <br />}
      </React.Fragment>
    );
  });

  return <div>{message}</div>;
};

export default Text;

import React from "react";

type ActionBarProps = {
    title?: string,
    children?: React.ReactElement | React.ReactNode
}

const ActionBar = ({ title, children }: ActionBarProps) => {
  return (
    <div style={{
      margin: "10px 0px"
    }}>
      <h1 style={{
        fontFamily: 'cursive'
      }}>{title}</h1>
      <div style={{ display: "flex", marginTop: '10px', justifyContent:"space-between", alignItems:'center' }}>{children}</div>
    </div>
  );
};

export default ActionBar;

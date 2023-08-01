import React from 'react';
import ReactCodeMirror from "@uiw/react-codemirror";

const CodeEditor = () => {
  const onChange = React.useCallback((value) => {
    console.log(value);
  }, []);

  return (
    <div className=" bg-[#6D95E0] rounded p-6 flex-grow">
        <h2 className="font-semibold text-2xl mb-3">Editor</h2>
        <ReactCodeMirror
          value={"Select * from customers"}
          height="200px"
          theme="dark"
          onChange={onChange}
        />
    </div>
  )
}

export default CodeEditor
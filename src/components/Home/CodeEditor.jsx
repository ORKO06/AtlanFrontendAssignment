import React, { useContext } from 'react';
import ReactCodeMirror from "@uiw/react-codemirror";
import { QueryContext } from '../../utils/QueryContext';
import QueryRunButton from './QueryRunButton';

const CodeEditor = () => {
  const {query,setQuery} = useContext(QueryContext);

  const onChange = React.useCallback((value) => {
    setQuery(value);
  }, []);

  console.log(query);
  return (
    <div className=" bg-[#6D95E0] rounded p-6 flex-grow">
         <h2 className="font-semibold text-2xl mb-3">Editor</h2>
        <ReactCodeMirror
          value={query}
          height="200px"
          theme="dark"
          onChange={onChange}
        />
      <QueryRunButton />
    </div>
  )
}

export default CodeEditor
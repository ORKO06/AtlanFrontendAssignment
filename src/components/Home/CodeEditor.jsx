import React, { useContext } from 'react';
import ReactCodeMirror from "@uiw/react-codemirror";
import { QueryContext } from '../../utils/QueryContext';
import QueryRunButton from './QueryRunButton';

const CodeEditor = () => {
  const {query,setQuery} = useContext(QueryContext);

  const onChange = React.useCallback((value) => {
    setQuery(value);
  }, []);

  return (
    <div className={codeEditorContainerClassName}>
         <h2 className={codeEditorTitle}>Editor</h2>
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

const codeEditorContainerClassName = 'bg-[#6D95E0] rounded p-6 flex-grow';
const codeEditorTitle = 'font-semibold text-2xl mb-3';

export default CodeEditor
import { useContext } from 'react';
import {queryList} from '../../../config/content/QueryList';
import { QueryContext } from '../../utils/QueryContext';

const SideBar = () => {
  const {setQuery} = useContext(QueryContext);

  return (
    <div className="max-w-xs bg-[#6D95E0] rounded p-6">
      <h2 className="font-semibold text-2xl" >Queries Available</h2>
      <ul className="my-3 flex flex-col gap-2">
        {queryList.map(query=>
          <li key={query} className="bg-white rounded p-2 cursor-pointer" onClick={()=>setQuery(query)}>{query}</li>
        )}
      </ul>
    </div>
  )
}

export default SideBar;
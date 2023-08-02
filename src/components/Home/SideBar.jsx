import { useContext } from 'react';
import {queryList} from '../../../config/content/QueryList';
import { QueryContext } from '../../utils/QueryContext';

const SideBar = () => {
  const {setQuery} = useContext(QueryContext);

  return (
    <div className={SideBarContainerClassName}>
      <h2 className={SideBarTitleClassName} >Queries Available</h2>
      <ul className={SideBarListClassName}>
        {queryList.map(query=>
          <li key={query} className={SideBarListItemClassName} onClick={()=>setQuery(query)}>{query}</li>
        )}
      </ul>
    </div>
  )
}

const SideBarContainerClassName = "my-12 sm:my-0 sm:max-w-xs bg-[#6D95E0] rounded p-6";
const SideBarTitleClassName = "font-semibold text-2xl";
const SideBarListClassName = "my-3 flex flex-col gap-2";
const SideBarListItemClassName = "bg-white rounded p-2 cursor-pointer";


export default SideBar;
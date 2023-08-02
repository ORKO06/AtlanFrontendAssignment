import { useContext } from "react"
import { QueryContext } from "../../utils/QueryContext";

//CSV data
import {customer_csv} from "../../../config/data/customer";
import {orderDetails_csv} from '../../../config/data/orderDetails';
import {products_csv} from '../../../config/data/products';
import {queryList} from '../../../config/content/QueryList';

// Util Function
import { parseCSV } from '../../utils/parseCSV';

const QueryRunButton = () => {
  const {query,setData} = useContext(QueryContext);

  const OnClickHandler = () =>{
    let csv;
    if(query==queryList[0]){
        csv = customer_csv;
    }else if(query==queryList[1]){
        csv = orderDetails_csv;
    }else if(query==queryList[2]){
        csv = products_csv;
    }else{
        csv = ``;
    }
    
    const resultData = parseCSV(csv);
    setData(resultData);
  }
  
  return (
    <button onClick={OnClickHandler} className={QueryButtonClassName}>Run</button>
  )
}

const QueryButtonClassName = "bg-green-400 px-6 py-2 sm:float-right rounded my-4 text-xl"

export default QueryRunButton
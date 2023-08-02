import { useCSVDownloader } from 'react-papaparse';

//
import { useContext } from "react";
import { QueryContext } from "../../utils/QueryContext";


const OutputTable = () => {
  const {data} = useContext(QueryContext);
  const headers = data.length > 0 ? Object.keys(data[0]) : [];
  const { CSVDownloader } = useCSVDownloader();
  
  return (
      <>
      <div className={tableContainerClassName}>
        <h2 className={tableTitleClassName}>Output</h2>
        <CSVDownloader
          filename={'data'}
          data={data}   
          bom={true}
          type="link"
        >
          <button disabled={!data.length} className={tableButtonClassName}>Export Data</button>
        </CSVDownloader>
      </div>
      {data.length === 0 ? (
        <p>No data available. Please run a valid query from the list of queries available.</p>
        ) : (
          <>
          <table className={tableClassName}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className={tableHeaderClassName} >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {headers.map((header, columnIndex) => (
                  <td key={columnIndex}  className={tableCellClassName}>
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
          </>
      )}
    </>
  );
};

const tableContainerClassName = 'flex justify-between items-center';

const tableClassName = 'border-collapse w-full rounded-xl overflow-hidden shadow-[40px 90px 55px -20px rgba(155, 184, 243, 0.2)]';

const tableHeaderClassName = 'text-sm font-normal text-white bg-[#6D95E0] p-4 text-left border-2 border-[#ddd] border-solid';

const tableCellClassName = 'text-sm font-normal border-2 border-solid border-[#ddd] p-4 bg-[#fff]';

const tableButtonClassName = 'bg-green-500 rounded my-4 py-2 px-4 disabled:bg-[#eaeaea] disabled:cursor-not-allowed';

const tableTitleClassName = 'text-2xl font-bold';


export default OutputTable;
import { useEffect, useState } from "react";
import { Item } from "../types/index";
import { fetchData } from "../api/api";

const Prodsite = () => {
  const [data, setData] = useState([]);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setData(data);
    };
    getData();
  }, []);

  return (
    <>
      {data.map((item: Item, index) => (
        <div
          className="border-solid border-2 w-full mt-4 p-2 rounded-md"
          key={index}
        >
          <h2
            className="text-black font-bold text-center  bg-slate-200 rounded-sm cursor-pointer"
            onClick={() => setCollapsed(!collapsed)}
          >
            ID: {item.produksjonsplassid}
          </h2>
          {!collapsed && (
            <ul className="list-none grid grid-cols-2 gap-2 text-sm">
              <li className="text-black ">Kommunenummer:</li>
              <li className="text-black  ">{item.kommunenummer}</li>
              <li className="text-black bg-gray-100">Gårdsnummer:</li>
              <li className="text-black  bg-gray-100">{item.gaardsnummer}</li>
              <li className="text-black   ">Bruksnummer:</li>
              <li className="text-black  ">{item.bruksnummer}</li>
              <li className="text-black bg-gray-100">Bygningsnummer:</li>
              <li className="text-black bg-gray-100 ">{item.bygningsnummer}</li>
              <li className="text-black ">Koordinater:</li>
              <li className="text-black  ">{item.koordinater}</li>
              <li className="text-black bg-gray-100">Koordinatsystem:</li>
              <li className="text-black  bg-gray-100">
                {item.koordinatsystem}
              </li>
              <li className="text-black ">Opprettet:</li>
              <li className="text-black ">{item.opprettetdato}</li>
              <li className="text-black bg-gray-100">Sist endret:</li>
              <li className="text-black bg-gray-100">{item.lastchanged}</li>
            </ul>
          )}
        </div>
      ))}
    </>
  );
};

export default Prodsite;

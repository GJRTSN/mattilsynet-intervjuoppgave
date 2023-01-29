import { useEffect, useState } from "react";
import { Item } from "../types/index";
import { fetchData } from "../api/api";

const Prodsite = () => {
  const [data, setData] = useState([]);

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
        <div className="border-solid border-2 w-full mt-4" key={index}>
          <h2 className="text-black font-bold">
            ID: {item.produksjonsplassid}
          </h2>

          <p className="text-black">Kommunenummer: {item.kommunenummer}</p>
          <p className="text-black">Gårdsnummer: {item.gaardsnummer}</p>
          <p className="text-black">Bruksnummer: {item.bruksnummer}</p>
          <p className="text-black">Bygningsnummer: {item.bygningsnummer}</p>
          <p className="text-black">Koordinater: {item.koordinater}</p>
          <p className="text-black">Koordinatsystem: {item.koordinatsystem}</p>
          <p className="text-black">Opprettet: {item.opprettetdato}</p>
          <p className="text-black">Sist endret: {item.lastchanged}</p>
        </div>
      ))}
    </>
  );
};

export default Prodsite;

import React, { useState, useEffect } from "react";
import logo from "./images/mattilsynet.png";
import { fetchData, postData } from "./api/api";

const App = () => {
  const [data, setData] = useState([]);
  const [dyreholdId, setDyreholdId] = useState("");
  const [individ, setIndivid] = useState([0, 0]);
  const [produksjonsplassId, setProduksjonsplassId] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setData(data);
    };
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await postData({ someData: "someValue" });
    // console.log(result);
  };

  return (
    <div className="bg-[#F7F4EE] w-screen h-screen flex justify-center">
      <div className="w-3/5">
        <img src={logo} className="w-40 mt-8" alt="Logo" />
        <div className="w-full bg-white mt-8 p-6">
          <h1 className="text-black text-3xl font-bold mt-2">
            Registrer forflytning
          </h1>
          <h2 className="font-bold mt-10">Tilgjengelige produksjonsplasser:</h2>
          <div className="flex gap-4 w-full">
            {data.map((item, index) => (
              <div className="border-solid border-2 w-full mt-4" key={index}>
                <h2 className="text-black font-bold">
                  ID: {item.produksjonsplassid}
                </h2>

                <p className="text-black">
                  Kommunenummer: {item.kommunenummer}
                </p>
                <p className="text-black">Gårdsnummer: {item.gaardsnummer}</p>
                <p className="text-black">Bruksnummer: {item.bruksnummer}</p>
                <p className="text-black">
                  Bygningsnummer: {item.bygningsnummer}
                </p>
                <p className="text-black">Koordinater: {item.koordinater}</p>
                <p className="text-black">
                  Koordinatsystem: {item.koordinatsystem}
                </p>
                <p className="text-black">Opprettet: {item.opprettetdato}</p>
                <p className="text-black">Sist endret: {item.lastchanged}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center text-center">
            <form className="bg-gray-200 border-solid border-2 mt-6 p-6 w-1/3 flex flex-col justify-center items-center">
              <div className="w-full">
                <label className="block font-bold text-gray-700 mb-2">
                  Dyrehold
                </label>
                <select
                  name="selectDyrehold"
                  className="bg-white p-2 rounded-sm w-full"
                  value={dyreholdId}
                  onChange={(e) => setDyreholdId(e.target.value)}
                >
                  {/* <option value="" selected="selected">
                    Velg dyrehold
                  </option> */}
                  <option value="dyreholdid1">Dyrehold 1</option>
                  <option value="dyreholdid2">Dyrehold 2</option>
                  <option value="dyreholdid3">Dyrehold 3</option>
                  <option value="dyreholdid4">Dyrehold 4</option>
                </select>
              </div>
              <div className="w-full mt-4">
                <label className="block font-bold text-gray-700 mb-2">
                  Individ
                </label>
                <select
                  name="selectIndivid"
                  className="bg-white p-2 rounded-sm w-full"
                  value={individ}
                  onChange={(e) => setIndivid(e.target.value)}
                >
                  {/* <option value="" selected="selected">
                    Velg individ
                  </option> */}
                  <option value="individ1">Individ 1</option>
                  <option value="individ2">Individ 2</option>
                  <option value="individ3">Individ 3</option>
                  <option value="individ4">Individ 4</option>
                </select>
              </div>
              <div className="w-full mt-4">
                <label className="block font-bold text-gray-700 mb-2">
                  Produksjonsplass
                </label>
                <select
                  name="selectProduksjonplass"
                  className="bg-white p-2 rounded-sm w-full"
                  value={produksjonsplassId}
                  onChange={(e) => setProduksjonsplassId(e.target.value)}
                >
                  {/* <option value="" selected="selected">
                    Velg produksjonsplass
                  </option> */}
                  {data.map((item, index) => (
                    <option key={index} value={item.produksjonsplassid}>
                      {item.produksjonsplassid}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="mt-6 w-1/2 p-2 bg-[#005D7C] text-white font-bold rounded-md"
                onClick={handleSubmit}
              >
                Send inn
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

import { useState, useEffect } from "react";
import { fetchData, postData } from "./api/api";
import { Item, Forflytning } from "./types/index";
import Prodsite from "./components/Prodsite";
import logo from "./images/mattilsynet.png";

const App = () => {
  const [data, setData] = useState([]);
  const [dyreholdId, setDyreholdId] = useState("");
  const [individ1, setIndivid1] = useState(0);
  const [individ2, setIndivid2] = useState(0);
  const [produksjonsplassId, setProduksjonsplassId] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setData(data);
    };
    getData();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (dyreholdId === "" || produksjonsplassId === "") {
      alert("Vennligst fyll ut hele skjemaet.");
      return;
    }
    const forflytningData: Forflytning = {
      dyreholdId: dyreholdId,
      individ: [individ1, individ2],
      produksjonsplassId: produksjonsplassId,
    };

    postData(forflytningData).then((response) => {
      console.log(response);
    });
    setFormSubmitted(true);
    setTimeout(() => {
      window.location.href = "https://mattilsynet.no";
    }, 2000);
  };

  return (
    <div className="bg-[#F7F4EE] w-screen h-screen flex justify-center">
      {formSubmitted ? (
        <h2>Skjema sendt!</h2>
      ) : (
        <div className="w-3/5">
          <img src={logo} className="w-40 mt-8" alt="Logo" />
          <div className="w-full bg-white mt-8 p-6">
            <h1 className="text-black text-3xl font-bold mt-2">
              Registrer forflytning
            </h1>
            <h2 className="font-bold mt-10">
              Tilgjengelige produksjonsplasser:
            </h2>
            <div className="flex gap-4 w-full">
              <Prodsite />
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
                    <option value="dyreholdid1">Livdyrfjøs</option>
                    <option value="dyreholdid2">Livdyrhandel</option>
                    <option value="dyreholdid3">Minkproduksjon</option>
                    <option value="dyreholdid4">Sauehold</option>
                  </select>
                </div>
                <div className="w-full mt-4">
                  <label className="block font-bold text-gray-700 mb-2">
                    Individ
                  </label>
                  <div className="flex">
                    <input
                      type="number"
                      name="individ1"
                      className="bg-white p-2 rounded-sm w-1/2 mr-2"
                      value={individ1}
                      onChange={(e) => setIndivid1(parseInt(e.target.value))}
                    />
                    <input
                      type="number"
                      name="individ2"
                      className="bg-white p-2 rounded-sm w-1/2 ml-2"
                      value={individ2}
                      onChange={(e) => setIndivid2(parseInt(e.target.value))}
                    />
                  </div>
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
                    {data.map((item: Item, index) => (
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
      )}
    </div>
  );
};

export default App;

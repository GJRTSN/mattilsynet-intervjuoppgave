import axios from "axios";

interface Forflytning {
  dyreholdId: string;
  individ: [number, number];
  produksjonsplassId: string;
}

export const fetchData = async () => {
  try {
    const data = await axios.get(`http://localhost:5000/produksjonsplass`);
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const postData = async (data: Forflytning) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/registrerforflytning`,
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

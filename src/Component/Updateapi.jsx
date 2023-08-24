import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Updateapi() {
  const [productdata, setproductdata] = useState({
    name: "",
    Gst: "",
    Discout: "",
    Manufacturing: "",
    Rating: "",
    Brand: "",
    category: "",
  });

  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  },[]);
  const getData = async () => {
    await axios
      .get(
        `https://64dc53b6e64a8525a0f65faa.mockapi.io/api/v2/Product_list/${param.id}`
      )
      .then((response) => {
        if (response.status === 200) {
          setproductdata(response.data);
          console.log(response.data)
        }
      })
      .catch((error) => console.log(error));
  };
  const updateData = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://64dc53b6e64a8525a0f65faa.mockapi.io/api/v2/Product_list/${param.id}`,
        productdata
      )
      .then((response) => {
        if (response.status === 200) {
          navigate("/homepage");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div>Updateapi</div>
      <div>
        <form onSubmit={(e) => updateData(e)}>
          <input
            type="text"
            value={productdata.name}
            placeholder="enter a name"
            required
            onChange={(e) =>
              setproductdata({ ...productdata, name: e.target.value })
            }
          />
          <input
            type="text"
            value={productdata.Gst}
            placeholder="enter a gst"
            required
            onChange={(e) =>
              setproductdata({ ...productdata, Gst: e.target.value })
            }
          />
          <input
            type="text"
            value={productdata.Discout}
            placeholder="enter a discount"
            required
            onChange={(e) =>
              setproductdata({ ...productdata, Discout: e.target.value })
            }
          />
          <input
            type="text"
            value={productdata.Manufacturing}
            placeholder="enter a manufcturing"
            required
            onChange={(e) =>
              setproductdata({ ...productdata, Manufacturing: e.target.value })
            }
          />
          <input
            type="text"
            value={productdata.Rating}
            placeholder="enter a rating"
            required
            onChange={(e) =>
              setproductdata({ ...productdata, Rating: e.target.value })
            }
          />
          <input
            type="text"
            value={productdata.Brand}
            placeholder="enter a brand"
            required
            onChange={(e) =>
              setproductdata({ ...productdata, Brand: e.target.value })
            }
          />
          <input
            type="text"
            value={productdata.category}
            placeholder="enter a category"
            required
            onChange={(e) =>
              setproductdata({ ...productdata, category: e.target.value })
            }
          />
          <button type="submit">update</button>
        </form>
        
      </div>
    </>
  );
}

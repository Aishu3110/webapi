import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [list, setlist] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    list_data();
  }, []);
  const list_data = async () => {
    await axios
      .get("https://64dc53b6e64a8525a0f65faa.mockapi.io/api/v2/Product_list/")
      .then((response) => {
        if (response.status === 200) {
          setlist(response.data);
        }
      })
      .catch((error) => console.error(error));
  };
  const mob_delete = async (id) => {
    await axios
      .delete(
        `https://64dc53b6e64a8525a0f65faa.mockapi.io/api/v2/Product_list/${id}`
      )
      .then((response) => {
        if (response.status === 201) {
          list_data();
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <table className="center">
        <thead>
          <tr>
            <th>name</th>
            <th>gst</th>
            <th>disount</th>
            <th>manufacturing</th>
            <th>rating</th>
            <th>brand</th>
            <th>category</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {list?.length > 0 &&
            list.map((item, index) => {
              return (
                <tr key={`index${index}`}>
                  <td>{item.name}</td>
                  <td>{item.Gst}</td>
                  <td>{item.Discout}</td>
                  <td>{item.Manufacturing}</td>
                  <td>{item.Rating}</td>
                  <td>{item.Brand}</td>
                  <td>{item.category}</td>
                  
                  <td>
                    <button
                      className="fa fa-edit"
                      onClick={() => navigate(`/Updateapi/${item.id}`)}
                    >edit</button>
                    <button
                      className="fa  fa-trash-o"
                      onClick={() => mob_delete(item.id)}
                    >delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
export default Home;

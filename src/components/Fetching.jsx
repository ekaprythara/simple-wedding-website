import { useEffect, useState } from "react";

const Fetching = () => {
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://simple-wedding-website-default-rtdb.firebaseio.com/data.json"
      );
      const data = await response.json();

      const loadedData = [];

      for (const key in data) {
        loadedData.push({
          id: key,
          name: data[key].name,
          message: data[key].message,
          presence: data[key].presence,
          created_at: data[key].created_at,
        });
      }
      setNewData(loadedData);
    };

    fetchData();
  }, []);

  return (
    <div>
      {newData.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default Fetching;

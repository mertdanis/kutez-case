import axios from "axios";

import { useEffect, useState } from "react";

function Content() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/my-project/data/products.json");
      console.log(res);
    };

    fetchData();
  }, []);

  return <div></div>;
}

export default Content;

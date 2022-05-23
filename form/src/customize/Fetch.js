import { useEffect, useState } from "react";
import axios from 'axios'

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      async function fetchData() {
        setTimeout(async () => {
          let res = await axios.get(url);

          let data = res.data ? res.data : []
          setData(data)
          setLoading(false)
        }, 500)
      }
      fetchData();
    }

    catch {
      setLoading(false)
    }
  }, [])
  return {
    data, loading
  }
}

export default useFetch
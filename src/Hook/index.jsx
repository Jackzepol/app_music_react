
import { useState, useEffect, useCallback } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!url) return;

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Respuesta no válida del servidor");
      }

      const json = await response.json();

      if (!json) {
        setData(null);
        return;
      }

      setData(json);

    } catch (err) {
      console.log("Error en useFetch:", err);
      setError("Hubo un problema al cargar los datos.");
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

export default useFetch;
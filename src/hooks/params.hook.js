import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useParams = () => {
  const [params, setParams] = useSearchParams();

  const myParams = useMemo(() => {
    const searchTerms = params.get("searchTerms") || "";
    const categoryFromURL = params.getAll("categoryFromURL") || "";
    const minValue = params.get("minValue") || "";
    const maxValue = params.get("maxValue") || "";

    return { searchTerms, categoryFromURL, minValue, maxValue };

  }, [params]);
  const setParam = (name, value) => {
    const newParams = new URLSearchParams(params);

    newParams.delete(name);

    if (Array.isArray(value)) {
      value.forEach((item) => newParams.append(name, item));
    } else if (value.trim()) {
      newParams.set(name, value.trim());
    }

    setParams(newParams);
  };
  return { myParams, setParam };
};

export {
  useParams
};
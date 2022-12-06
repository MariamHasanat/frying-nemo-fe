import { useSearchParams } from "react-router-dom";

export const useFilterItems = (menuItems) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  let categories = searchParams.getAll("category")[0] || "";
  return menuItems.filter((item) => {
    const fixStr = (str) => str.toLowerCase().trim(); // Helper
    const isMatch = (str1) => fixStr(str1).includes(fixStr(search)); // Helper
    return (
      (isMatch(item.name) ||
        isMatch(item.description) ||
        (Array.isArray(item.ingredients) && item.ingredients.some((ing) => ing.includes(search)))) && categories.toLocaleLowerCase().split(",").includes(item.category.toLowerCase())
    );
  });
};
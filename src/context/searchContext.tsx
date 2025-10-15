import React, { useCallback, useState } from "react";
import useQueryParams from "../hooks/useQueryParams";

export type categoryEnum = "Educative" | "Food" | "Tech";
export interface Filter {
  search: string;
  setSearch: (sort: string) => void;
  category?: categoryEnum
  setCategory: (sort: categoryEnum) => void;
  clear: () => void;
}

const FilterContext = React.createContext<Filter>(
  {} as Filter,
);

export const UseFilter = () => {
  const context = React.useContext(FilterContext);
  if (context === undefined) {
    throw new Error(
      "useFilter must be used within a FilterProvider",
    );
  }
  return context;
};

export const FilterProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const queryParams = useQueryParams();

  const [searchState, setSearchState] = useState<string>('');
  const [categoryState, setCategoryState] = useState<categoryEnum | undefined>((queryParams.get("category") as categoryEnum) ?? undefined,
  )

  const setSearch = (search: string) => {
    setSearchState(search);
  };

  const setCategory = (category: categoryEnum) => {
    setCategoryState(category)
    queryParams.set({ category });
  }

  const clear = useCallback(() => {
    queryParams.set({
      category: '',
    });
    setCategoryState(undefined);
  }, [queryParams]);

  return (
    <FilterContext.Provider
      value={{
        search: searchState,
        setSearch,
        category: categoryState,
        setCategory,
        clear
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

import { createContext, ReactNode, useState, FC, useEffect } from "react";
import { getCategoriesAndDocuments } from "utils/firebase";

export type CategoryItemProps = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

type CategoriesContextType = {
  categories: Record<string, CategoryItemProps[]>;
};

export const CategoriesContext = createContext<CategoriesContextType>({
  categories: {},
});

type CategoriesProviderProps = {
  children: ReactNode;
};

export const CategoriesProvider: FC<CategoriesProviderProps> = ({
  children,
}) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategories(categoryMap);
    };

    getCategories();
  }, []);

  const value = { categories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

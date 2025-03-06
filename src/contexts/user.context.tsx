import { ReactNode, FC, createContext, useState, useEffect } from 'react';
import { type User } from 'firebase/auth';
import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from 'utils/firebase';

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
};

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
});

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

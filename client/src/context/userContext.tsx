"use client";

import { AuthUser } from "@/actions/getAuthUser";
import React from "react";

interface UserContextType {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}

const UserContext = React.createContext<UserContextType | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export function UserProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: AuthUser | null;
}) {
  const [userState, setUser] = React.useState<AuthUser | null>(user);

  return (
    <UserContext.Provider value={{ user: userState, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

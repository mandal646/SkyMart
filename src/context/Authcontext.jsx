import { createContext, useState , useEffect } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [RegisteredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("RegisteredUsers")) || []
  );

  const [LoggedInUser, setLoggedInUser] = useState(() => {
    const user = localStorage.getItem("LoggedInUser");

    if (!user || user === "undefined") {
      return null;
    }

    return JSON.parse(user);
  });

//   const [CartItems, setCartItems] = useState([]);
//   console.log("CartItems:", CartItems);
const [CartItems, setCartItems] = useState(
  JSON.parse(localStorage.getItem("CartItems") || "[]")
);

useEffect(() => {
  localStorage.setItem("CartItems", JSON.stringify(CartItems));
}, [CartItems]);

  const logout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("LoggedInUser");
  };

  

  return (
    <Auth.Provider
      value={{
        LoggedInUser,
        setLoggedInUser,
        RegisteredUsers,
        setRegisteredUsers,
        logout,
        CartItems,
        setCartItems,
      }}
    >
      {children}
    </Auth.Provider>
  );
};


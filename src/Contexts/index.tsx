import { UserContextProvider } from "./userContext";

const GlobalContext = ({ children }: any) => {
  return (
    <>
      <UserContextProvider>{children}</UserContextProvider>
    </>
  )
};

export default GlobalContext;
import { useContext } from "react";
import { MyContext } from "./ContextProvider";

const GetContext = () => {
  return useContext(MyContext);
};

export default GetContext;

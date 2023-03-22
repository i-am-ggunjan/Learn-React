import { createContext } from "react";

const DataStore = createContext();

const Store = (props) => {
  return (
    <>
      <DataStore.Provider
        value={{
          name: "Gaurav",
          age: 21,
        }}
      >
        {props.children}
        {/* <C1/>
        <C2/> */}
      </DataStore.Provider>
    </>
  );
};

export { Store, DataStore };

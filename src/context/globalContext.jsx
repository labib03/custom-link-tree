import {createContext, useState} from "react";

const GlobalContext = createContext()

export function GlobalContextProvider(props) {
    const [showModalCreate, setShowModalCreate] = useState(false)

    const data = {
        showModalCreate
    }

    const updater = {
        setShowModalCreate
    }
    return (
        <GlobalContext.Provider value={{data, updater}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext
import { createContext, useState, useContext } from 'react';


const IpDataContext = createContext();


function IpDataProvider(props) {
    const [data,setData] = useState(null);
    
    return <IpDataContext.Provider value={[data,setData]} {...props}/>
}

function useIpData() {
    const context = useContext(IpDataContext);
    if (!context) {
        throw new Error('Out of the Provider scope')
    }
    return context;
}

export { useIpData, IpDataProvider }
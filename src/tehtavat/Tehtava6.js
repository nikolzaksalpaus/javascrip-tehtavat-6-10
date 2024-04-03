import { useState, useEffect } from "react"

export default function Tehtava6(){
    const [url, setUrl] = useState("") // user's specified url
    const [result, setResult] = useState({
        protocol: "",
        domainName: "",
        subDomains: [],
        domainExtension: "",
        path: [],
        get: []
    }) // object with return results

    useEffect(() => { // when url is changed, process the data and change the result accordingly
        if (!url) return; // if URL is empty, return without processing

        try {
            // create a URL object from the user's input
            const urlObject = new URL(url);

            // extract subdomains
            const subDomains = urlObject.hostname.split(".");
            
            // construct the result object and set it
            setResult({
                protocol: urlObject.protocol.replace(":", ""),
                domainName: subDomains.length > 1 ? subDomains[subDomains.length - 2] : subDomains[0],
                subDomains: subDomains.length > 2 ? subDomains.slice(0, subDomains.length - 2) : [],
                domainExtension: subDomains.length > 1 ? subDomains[subDomains.length - 1] : "",
                path: urlObject.pathname.split("/").filter(segment => segment !== ""),
                get: Array.from(urlObject.searchParams.entries())
            });
        } catch (error) {
            // handle invalid URL error here
            console.error("Invalid URL:", error);
            // reset the result object to default values
            setResult({
                protocol: "",
                domainName: "",
                subDomains: [],
                domainExtension: "",
                path: [],
                get: []
            });
        }
    }, [url])

    return(
        <div>
            <div>
                <input value={url} onChange={e => setUrl(e.target.value)} />
            </div>
            <div>
                <table style={{margin: "0 auto"}}>
                    <tr>
                        <th>Protocol</th>
                        <th>Subdomains</th>
                        <th>Domain name</th>
                        <th>Domain extension</th>
                        <th>Path</th>
                        <th>Get</th>
                    </tr>
                    <tr>
                        <td>{result.protocol}</td>
                        <td>{JSON.stringify(result.subDomains)}</td>
                        <td>{result.domainName}</td>
                        <td>{result.domainExtension}</td>
                        <td>{JSON.stringify(result.path)}</td>
                        <td>{JSON.stringify(result.get)}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
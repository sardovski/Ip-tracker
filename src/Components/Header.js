import React, { useEffect, useState } from "react";
import Button from "./Button";
import InfoCard from "./InfoCard";
import "./Header.scss";
import SearchBar from "./SearchBar";
import useFetch from "../Hooks/useFetch";
import { useIpData } from "../Context/IpDataContext";

function Header(props) {

  const [search, setSearch] = useState('');
  const [url, setUrl] = useState(``)
  const {response, loading, error} = useFetch(`${process.env.REACT_APP_URL}${process.env.REACT_APP_API_KEY}` + url)
  const [data,setData] = useIpData();

  const ValidIpOrUrl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?|^((http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/i;

  //https://geo.ipify.org/api/v2/country,city?apiKey=at_pqrr6wTKN0uEDDhUwLowmHJ8EhKmK&ipAddress=8.8.8.8
console.log(error);
  useEffect(()=>{

    setData(response)

  },[response])
  
  function handleSubmit(e) {
    e.preventDefault()

    let query = search.trim();

    if (ValidIpOrUrl.test(query)) {

      //checking if is a url or ip address to construct the request url
      /[A-Z]+/gi.test(query) ? setUrl(`&domain=${query}`) : setUrl(`&ipAddress=${query}`);
    }

  }



  return (
    <header className="header">

      <h1 className="header-title mt">IP Address Tracker</h1>
      <form className="header-searchForm" onSubmit={handleSubmit}>

        <SearchBar onChange={setSearch} placeholder='Search for any IP address or domain' />
        <Button classList='searchBtn mt' />
      </form>
      {loading ? <h1>Loading</h1> : null}
      {error ? <p></p> : null}
      {response ? <p></p> : null}


      <section className="header-info">
        <InfoCard title='IP ADRESS' data={data?.ip} />
        <InfoCard title='LOCATION' data={data && `${data.location.country}, ${data.location.region}, ${data.location.city}, ${data.location.postalCode}`} />
        <InfoCard title='TIMEZONE' data={data?.location.timezone} />
        <InfoCard title='ISP' data={data?.isp} />
      </section>
    </header>

  )
}

export default Header;

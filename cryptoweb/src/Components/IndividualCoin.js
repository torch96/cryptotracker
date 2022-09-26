import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import {Badge} from "@chakra-ui/react";
import CoinChart from "./CoinChart";
import cryptoDataService from "../services/cryptoList";


function IndividualCoin() {
  const initialCoinState = {
    id: null,
    name: "",
    symbol: "",
    image: {
      large: "",
    },
    
    market_data: {
      current_price: {
        usd: 0,
      },
      market_cap: {
        usd: 0,
      },
      circulating_supply: 0,
      ath:{
        usd: 0,
      },
      market_cap: {
        usd: 0,
      },
      total_volume: {
        usd: 0,
      },
      high_24h: {
        usd: 0,
      },
      low_24h: {
        usd: 0,
      },
      max_supply: 0,
      market_supply: 0,
      price_change_24h: 0,
      price_change_percentage_24h: 0,
      price_change_percentage_7d: 0,
      price_change_percentage_14d: 0,
      price_change_percentage_30d: 0,
    },
    market_cap_rank: 0,
  };
  const initialUserState = {
    name: "",
    email: "",
    password: "",
  };

  const [currentCoin, setCurrentCoin] = useState(initialCoinState);
  const { coinID } = useParams();
  

  const getCoin = async () => {
    
    cryptoDataService.getCoin(coinID).then((response) => {
      console.log(response);
      setCurrentCoin(response);
      console.log(response);
    }
      ).catch((e) => {
        console.log(e);
      });

  };

  useEffect(() => {
    getCoin();
  }, []);
  return (
    <div className="coinStats">
     
     <div className="card">
      <div className="cardTitle">
        <span>Current Price</span>
      </div>
      
        <div className="coinPrice">
          <img src={currentCoin.image.large} />
          <div style={{ marginLeft: "6px" }}>
            {currentCoin.name} <Badge>#{currentCoin.market_cap_rank}</Badge>
          </div>
          <div className="bigPrice">
            ${currentCoin.market_data.current_price.usd.toLocaleString()}
          </div>
         
        </div>
      
    </div> 


    <div className="card">
      <div className="cardTitle">
        <span>Stats</span>
      </div>
      
       
          <div className="statsCard">
            <div className="bold">
              Market Cap:{" "}
             
            </div>
            <div style={{ textAlign: "right" }}>
              ${currentCoin.market_data.market_cap.usd.toLocaleString()}
            </div>

            <div className="bold">
              All Time High:{" "}
             
            </div>
            <div style={{ textAlign: "right" }}>
              ${currentCoin.market_data.ath.usd.toLocaleString()}
            </div>

            <div className="bold">
              Circulating Supply:{" "}
            
            </div>
            <div style={{ textAlign: "right" }}>
              {currentCoin.market_data.circulating_supply.toLocaleString()}
            </div>

            <div className="bold">
              Max Supply:{" "}
              
            </div>
            <div style={{ textAlign: "right" }}>
            {currentCoin.max_supply
                ? currentCoin.max_supply.toLocaleString("en-US")
                : "No Max Supply"}
               
            </div>
          </div>
        
      
    </div>
      <CoinChart />
    </div>
  );
}

export default IndividualCoin; 


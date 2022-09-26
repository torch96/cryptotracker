import React,{ useState, useEffect } from "react";
import PriceCleanedUp from "./PriceCleanedUp";
import cryptoDataService from "../services/cryptoList";
import { AddIcon} from "@chakra-ui/icons";
import { Badge } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function CoinChart() {
  
  const navigate = useNavigate();
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    getCoins();
  }, []);

  const getCoins = async () => {
    cryptoDataService.getList().then((response) => {
      setCoinData(response);
      console.log(response);
    }
      ).catch((e) => {
        console.log(e);
      });
  };



    return (
    <div className="card span2">
      <div className="cardTitle">
        <span>Top 100</span>
      </div>
      
        <div>
        <div
              className="displayCoins noselect"
              
              onClick={() => {
                
              }}
            >
              <div>
                <Badge className="noselect"> Rank </Badge>
              </div>

              <div className="ellipsis"> </div>
              <div>
                <Badge className="floatRight" >
                  Coin
                </Badge>
              </div>
              <div>
                <Badge className="floatRight" >
                Price usd
                 
                </Badge>
              </div>
              <div>
                <Badge className="floatRight" 
                onClick={() => {
                  setCoinData(coinData.sort((a, b) => a.item.price_change_percentage_24h - b.item.price_change_percentage_24h));
                  navigate()
                }} >
                   % change 24h
                 
                </Badge>
              </div>
             
            </div>
          {coinData.map((coins) => (
            <>
            <div
              className="displayCoins noselect"
              key={coins.id}
              
            >
              <div>
                <Badge className="noselect">{coins.market_cap_rank}</Badge>
              </div>
              <img
                src={coins.image}
                width="20px"
                alt={coins.name}
                className="noselect"
                onClick={() => {
                  navigate("/coins/" + coins.id);
                  navigate(0);
                }}
              />
              <div className="ellipsis"
              onClick={() => {
               
                navigate("/coins/" + coins.id);
                 navigate(0);
              }}>{coins.name}</div>
              <div>
                $<PriceCleanedUp coin={coins} />
              </div>
              <div>
                <Badge
                  className="floatRight"
                  colorScheme={coins.price_change_24h >= 0 ? "green" : "red"}
                >
                  
                    {coins.price_change_percentage_24h.toLocaleString("en-US")}
                  
                  %
                </Badge>
              </div>
              
              <div className="chartIcon" oncClick={() => {
                cryptoDataService.addWatchlist(coins.id)
              }}
              style={{ textAlign: "right" }}>
                <AddIcon/>
              </div>
              </div>
            
            </>
          ))}
        </div>
      

        <div>
          
              
        </div>      
    </div>
  );
}

export default CoinChart;

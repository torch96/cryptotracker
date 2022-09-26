import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Skeleton } from "@chakra-ui/react";
import{useEffect,useState} from "react";
import cryptoDataService from "../services/cryptoList";
import { useNavigate } from "react-router-dom";
import { Badge } from "@chakra-ui/react";
function Trending() {
  const navigate = useNavigate();
  const [coinData ,setCoins] = useState([]);
  
  const getCoins = async () => {
    cryptoDataService.getTrending().then((response) => {
      setCoins(response);
      console.log(response);
    }
      ).catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getCoins();
  }, []);
 
  return (
    <div className="card span2">
      <div className="cardTitle">
        <span>Trending</span>
      </div>

        <div className="trendingBody">
          {coinData.map((coin) => (
             <div
             className="trending"
             onClick={() => {
               navigate("/coins/" + coin.item.id);
             }}
           >
             <div className="ellipsis">{coin.item.id}</div>
             <div>
               <Badge  float="right" marginTop="2px">
                 {coin.item.market_cap_rank}
               </Badge>
             </div>
           </div>
          ))}
        </div>
    
    </div>
  );
}

export default Trending;

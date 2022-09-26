

class cryptoDataService {
    async getList(page = 1) {
      const response = await fetch( `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&page=${page}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      return response.json();
    }
    async getTrending() {
      const response = await fetch( `https://api.coingecko.com/api/v3/search/trending`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      })
     const result = await response.json();
       result.coins.pop();
      return result.coins;
    }
    async getCoin(id) {
      const response = await fetch( `https://api.coingecko.com/api/v3/coins/${id}?community_data=false&developer_data=false`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
      return response.json();
    }
    async searchCoin(query) {
      const response = await fetch( `https://api.coingecko.com/api/v3/search?query=${query}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return response.json();
    }
    
    async watchlist() {
      const response = await fetch('/api/watchlist', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return response.json();
    }

    async addWatchlist(id) {
      const response = await fetch('/api/watchlist', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      })
      return response.json();
    }

    async removeWatchlist(id) {
      const response = await fetch('/api/watchlist', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      })
      return response.json();
    }
   
    
  

  
  }
  
  export default new cryptoDataService();
  
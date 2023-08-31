import React, {useState, useEffect} from 'react'
import './Featured.css'
import {FiArrowUpRight, FiArrowDown} from 'react-icons/fi'
import  BTC from '../Assets/btc-img.png'

const Featured = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        })
    })

  return (

    <div className='featured'>
        <div className="container">
            {/* left */}
            <div className="left">
                <h2>Explore top Crypto's like Bitcoin, Ethereum and Dogecoin</h2>
                <p>See all available assets: CryptoCurrencies and NFT's</p>
                <button className='btn'>See More Coins</button>
            </div>
            {/* Right */}
            <div className="right">
                <div className="top">
                    <img src={BTC} alt="" />
                </div>
                <div>
                    <h5>Bitcoin</h5>
                    <p>$49,000</p>
                </div>
                <span><FiArrowUpRight/>2.5%</span>
            </div>
        </div>
      
    </div>
  )
}

export default Featured

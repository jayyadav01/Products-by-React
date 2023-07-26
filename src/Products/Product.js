import React, { useEffect } from 'react'
import './product.css'
import axios from 'axios'
import { useState } from 'react'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
function Product() {
    const [data,usedata] = useState([]);

    useEffect(()=>{
            axios.get('https://dummyjson.com/products').then((response) => {
            console.log(response.data.products);
            usedata(response.data.products)
        })
     }, [])
    
  return (
    <>
        <div className='parent'>
            <div className='detail'>
            {
                data ?
                data.map((result,i)=>
                <div className='box' key={i}>
                    <div className='image'>
                        <img src={result.thumbnail} width={250} height={200}></img>
                    </div>
                    <div className='des'>
                        <h1>{result.title}</h1>
                        <p>{result.description}</p>
                        <p>$ {result.price}</p>
                    </div>
                </div>
                ):''
            }
            </div>
        </div>
    </>
  )
}

export default Product

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Detail.scss'
import Helmet from 'react-helmet'


function Detail() {
  const {id} = useParams()
  const [item , setData] = useState({})


  useEffect(() => {
    axios.get(`http://localhost:2222/products/${id}`).then(res => {
      setData(res.data)
    })
  })
  return (
    <>
    <Helmet>
        <title>Detail</title>
      </Helmet>
     <div className="detail__datas">
              <div className="data">
                <img
                  src="https://preview.colorlib.com/theme/pato/images/intro-01.jpg"
                  alt=""
                />
                <div className="content">
                  <h4>{item?.place}</h4>
                  <p>${item?.price}</p>
                </div>
              </div>
      </div>
    </>
  )
}

export default Detail
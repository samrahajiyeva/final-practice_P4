import React, { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";
import axios from "axios";
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import { Toaster , toast } from 'react-hot-toast'

function Home() {
  const [data, setData] = useState([]);
  const [searchValue , setSearchValue] = useState([])
  const [dummy , setDummy] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:2222/products").then((res) => {
      setData(res.data);
    });
  }, [searchValue === "" , dummy? data: ""]);

  const handleSort = ()=> {
    const sorted = [...data].sort((a, b) => a.price - b.price)
    setData(sorted)
  }

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider />
      <div className="pattern">
        <div className="pattern__left">
          <span>Italian Restaurant</span>
          <h3>WELCOME</h3>
          <p>
            Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed{" "}
            <br />
            fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac
            facilisis <br /> ligula sem id neque.
          </p>
        </div>
        <div className="pattern__right">
          <img
            src="	https://preview.colorlib.com/theme/pato/images/our-story-01.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="parallax">
        <div className="wrapper">
          <span>Discover</span>
          <h3>PATO PLACE</h3>
        </div>
      </div>

      <div className="datas">
        <div className="actions">
          <button onClick={handleSort}>SORT</button>
          <input type="text" placeholder="Search..." onChange={(e) => {
            setSearchValue(e.target.value)
            setData(data.filter(item => item.place.includes(searchValue)))
          }}/>
        </div>
        <div className="datas__cards">
        {data &&
          data.map((item, index) => {
            return (
              <div className="data" key={index}>
                <Link to={`${item._id}`}>
                <img
                  src="https://preview.colorlib.com/theme/pato/images/intro-01.jpg"
                  alt=""
                />
                </Link>
                <div className="content">
                  <h4>{item.place}</h4>
                  <p>${item.price}</p>
                  <button onClick={(e) => {
                    axios.delete(`http://localhost:2222/products/${item._id}`).then(res => {
                      toast.success("item deleted")
                    });
                    setDummy(true)
                  }}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default Home;

import React, { useRef, useState } from "react";
import './App.css';
//components
import { Card, Card1, Card2, Card3, Card4 } from './component/card';
//components


//translations
import { useTranslation } from 'react-i18next';
//translations


// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./App.css";
import { Navigation, Pagination} from "swiper";
// Swiper

//img
import logo1 from './img/logo1.png';
import invest from './img/invest.png';
import btc from './img/btc.png';
import doge from './img/doge.png';
import dash from './img/dash.png';
import dollar from './img/dollar.png';
import eth from './img/eth.png';
import tron from './img/tron.png';
import stellar from './img/stellar.png';
import xrp from './img/xrp.png';
import ltc from './img/ltc.png';
import support from './img/support.png';
import phone1 from './img/phone1.png';
import tether from './img/tether.png';
import security from './img/security.png';
import refferal from './img/refferal.png';
import demo from './img/demo.png';
import phone2 from './img/phone2.png';
import phone3 from './img/phone3.png';
import star from './img/star.png';
import person from './img/person.png';
import wallet from './img/wallet.png';
import bag from './img/bag.png';
import linkedin from './img/linkedin.png';
import telegram from './img/telegram.png';
import reddit from './img/reddit.png';
import medium from './img/medium.png';
import facebook from './img/facebook.png';
import twitter from './img/twitter.png';
import youtube from './img/youtube.png';
//img


function App() {

  const { t, i18n } = useTranslation();
  const [ lng, setLng ] = useState('ru')

  const changeLanguage = (language) => (
    i18n.changeLanguage(language)
  );

  const handleChange = (event) => {
    const { value } = event.target
    changeLanguage(value)
    setLng(value)
  }

  return(<div>
    <div className="container1">
      <div className="container">
        <div className="navbar">
          <div className="start">
            <img src={logo1} alt="" />
          </div>
          <div className="end">
            <div className="lang">
            <select  onChange={handleChange}>
              <option value="ru">Ru</option>
              <option value="en">Eng</option>
              <option value="tj">Tjk</option>
            </select>
            </div>
            <div className="enter">
              <button>{t('text3')}</button>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="center-text">
              
          <h1>{t('text')}</h1>
          <p>{t("text2")}</p>
          <button>{t('text4')}</button>
          </div>
          <div className="center-img">
            <img src={invest} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="container2">
      <div className="container">
        <div className="line">
          <div className="five">
            <h1>{t("text9")}</h1>
            <p>{t("text5")}</p>
          </div>
          <div className="four">
            <h1>400+</h1>
            <p>{t("text6")}</p>
          </div>
          <div className="three">
            <h1>190</h1>
            <p>{t("text7")}</p>
          </div>
          <div className="two">
            <h1>10+</h1>
            <p>{t("text8")}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container3">
      <div className="container">
        <h1 className='big'>{t("text10")}</h1>
        <p className='good'>{t("text11")}</p>
        <div className="valute">
        <>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          clickable: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Card imgUrl = {btc} text1="Bitcoin"/>
        </SwiperSlide>
        <SwiperSlide>
        <Card imgUrl = {eth} text1="Etherum"/>
        </SwiperSlide>
        <SwiperSlide>
        <Card imgUrl = {dollar} text1="Tether"/>
        </SwiperSlide>
        <SwiperSlide>
        <Card imgUrl = {doge} text1="Doge"/>
        </SwiperSlide>
        <SwiperSlide>
        <Card imgUrl = {xrp} text1="Ripple"/>
        </SwiperSlide>
        <SwiperSlide>
        <Card imgUrl = {dash} text1="Dash"/>
        </SwiperSlide>
        <SwiperSlide>
        <Card imgUrl = {ltc} text1="Litecoin"/>
        </SwiperSlide>
        <SwiperSlide>
        <Card imgUrl = {stellar} text1="Stellar"/>
        </SwiperSlide>
        <SwiperSlide>
        <Card imgUrl = {tron} text1="Tron"/>
        </SwiperSlide>
      </Swiper>
    </>


      </div>
    </div>
    </div>
    <div className="container4">
        <div className="container">
          <h1 className='why'>{t("text12")}</h1>
          <div className="box1">
            <Card1 imgUrl={support} text1 = {t("text13")} />
            <Card1 imgUrl={tether} text1 = {t("text13")} />
            <Card1 imgUrl={security} text1 = {t("text13")} />
          </div>
          <div className="box2">
            <Card1 imgUrl={demo} text1 = {t("text13")} />
            <Card1 imgUrl={refferal} text1 = {t("text13")} />
            <Card1 imgUrl={demo} text1 = {t("text13")} />
          </div>
        </div>
    </div>
    <div className="container5">
      <div className="container">
        <h1 className='important'>{t("text14")}</h1>
        <h1 className='make'>{t("text15")}</h1>
        <div className="phones">
          <div className="phone1">
          <h1>{t("text16")}</h1>
          <img src={phone1} alt="" />
          </div>
          <div className="phone2">
          <h1>{t("text17")}</h1>
          <img src={phone2} alt="" />
          </div>
          <div className="phone3">
          <h1>{t("text18")}</h1>
          <img src={phone3} alt="" />
          </div>
        </div>
        <div className="sign">
          <button>{t("text4")}</button>
        </div>
      </div>
    </div>
    <div className="container6">
      <div className="container">
          <h1 className='feedback'>{t("text19")}</h1>
          <div className="feeds">
          <>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          clickable: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Card2 imgUrl = {star} text1="03.02.2021" text2={t("text24")} text3= {t("text25")}/>
        </SwiperSlide>
        <SwiperSlide>
        <Card2 imgUrl = {star} text1="02.02.2021" text2={t("text20")} text3= {t("text21")}/>
        </SwiperSlide>
        <SwiperSlide>
        <Card2 imgUrl = {star} text1="11.01.2021" text2={t("text22")} text3= {t("text23")}/>
        </SwiperSlide>
        <SwiperSlide>
        <Card2 imgUrl = {star} text1="13.02.2021" text2={t("text24")} text3= {t("text25")}/>
        </SwiperSlide>
        <SwiperSlide>
        <Card2 imgUrl = {star} text1="12.01.2021" text2={t("text26")} text3= {t("text27")}/>
        </SwiperSlide>
        <SwiperSlide>
        <Card2 imgUrl = {star} text1="04.02.2021" text2={t("text22")} text3= {t("text23")}/>
        </SwiperSlide>
        <SwiperSlide>
        <Card2 imgUrl = {star} text1="21.02.2021" text2={t("text28")} text3= {t("text29")}/>
        </SwiperSlide>
    </Swiper>
    </>
          </div>
        </div>
    </div>
    <div className="container7">
      <div className="container">
        <h1 className='easy'>{t("text30")}</h1>
        <div className="line1">
          <Card3 imgUrl={person} text1 = {t("text32")}/>
          <Card3 imgUrl={wallet} text1 = {t("text33")}/>
          <Card3 imgUrl={bag} text1 = {t("text34")}/>
        </div>
        <div className="account">
          <button>{t("text31")}</button>
        </div>
      </div>
    </div>
    <div className="container8">
      <div className="container">
        <div className="last-box">
            <Card4 imgUrl={linkedin} text1 = "LinkedIn"/>
            <Card4 imgUrl={telegram} text1 = "Telegram"/>
            <Card4 imgUrl={reddit} text1 = "Reddit"/>
            <Card4 imgUrl={medium} text1 = "Medium"/>
            <Card4 imgUrl={facebook} text1 = "Facebook"/>
            <Card4 imgUrl={twitter} text1 = "Twitter"/>
            <Card4 imgUrl={youtube} text1 = "YouTube"/>
        </div>
        <div className="marko">
          <p>{t("text35")}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App;

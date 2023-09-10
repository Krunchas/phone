// This is only backup file

import Head from "next/head";
import { FaLock, FaWifi, FaSignal, FaBatteryFull, FaPhoneAlt } from 'react-icons/fa';
import { PiCameraFill } from 'react-icons/pi';
import { IoChevronBackSharp } from 'react-icons/io5';

export default function Home() {
  return (
    <>
      <Head>
        <title>Phone</title>
        <meta name="description" content="Made by Filip Wolf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <button onClick={() => location.href = "https://fwolf.vercel.app/"}>
          <IoChevronBackSharp className="getBackToTheMainPage" />
        </button>
        <div className="phone">
          <Screen classes = "shown" />
          <ScreenTime classes = "hidden" />
        </div>
      </main>
    </>
  );
}

function showTime() {
  if (typeof document !== 'undefined') {
    const shown = document.querySelector(".shown") as HTMLDivElement
    const hidden = document.querySelector(".hidden") as HTMLDivElement
    shown.classList.remove("shown")
    shown.classList.add("hidden")
    hidden.classList.add("shown")
    hidden.classList.remove("hidden")
  }
}

function Screen({ classes }: { classes : string }) {

  if (typeof document !== 'undefined') {
    setInterval(() => {
      let den
      const date = new Date();
      const timeText = document.querySelector(".time") as HTMLDivElement
      const dateTextos = document.querySelector(".date") as HTMLDivElement
      let hh: string | number = date.getHours();
      let mm: string | number = date.getMinutes();
      let ss: string | number = date.getSeconds();
      hh = (hh < 10) ? "0" + hh : hh;
      mm = (mm < 10) ? "0" + mm : mm;
      ss = (ss < 10) ? "0" + ss : ss;
      const time = hh + ":" + mm;
    
      if (date.getDay() === 1) {
        den = "po";
      }
      else if (date.getDay() === 2) {
        den = "út";
      }
      else if (date.getDay() === 3) {
        den = "st";
      }
      else if (date.getDay() === 4) {
        den = "čt";
      }
      else if (date.getDay() === 5) {
        den = "pá";
      }
      else if (date.getDay() === 6) {
        den = "so";
      }
      else {
        den = "ne";
      }
    
      const dateText = den + " " + date.getDate() + ". " + (Intl.DateTimeFormat('cs', { month: 'long' }).format(date));
      timeText.innerHTML = time;
      dateTextos.innerHTML = dateText;
    }, 1000);
  }

  return (
    <div className={`${classes} screen`}>
      <div className="topbar">
        <div className="left">
          <div className="operator">Vodafone CZ</div>
        </div>
        <div className="camera-block">
          <div className="camera">
            <div className="dot"></div>
          </div>
        </div>
        <div className="right">
          <div className="wifi">
            <i><FaWifi className="wifi-i" /></i>
          </div>
          <div className="signal">
            <i><FaSignal className="signal-i" /></i>
          </div>
          <div className="percentage">95%</div>
          <div className="battery-icon">
            <i><FaBatteryFull className="battery-i" /></i>
          </div>
        </div>
      </div>
      <div className="lock">
        <i><FaLock /></i>
      </div>
      <div className="middle mt-16">
        <div className="clickable hover:cursor-pointer" onClick={() => showTime()}>
          <div className="time">0:00</div>
          <div className="date">po 1. ledna</div>
        </div>
      </div>
      <div className="down">
        <div className="call-button">
          <i><FaPhoneAlt className="call-i" /></i>
        </div>
        <div className="camera-button">
          <i><PiCameraFill className="camera-i" /></i>
        </div>
      </div>
    </div>
  )
}

function ScreenTime({ classes }: { classes : string }) {

  if (typeof document !== 'undefined') {
    setInterval(() => {
      let den
      const date = new Date();
      const timeText = document.querySelector(".timeScreen") as HTMLDivElement
      const dateTextos = document.querySelector(".dateScreen") as HTMLDivElement
      let hh: string | number = date.getHours();
      let mm: string | number = date.getMinutes();
      let ss: string | number = date.getSeconds();
      hh = (hh < 10) ? "0" + hh : hh;
      mm = (mm < 10) ? "0" + mm : mm;
      ss = (ss < 10) ? "0" + ss : ss;
      const time = hh + ":" + mm + ":" + ss;
    
      if (date.getDay() === 1) {
        den = "po";
      }
      else if (date.getDay() === 2) {
        den = "út";
      }
      else if (date.getDay() === 3) {
        den = "st";
      }
      else if (date.getDay() === 4) {
        den = "čt";
      }
      else if (date.getDay() === 5) {
        den = "pá";
      }
      else if (date.getDay() === 6) {
        den = "so";
      }
      else {
        den = "ne";
      }
    
      const dateText = den + " " + date.getDate() + ". " + (Intl.DateTimeFormat('cs', { month: 'long' }).format(date));
      timeText.innerHTML = time;
      dateTextos.innerHTML = dateText;
    }, 1000);
  }

  return (
    <div className={`${classes} screenBlur `}>
      <div className="topbar">
        <div className="camera-block ml-38">
          <div className="camera">
            <div className="dot"></div>
          </div>
        </div>
      </div>
      <div className="middle -ml-2 mt-8">
        <div className="clickable">
          <div className="timeScreen">0:00:00</div>
          <div className="dateScreen pl-5">po 1. ledna</div>
        </div>
      </div>
      <div className="hudba">
        <p>Nepřehrává se žádná hudba</p>
        <p className="vystup">Přehrát hudbu</p>
      </div>
      <div className="upozorneni">
        <p>Žádná upozornění během příštích 24 hodin.</p>
      </div>
      <div className="rutiny">
        <p>Žádné rutiny nejsou nastaveny jako pomůcky na zamykací obrazovce</p>
      </div>
      <div className="btns">
        <button className="nastaveni">Nastavení</button>
        <button onClick={() => showTime()}>
          <IoChevronBackSharp className="backBtn" />
        </button>
      </div>
    </div>
  )
}
import Head from 'next/head'
import { useState } from "react"

export default function Home() {
  var countDownDate = new Date("June 1, 2022 7:0:0").getTime();
  var [moreTime, setmoreTime] = useState("June first")
  var [title, setTile] = useState("Blog-y")
  var props = {
    dp:"Blogy a Website by net-js to blogy anything and everythong by net-js"
  }
  var countdownfunction = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setmoreTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ")
    setTile(`${days}:${hours}:${minutes} Blogy`)
  }, 1000);

  return (
    <div>
      <Head>
      <title>{title}</title>
        <meta charset="UTF-8" />
        <meta name="description" content={props.dp} />
        <meta name="keywords" content={`blogy,blogy-y,net-js`} />
        <meta name="author" content="net-js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="application-name" content="Blogy-y" />
        <meta name="name" content="Blog-y" />

        <link rel="manifest" href="/data.webmanifest" />
        <link rel="icon" href="/icons/icon-48x48.png"/>

        <meta property="og:title" content={title} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={props.dp} />
        <meta property="og:url" content="https://blog-y.vercel.app" />
        <meta property="og:site_name" content="Blogy" />
        <meta property="og:image" content="https://draw-snet.web.app/icons/icon-48x48.png" />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={title} />
        <script type="application/ld+json">
          {JSON.stringify({
            "headline": title,
            "description": props.dp,
            "url": "https://blog-y.vercel.app",
            "@type": "WebSite",
            "name": "Blogy",
            "@context": "https://schema.org"
          })}
        </script>
      </Head>
      <div className="bgimg">
        <div className="topleft">
          <img src="https://avatars.githubusercontent.com/u/103830370?v=4" alt="net-js's" />
        </div>
        <div className="middle">
          <h1>COMING SOON</h1>
          <hr />
          <p style={{fontSize:"30px"}}>{moreTime}</p>
        </div>
        <div className="bottomleft">
          <p>Blogy</p>
        </div>
        <div className="bottomCenter">
          <a href="https://github.com/net-js/net-js/discussions/2">Open Source.</a>
        </div>
      </div>
    </div>
  )
}

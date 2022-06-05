import Head from 'next/head'
import { useState } from "react"

export default function Home() {
  var countDownDate = new Date("June 18, 2022 7:0:0").getTime();
  var [moreTime, setmoreTime] = useState("June 18")
  var [title, setTile] = useState("Olivia")
  var props = {
    dp:"Project Olivia"
  }
  var countdownfunction = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setmoreTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ")
    setTile(`${days}:${hours}:${minutes} Olivia`)
  }, 1000);

  return (
    <div>
      <Head>
      <title>{title}</title>
        <meta charset="UTF-8" />
        <meta name="description" content={props.dp} />
        <meta name="keywords" content={`oliva,Project-Olivia,net-js`} />
        <meta name="author" content="net-js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="application-name" content="Olivia" />
        <meta name="name" content="Olivia" />

        <meta property="og:title" content={title} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={props.dp} />
        <meta property="og:url" content="https://olivia.vercel.com" />
        <meta property="og:site_name" content="Olivia" />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={title} />
        <script type="application/ld+json">
          {JSON.stringify({
            "headline": title,
            "description": props.dp,
            "url": "https://olivia.vercel.com",
            "@type": "WebSite",
            "name": "Olivia",
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
          <p>Olivia</p>
        </div>
        <div className="bottomCenter">
          <a href="https://github.com/net-js/Project-Olivia/">Open Source.</a>
        </div>
      </div>
    </div>
  )
}

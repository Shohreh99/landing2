import React from "react"
import Image from "next/image"
import Link from "next/link"
function Home(){
return(
  <div className="montserrat">
    <div className="flex bg-grray">
      <Image className="ml-20 mt-32 mb-40" alt="soroosh" width={500} height={500} src={"https://soroosh.app/static/assets/img/item_home.png"}/>
      <div className="flex-col">
      <h1 className="font-bold text-left text-5xl ml-28 mt-52 leading-normal">HIT THE TARGET BY SOROOSH ADS</h1>
      <p className="text-2xl text-left text-slate-400 leading-loose mt-16 ml-28 mr-28">Smart advertising platform baised on blockchain and artificial intelligence</p>
      <button className="type=submit justify-center items-center bg-orange w-80 h-14 ml-28 mt-14 mb-40 text-2xl text-black">GET STARTED</button>
      </div>
    </div>
    <div className="flex-col bg-black">
      <h1 className=" text-left ml-48 mt-80 text-3xl font-normal">Display Video ADS</h1>
      <p className=" text-2xl ml-32 mt-14 text-slate-400">Show your video ads to thousands of users</p>
      <h1 className="text-left ml-48 mt-44 text-3xl font-normal">Multilingual Advertising</h1>
      <p className="text-2xl ml-32 mt-14 text-slate-400">Campaign launch in target languages and locations</p>
      <h1 className="text-left ml-48 mt-44 text-3xl font-normal">Professional Partners</h1>
      <p className="text-2xl ml-32 mt-14 text-slate-400">A wide network of our partners that will multiply the power of your advertising</p>
      <h1 className="text-left ml-48 mt-44 text-3xl font-normal">Pro Filtering Tools</h1>
      <p className="text-2xl ml-32 mt-14 text-slate-400">Filter by IP address , gender , location and categories related to your targets</p>
      <h1 className="text-left ml-48 mt-44 text-3xl font-normal">Effecient and Atteractive</h1>
      <p className="text-2xl ml-32 mt-14 text-slate-400">Smart and affordable advertising with SSE token payment</p>
      <h1 className="text-left ml-48 mt-44 text-3xl font-normal">Professional Partners</h1>
      <p className="text-2xl ml-32 mt-14 mb-96 text-slate-400">A wide network of our partners that will multiply the power of your advertising</p>
    </div>
    <div className="bg-black flex">
    <Image className="ml-20 mt-28 mb-40" alt="soroosh" width={400} height={400} src={"https://media.soroosh.online/sliders/images/Iphone14-Soroosh-Ads-Target-Audience-black.png"}/>
      <div className="flex-col">
      <h1 className="font-bold text-left text-5xl ml-28 mt-96 leading-normal">TARGETED CUSTOMERS</h1>
      <p className="text-2xl text-left text-slate-400 leading-loose mt-11 ml-28 mr-28">Thousands of active and interested customers and users in the field of technology and blockchain are waiting for you</p>
      <button className="type=submit justify-center items-center border-2 rounded-xl w-44 h-10 ml-28 mt-12 mb-40 text-xl text-slate-400">Get started</button>
      </div>
    </div>
    <div className="bg-black flex">
    
      <div className="flex-col">
      <h1 className="font-bold text-left text-5xl ml-20 mt-96 leading-normal">MANAGE YOUR CAMPAIGNS</h1>
      <p className="text-2xl text-left text-slate-400 leading-loose mt-11 ml-20 mr-28">A smooth and professional platform for creating all kinds of advertising campaigns available on Android, iOS and the web</p>
      <button className="type=submit justify-center items-center border-2 rounded-xl w-52 h-10 ml-20 mt-12 mb-40 text-lg text-slate-400">Download apps</button>
      </div>
      <Image className="ml-20 mt-28 mb-40 mr-24" alt="soroosh" width={400} height={400} src={"https://media.soroosh.online/sliders/images/iphone14-sorooshads-black_VicBJyp.png"}/>
    </div>
    <div className="bg-black flex">
    <Image className="ml-20 mt-28 mb-40" alt="soroosh" width={400} height={400} src={"https://media.soroosh.online/sliders/images/iphone14-sorooshads-campaign-budget-black.png"}/>
      <div className="flex-col">
      <h1 className="font-bold text-left text-5xl ml-28 mt-96 leading-normal">PAY WITH SSE TOKEN</h1>
      <p className="text-2xl text-left text-slate-400 leading-loose mt-11 ml-28 mr-28">Smart estimation of campaign cost and easy and fee-free payment using SST token ( Soroosh native token )</p>
      <button className="type=submit justify-center items-center border-2 rounded-xl w-44 h-10 ml-28 mt-12 mb-40 text-xl text-slate-400">Get started</button>
      </div>
    </div>
    <div className="flex bg-grray">
      <Image className="ml-20 mt-80 mb-40" alt="soroosh" width={1600} height={15} src={"https://soroosh.app/static/assets/img/ads-video.png"}/>
      <div className="flex-col">
      <h1 className="font-bold text-left text-5xl ml-28 mr-14 mt-72 leading-normal">BECOME OUR PARTNER</h1>
      <p className="text-2xl text-left text-slate-400 leading-loose mt-12 ml-28 mr-14">If you are the owner of an active media, community or platform with significant users in the field of technology, cryptocurrency and blockchain, you can join Soroosh ads partnership program and get your desired attention</p>
      <button className="type=submit justify-center items-center bg-orange w-96 h-14 ml-28 mt-14 mb-40 text-2xl text-black">JOIN US</button>
      </div>
    </div>
    <div className="bg-black flex-col ">
    <h1 className="text-center font-bold text-6xl mt-80">UPDATES & NEWS</h1>
    <Link className="" href={"https://soroosh.app/en/blog/7/soroosh-ads-is-almost-here"}>
    <Image className="ml-80 mt-28 mb-0" alt="soroosh" width={400} height={200} src={"https://media.soroosh.online/blog/media/image/soroosh-ads-is-almost-here_blog__image_SuZfK0t.png"}/>
    </Link>

    <Link className="" href={"https://soroosh.app/en/blog/7/soroosh-ads-is-almost-here"}>
    <div className="border-2-grray bg-grray w-1/3 h-40 ml-72 mr-64 mb-40">
    <p className="text-gray ml-16 txt-xl font-extralight">Soroosh Ads</p>
    <p className="ml-16 text-xl mt-4">Soroosh Smart Advertisement</p>
    <p className="ml-16 text-xl mt-1">Platform is almost here!!!!!</p>
    <p className="text-gray ml-16 text-xl mt-2 font-extralight">Jan 11,2023</p>
    </div>
    </Link>
    <Link className="text-slate-400 text-end mt-80 ml-20 text-2xl" href={"https://soroosh.app/en/blog"}>see all blogs..</Link>
    <div className="flex-col">
    <h1 className="text-center text-5xl font-bold mt-96">PARTNERS & CUSTOMERS</h1>
    <div className="flex">
    <Image className="ml-20 mt-28" alt="soroosh" width={200} height={300} src={"https://soroosh.app/static/assets/img/brand/BitMart%20(2).png"}/>
    <Image className="ml-10 mt-28 " alt="soroosh" width={200} height={300} src={"https://soroosh.app/static/assets/img/brand/BSC%20(2).png"}/>
    <Image className="ml-10 mt-28 " alt="soroosh" width={200} height={300} src={"https://soroosh.app/static/assets/img/brand/chainlink.png"}/>
    <Image className="ml-10 mt-28 " alt="soroosh" width={200} height={300} src={"https://soroosh.app/static/assets/img/brand/TensorFlow%20(2).png"}/>
    <Image className="ml-10 mt-28 " alt="soroosh" width={200} height={300} src={"https://soroosh.app/static/assets/img/brand/WEB3%20(2).png"}/>
    </div>
    </div>
    <div className="text-center flex-col ">
      <h1 className="text-5xl font-bold mt-60 ">Do you have a Dapps or Business ?</h1>
      <p className="text-2xl mt-14 leading-normal text-slate-400 text-left ml-64 mr-60 mb-96">If you want to introduce your products and services to thousands of active users in the field of blockchain, cryptocurrencies , NFTs and technology, Soroosh Ads is the best solution.</p>
    </div>
    </div>
    <div className="flex bg-grray">
      <Image className="ml-20 mt-72 mb-40" alt="soroosh" width={300} height={100} src={"https://media.soroosh.online/sliders/images/iPhone_13_mini_2_YwnS1uT.png"}/>
      <div className="flex-col">
      <h1 className="font-bold text-left text-5xl ml-28 mt-80 leading-normal">AVAILABLE ON YOUR DEVICES</h1>
      <p className="text-2xl text-left text-slate-400 leading-loose mt-10 ml-28 mr-28">Soroosh Ads is available on all devices. Create and manage your campaigns anytime , anywhere.</p>
      <div className="flex">
      <Image className="ml-28 mt-28 " alt="soroosh" width={80} height={80} src={"https://soroosh.app/static/assets/img/apple-logo.png"}/>
      <Image className="ml-56 mt-28 " alt="soroosh" width={80} height={80} src={"https://soroosh.app/static/assets/img/google-play.png"}/>
      <Image className="ml-56 mt-28 " alt="soroosh" width={80} height={80} src={"https://soroosh.app/static/assets/img/notebook%201.png"}/>
      </div>
      <div className="flex">
        <Link className="text-slate-400 text-lg mt-5 ml-24 text-center" href={"https://soroosh.app/en/blog/28/introduction-of-soroosh-smart-ecosystem-products-and-mobile-applications"}>Download ios</Link>
        <Link className="text-slate-400 text-lg mt-5 ml-40 text-center" href={"https://soroosh.app/en/blog/28/introduction-of-soroosh-smart-ecosystem-products-and-mobile-applications"}>Download Android</Link>
        <Link className="text-slate-400 text-lg mt-5 ml-44 text-center" href={"https://soroosh.app/en/blog/28/introduction-of-soroosh-smart-ecosystem-products-and-mobile-applications"}>Go to Web App</Link>
      </div>
      </div>
      </div>
      <div className="bg-grray ">
      <Link className="text-slate-400 text-end mt-80 ml-20 text-2xl mb-80" href={"https://soroosh.app/en/blog"}>Back To Home..</Link>
      </div>
    </div>
)
}
export default Home

import React from "react"
import Image from "next/image"
import Link from "next/link"
function Home(){
return(
  <div className="bg-black items-center">
<div className="flex-col container items-center m-auto p-auto justify-center gap-70 ">
    <Image className="mx-auto my-auto" alt="alt" width={900} height={600} priority={true} src={"https://soroosh.app/static/assets/img/item_home.png"}/>
    <div className="flex-col items-center leading-10">
<h1 className="font-extrabold text-5xl bg-slate-50 mx-auto my-auto leading-10 p-8 text-center">HIT THE TARGET BY SOROOSH ADS</h1>
<p className="gap-14 items-center text-center text-xl">Smart advertising platform based on blockchain and artificial intelligence</p>
</div>
<button className=" type=submit container justify-center items-center border-2 border-orange-600 bg-orange-600 text-center font-extrabold  mx-auto my-auto text-4xl w-81 h-20 leading-10 mt-20">GET STARTED</button>
</div>
<div className="flex-col items-center leading-10">
  <h1 className="font-extrabold text-5xl bg-slate-50 mx-auto my-auto leading-10 p-8 text-center mt-48">Display Video ADS</h1>
  <p className="gap-14 items-center text-center text-xl">Show your video ads to thuosands of users</p>
  <h2 className="font-extrabold text-5xl bg-slate-50 mx-auto my-auto leading-10 p-8 text-center mt-48">Multilingual Advertising</h2>
  <p className="gap-14 items-center text-center text-xl">Campaign launch in target languages and locations</p>
  <h3 className="font-extrabold text-5xl bg-slate-50 mx-auto my-auto leading-10 p-8 text-center mt-48">Professional partners</h3>
  <p className="gap-14 items-center text-center text-xl">Awide network of our partners that will multiply the power of your advertising</p>
  <h4 className="font-extrabold text-5xl bg-slate-50 mx-auto my-auto leading-10 p-8 text-center mt-48">Pro Filtering Tools</h4>
  <p className="gap-14 items-center text-center text-xl">Filter by IP address,gender,location and categories related to your targets</p>
  <h5 className="font-extrabold text-5xl bg-slate-50 mx-auto my-auto leading-10 p-8 text-center mt-48">Effecient and Atteractive</h5>
  <p className="gap-14 items-center text-center text-xl">Smart and affordable advertising with SSE token payment</p>
  <h6 className="font-extrabold text-5xl bg-slate-50 mx-auto my-auto leading-10 p-8 text-center mt-48">Professional partners</h6>
  <p className="gap-14 items-center text-center text-xl">A wide network of our partners that will multiply the power of your advertising</p>
</div>
<div className="justify-center ">
  <Image className="mx-auto my-auto mt-72" alt="alt" width={800} height={400} priority={true} src={"https://media.soroosh.online/sliders/images/Iphone14-Soroosh-Ads-Target-Audience-black.png"} />
  <h1 className="font-extrabold text-5xl bg-slate-50 mx-auto my-auto leading-10 p-8 text-center mt-48"
  >TARGETED CUSTOMERS</h1>
  <p className="gap-14 items-center text-center text-xl">Thousands of active and iterested customers and users in the field of technology and blockchain are waiting for you</p>
  <button className=" type=submit justify-center items-center border-2 rounded-xl border-orange-600  text-center font-extrabold ml-96 my-auto text-lg w-80 h-20 leading-10 mt-20">Get started</button>
  <Image className="mx-auto my-auto" alt="alt" width={900} height={600} priority={true} src={"https://media.soroosh.online/sliders/images/iphone14-sorooshads-black_VicBJyp.png"}/>
  <h1 className="font-extrabold text-5xl bg-slate-50 mx-auto my-auto leading-10 p-8 text-center mt-30">MANAGE YOUR CAMPAIGNS</h1>
  <p className="gap-14 items-center text-center text-xl">A smooth and professional platform for creating all kinds of advertising campaigns available on Android,Ios and the web</p>
  <button className=" type=submit justify-center items-center border-2 rounded-xl border-orange-600  text-center font-extrabold ml-96 my-auto text-xl w-80 h-20 leading-10 mt-20">Download apps</button>
  <Image className="mx-auto my-auto" alt="alt" width={900} height={600} priority={true} src={"https://media.soroosh.online/sliders/images/iphone14-sorooshads-campaign-budget-black.png"}/>
  <h1 className="font-extrabold text-5xl bg-slate-50 mx-auto my-auto leading-10 p-8 text-center mt-30">PAY WITH SST TOKEN</h1>
  <p className="gap-14 items-center text-center text-xl">Smart estimation of campaign cost and easy and free-free payment using SST token (Soroosh native token) </p>
  <button className=" type=submit justify-center items-center border-2 rounded-xl border-orange-600  text-center font-extrabold ml-96 my-auto text-2xl w-80 h-20 leading-10 mt-20">Get started</button>
  <div className="flex-col container items-center m-auto p-auto justify-center gap-70 ">
  <Image className="mx-auto my-auto mt-40" alt="alt" width={900} height={600} priority={true} src={"https://soroosh.app/static/assets/img/ads-video.png"}/>
    <div className="flex-col items-center leading-10">
<h1 className="font-extrabold text-5xl bg-slate-50 mx-auto my-auto leading-10 p-8 text-center">BECOME OUR PARTNER</h1>
<p className="gap-14 items-center text-center text-xl">If you are the owner of an active media,community or platform with significant users in the field of technology,cryptocurrency and blockchain,you can join Soroosh ads partnership program and get your desired attention</p>
</div>
<button className=" type=submit container justify-center items-center border-2 border-orange-600 bg-orange-600 text-center font-extrabold  mx-auto my-auto text-4xl w-81 h-20 leading-10 mt-20">JOIN US</button>
  </div>
</div>
<div>
  <h1 className="font-extrabold text-5xl bg-slate-50 mx-auto my-auto mt-56 leading-10 p-8 text-center">UPDATES & NEWS</h1>
  <Link className="" href="https://soroosh.app/en/blog/7/soroosh-ads-is-almost-here">
  <Image className="mx-auto my-auto mb-28 transition-all duration-500 hover:bg-zinc-600 mt-16" alt="alt" width={900} height={600} priority={true} src={"https://media.soroosh.online/blog/media/image/soroosh-ads-is-almost-here_blog__image_SuZfK0t.png"}/>
  </Link>
  <Link className="justify-end ml-28 text-2xl" href="https://soroosh.app/en/blog">see all blogs..</Link>
</div>
<h1  className="font-extrabold text-5xl bg-slate-50 mx-auto my-auto mt-56 leading-10 p-8 text-center">PARTNERS & CUSTOMERS</h1>
  <div className="flex justify-center items-center mx-auto mt-16 mb-96">
  <Image className=""width={200} height={100} alt="alt" src="https://soroosh.app/static/assets/img/brand/BitMart%20(2).png"/>
  <Image className=""width={200} height={100} alt="alt" src="https://soroosh.app/static/assets/img/brand/BSC%20(2).png" />
  <Image className=""width={200} height={100} alt="alt" src="https://soroosh.app/static/assets/img/brand/chainlink.png" />
  <Image className=""width={200} height={100} alt="alt" src="https://soroosh.app/static/assets/img/brand/TensorFlow%20(2).png" />
  <Image className=""width={200} height={100} alt="alt" src="https://soroosh.app/static/assets/img/brand/WEB3%20(2).png"/>
  </div>
  <div>
    <h1 className="font-extrabold justify-center text-5xl bg-slate-50 mx-auto my-auto leading-10 p-8 text-center">Do you have a Dapps or Business?</h1>
    <p className="gap-14 justify-center items-center text-center text-xl mb-56">If you want to introduce your products and services to thousands of active users in the field of blockchain,cryptocurrencies,NFTs and technology,Soroosh Ads is the best solution.</p>
  </div>
  <div>
  <Image className="mx-auto my-auto mt-40" alt="alt" width={900} height={600} priority={true} src={"https://media.soroosh.online/sliders/images/iPhone_13_mini_2_YwnS1uT.png"}/> 
  <h1 className="font-extrabold justify-center text-5xl bg-slate-50 mx-auto my-auto leading-10 p-8 text-center ">AVAILABLE ON YOUR DEVICES</h1>
  <p className="gap-14 justify-center items-center text-center text-xl mb-56">Soroosh Ads is available on all devicess.Create and manage your campaigns anytime,anywhere.</p>
  </div>
  <div className="flex justify-center items-center mx-auto mt-16 mb-40">
  <Image className="mr-20"width={150} height={100} alt="alt" src="https://soroosh.app/static/assets/img/apple-logo.png"/>
  <Image className="mr-20"width={150} height={100} alt="alt" src="https://soroosh.app/static/assets/img/google-play.png" />
  <Image className="mr-20"width={150} height={100} alt="alt" src="https://soroosh.app/static/assets/img/notebook%201.png"/>
  </div>
  <Link className="justify-end ml-28 text-2xl" href="https://soroosh.app/en">Back To Home..</Link>
  </div>
)
}
export default Home

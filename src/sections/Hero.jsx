import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import ShopButton from "../components/ShopButton";
import { shoes, statistics } from "../constants";

const Hero = () => {

    const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

    return (
        <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
            <p className="text-xl font-montserrat text-emerald-500 bg-emerald-50 rounded-lg px-4 py-2">Our Winter Collection</p>

                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap rounded-lg relative z-10 pr-10">The New Arrival</span>
                    <br />
                    <span className="text-emerald-500 inline-block mt-3">Stylish</span> Shoes
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish new arrivals, quality comfort, and innovation for your active life.</p>
                <ShopButton label="Shop now" iconURL={arrowRight} />
                <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-12 xl:gap-16">
                    {statistics.map((stat) => <div key={stat.label}>
                        <p className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl font-palanquin font-bold">{stat.value}</p>
                        <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                    </div>)}
                </div>
            </div>
            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-emerald-100 bg-hero bg-cover bg-center">
                <img src={bigShoeImage} alt="shoe collection" width={610} height={500} className="object-contain relative z-10" />
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((shoe) => <div key={shoe.thumbnail}><ShoeCard imgURL={shoe} changeBigShoeImage={(shoe) => { setBigShoeImage(shoe) }} bigShoeImage={bigShoeImage} /></div>)}
                </div>
            </div>
        </section>
    )
}

export default Hero;
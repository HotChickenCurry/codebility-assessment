import CardSlider from "./components/ui/card-slides";
import ArticleSection from "./components/ui/article-section";

export default function Home(){
    return (
    <>
    <div className="flex flex-col rounded-xl md:rounded-2xl overflow-hidden mx-2">
        <div className="bg-purple-hero w-full p-4 flex justify-center">
            <input className=" bg-white hover:bg-purple-3 transition-colors duration-200 outline-none ps-3 md:ps-6 w-3xl caret-purple-2 text-xxs md:text-xs py-2 rounded-l-full" placeholder="Search over 250 gift card brands" type="text" />
            <button id="search">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
        <div className="md:relative md:min-h-[25rem] bg-purple-hero flex pb-5">
            <div className="md:min-w-[50rem] mx-auto">

                <div className="md:relative text-white z-10 md:pt-15 px-5 md:px-0">
                    <h1 className="text-sm md:text-3xl tracking-tight">GIFTING MADE EASIER</h1>
                    <h2 className="text-2xl md:text-5xl md:leading-16 font-semibold">
                        Buy A Gift Card,<span className="block">Get Cash Back Rewards</span>
                    </h2>
                    <button id="cta" className="font-poppins uppercase">download now</button>

                </div>
            </div>
            <img className="right-0 hidden md:block absolute z-0 h-full" src="/hero.png" alt="hero" />
        </div>

    </div>

    <div className="max-w-[57rem] mx-auto space-y-4">
        <ArticleSection
            heading="Send A Gift Card and"
            subheading=" Collect Rewards"
            description="Moola provides unbeatable deals on the gift cards you love. Buy for a friend or better yet, for yourself and collect rewards. With Moola, giving the perfect gift and saving money on the brands you love has never been easier or more convenient. Shop over 250 brands across Canada."
        />
        <CardSlider />
    </div>

    <div className="bg-purple-3 rounded-2xl drop-shadow-sm md:max-w-[57rem] space-y-2 mx-auto p-5 pt-8 md:p-10 md:px-24 text-center my-10">
        <h1 className="text-lg md:text-2xl leading-5 md:leading-normal font-semibold text-purple-dark">Virtual Gifting With A Personal Touch</h1>
        <p className="text-xxs md:text-xs max-w-lg mx-auto text-pretty">You can't always be there in person for special celebrations, but you can always send your regards and congratulations through email or text. <span className="italic">It's the thought that counts!!</span> Through Moola, you can send gifts from big and niche brands to your loved ones instantly.</p>

        <div className="md:grid grid-cols-[1fr_auto_1fr] place-items-center md:text-left mt-5">
            <div className="space-y-2 md:space-y-4">
                <h2 className="text-purple-dark font-semibold leading-4">Hassle-free <span className="block">long distance gift giving</span></h2>
                <p className="text-xxs md:text-xs">Say goodbye to the stress of finding the perfect gift and having it arrive on-time. With Moola, you can easily search, purchase and send digital gift cards in less than 1 minute.</p>
            </div>

            <img className="w-72 h-auto md:p-0 py-5" src="/attachment.gif" alt="attachment" />

            <div className="space-y-2 md:space-y-4">
                <h2 className="text-purple-dark font-semibold leading-4">Monitor gift delivery as if
                <span className="block">you're there</span>
                </h2>
                <p className="text-xxs md:text-xs">Stop questioning if a recipient has received your gift. Track gift card delivery and open rates on the Moola App.</p>
            </div>
        </div>
    </div>
    </>
    );
}
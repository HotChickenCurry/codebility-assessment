export default function Footer() {
    return (
        <footer className="bg-purple-dark text-white text-xxs">
            <div className="max-w-[57rem] mx-auto py-4 md:flex justify-between items-baseline drop-shadow-sm px-2 space-y-4 md:space-y-0">
                <div className="flex md:block justify-center space-x-4 md:space-x-8">
                    <span><span className="hidden md:inline">Accepted</span> Payment Methods</span>
                    <img className="inline" src="/visa.svg" alt="visa" />
                    <img className="inline" src="/mastercard.svg" alt="mastercard" />
                    <img className="inline" src="/discover.svg" alt="discover" />
                </div>

                <div className="flex items-baseline justify-center space-x-2">
                    <span> <img className="inline w-3 mx-2" src="/lock.svg" alt="lock" /> Payments Powered by</span>
                    <img className="w-15" src="/moneris.svg" alt="moneris" />
                </div>
            </div>

            <div className="bg-purple px-4 md:p-0">
                <ul className="max-w-[57rem] mx-auto grid grid-rows-5 md:grid-rows-1 md:grid-cols-5 justify-items-center items-center pt-5 md:pt-10 text-center gap-4 font-semibold text-xs">
                    <li>
                        <img className="w-24 object-contain" src="/Logo_Desktop_white.svg" alt="Logo_Desktop_white" />
                    </li>
                    <li>
                        <a className="!text-white !font-medium underline">Privacy Policy</a>
                    </li>
                    <li>
                        <a className="!text-white !font-medium underline">Terms & Conditions</a>
                    </li>
                    <li>
                        <a className="!text-white !font-medium underline">Help Center</a>
                    </li>
                    <li>
                        <a className="!text-white !font-medium underline">Contact Us</a>
                    </li>
                </ul>
                <div className="flex justify-center items-center space-x-5 my-5 md:my-10">
                    <i className="text-sm md:text-lg fa-brands fa-instagram"></i>
                    <i className="text-sm md:text-lg fa-brands fa-twitter"></i>
                    <i className="text-sm md:text-lg fa-brands fa-facebook-f"></i>
                    <i className="text-sm md:text-lg fa-brands fa-youtube"></i>
                    <i className="text-sm md:text-lg fa-brands fa-linkedin"></i>
                </div>
                <p className="max-w-[42rem] text-medium text-[0.50rem] md:text-xxs text-center mx-auto pb-8">Designated trademarks and brands are the property of their respective owners. Moola Inc. and its products are not affiliated or endorsed by such owners. Use of this (website/app) constitutes acceptance of Moola Inc. Privacy Policy and Terms of Use. Copyright © 2025 Moola Inc. All rights reserved.</p>
            </div>
            <p className="bg-purple-2 text-xxs text-center py-4">Copyright © 2025 Moola Inc. All rights reserved.</p>

        </footer>        
    );
}



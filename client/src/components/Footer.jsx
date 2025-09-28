import { ChevronRight, Mail, MapPin, Phone } from "lucide-react"
import Photo1 from '../assets/phot-gallary-1.png'
import Photo2 from '../assets/phot-gallary-2.png'
import Photo3 from '../assets/photo-gallary-3.png'
import Photo4 from '../assets/phot-gallary-4.png'
import Photo5 from '../assets/photo-gallary-5.png'
import Photo6 from '../assets/photo-gallary-6.jpg'

const Footer = () => {
    return (
        <div className='mt-12 p-4 pt-12 bg-[#103741] text-gray-400 text-shadow-lg'>
            <div className='py-12'>
                <div className='flex flex-col md:flex-row justify-center gap-8 text-gray-200'>

                    <div className="max-w-xl">
                        <h3 className='mb-4 text-2xl font-bold !text-white '>Get In Touch</h3>
                        <p className='mb-2'><MapPin className="inline-block w-4 h-4 " /> &nbsp;No. 204/206, Attibele Road, HCF Post, Mathigiri Cross Road, Near RTO Office, opp. Kutty's Frozen Food, Mathigiri, Tamil Nadu 635110</p>
                        <p className='mb-2'><MapPin className="inline w-4 h-4" /> &nbsp;Plot No.20, Door Mo.2- 724,MM Nagar Opp Sree Collections and Milk ATM Mookandapalli, Hosur, Tamil Nadu 635126</p>
                        <p className='mb-2'><Phone className="inline w-4 h-4" /> &nbsp;07708099799</p>
                        <p className='mb-2'><Mail className="inline w-4 h-4 " /> &nbsp;timekidsmathigiri@gmail.com</p>
                        <div className='pt-2 flex'>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                        </div>
                    </div>

                    <div className="w-xs">
                        <h3 className='mb-4 text-2xl font-bold !text-white'>Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="flex items-center hover:text-red-500 transition-transform duration-400 hover:scale-102"><ChevronRight className="w-4 h-4 font-bold" />&nbsp;About Us</a></li>
                            <li><a href="#" className="flex items-center hover:text-red-500 transition-transform duration-400 hover:scale-102"><ChevronRight className="w-4 h-4 font-bold" />&nbsp;Contact Us</a></li>
                            <li><a href="#" className="flex items-center hover:text-red-500 transition-transform duration-400 hover:scale-102"><ChevronRight className="w-4 h-4 font-bold" />&nbsp;Our Programs</a></li>
                            <li><a href="#" className="flex items-center hover:text-red-500 transition-transform duration-400 hover:scale-102"><ChevronRight className="w-4 h-4 font-bold" />&nbsp;Our Curriculum</a></li>
                            <li><a href="#" className="flex items-center hover:text-red-500 transition-transform duration-400 hover:scale-102"><ChevronRight className="w-4 h-4 font-bold" />&nbsp;Our Media</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='mb-4 text-2xl font-bold  !text-white'>Photo Gallary</h3>
                        <div className="pt-2 grid grid-cols-3 gap-2 w-fit">
                            <div className="bg-white p-1 rounded-xl w-fit">
                                <img src={Photo1} alt="" className="w-24 h-18 rounded-xl object-cover" />
                            </div>
                            <div className="bg-white p-1 rounded-xl w-fit">
                                <img src={Photo2} alt="" className="w-24 h-18 rounded-xl object-cover"/>
                            </div>
                            <div className="bg-white p-1 rounded-xl w-fit">
                                <img src={Photo3} alt="" className="w-24 h-18 rounded-xl object-cover" />
                            </div>
                            <div className="bg-white p-1 rounded-xl w-fit">
                                <img src={Photo4} alt="" className="w-24 h-18 rounded-xl object-cover" />
                            </div>
                            <div className="bg-white p-1 rounded-xl w-fit">
                                <img src={Photo5} alt="" className="w-24 h-18 rounded-xl object-cover" />
                            </div>
                            <div className="bg-white p-1 rounded-xl w-fit">
                                <img src={Photo6} alt="" className="w-24 h-18 rounded-xl object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t-1 border-t-gray-500 mx-8">
                <div className='flex my-5'>
                    <span className="mr-1">©</span>
                    <span className='text-white pb-6 underline underline-offset-8 mr-1'>Time Kids,</span>
                    <span>All Right Reserved.</span>
                </div>
            </div>

        </div>
    )
}

export default Footer
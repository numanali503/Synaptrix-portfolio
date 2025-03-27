import React from "react";
import under from '../../assets/needle-underline.svg'
import underline from '../../assets/under.svg'
import { Link } from "react-router-dom";
import jquery from '../../assets/jquery.svg'
import c from '../../assets/c.svg'
import net from '../../assets/net.svg'
import java from '../../assets/java.svg'
import oracle from '../../assets/apex.svg'
import intel from '../../assets/intelli.svg'

function DesktopDev() {

    return (
        <>
            <div className="relative overflow-hidden py-20 flex items-center justify-center">
                <div aria-hidden="true" className="absolute -top-36 left-1/2 -translate-x-1/2 flex">
                    <div className="bg-gradient-to-r from-yellow-200 to-yellow-100 blur-3xl w-[400px] h-[200px] rotate-[-60deg] -translate-x-20"></div>
                    <div className="bg-gradient-to-tl from-blue-100 via-blue-200 to-blue-100 blur-3xl w-[600px] h-[300px] rounded-full -rotate-12 -translate-x-40"></div>
                    <div className="bg-gradient-to-r from-yellow-200 to-yellow-100 blur-3xl w-[400px] h-[200px] rotate-[-30deg] -translate-x-20"></div>
                    <div className="bg-gradient-to-tl from-blue-100 via-blue-200 to-blue-100 blur-3xl w-[600px] h-[300px] rounded-full -rotate-12 -translate-x-40"></div>
                </div>
                <div className="relative z-10 max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-32 text-center">
                    <div class="flex items-center justify-center w-full flex-wrap gap-4">
                        <Link class="inline-block text- font-medium tracking-tight bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent" to="/">Home</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="8" viewbox="0 0 4 8" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.50225 0.5L0 0.98755L2.95244 4L0.0073503 7.0051L0.50225 7.5L4.00225 4L0.50225 0.5Z" fill="#19191B"></path>
                        </svg>
                        <Link class="inline-block text- font-medium tracking-tight bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent" to="/products">Services</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="8" viewbox="0 0 4 8" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.50225 0.5L0 0.98755L2.95244 4L0.0073503 7.0051L0.50225 7.5L4.00225 4L0.50225 0.5Z" fill="#19191B"></path>
                        </svg>
                        <Link class="inline-block text- font-medium tracking-tight bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent" href="/products/dms">Desktop Developement</Link>
                    </div>
                    <h1 className="my-12 text-3xl text-center font-bold text-gray-800 sm:text-5xl lg:text-6xl">
                        <span className="relative inline-block">
                            <span className="absolute inset-0  bg-second transform -rotate-2 z-0"></span>
                            <span className="relative z-10 font-bold px-2 py-1 text-primary">
                                Desktop Development
                            </span>
                            <img src={under} alt="err" className='absolute' />
                        </span>
                    </h1>
                    <p className="mt-16 text-gray-600 px-12">We specialize in developing eye-catching and functional websites according to your business requirements. Together, our teams of developers and designers work to create websites that are responsive, visually appealing, and user-friendly while also aligning with your brand identity and vision.</p>
                    <button class="relative mt-4 rounded-lg border-2 border-blue-700 bg-primary px-12 py-4 font- text-white transition hover:translate-y-1">
                        <div class="-scale-x-100 absolute left-0 -bottom-10 inline-flex h-10 w-10 -rotate-12 text-blue-700">
                            <svg viewBox="0 0 82 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 21.3963C0.189514 19.1422 0.475057 16.717 0.554355 14.2852C0.582363 13.435 0.32301 12.6326 1.24839 12.1517C1.43863 12.053 1.7169 11.8956 1.85767 11.9661C4.2446 13.1626 6.90906 13.1934 9.41312 13.8814C11.09 14.3423 12.6519 15.089 13.7134 16.5797C13.9251 16.8774 13.9105 17.3427 14 17.7305C13.6228 17.8077 13.2227 18.01 12.8727 17.9421C10.3283 17.4477 7.78825 16.9245 5.25946 16.353C4.46612 16.1737 4.32244 16.4862 4.22859 17.1961C4.0118 18.8342 3.66769 20.4541 3.43198 22.0899C3.33086 22.7891 3.36905 23.509 3.35123 24.2197C3.34977 24.2791 3.44107 24.3474 3.43052 24.3989C3.32213 24.9318 3.2712 25.8796 3.07114 25.9142C2.49387 26.0144 1.77655 25.8915 1.25603 25.5961C-0.352473 24.6832 0.143681 23.0129 0 21.3963Z" fill="currentColor" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M33.9279 29.9296C33.9687 30.0252 34.0103 30.1211 34.0512 30.2167L36.776 28.708C36.7189 28.6018 36.6613 28.4961 36.6041 28.3903C35.7123 28.9033 34.8197 29.4166 33.9279 29.9296ZM55.213 27.9357C55.2513 28.0076 55.2895 28.0795 55.3278 28.1513C56.8382 27.5018 58.3486 26.8518 59.8593 26.2019C59.8129 26.092 59.7661 25.9821 59.7197 25.8726C58.2175 26.5602 56.7153 27.2481 55.213 27.9357ZM40.7384 18.9565C40.5279 17.8215 40.3393 16.6815 40.0998 15.5525C39.952 14.8551 39.5106 14.6711 38.8099 14.825C36.6153 15.3082 34.9909 17.2686 34.7963 19.6189C34.584 22.1806 36.0472 23.7605 37.8517 25.1395C37.9927 25.2475 38.5155 25.0604 38.6986 24.8591C40.2045 23.1998 40.6396 21.163 40.7384 18.9565ZM47.8846 27.7513C53.9169 27.9699 58.9887 25.6539 63.5351 21.8258C68.7108 17.4677 72.7252 12.1435 76.2413 6.39113C77.3061 4.64903 78.3271 2.87833 79.4328 1.16371C79.7291 0.70344 80.2137 0.234515 80.706 0.0824723C81.0457 -0.0225277 81.5473 0.410268 81.9765 0.603333C81.8444 0.859247 81.7237 1.12306 81.5774 1.37032C81.1827 2.03645 80.7194 2.66758 80.3867 3.36306C79.3033 5.6264 78.3041 7.93113 77.1981 10.1824C76.4525 11.6998 75.639 13.1905 74.7457 14.6225C74.1814 15.5269 73.3694 16.269 72.7471 17.1414C71.7606 18.5237 70.9604 20.0611 69.8622 21.3395C68.1531 23.33 66.4111 25.3434 64.4139 27.0174C59.9989 30.718 54.9038 32.5263 49.0801 32.1605C46.3701 31.9904 43.6835 31.9283 41.122 30.8655C40.842 30.7492 40.3185 30.9333 40.0448 31.1527C37.2899 33.3656 34.1239 34.5277 30.6632 34.7456C28.0734 34.909 25.4198 35.1171 22.8828 34.7219C20.7546 34.3908 18.675 33.3742 16.7198 32.3694C14.9819 31.4756 13.3686 30.2773 11.8348 29.0418C9.65017 27.2812 8.09522 24.9795 7.06601 22.3556C6.91824 21.9789 7.17257 21.2819 7.46774 20.9267C7.79559 20.5315 8.26675 20.7212 8.80326 20.9647C10.4826 21.7271 11.1635 23.3172 12.0776 24.6916C13.809 27.2959 16.297 28.8333 19.144 29.6515C24.0015 31.0477 28.8342 30.4606 33.5239 28.7422C36.0572 27.8134 36.0323 27.708 34.1863 25.8643C31.7566 23.438 30.4122 20.5417 30.5982 17.0518C30.8143 13.0012 34.1347 10.1538 38.1338 10.4515C39.3892 10.5452 40.2439 11.3239 41.0648 12.1255C42.9294 13.9466 43.9712 16.2194 44.3347 18.7977C44.7112 21.4648 44.7806 24.1113 43.5286 26.6189C43.2264 27.2244 43.5171 27.489 44.1483 27.5187C45.3947 27.5778 46.6393 27.6719 47.8846 27.7513Z" fill="currentColor" />
                            </svg>
                        </div>
                        Book a free Consultation
                    </button>
                </div>
            </div>

            <div className='bg-gradient-to-tl from-blue-100 to-violet-100 py-20'>
                <div className='max-w-[80rem] px-8 mx-auto flex flex-col items-start justify-center '>
                    <h1 className="mt-5 text-3xl text-center font-bold text-gray-800">
                        <span className="relative inline-block text-6xl">
                            <span className="absolute inset-0  bg-primary transform -rotate-2 z-0"></span>
                            <span className="relative z-10 font-bold px-2 py-1 text-second">
                                Snapshot
                            </span>
                            <img src={underline} alt="err" className='absolute' />
                        </span>
                        {""}  Of Our Web Development Process
                    </h1>

                    <div className="mt-12 space-y-12 w-full">
                        <div class="flex w-full">
                            <div class="w-1/3 flex items-center relative">
                                <span class="absolute text-7xl font-bold text-slate-300 left-2">1.</span>
                                <span class="font-bold text-2xl text-blue-600 ml- relative z-10">Planning</span>
                            </div>
                            <div class="w-2/3 py-2 px-6 ml-6 border-l-2 border-slate-300">
                                <p class="text-gray-600 text-xl">
                                    Understanding the client's requirements and providing a clear structure of scope, deliverables, processes, budgets, tech stacks, and timelines.
                                </p>
                            </div>
                        </div>

                        <div class="flex w-full">
                            <div class="w-1/3 flex items-center relative">
                                <span class="absolute text-7xl font-bold text-slate-300 left-2">2.</span>
                                <span class="font-bold text-2xl text-blue-600 relative z-10">Design</span>
                            </div>
                            <div class="w-2/3 py-2 px-6 ml-6 border-l-2 border-slate-300">
                                <p class="text-gray-600 text-xl">
                                    Creating wireframes, mockups, and prototypes to demonstrate how the website will look.
                                </p>
                            </div>
                        </div>

                        <div class="flex w-full">
                            <div class="w-1/3 flex items-center relative">
                                <span class="absolute text-7xl font-bold text-slate-300 left-2">3.</span>
                                <span class="font-bold text-2xl text-blue-600  relative z-10">Prototype</span>
                            </div>
                            <div class="w-2/3 py-2 px-6 ml-6 border-l-2 border-slate-300">
                                <p class="text-gray-600 text-xl">
                                    Save expenses and eliminate risks by working with our focused experts who moves smoothly through various iterations and launches high-functioning prototypes via the MVP development approach.
                                </p>
                            </div>
                        </div>

                        <div class="flex w-full">
                            <div class="w-1/3 flex items-center relative">
                                <span class="absolute text-7xl font-bold text-slate-300 left-2">4.</span>
                                <span class="font-bold text-2xl text-blue-600  relative z-10">Development</span>
                            </div>
                            <div class="w-2/3 py-2 px-6 ml-6 border-l-2 border-slate-300">
                                <p class="text-gray-600 text-xl">
                                    Developing safe, scalable, accessible, and custom solutions with our bespoke and specialized SCRUM team – tailored to your firm’s vision and market validation. Creating the front-end, back-end, and database components of the website, such as coding and building web pages.
                                </p>
                            </div>
                        </div>

                        <div class="flex w-full">
                            <div class="w-1/3 flex items-center relative">
                                <span class="absolute text-7xl font-bold text-slate-300 left-2">5.</span>
                                <span class="font-bold text-2xl text-blue-600  relative z-10">Testing</span>
                            </div>
                            <div class="w-2/3 py-2 px-6 ml-6 border-l-2 border-slate-300">
                                <p class="text-gray-600 text-xl">
                                    Making a website functional and free of any errors or bugs to ensure its performance, security, and user experience.
                                </p>
                            </div>
                        </div>

                        <div class="flex w-full">
                            <div class="w-1/3 flex items-center relative">
                                <span class="absolute text-7xl font-bold text-slate-300 left-2">6.</span>
                                <span class="font-bold text-2xl text-blue-600  relative z-10">Deployment</span>
                            </div>
                            <div class="w-2/3 py-2 px-6 ml-6 border-l-2 border-slate-300">
                                <p class="text-gray-600 text-xl">
                                    Transferring the website files to the server and configuring the server settings to make them available to the public.
                                </p>
                            </div>
                        </div>

                        <div class="flex w-full">
                            <div class="w-1/3 flex items-center relative">
                                <span class="absolute text-7xl font-bold text-slate-300 left-2">7.</span>
                                <span class="font-bold text-2xl text-blue-600  relative z-10">Support & Maintenance</span>
                            </div>
                            <div class="w-2/3 py-2 px-6 ml-6 border-l-2 border-slate-300">
                                <p class="text-gray-600 text-xl">
                                    Monitoring website traffic, updating, and performing regular backups and security scans to ensure the website is up-to-date, secure, and free of bugs.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='max-w-[80rem] px-8 mx-auto flex flex-col items-center justify-center py-20 '>
                <h1 className="mt-5 text-3xl text-center font-bold text-gray-800">
                    <span className="relative inline-block text-6xl">
                        <span className="absolute inset-0  bg-primary transform -rotate-2 z-0"></span>
                        <span className="relative z-10 font-bold px-2 py-1 text-second">
                            Technologies
                        </span>
                        <img src={underline} alt="err" className='absolute' />
                    </span>
                </h1>

                <div className="mt-12 space-y-12 w-full">
                    <div className='flex flex-wrap justify-center gap-4 mt-16 max-w-6xl mx-auto'>
                        <div className='text-primary text-xl font-semibold bg-slate-50 border boder-slate-100 flex items-center justify-center py-4 px-8 rounded-xl'>
                            <img src={c} alt="err" className="w-32" />
                        </div>
                        <div className='text-primary text-xl font-semibold bg-slate-50 border boder-slate-100 flex items-center justify-center py-4 px-8 rounded-xl'>
                            <img src={net} alt="err" className="w-32" />
                        </div>
                        <div className='text-primary text-xl font-semibold bg-slate-50 border boder-slate-100 flex items-center justify-center py-4 px-8 rounded-xl'>
                            <img src={java} alt="err" className="w-32" />
                        </div>
                        <div className='text-primary text-xl font-semibold bg-slate-50 border boder-slate-100 py-4 px-8 rounded-xl'>
                            <img src={oracle} alt="err" className="w-32" />
                        </div>
                        <div className='text-primary text-xl font-semibold bg-slate-50 border boder-slate-100 flex items-center justify-center py-4 px-8 rounded-xl'>
                            <img src={intel} alt="err" className="w-32" />
                        </div>
                        <div className='text-primary text-xl font-semibold bg-slate-50 border boder-slate-100 py-4 px-8 rounded-xl'>
                            <img src={jquery} alt="err" className="w-32" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default DesktopDev;

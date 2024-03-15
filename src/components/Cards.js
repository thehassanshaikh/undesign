import React from 'react'

const n = 12;

function Cards() {
    return (
        <section className='flex justify-center bg-slate-50 py-4'>
            {/* <div className='flex justify-evenly flex-wrap w-4/5 sm:w-3/5 md:2/3 gap-4'> */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-col-6 gap-5'>
               {
                [...Array(12)].map((_,index)=> (
                    <div key={index}>
                    <article
                        className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                        <div className="rounded-[10px] bg-white p-2  sm:p-6 text-center">
                            
                                <img className='w-32' src='https://canvatemplates.com/wp-content/uploads/2023/06/Canva-Logo-Transparent-1024x576.png' />
                        
                            <a href="#">
                                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                    Canva
                                </h3>
                            </a>
                            <div className="mt-4 flex flex-wrap gap-1">
                                <span
                                    className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600" >
                                    Snippet
                                </span>

                                <span
                                    className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                                    JavaScript
                                </span>
                            </div>
                        </div>
                    </article>
                </div>
                ))
               }
                
               
            </div>
        </section>
    )
}

export default Cards

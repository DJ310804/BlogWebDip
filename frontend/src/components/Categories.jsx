import React from 'react'
import url1 from '../assets/imgs/cat/3.png'
import url2 from '../assets/imgs/cat/4.png'
import url3 from '../assets/imgs/cat/5.png'
import url4 from '../assets/imgs/cat/6.png'
import url5 from '../assets/imgs/cat/7.png'
import url6 from '../assets/imgs/cat/8.png'

function Categories() {
  return (
    <div className="container mx-auto p-4 mt-20 mb-20">
      <div className="sub-heading mb-8">
        <h1 className="text-6xl font-bold flex justify-center items-center ">Popular Categories</h1>
      </div>

      <div className="categories flex flex-wrap justify-center gap-5">
        {[ 
          { url: url1, name: 'Fashion' },
          { url: url2, name: 'Technology' },
          { url: url3, name: 'Travel' },
          { url: url4, name: 'LifeStyle' },
          { url: url5, name: 'Sports' },
          { url: url6, name: 'Finance' },
        ].map((category, index) => ( 
            <div
                key={index}
                className="catego w-40 h-54 rounded shadow-md transition-all duration-500 ease-out"
                >
                <div className="image">
                    <img src={category.url} alt="" className="w-full h-36 object-cover" />
                </div>
                <div className="catego-name text-lg font-medium mt-2  flex justify-center items-center">
                    {category.name}
                </div>
            </div>

        ))}
      </div>
    </div>
  )
}

export default Categories
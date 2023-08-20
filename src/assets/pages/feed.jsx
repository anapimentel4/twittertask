import React from 'react'
import {MoreHorizontal, Heart, Layers, Repeat,BarChart2, MessageCircle, Share } from 'react-feather'


 const Feed = () => {
  return (
    <div className='mt-7 container mx-auto lg:w-[800px] md:w-full border border-gray-600 shadow-md rounded-lg custom-box  p-8  '>
     <div className='flex p-4'>
        <img 
        className='w-12 h-12 rounded-full object-cover'
        src="https://lh3.googleusercontent.com/pw/AIL4fc-sNCIAKgCuYW0Ix8icj0ytKtNQIg56uZu2VQ5UAdgHah3QqxLczxFM0So7VnDUoe7DsB8SAp__GIfcE8IE60VPmQyTg67d-UF2LQmsrcI6DqT5GNFqH0PYxdeISe9-yLTnyNU52APnOAy42q7shFg9PijO0W6_ICbqiO9QL5ywwvsmB5vHtiO5r7NkMDG9qWJPOSnz1lJHz866pd4h_Io-ad-05C87xqXV0mA52fwCm_EOF3VTqAON7TOaKWBNsJ83xU8NAxEyXTp9yEfifB7BB_eYYqpCQyodJk0elUaAwfsE4f2Bw1pbJqvh2GY9cEc7iqT599OtWLLpRzg8yW5pp671_GnmWjtykd0VKGM5HlogDp3W3fcSqUqsbttyYpKqAZt7oas3KgIi121CNaAF2xgm3lAqAD4Rv5lZgNFw0-eAybxm1YIqYKJLR8GPEaUopGxizQtYjMY9-3qwEA4RMReBbUCEoatd3Rq8AgFt4K4vujN7EPPNPmQdQ6H2eH_nlVi9kF_RubmAm-2_7b0MdHmvCq-8gulAEgpA2A-MLnvRAMuHMSZCzX55jd3CYncvPHzPeJHdX2iBapmqy1w6KVjDb5dyD_JcLcTw7EVpE5-iZOEAI38MlXS-oHgiPpLyc4gLww9cp2DbyMWhFSfAsc3IVHpYc7cZagmDCMiWsfcQIa9t2WzlxoCccy0F3_jllu-lpbz4XgxGHGumYoJxPzVhmfbYpx9DvPfjAhDvpZN8rE1wMXkvWRSTj45KMfJphwNyVkX7w8LymctY66TLk5QH3KvXrIG54ppqc83FPCoruRqGL6fhJAQfDyUO5DLt_UuH0OS4Re2QsBMOJvooCeUZwiH-sXrZlWLJCp9Tp2COdjyuh-hVQupdY7DGSDSjrhY8K4SCOZH9GHqB-90pciSI1FxdBVzttpwqsk2ZoKR6iM4=w1001-h963-s-no?authuser=0"/>
      
       <div className='w-full x-2'>

            <div className='flex justify-between gap-2 items-center'>

            <div className='flex gap-2 items-center'>
               <strong>Ana Pimentel</strong>

                <p className='text-[rgba(97,97,97,1)]'>@anapiment</p>
                <p className='text-[rgba(97,97,97,1)]'> 3 agosto 2021</p> 
                
                </div>
                <div className='felx justify-between gap-2'>
                  <MoreHorizontal/> 
                  </div>  
            </div>

             {/* thread body*/}

             <div className='mt-8 text-lg'>     
                   <p className='mb-4 '>I have nothing to say but it's necessary to fill up some spaces one here &#128518;. </p>
                    
                    <p className='mb-4 ' > Oh Hold on!! I do have something to say...</p>
                    <p> If you read this, Would you be able to provide me with some feedback on my proyect? 😅&#128517; </p>
                    
            </div>
            
            <div className=' flex gap-20 py-12'>
            <div className='flex items-center gap-1'>
                <MessageCircle />
                    <span className='text-gray-500'>23</span> 
                 </div>

         <div className='flex items-center gap-1'>
                < Layers/>
         </div>
              <div className='flex items-center gap-1'>
              < Repeat/>
                <span className='text-gray-500'>3</span>
         </div>
         <div className='flex items-center gap-1'>
              < Heart/>
                <span className='text-gray-500'>324</span>
         </div>
         
         <div className='flex items-center gap-1'>
         <BarChart2/>
         </div>
         <div className='flex items-center gap-1'>
                <Share/>
         </div>
                
                
             
            </div>
        </div>
      
     </div>
    </div>
  )
}


export default Feed
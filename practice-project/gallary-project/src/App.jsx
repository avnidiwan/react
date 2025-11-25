import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


const App = () => {
  let [data, setdata] = useState([])
  let [page, setPage] = useState(1)



  useEffect(() => {
    let fetchData = async function () {
      let response = await axios.get(`https://picsum.photos/v2/list?page=${page+1}&limit=12`)
      console.log(response)
      setdata(response.data)
    }
    fetchData()
  }, [page])

  return (
    <>
      <div className='bg-gray-200 h-auto w-full flex flex-wrap gap-3' >

        {
          data.map((a, b) => {
            return (
              <div className="h-60 w-50 border-4 flex flex-col items-center ">
                <div className="h-[80%] w-full" key={b}>   <img className='object-cover h-full w-full' src={a.download_url}  loading="lazy"></img></div>
                <h4 className='text-lg p-2'>{a.author}</h4>
              </div>
            )
          })
        }

        <div className="flex w-full justify-center gap-3 ">
          <button className='w-20 h-10 bg-gray-400 rounded-xl text-md' onClick={() => {
            if (page > 1) setPage(page - 1)
            else setPage(1)
          }}>prev</button>
          <span className='w-10 text-2xl text-center'>{page}</span>
          <button className='w-20 h-10 bg-gray-400 rounded-xl font-md' onClick={() => setPage(page + 1)}>next</button>
        </div>
      </div>
    </>
  )
}

export default App

















// const App = () => {
//   let [data, setdata] = useState([])


//   const apiData = async function () {
//     let response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
//     console.log(response)
//     setdata(response.data)

//   }

//   apiData()

//   return (
//     <>
//     <div className='bg-gray-200 h-auto w-full flex flex-wrap gap-3' >

//           {
//          data.map((a, b) => {
//            return (
//            <div className="h-60 w-50 border-4 flex flex-col items-center ">
//            <div className="h-[80%] w-full">  <img className='object-cover h-full' src={a.download_url} key={b}></img></div>
//             <h4>{a.author}</h4>
//            </div>
//            )
//          })
//       }
//     </div>
//     </>
//   )
// }

// export default App

import React from 'react'
import Card from './Card'
import data from '../../datas/appartement.json';



const Cards = () => {  

// const  [data, setData] = useState([])

// useEffect(() => {
//   const url = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"

//   const fetchData = async () => {
//     try {
//       const response = await fetch(url)
//       const json = await response.json()
//       console.log(json);
//     } catch (error) {
//       console.log("error", error);
//     }
//   }

//   fetchData()

// }, [])

  return (
    <div className='cards'>
        {data.map((appart) => (
        <Card key={appart.id} appart={appart} />
      ))}
    </div>
  )
}

export default Cards
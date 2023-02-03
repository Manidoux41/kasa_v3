const Banner = ({imgSource, title}) => {

  return (
    <div className='banner'>
            <h1>{title}</h1>
            <div className="overlay">
                <img src={imgSource} alt="banner" />
            </div>
        </div>
  )
}

export default Banner
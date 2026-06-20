
export const Rating = ({rating}) => {

    let ratingArray = Array(5).fill(false)
    for(let i=0; i<rating; i++ ){
        ratingArray[i]=true
    }

  return (
    <>
    {ratingArray.map((value, ind) => (
        value ? (
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1" key={ind}></i>
        ) : (
            <i className="text-lg bi bi-star text-yellow-500 mr-1" key={ind}></i>
        )
    ))}</>
    
  )
}

import './cardstyle.css';



function Card({imgUrl, text1}){
    return (
        <div className="card">
            <div className="card-img">
                <img src={imgUrl} alt="" />
            </div>
            <div className="card-text">
                <h1>{text1}</h1>
            </div>
        </div>
    )
}
function Card1({imgUrl, text1}){
    return (
        <div className="card1">
            <img src={imgUrl} alt="" />
            <h1>{text1}</h1>
        </div>
    )
}
function Card2({imgUrl, text1, text2, text3}){
    return (
        <div className="card2">
            <img src={imgUrl} alt="" />
            <p className='date'>{text1}</p>
            <h1>{text2}</h1>
            <p className='sen'>{text3}</p>
        </div>
    )
}
function Card3({imgUrl, text1}){
    return (
        <div className="card3">
            <div className="imgcar">
            <img src={imgUrl} alt="" />
            </div>
            <h1>{text1}</h1>
        </div>
    )
}
function Card4({imgUrl, text1}){
    return (
        <div className="card4">
            <div className="imgcar1">
            <img src={imgUrl} alt="" />
            </div>
            <div className="text-card4">
            <p>{text1}</p>
            </div>
        </div>
    )
}
export {Card, Card1, Card2, Card3, Card4}
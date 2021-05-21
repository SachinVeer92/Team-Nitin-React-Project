import { getQueriesForElement } from "@testing-library/dom";

const cardStyle = {
    border: "1px solid green",
    padding:"5px",
    margin:"5px",
    flexBasis:"20%"
}
const imgStyle = {
    height:"150px",
    width:"220px"
}

const Card = ( props ) => {
    return(<>
    <div style={cardStyle}>
      <img src={props.cardData.img} style={imgStyle} />
      <h5 className="card-title">{props.cardData.title}</h5>
      <p className="card-text">{props.cardData.desc }</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </>);
}
export{Card};
import React from "react";

const Mobile = (props) => {
  return (
    <div>
      <img
        src={props.imgSrc}
        alt="pic_here"
      />
      <div>
        <h3>{props.imgTitle}</h3>
        <a
          href={props.imgBuy}
          target="_blank"
        >
          <button> Buy Here</button>
        </a>
      </div>
    </div>
  );
};

function App() {
  return (
    <><Mobile imgSrc="https://m.media-amazon.com/images/I/71tpxtLD0aL._AC_UY218_.jpg" imgTitle="New Apple iPhone 11 (64GB) - Black" imgBuy="https://www.amazon.in/New-Apple-iPhone-11-64GB/dp/B08L8DV7BX/ref=sr_1_1?dchild=1&keywords=iphone&qid=1620869709&sr=8-1" />
      <Mobile imgSrc="https://m.media-amazon.com/images/I/71fVoqRC0wL._AC_UY218_.jpg"
        imgTitle="New Apple iPhone 12 (128GB) - Black"
        imgBuy="https://www.amazon.in/New-Apple-iPhone-12-128GB/dp/B08L5WD9D6/ref=sr_1_1?dchild=1&keywords=iphone+12&qid=1620872982&sr=8-1" />
    </>
  );
}

export default App;
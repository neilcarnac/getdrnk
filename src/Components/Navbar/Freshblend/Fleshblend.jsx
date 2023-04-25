import React, { useState, useEffect } from 'react'
import './Fleshblend.css'

// const Fleshblend = () => {

    // const [copyText, setCopyText] = useState("");
    // const [selectionColor, setSelectionColor] = useState("white");

    // useEffect(() => {
    //     document.addEventListener("copy", handleCopy);
    //     return () => {
    //         document.removeEventListener("copy", handleCopy);
    //     };
    // });

    // const handleCopy = (event) => {
    //     const selectedText = window.getSelection().toString();
    //     if (selectedText) {
    //         setCopyText(selectedText);
    //         setSelectionColor("red");
    //     }
    // };



const Fleshblend = () => {
    useEffect(() => {
      document.addEventListener('selectionchange', handleSelectionChange);
      return () => document.removeEventListener('selectionchange', handleSelectionChange);
    }, []);
  
    const handleSelectionChange = () => {
      const selection = window.getSelection().toString();
      if (selection) {
        document.execCommand('styleWithCSS', false, true);
        document.execCommand('foreColor', false, 'red');
      }
    };

    return (
        <>
            <div className="container">
                <h4 className="freshly" >A FRESHLY BLENDED GUILT-FREE EXPERIENCE</h4>
                <img src="drnkkk.jpg" className='drnkpic' alt="" />
                <div className="three">
                    <div className="boxone">
                        <h3 className="hone"  >fresh produce</h3>
                        <p className="infoone">A farm-to-can
                            experience, made from
                            freshly blended ingredients and curated for guilt-free</p>
                    </div>

                    <div className="boxtwo">
                        <h3 className="htwo">Premium Packaging</h3>
                        <p className="infotwo">A farm-to-can
                            experience, made from
                            freshly blended ingredients and curated for guilt-free</p>
                    </div>
                    <div className="boxthree">
                        <h3 className="hthree">The original collection</h3>
                        <p className="infothree">A farm-to-can
                            experience, made from
                            freshly blended ingredients and curated for guilt-free</p>
                    </div>

                </div>
                <div className="picha">
                    <img src="reddrnk.jpg" className='reddrnk' alt="" />
                </div>
                <div className="box"></div>
                <span className="collection">OUR COLLECTION</span>
                <hr className="line" />
            </div>
        </>
    )
}

export default Fleshblend

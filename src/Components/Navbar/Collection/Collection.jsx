import React from 'react'
import './Collection.css'
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Collection = () => {
    return (
        <>
            <div className="frame">
                <img id="imagi" src="collection.png" alt="" />
                <div className="he">
                    <div className="grad">
                    </div>
                    <h1 className="headers">Want To See Our drnks?</h1>
                    <h2 className="headerstwo">The Collection</h2>

                    <Link
                        variant="button"
                        color="textPrimary"
                        component={RouterLink}
                        to="/OurCollection"

                    >   <button className='butts'>Do Not Click</button>
            </Link>
                </div>

            <hr className="ltwo" />
        </div>
        </>
    )
}

export default Collection

import React from 'react';
import { Link } from "react-router-dom";

const WideCard = (props) => {
    return (
        <div className="post">

            <div className="thumbnail">
                <Link to={"/post/" + props.slug}>
                    <img src={props.imgUrl} alt="" />
                </Link>
            </div>

            <div className="details">
                <div className="vertical-align">
                    <h4 className="title">
                        <Link to={"/post/" + props.slug}>
                            {props.title}
                        </Link>
                    </h4>
                    <p className="excerpt">
                         {props.excerpt}
                    </p>
                </div>
            </div>

        </div>
    );
}

export default WideCard;

// import React from 'react'
// import "../style/service.css"

// export default function Service() {
//     return (
//         <>
//             <div className="contain">
//                 <div className="service">
//                     <h3>Services:-</h3>
//                 </div>
//                 <div className="services">
//                     <div className="row">
//                         <div className="col">
//                             <h6>Fooding</h6>
//                             <p>descreption </p>
//                         </div>
//                         <div className="col">
//                             <h6>Cloth Cleaning</h6>
                         
//                             <p>descreption qacihhiouwe wvebiahbocchbauiwh iebvwiadubwou weubavciuweubwvuibs vwev we ueviipwb wipe vip di w  </p>
//                         </div>
//                         <div className="col">
//                             <h6>Free Wifi</h6>
//                             <p>descreption </p>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col">
//                         <h6>Party</h6>
//                             <p>descreption qacihhiouwe wvebiahbocchbauiwh iebvwiadubwou weubavciuweubwvuibs vwev we ueviipwb wipe vip di w  </p>
//                         </div>
//                         <div className="col"></div>
//                         <div className="col"></div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
      },
      {
        icon: <FaBeer />,
        title: "storages beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="Services :-" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

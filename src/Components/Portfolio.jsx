/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/port.jpg";

const imageAltText = "image with text project";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "MentalAid",
    description:
      "Web App for Therapy Sessions, Live Video Recording, Study Facial Expression, Detailed Analysis using graphs of individual change in emotions with time.",
    url: "https://github.com/kunal-yadav-404/MentalAid",
  },
  {
    title: "LeaseOut",
    description:
      "Community/School/College based Sell, Share, Rent and Donate any product. Using few AWS services and currently running on AWS EC2 instance.",
    url: "http://www.leaseoutapp.com/",
  },
  {
    title: "Restaurant Management System",
    description:
      "Staff Management, Reservation, Order, Feedback, Invoice, NGO Log",
    url: "https://github.com/Sumedha2/E-Ramu",
  },
  {
    title: "Portfolio Site",
    description:
      "My Portfolio Site, Built using ReactJS, HTML, CSS, JavaScript. Hosted using Azure Static Web Apps",
    url: "https://black-pebble-05ed6c410.3.azurestaticapps.net/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

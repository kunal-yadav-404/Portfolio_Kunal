/**
 * Achievement component
 *
 * Space for you to describe more Achievement yourself.
 */

import React from "react";

/**
 * Achievement background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/about_1.png";

const imageAltText = "different shapes in different colors";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Curretly I'm under PwC Salesforce Training Program and I'm a Microsoft Learn Student Ambassador.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate Achievement, or enjoy,
 */
const skillsList = [
  "Own Startup",
  "206 days Streak Leetcode",
  "Youtube Channel",
  "CodeKaze Round 2",
  "HackerRank 5 star C++",
  "Comfest 1st Prize",
];

const CertList = [
    "AWS Certified Cloud Practitoner",
    "Azure Certified Fundamentals",
    "Azure Data Fundamentals",
    "Azure AI Fundamentals",
    "HackerRank C++ Certified",
  ];

/**
 * Use this to give more information Achievement what you are passionate Achievement,
 * how you best work, or even a quote. This will help someone learn more
 * Achievement you on a professional level.
 */
const detailOrQuote =
  "AWS Certified Cloud Practitoner.Azure Certified Fundamentals. Azure Data Fundamentals. Azure AI Fundamentals.";

const Achievement = () => {
  return (
    <section className="padding" id="Achievement">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Achievements</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <h3>Certifications</h3>
        {/* <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p> */}
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {CertList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievement;

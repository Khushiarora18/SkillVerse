import React from "react";

const Page = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "50px" }}>
        Welcome to SkillVerse - Your One Stop Help!
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div style={{ flex: 1 }}>
          <img
            src="img1.png"
            alt="Image 1"
            style={{ height: "70%", maxWidth: "80%", flex: "auto" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flex: 2,
            textAlign: "left",
            marginLeft: "0px",
            fontSize: "25px",
          }}
        >
          <p>
            "Embark on a seamless journey with SkillVerse – Your Ultimate
            Academic Companion! Dive into our gallery for a visual feast of your
            meticulously curated courses. Craft your personalized study path
            effortlessly – just input the subject or course name, and let our
            smart assistant do the rest. And introducing DoubtBot, your 24/7
            query ally, ready to unravel the mysteries and make your learning
            experience smooth and stress-free. SkillVerse: Elevate your
            learning, simplify your prep!"
          </p>
        </div>
      </div>

      {/* img3 covering the full width */}
      <img
        src="img3.png"
        alt="Image 3"
        style={{ width: "100%", marginTop: "10px" }}
      />

      {/* img4 covering the full width */}
      <img
        src="img5.png"
        alt="Image 5"
        style={{ width: "100%", marginTop: "10px" }}
      />

      <footer style={{ marginTop: "40px", fontStyle: "italic" }}>
        We are committed to offering excellence in higher learning! Thank you
        for choosing SkillVerse to elevate your academic journey. Start learning
        today!
      </footer>
    </div>
  );
};

export default Page;

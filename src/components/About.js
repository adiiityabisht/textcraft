import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = ()=> {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <>
      <div>
        <div className="container" style={myStyle}>
          <div className="accordion" id="accordionExample">
            <h1 className="my-3 style">TextCraft 📝✨</h1>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What is textCraft? 🤔
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>TextCraft</strong> is a React application developed as
                  a beginner project to gain hands-on experience with React. It
                  incorporates various essential concepts such as state
                  management using hooks (e.g., useState), routing, props, and
                  the React environment.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Features 🚀
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      String Manipulation: TextCraft offers a range of string
                      manipulation functions, including uppercase and lowercase
                      conversions, inserting new lines, and capitalizing the
                      first letter of each word.
                    </li>
                    <li>
                      Dark Mode UI 🌙: TextCraft provides a user-friendly dark
                      mode interface, offering a visually appealing experience
                      for users who prefer a darker color scheme.
                    </li>
                    <li>
                      Customizable Themes 🌈: Users can select from a variety of
                      themes to personalize the app's appearance and make it
                      more visually engaging.
                    </li>
                    <li>
                      Character and Word Count 🔢: TextCraft provides a
                      character count and word count feature, allowing users to
                      keep track of the length and structure of their text.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Getting Started 🏁
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ol>
                    <strong>
                      To run TextCraft locally, follow these steps:
                    </strong>
                    <li>
                      Clone this repository to your local machine: <br />
                      <strong>
                        git clone https://github.com/your-username/textcraft.git
                      </strong>
                    </li>
                    <li>
                      Navigate to the project directory: <br />
                      <strong>cd textcraft</strong>
                    </li>
                    <li>
                      Install the required dependencies using npm or yarn:{" "}
                      <br />
                      <strong>npm install</strong>
                    </li>
                    <li>
                      Start the development server: npm start Open your browser
                      and visit http://localhost:3000 to access TextCraft.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container my-3">
            <button
              onClick={toggleStyle}
              type="button"
              className="btn btn-primary"
            >
              {btnText}
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}

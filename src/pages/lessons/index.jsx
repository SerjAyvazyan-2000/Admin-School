import React from "react";
import "./style.scss"
import lessons1 from "../../assets/image/lessons1.jpeg"
import lessons2 from "../../assets/image/lessons2.jpeg"
import lessons3 from "../../assets/image/lessons3.jpeg"
import lessons4 from "../../assets/image/lessons4.jpeg"
import lessons5 from "../../assets/image/lessons5.jpeg"


const Lessons = () => {

     return <div  className="school-lessons G-container">
         <div  className="lessons-content-start">

         <div className="lessons-block">
                <div style={{backgroundImage:`url(${lessons1})`}} className="lessons-image"></div>
             <div className="lessons-name">
                 <h2>Media Technology</h2>
                 <p>Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Ma</p>
             </div>
         </div>

         <div className="lessons-block">

             <div style={{backgroundImage:`url(${lessons2})`}} className="lessons-image"></div>

             <div className="lessons-name">
              <h2>Web Development</h2>
                 <p>Download free images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.</p>
             </div>

         </div>
         <div className="lessons-block">


             <div style={{backgroundImage:`url(${lessons3})`}} className="lessons-image"></div>

             <div className="lessons-name">
                    <h2>Social Media</h2>
                 <p>Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.</p>
             </div>

         </div>
         <div className="lessons-block">

             <div style={{backgroundImage:`url(${lessons4})`}} className="lessons-image"></div>

             <div className="lessons-name">
              <h2>Media Streaming</h2>
                 <p>Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.</p>
             </div>
         </div>

         <div className="lessons-block">
             <div style={{backgroundImage:`url(${lessons5})`}} className="lessons-image"></div>

             <div className="lessons-name">
                 <h2>Business World</h2>
                 <p>Quisque cursus augue ut velit dictum, quis volutpat enim blandit. Maecenas a lectus ac ipsum porta.</p>
             </div>

         </div>
     </div>




     </div>
}
export default Lessons
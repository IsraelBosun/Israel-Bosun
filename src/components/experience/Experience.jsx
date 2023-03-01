import React from 'react'
import "./experience.css"
import {BsFillPatchCheckFill} from "react-icons/bs"


const Experience = () => {
  return (
    <div className='section' id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className ="experience__details" >
              <BsFillPatchCheckFill className = "experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className ="experience__details" >
              <BsFillPatchCheckFill className = "experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className ="experience__details" >
              <BsFillPatchCheckFill className = "experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className ="experience__details" >
              <BsFillPatchCheckFill className = "experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className ="experience__details" >
              <BsFillPatchCheckFill  className = "experience__details-icon"/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className ="experience__details" >
              <BsFillPatchCheckFill className = "experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>

        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
        <h3>Other Skills</h3>
          <div className="experience__content">
            <article className ="experience__details" >
              <BsFillPatchCheckFill className = "experience__details-icon" />
              <div>
                <h4>Wordpress</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className ="experience__details" >
              <BsFillPatchCheckFill className = "experience__details-icon" />
              <div>
                <h4>Adobe Illustrator</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className ="experience__details" >
              <BsFillPatchCheckFill className = "experience__details-icon" />
             <div>
              <h4>Adobe Photoshop</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className ="experience__details" >
              <BsFillPatchCheckFill className = "experience__details-icon" />
              <div>
                <h4>Project Management</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className ="experience__details" >
              <BsFillPatchCheckFill className = "experience__details-icon" />
                <div>
                  <h4>Writing Skill</h4>
                  <small className='text-light'>Excellent</small>
                </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
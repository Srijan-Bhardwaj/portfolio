import React, { useEffect } from 'react';
import Aos from 'aos';

const Project=()=>{
    useEffect(()=>{
        Aos.init({duration:1250});
    },[]);
    return (
        <>
            <div className="project_container" id="mywork">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="heading">
                    Projects
                </div>
                <div className="projects" data-aos="slide-left"  data-aos-once="true">
                    <div className="project1">Project 1</div>
                    <div className="project1">Project 1</div>
                    <div className="project1">Project 1</div>
                    <div className="project1">Project 1</div>
                    <div className="project1">Project 1</div>
                    <div className="project1">Project 1</div>
                    <div className="project1">Project 1</div>
                </div>
            </div>
        </>
    )
};

export default Project;
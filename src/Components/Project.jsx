import React from 'react'

export default function Project(props) {
  return (
      <div className="project">
                    <img src={props.previewImg} alt="" className="project-image"/>
                    <div className="project-info">
                        <div className="project-name">{props.name}</div>
                        <div className="project-description">{props.description}</div>
                        <div className="link-container">
                            <div className="link-container">
                                <a
                                className="project-link"
                                href={props.previewLink}
                                ><i className="fa-brands fa-youtube"></i></a>
                                <a
                                className="project-link"
                                href={props.gitHubLink}
                                ><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    
                </div>
  )
}
import React from 'react'

export default () => (
  <>
    <h2>Trusted By</h2>
    <p>
      I have been working with big and small companies doing React and WordPress.
      I cannot talk about some of my best work due to non disclosure agreements.
      Here are some of them.
    </p>
    <section className="projects-container">
      <div className="work-project">
        <a href="https://www.rtcamp.com/">
          <img
            className="work-logo"
            src={require('../images/rtCamp-Logo.png')}
            alt="rtCamp"
          />
        </a>
        <div className="project-technologies">
          <span>React</span> <span>WordPress</span> <span>VIP</span>
        </div>
      </div>
      <div className="work-project">
        <a href="https://www.capbase.com/">
          <img
            className="work-logo"
            src={require('../images/capbase.png')}
            alt="Capbase"
          />
        </a>
        <div className="project-technologies">
          <span>React</span> <span>GraphQL</span> <span>AWS</span>
        </div>
      </div>
      <div className="work-project">
        <a href="https://www.learndash.com/">
          <img
            className="work-logo"
            src={require('../images/LearnDash.png')}
            alt="LearnDash"
          />
        </a>
        <div className="project-technologies">
          <span>React</span> <span>Redux</span> <span>WordPress</span>{' '}
        </div>
      </div>
      <div className="work-project">
        <a href="https://javascriptforwp.com/">
          <img
            className="work-logo"
            src={require('../images/jsforwp.png')}
            alt="JS for WP"
          />
        </a>
        <div className="project-technologies">
          <span>React</span> <span>Gatsby</span> <span>WordPress</span>{' '}
        </div>
      </div>
      <div className="work-project">
        <a href="https://www.jatstudio.com/">
          <img
            className="work-logo"
            src={require('../images/jatstudio.svg')}
            alt="Jatstudio"
          />
        </a>
        <div className="project-technologies">
          <span>React</span> <span>Gatsby</span> <span>WordPress</span>{' '}
        </div>
      </div>
      <div className="work-project">
        <a href="https://www.simplur.com/">
          <img
            className="work-logo"
            src={require('../images/simplur.svg')}
            alt="Simplur"
          />
        </a>
        <div className="project-technologies">
          <span>React</span> <span>Gatsby</span> <span>WordPress</span> <span>WooCommerce</span>{' '}
        </div>
      </div>
      <div className="work-project">
        <a href="https://www.lexcampus.in/">
          <img
            className="work-logo"
            src={require('../images/LexCampus-logo.png')}
            alt="LexCampus"
          />
        </a>
        <div className="project-technologies">
          <span>WordPress</span> <span>LearnDash</span>{' '}
          <span>React Native</span>
        </div>
      </div>
    </section>

    
  </>
)

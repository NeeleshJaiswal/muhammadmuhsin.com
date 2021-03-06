import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout location="contact">
    <SEO
      title="Contact"
      keywords={[
        `muhammad muhsin`,
        `full stack developer`,
        `wordpress`,
        `react`,
      ]}
    />
    <div style={{ display: 'block', clear: 'both' }}>
      <section className="contact width-40" id="contact">
        <div className="container">
          <h1 className="text-uppercase">Contact Me</h1>
          <p>
            Thanks for your interest in talking to me! You can use the following
            ways to get in touch:
          </p>
          <ul>
            <li>
              <strong>Email</strong> - {' '}
              <a href="mailto:muhammad@hey.com" style={{ fontSize: '1.5rem' }}>
                muhammad@hey.com
              </a>
            </li>
            <li>
              <strong>Twitter</strong> - Feel free to send me a direct message{' '}
              <a
                href="https://twitter.com/messages/compose?recipient_id=1166243450&ref_src=twsrc%5Etfw"
                class="twitter-dm-button"
                data-screen-name="muhsinlk"
              >
                Message @muhsinlk
              </a>
            </li>
            <li>
              <strong>Clarity.fm</strong> - You can{' '}
              <a href="https://clarity.fm/mmuhsin/">
                schedule a call with me to pick my brain{' '}
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="social-container width-60">
        <div className="social-links-container">
          <SocialLink link="https://github.com/m-muhsin/" image="github.png" />
          <SocialLink
            link="https://twitter.com/muhsinlk/"
            image="twitter.png"
          />
           <SocialLink
            link="https://dev.to/mmuhsin"
            image="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
            absoulteImgUrl={true}
            alt="Muhammad Muhsin's DEV Profile"
          />
          <SocialLink link="https://clarity.fm/mmuhsin/" image="clarity.jpg" />
          <SocialLink
            link="https://www.linkedin.com/in/mmuhsin/"
            image="linkedin.png"
          />
          <SocialLink
            link="https://www.instagram.com/m_muhsin/"
            image="instagram.png"
          />
          <SocialLink
            link="https://www.youtube.com/user/muhammadmuhseen/"
            image="youtube.png"
          />
          <SocialLink link="http://mtwoblog.com/" image="m2blog.png" />
          <SocialLink
            link="https://profiles.wordpress.org/mmuhsin/"
            image="wordpress.png"
          />
          <SocialLink link="https://noti.st/m-muhsin" image="notist.png" />
        </div>
      </section>
    </div>
  </Layout>
)

export default ContactPage

const SocialLink = ({ link, image, absoulteImgUrl, alt }) => (
  <a
    className="social-link"
    rel="noopener noreferrer"
    target="_blank"
    href={link}
  >
    <img
      style={{ width: 65, height: 65, textAlign: 'center' }}
      alt={alt ?? image}
      src={ absoulteImgUrl ? image : require(`../images/${image}`)}
    />
  </a>
)

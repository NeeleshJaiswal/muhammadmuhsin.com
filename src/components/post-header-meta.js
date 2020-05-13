import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import moment from 'moment/moment'

import stripHtml from '../utils/strip-html'

const PostHeaderMeta = ({
  date,
  categories = {},
  tags = {},
  readingTime,
  excerptText,
  showTwitterShare = true,
  featuredImage = {},
}) => {
  let cookies = []
  if (parseInt(readingTime)) {
    let numOfCookies = readingTime / 2
    for (let i = 0; i < numOfCookies; i++) {
      cookies.push('🍪')
    }
  } else {
    cookies = ['🍪']
  }

  let twitterText = stripHtml(excerptText)
  twitterText = `"${twitterText}" —`

  return (
    <header className="entry-meta">
      <span className="posted-on">
        <time
          className="entry-date published updated"
          dateTime={moment(date).format('YYYY-MM-DDTHH:mm:ssZ')}
        >
          {moment(date).format(`MMMM D, YYYY`)}
        </time>
      </span>
      {categories?.nodes?.length ? (
        <span className="cat-links">
          {`• `}
          <span className="screen-reader-text">Category: </span>
          {categories.nodes
            .map((category) => (
              <Link
                key={category.name}
                to={`/blog/category/${category.slug}`}
                rel="category"
              >
                <span>{category.name}</span>
              </Link>
            ))
            .reduce((accu, elem) => {
              return accu === null ? [elem] : [...accu, ', ', elem]
            }, null)}
        </span>
      ) : (
        ''
      )}
      {tags?.nodes?.length ? (
        <span className="tags-links">
          {` • `}
          <span className="screen-reader-text">Tags: </span>
          {tags.nodes
            .map((tag) => (
              <Link key={tag.name} to={`/blog/tag/${tag.slug}`} rel="tag">
                <span>#{tag.name}</span>
              </Link>
            ))
            .reduce((accu, elem) => {
              return accu === null ? [elem] : [...accu, ', ', elem]
            }, null)}
        </span>
      ) : (
        ''
      )}
      {readingTime && `• ${cookies.join('')} ${readingTime} min read`}
      {showTwitterShare ? (
        <div className="twitter-share-button-container">
          <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            className="twitter-share-button"
            data-text={twitterText}
            data-via="muhsinlk"
            data-size="large"
          >
            Share on Twitter
          </a>
        </div>
      ) : (
        ''
      )}
      {!!featuredImage &&
        !!featuredImage.remoteFile &&
        !!featuredImage.remoteFile.childImageSharp && (
          <Img fluid={featuredImage.remoteFile.childImageSharp.fluid} alt={featuredImage.altText} />
        )}
    </header>
  )
}

export default PostHeaderMeta

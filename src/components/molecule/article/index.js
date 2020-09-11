import React from 'react'
import { Card } from 'react-rainbow-components'
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-router-dom'
import {
  HorizontalPadding,
  VerticalPadding,
  ThumbImage,
} from '../../../utils/constant'

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 60,
  (x - window.innerWidth / 2) / 60,
  1.02,
]
const trans = (x, y, s) =>
  `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const Article = (props) => {
  const { abstract, _id, multimedia, headline, source } = props.item
  const [spring, setSpring] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 120, friction: 14 },
  }))
  return (
    <animated.div
      className="rainbow-p-around_medium"
      onMouseMove={({ clientX: x, clientY: y }) =>
        setSpring({ xys: calc(x, y) })
      }
      onMouseLeave={() => setSpring({ xys: [0, 0, 1] })}
      style={{ transform: spring.xys.interpolate(trans) }}
    >
      <Card className="App-card">
        {multimedia.length ? (
          <ThumbImage
            src={`https://nytimes.com/${multimedia[1].url}`}
            alt={headline.main}
          />
        ) : (
          <ThumbImage
            src="https://via.placeholder.com/400x600.png?text=Thou shalt find image"
            alt={headline.main}
          />
        )}
        <VerticalPadding className="App-card__content">
          <HorizontalPadding>
            <span className="App-card__inset">{source}</span>
            <div className="App-card__title">{headline.main}</div>
            <p className="App-card__paragraph">{abstract}</p>
            <Link
              className="App-card_link"
              to={{ pathname: _id.substr(6), ...props }}
            >
              Detailed info
            </Link>
          </HorizontalPadding>
        </VerticalPadding>
      </Card>
    </animated.div>
  )
}

export default Article

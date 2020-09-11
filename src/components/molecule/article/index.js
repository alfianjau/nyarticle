import React from 'react'
import { Card, Button } from 'react-rainbow-components'
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-router-dom'
import { HorizontalPadding, ThumbImage } from '../../../utils/constant'

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
      <Card footer={<span>{source}</span>}>
        <HorizontalPadding>
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
          <div className="App-title">{headline.main}</div>
          <p className="App-lead_paragraph">{abstract}</p>
          <Button
            label="Button Border"
            variant="neutral"
            className="rainbow-m-around_medium"
          >
            <Link to={{ pathname: _id.substr(6), ...props }}>Details</Link>
          </Button>
        </HorizontalPadding>
      </Card>
    </animated.div>
  )
}

export default Article

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  SpinContainer,
  SpinWrapper,
  DefaultIndicator,
  Text,
  ContentContainer,
} from './styles'
import {
  $fontColor,
  $mainColor,
} from './colors';

const Indicator = ({indicator, mainColor, size}) => {
  if (indicator === null) {
    return null
  }

  if (React.isValidElement(indicator)) return indicator

  return (
    <DefaultIndicator
      mainColor={mainColor}
      size={size}
    />
  )
}

const Spin = ({
  spinning = false,
  indicator,
  children,
  opacity = .5,
  tip,
  mainColor = $mainColor,
  fontColor = $fontColor,
  size = 42,
  maxHeight = 400,
}) => {
  const [_spinning, setSpinning] = useState();
  useEffect(() => {
    if (!spinning && _spinning === 'delete') return
    if (!spinning && !_spinning) {
      setSpinning('delete')
    } else if (_spinning !== spinning) {
      setSpinning(spinning)
    }
  }, [spinning])

  const indicatorElm = <Indicator indicator={Spin.defaultIndicator ?? indicator} mainColor={mainColor} size={size} />

  const spinEl = (
    <SpinContainer
      data-spinning={_spinning}
      maxHeight={maxHeight}
    >
      <SpinWrapper
        data-spinning={_spinning}
        onClose={() => setSpinning('delete')}
        onAnimationEnd={e => {
          if (e.animationName === 'spinning__close') setSpinning('delete')
        }}
      >
        {indicatorElm}
        {tip && <Text fontColor={fontColor}>{tip}</Text>}
      </SpinWrapper>
    </SpinContainer>
  )

  if (typeof children === 'undefined') {
    return indicatorElm
  } else {
    return (
      <Container
        data-spinning={_spinning}
      >
        {spinEl}
        <ContentContainer
          data-spinning={_spinning}
          opacity={opacity}
        >
          {children}
        </ContentContainer>
      </Container>
    )
  }

}

Spin.setDefaultIndicator = (indicator) => {
  Spin.defaultIndicator = indicator
}

Spin.clearDefaultIndicator = () => {
  Spin.defaultIndicator = undefined
}

Spin.propTypes = {
  spinning: PropTypes.bool,
  indicator: PropTypes.node, // custom spin icon
  opacity: PropTypes.number,
  tip: PropTypes.string,
  mainColor: PropTypes.string,
  fontColor: PropTypes.string,
  size: PropTypes.number, // icon px
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['none'])]),
}

export default Spin

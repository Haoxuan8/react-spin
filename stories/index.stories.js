import React, {useState} from "react";

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import Spin from '../src/spin'

const Content = props => (
  <div
    style={{
      height: props.height ?? 400,
      backgroundColor: "gray",
      borderRadius: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    content
  </div>
)

const HasChildren = props => {
  const {indicator} = props;

  const [s, setS] = useState(false);
  const [h, setH] = useState(400);
  const [text, setText] = useState();
  const [size, setSize] = useState();

  return (
    <div>
      <Spin spinning={s} indicator={indicator} tip={text} size={size}>
        <Content height={h} />
      </Spin>
      <button onClick={() => {setS(!s)}}>toggle</button>
      <button onClick={() => {setH(h === 400 ? 800 : 400)}}>changeHeight</button>
      <div>
        <span>text</span>
        <input type="text" onChange={e => setText(e.target.value)} />
      </div>
      <div>
        <span>size</span>
        <input type="number" onChange={e => setSize(e.target.value)} />
      </div>
    </div>
  )
}

const MyIcon = (
  <svg width="40px" height="40px" viewBox="0 0 50 50">
  <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
    <animateTransform attributeType="xml"
                      attributeName="transform"
                      type="rotate"
                      from="0 25 25"
                      to="360 25 25"
                      dur="0.6s"
                      repeatCount="indefinite"/>
    </path>
  </svg>
)


storiesOf('spin', module)
  .add('empty', () => (
    <Spin spinning />
  ))
  .add('hasChildren', () => (
    <HasChildren />
  ))
  .add('changeIndicator', () => (
    <HasChildren indicator={MyIcon} />
  ))
  .add('setDefaultIndicator', () => {
    return (
      <div>
        <HasChildren />
        <button onClick={() => {Spin.setDefaultIndicator(MyIcon)}}>change</button>
        <button onClick={() => {Spin.clearDefaultIndicator()}}>clear</button>
      </div>
    )
  })

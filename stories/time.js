import React from 'react'
import { storiesOf } from '@storybook/react'
import moment from 'moment'
import styled from "styled-components";
import { mix, transparentize } from "polished";

// import { action } from '@storybook/addon-actions'
// import {
//   withKnobs,
//   text,
//   boolean,
//   number,
//   selectV2
// } from '@storybook/addon-knobs/react'

import RawTimePicker from '../src/'
import { DateTime } from 'luxon'


const TimePicker = styled(RawTimePicker)`

  background-color: ${({ color, bg }) => mix(0.92, bg, color)};
  border-radius: 4px;
  width: 300px;
  height: 50px;

  .rc-time-picker-input {
    padding: 8px;
    justify-content: center;
    color: ${({ color }) => color};
    border: 1px solid ${({ bg }) => bg};
    border-radius: 4px;
    &:focus {
      box-shadow: 0 0 0 1px ${({ color }) => color};
    }
  }

  /* input font style */
  .rc-time-picker-panel-input,
  .rc-time-picker-input {
    height: auto;
    font-size: 30px;
    font-weight: 300;
    font-variant-numeric: tabular-nums;
    border: none;
    text-align: center;

    &:focus {
      outline: none;
    }
  }
  .rc-time-picker-panel-input {
    width: 100%;
    color: ${({ color }) => color};
    /* color: ${({ bg }) => bg}; */
    background-color: transparent;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .rc-time-picker-input-time {
    font-size: inherit;
  }

  /* panel hover/focus styles */
  .rc-time-picker-panel-select {
    max-height: 200px;
  }
  .rc-time-picker-panel-select li {
    color: ${({ color }) => color};
    font-size: 13px;
    padding: 5px;
    line-height: 1;
    height: auto;
    text-align: center;
    &:hover,
    &:focus {
      background-color: ${({ color }) => transparentize(0.9, color)};
    }
    &:focus {
      outline: none;
      &:before {
        content: "➤";
        position: absolute;
        left: 1.9em;
      }
    }
    &.rc-time-picker-panel-select-option-selected {
      background-color: ${({ color }) => transparentize(0.2, color)};
      color: ${({ bg }) => bg};
      &:hover,
      &:focus {
        background-color: ${({ color, bg }) => transparentize(0.3, color)};
      }
    }
  }

  /* internal borders */
  .rc-time-picker-panel-combobox {
    border-top: 1px solid ${transparentize(0.85, "#000")};
  }
  .rc-time-picker-panel-select + .rc-time-picker-panel-select {
    border-left: 1px solid ${transparentize(0.85, "#000")};
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10vh;
  background-color: deeppink;
  width: 100vw;
  height: 100vh;
  /* System font stack */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
`;


storiesOf('Timepicker', module).add('First', () => (
  <Wrapper>

  <TimePicker
    bg="#483C90"
    color="#fff"
    name='start_time'
    minuteStep={15}
    showSecond={false}
    placeholder={"Start Time"}
    // show AM/PM
    use12Hours={true}
    // component manages state
    defaultValue={DateTime.local()}
    style={{
      width: 400,
      height: 50,
      backgroundColor: 'red'
    }}
  />
  </Wrapper>
))

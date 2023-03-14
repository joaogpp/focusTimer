import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"

import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

import Events from "./events.js"

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset,
})

const sound = Sound()

const events = Events({
  controls,
  timer,
  sound,
  buttonSoundOn,
  buttonSoundOff
})

buttonPlay.addEventListener('click', function() {
  events.pressButtonPlay()
})

buttonPause.addEventListener('click', function() {
  events.pressButtonPause()
})

buttonStop.addEventListener('click', function() {
  events.pressButtonStop()
})

buttonSoundOff.addEventListener('click', function() {
  events.pressButtonSoundOff()
})

buttonSoundOn.addEventListener('click', function() {
  events.pressButtonSoundOn()
})

buttonSet.addEventListener('click', function() {
  events.pressButtonSet()
})
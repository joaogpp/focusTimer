export default function ({
  controls,
  timer,
  sound,
  buttonSoundOn,
  buttonSoundOff
}) {

  function pressButtonPlay() {
      controls.play()
      timer.countdown()
      sound.pressButton()
  }

  function pressButtonPause() {
      controls.pause()
      timer.hold()
      sound.pressButton()
  }

  function pressButtonStop() {
      controls.reset()
      timer.reset()
      sound.pressButton()
  }

  function pressButtonSoundOff(){
      buttonSoundOn.classList.remove('hide')
      buttonSoundOff.classList.add('hide')
      sound.activeBgAudio()
    }
    
    function pressButtonSoundOn() {
      buttonSoundOn.classList.add('hide')
      buttonSoundOff.classList.remove('hide')
      sound.disableBgAudio()
  }
  
  function pressButtonSet() {
      let newMinutes = controls.getMinutes()
    
      if (!newMinutes) {
        timer.reset()
        return
      }
    
      timer.updateDisplay(newMinutes, 0)
      timer.updateMinutes(newMinutes)
  }

  return {
    pressButtonPlay,
    pressButtonPause,
    pressButtonSet,
    pressButtonStop,
    pressButtonSoundOn,
    pressButtonSoundOff,
  }
}
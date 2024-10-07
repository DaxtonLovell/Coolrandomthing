if (Environment.ReadNoise(AnalogPin.P1) > 5) {
    music.play(music.stringPlayable("C - D C E C - D ", 275), music.PlaybackMode.LoopingInBackground)
}
basic.forever(function () {
	
})

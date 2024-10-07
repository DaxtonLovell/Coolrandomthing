input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . # #
        . # # # .
        . # # # .
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("I am a cute microbit")
})

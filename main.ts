input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . . .
        . # . # .
        . # # . .
        . # # . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Ghost)
})
music.playMelody("B A G A G F A C5 ", 73)

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
basic.forever(function () {
    music.playMelody("B A G A G F A C5 ", 73)
})

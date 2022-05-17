input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (gana == true) {
        gana = false
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                # . . . #
                # # # # #
                # . . . #
                . . . . .
                `)
            basic.showLeds(`
                . . . # .
                . . . # #
                . . # . .
                # # . . .
                . # . . .
                `)
            basic.showLeds(`
                . # # # .
                . . # . .
                . . # . .
                . . # . .
                . # # # .
                `)
            basic.showLeds(`
                . # . . .
                # # . . .
                . . # . .
                . . . # #
                . . . # .
                `)
        }
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        soundExpression.happy.playUntilDone()
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        basic.pause(5000)
        quiet = true
        comptador = 0
    }
})
input.onButtonPressed(Button.A, function () {
    if (avorrit == true) {
        avorrit = false
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        soundExpression.giggle.playUntilDone()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.pause(5000)
        quiet = true
        comptador = 0
    }
})
let estat = 0
let comptador = 0
let gana = false
let avorrit = false
let quiet = false
quiet = true
avorrit = false
gana = false
comptador = 0
basic.forever(function () {
    while (quiet == true) {
        basic.showLeds(`
            . . . . .
            . # . . #
            # # # # .
            . # # # .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            # # # # .
            . # # # .
            . # . # .
            `)
    }
})
basic.forever(function () {
    basic.pause(1000)
    comptador += 1
    if (comptador == 10) {
        estat = randint(1, 2)
        quiet = false
        if (estat == 1) {
            avorrit = true
            soundExpression.slide.playUntilDone()
            while (avorrit == true) {
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    . # # # .
                    . # . # .
                    `)
            }
        }
        if (estat == 2) {
            gana = true
            soundExpression.spring.playUntilDone()
            while (gana == true) {
                basic.showLeds(`
                    . . . . .
                    # . . . #
                    # # # # #
                    # . . . #
                    . . . . .
                    `)
            }
        }
    }
})

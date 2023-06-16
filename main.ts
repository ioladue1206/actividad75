maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB_RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
        maqueen.motorStop(maqueen.Motors.All)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})

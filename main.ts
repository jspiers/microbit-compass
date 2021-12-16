let degrees = 0
soundExpression.hello.playUntilDone()
input.calibrateCompass()
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 23 || degrees >= 337) {
        images.arrowImage(ArrowNames.North).showImage(0)
    } else if (degrees < 67) {
        images.arrowImage(ArrowNames.NorthWest).showImage(0)
    } else if (degrees < 112) {
        images.arrowImage(ArrowNames.West).showImage(0)
    } else if (degrees < 157) {
        images.arrowImage(ArrowNames.SouthWest).showImage(0)
    } else if (degrees < 202) {
        images.arrowImage(ArrowNames.South).showImage(0)
    } else if (degrees < 247) {
        images.arrowImage(ArrowNames.SouthEast).showImage(0)
    } else if (degrees < 292) {
        images.arrowImage(ArrowNames.East).showImage(0)
    } else {
        images.arrowImage(ArrowNames.NorthEast).showImage(0)
    }
})

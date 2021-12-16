soundExpression.hello.playUntilDone()
basic.forever(function () {
    if (input.compassHeading() < 23 || input.compassHeading() >= 337) {
        images.arrowImage(ArrowNames.North).showImage(0)
    } else if (input.compassHeading() < 67) {
        images.arrowImage(ArrowNames.NorthEast).showImage(0)
    } else if (input.compassHeading() < 112) {
        images.arrowImage(ArrowNames.East).showImage(0)
    } else if (input.compassHeading() < 157) {
        images.arrowImage(ArrowNames.SouthEast).showImage(0)
    } else if (input.compassHeading() < 202) {
        images.arrowImage(ArrowNames.South).showImage(0)
    } else if (input.compassHeading() < 247) {
        images.arrowImage(ArrowNames.SouthWest).showImage(0)
    } else if (input.compassHeading() < 292) {
        images.arrowImage(ArrowNames.West).showImage(0)
    } else {
        images.arrowImage(ArrowNames.NorthWest).showImage(0)
    }
})

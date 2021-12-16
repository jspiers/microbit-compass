soundExpression.hello.play_until_done()

def on_forever():
    if input.compass_heading() < 23 or input.compass_heading() >= 337:
        images.arrow_image(ArrowNames.NORTH).show_image(0)
    elif input.compass_heading() < 67:
        images.arrow_image(ArrowNames.NORTH_EAST).show_image(0)
    elif input.compass_heading() < 112:
        images.arrow_image(ArrowNames.EAST).show_image(0)
    elif input.compass_heading() < 157:
        images.arrow_image(ArrowNames.SOUTH_EAST).show_image(0)
    elif input.compass_heading() < 202:
        images.arrow_image(ArrowNames.SOUTH).show_image(0)
    elif input.compass_heading() < 247:
        images.arrow_image(ArrowNames.SOUTH_WEST).show_image(0)
    elif input.compass_heading() < 292:
        images.arrow_image(ArrowNames.WEST).show_image(0)
    else:
        images.arrow_image(ArrowNames.NORTH_WEST).show_image(0)
basic.forever(on_forever)

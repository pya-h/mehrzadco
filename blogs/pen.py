colors = (
    COLOR_RED, COLOR_BLUE, COLOR_GREEN, COLOR_YELLOW, COLOR_ORANGE, COLOR_BROWN, COLOR_PURPLE, COLOR_CYAN, COLOR_CORAL,
    COLOR_LIGHTCORAL, COLOR_BLACK, COLOR_WHITE) = \
    ('red', 'blue', 'green', 'yellow', 'orange', 'brown', 'purple', 'cyan', 'coral', 'lightcoral', 'black', 'white')


def get_color_choices():
    return [
        (color, color.capitalize()) for color in colors
    ]


fonts = (
    FONT_ARIAL, FONT_VAZIR, FONT_VAZIR_BOLD, FONT_BYEKAN, FONT_ROBOTO, FONT_BLOTUS, FONT_BNAZANIN
) = ('Arial', 'Vazir', 'VazirBold', 'BYekan', 'Roboto', 'B Lotus', 'B Nazanin')


def get_fonts():
    return [(font, font) for font in fonts]

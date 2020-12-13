import re


def color_print(color, string, end='\n'):
    if re.search(r'^red$', color):
        colored_string = f'\033[31m{string}\033[00m'
    elif re.search(r'^green$', color):
        colored_string = f'\033[32m{string}\033[00m'
    elif re.search(r'^yellow$', color):
        colored_string = f'\033[33m{string}\033[00m'
    elif re.search(r'^blue$', color):
        colored_string = f'\033[34m{string}\033[00m'
    elif re.search(r'^magenta$', color):
        colored_string = f'\033[35m{string}\033[00m'
    elif re.search(r'^cyan$', color):
        colored_string = f'\033[36m{string}\033[00m'
    elif re.search(r'^light_gray$', color):
        colored_string = f'\033[37m{string}\033[00m'
    elif re.search(r'^dark_gray$', color):
        colored_string = f'\033[90m{string}\033[00m'
    elif re.search(r'^light_red$', color):
        colored_string = f'\033[91m{string}\033[00m'
    elif re.search(r'^light_green$', color):
        colored_string = f'\033[92m{string}\033[00m'
    elif re.search(r'^light_yellow$', color):
        colored_string = f'\033[93m{string}\033[00m'
    elif re.search(r'^light_blue$', color):
        colored_string = f'\033[94m{string}\033[00m'
    elif re.search(r'^light_magenta$', color):
        colored_string = f'\033[95m{string}\033[00m'
    elif re.search(r'^light_cyan$', color):
        colored_string = f'\033[96m{string}\033[00m'
    elif re.search(r'^white$', color):
        colored_string = f'\033[97m{string}\033[00m'
    
    print(colored_string, end=end)


def print_color_options():
    color_print('red', 'red')
    color_print('green', 'green')
    color_print('yellow', 'yellow')
    color_print('blue', 'blue')
    color_print('magenta', 'magenta')
    color_print('cyan', 'cyan')
    color_print('light_gray', 'light_gray')
    color_print('dark_gray', 'dark_gray')
    color_print('light_red', 'light_red')
    color_print('light_green', 'light_green')
    color_print('light_yellow', 'light_yellow')
    color_print('light_blue', 'light_blue')
    color_print('light_magenta', 'light_magenta')
    color_print('light_cyan', 'light_cyan')
    color_print('white', 'white')


def print_divider(n=30, end='\n'):
    print('-' * n, end=end)

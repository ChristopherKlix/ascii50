# Imports
import os
import re
from util import color_print, print_divider


# Constants
FLAGS = [
    'compile',
    'watch'
]


# Debug
SCSS_PATH = './web/public/scss'
CSS_PATH = './web/public/css'


'''
Selection menu
    Print CLI
    Assign input to 'mode'
Run Bash command based on 'mode'
    Run bash command
    Print CLI
'''
def main():
    while True:
        print('Compile or watch SCSS? ', end='')
        color_print('blue', f'[{FLAGS[0]}] [{FLAGS[1]}] ', end='')
        
        if re.search(f'^({FLAGS[0]})|({FLAGS[1]})$', mode := input()):
            mode = int(not mode == 'compile')
            break
        else:
            color_print('yellow', 'invalid')
    
    if mode:
        print_divider()
    
    cmd = get_bash_cmd(mode=mode, scss_path=SCSS_PATH, css_path=CSS_PATH)
    os.system(cmd)
    print_cli(mode=mode)


def print_cli(mode):
    if mode:
        print()
        print_divider(end='\n\n')
        print('    Watching SCSS stopped.', end='\n\n')
        print_divider()
    else:
        print_divider(end='\n\n')
        print('    SCSS compiled!', end='\n\n')
        print_divider()


def get_bash_cmd(mode, scss_path, css_path):
    if mode:
        return f'sass --watch {scss_path}:{css_path}'
    else:
        return f'sass {scss_path}:{css_path}'


# Entry
if __name__ == "__main__":
    main()

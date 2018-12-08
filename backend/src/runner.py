import sys
import os
sys.path.append('../')
import src as app_root
from src.app import create_app

APP_ROOT_FOLDER = os.path.abspath(os.path.dirname(app_root.__file__))

if __name__ == '__main__':
    # create app using factory
    app = create_app()
    
    if sys.argv[1] == 'runserver':
        # runs development server
        app.run(port=5000, host='0.0.0.0', debug=True)
    else:
        print('Invalid argument.')

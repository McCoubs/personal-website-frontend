import sys
import os
sys.path.append('../')
import backend.src as app_root
from backend.src.app import create_app

APP_ROOT_FOLDER = os.path.abspath(os.path.dirname(app_root.__file__))

if __name__ == '__main__':
    # create app using factory
    app = create_app()
    
    if sys.argv[1] == 'devserver':
        # runs development server
        app.run(port=5000, host='0.0.0.0', debug=True)
    elif sys.argv[1] == 'prodserver':
        # runs development server
        app.run()
    else:
        print('Invalid argument.')

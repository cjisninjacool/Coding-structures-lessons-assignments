import socket
from datetime import datetime

UDP_IP = "localhost"

UDP_PORT = 88

sock = socket.socket(socket.AF_INET, # Internet

socket.SOCK_DGRAM) # UDP

sock.bind((UDP_IP, UDP_PORT))

while True:

        data, addr = sock.recvfrom(1024) # buffer size is 1024 bytes
        now = datetime.now()
        print (data,now.strftime("%H:%M:%S"))
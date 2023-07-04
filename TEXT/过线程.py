import threading
import time
def song(msg):
    while True:
        print(msg)
        time.sleep(1)
def dance(msg):
    while True:
        print(msg)
        time.sleep(1)

if __name__ == '__main__':
    song_1 = threading.Thread(target=song,args=("唱"))
    dance_1 = threading.Thread(target=dance,kwargs={"msg":"跳"})

    song_1.start()
    dance_1.start()
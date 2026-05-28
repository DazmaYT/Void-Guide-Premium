from flask import Flask, request, jsonify
import pyautogui
import threading
import time
import random
app = Flask(__name__)
is_running = False

def walk_logic():
    global is_running
    # Настройки для GTA 5 RP
    while is_running:
        pyautogui.keyDown('w')
        time.sleep(random.uniform(0.8, 1.5))
        pyautogui.keyUp('w')
        pyautogui.keyDown('d')
        time.sleep(random.uniform(0.8, 1.5))
        pyautogui.keyUp('d')
        # Добавь S и A по аналогии

def start_bot_thread():
    global is_running
    is_running = True
    threading.Thread(target=walk_logic).start()

@app.route('/toggle', methods=['POST'])
def toggle():
    global is_running
    data = request.json
    status = data.get('enabled')
    
    if status:
        start_bot_thread()
        return jsonify({"message": "Бот включен"})
    else:
        is_running = False
        return jsonify({"message": "Бот выключен"})

if __name__ == '__main__':
    # Запускаем сервер на порту 5000
    app.run(port=5000)
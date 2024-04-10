import machine
import network
from umqtt.simple import MQTTClient
import time
import dht
import json
import ntptime
import utime

ssid = 'login'
password = 'senha'
sensor = dht.DHT11(machine.Pin(5))
led = machine.Pin(2, machine.Pin.OUT)

station = network.WLAN(network.STA_IF)
station.active(True)
station.connect(ssid, password)

mqtt_server = 'broker_host'
topic_pub = 'casafe/clima'
topic_sub = 'casafe/led1'

while not station.isconnected():
    print('nao conectou ainda')
    time.sleep(1)
    led.value(not led.value())
    

print('conectado com sucesso')
print(station.ifconfig())

ntp_servers = ['a.ntp.br', 'b.ntp.br', 'c.ntp.br']
for ntp_server in ntp_servers:
    try:
        print('Sincronizando com o servidor NTP:', ntp_server)
        ntptime.host = ntp_server
        ntptime.settime()
        break
    except Exception as e:
        print('Erro ao sincronizar com o servidor NTP:', e)
else:
    print('Todos os servidores NTP falharam. Verifique a conexão de rede e tente novamente.')
    # Se nenhum servidor NTP funcionar, talvez seja necessário lidar com isso de alguma outra maneira, como tentar novamente ou usar um valor de tempo padrão.


def gerenciar_led(topic, msg):
    print('gerenciar led')
    msgStr = msg.decode('utf-8')
    print('\n\n')
    print(msgStr)
    led.value(int(msgStr))
    print('\n\n')

client = MQTTClient('Felipe', mqtt_server)
client.set_callback(gerenciar_led)
client.connect()
client.subscribe(topic_sub)


while True:
    client.check_msg()
    sensor.measure()
    temp = sensor.temperature()
    umid = sensor.humidity()
    
    current_time = utime.localtime()
    iso_time = "{:04d}-{:02d}-{:02d}T{:02d}:{:02d}:{:02d}Z".format(current_time[0], current_time[1], current_time[2], current_time[3]-3, current_time[4], current_time[5])
    msg_obj = {'temp': temp, 'umid': umid, 'timestamp': iso_time}
    msg = json.dumps(msg_obj)
    print(msg)
    client.publish(topic_pub, msg)
    time.sleep(1)
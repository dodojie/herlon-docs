# MQTT说明



网关的主题格式均为一下三种：

`tele/HL810PRO_[网关MAC后六位]/*`  
`stat/HL810PRO_[网关MAC后六位]/*`  
`cmnd/HL810PRO_[网关MAC后六位]/*` 



后面的说明均以`HL810PRO_460560`为例



### zigbee传感器

默认MQTT主题为：

```
tele/HL810PRO_460560/SENSOR
```
此为传感器状态主题，被动接收。

### zigbee主动控制设备

> 这类是指可以发送命令改变该设备的通断、形态、颜色等设备。
>> 例如小米的墙壁开关，涂鸦调光灯等。


默认MQTT控制命令消息格式为：

```
{"Device":"<device_id>","Send":{"<命令>":<值>}}
```

[命令列表，请查看此链接](https://tasmota.github.io/docs/Zigbee/#sending-device-commands)


#### 举例

##### 插座或者墙壁开关

MQTT主题：`cmnd/HL810PRO_460560/ZbSend`

MQTT消息：

`{ "device":"0x4773", "send":{"Power":"On"} }`  
`{ "device":"0x4773", "send":{"Power":1} }`  
`{ "device":"0x4773", "send":{"Power":false} }`  
`{ "device":"0x4773", "send":{"Power":"Toggle"} }`  
##### 调光调色灯

MQTT主题：`cmnd/HL810PRO_460560/ZbSend`

MQTT消息：

`{ "device":"0x3D82", "send":{"Power":"Off"} }`  
`{ "device":"0x3D82", "send":{"Dimmer":128} }`  
`{ "device":"0x3D82", "endpoint":"0x0B", "send":{"Dimmer":0} }`  



### 开启配对模式


MQTT主题：`cmnd/HL810PRO_460560/ZbPermitJoin`

MQTT消息：`1`

:::info

60秒有效，过期自动关闭配对模式

:::


### 关闭配对模式



MQTT主题：`cmnd/HL810PRO_460560/ZbPermitJoin`

MQTT消息：`0`


### 自定义设备名称

MQTT主题：`cmnd/HL810PRO_460560/ZbName`

MQTT消息：`<device_ID>,<自定义的名称>`  例 `0x1234,客厅小米无线开关`


### 从网络中移除设备

MQTT主题：`cmnd/HL810PRO_460560/ZbLeave`

MQTT消息：`<device_id>`  例 `0x1234`


### 从UI列表中移除设备

MQTT主题：`cmnd/HL810PRO_460560/ZbForget`

MQTT消息：`<device_id>`  例 `0x1234`


[更多设置请查看此链接](https://tasmota.github.io/docs/Zigbee/)
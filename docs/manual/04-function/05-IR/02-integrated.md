# 组合红外码遥控(空调)
几乎所有的空调均为此类遥控码

## 红外接收

1. 网关后台管理主页面 ---> `Consoles`  --->  `控制台`，在此页面准备好。
2. 按下红外遥控器的任意按键，刚才打开的控制台页面将会打印出类似以下格式的遥控码，如果多次按下按键均没有出现以下内容，请尝试刷新控制台页面。

```
...{"IrReceived":{"Protocol":"NEOCLIMA","Bits":96,"Data":"0x000000200000006A8049A5F8","Repeat":0,"IRHVAC":{"Vendor":"NEOCLIMA","Model":-1,"Mode":"Dry","Power":"On","Celsius":"On","Temp":25,"FanSpeed":"Min","SwingV":"Off","SwingH":"Auto","Quiet":"Off","Turbo":"Off","Econo":"Off","Light":"Off","Filter":"Off","Clean":"Off","Beep":"Off","Sleep":-1}}}
```

3. 将`{"Vendor":"NEOCLIMA","Model":-1,"Mode":"Dry","Power":"On","Celsius":"On","Temp":25,"FanSpeed":"Min","SwingV":"Off","SwingH":"Auto","Quiet":"Off","Turbo":"Off","Econo":"Off","Light":"Off","Filter":"Off","Clean":"Off","Beep":"Off","Sleep":-1}`部分复制下来，为后面的红外发射使用。

## 红外发射

1. 网关后台管理主页面 ---> `Consoles`  --->  `控制台`。

2. 在控制台发送如下命令即可发送该按键的遥控码，IRhvac后面的数据是您在红外接收阶段获取的遥控码。
```
IRhvac {"Vendor":"NEOCLIMA","Model":-1,"Mode":"Dry","Power":"On","Celsius":"On","Temp":25,"FanSpeed":"Min","SwingV":"Off","SwingH":"Auto","Quiet":"Off","Turbo":"Off","Econo":"Off","Light":"Off","Filter":"Off","Clean":"Off","Beep":"Off","Sleep":-1}
```

:::note 注意

1. 红外接收和发送的有效距离有限，请将网关放在被遥控的红外设备足够近的地方使用，且直线距离之间不得有遮挡。
2. 并不是所有的红外遥控码都能解析识别，如果接收到的红外码中存在`"Protocol":"UNKNOWN"`内容，表示该红外码不能被解析，网关可能无法发送该红外码。

:::



## mqtt相关主题与消息


### 红外接收

当您已在有效范围内按下了红外遥控器按键，那么您将在以下mqtt主题中获取到遥控码。

** <font color="#00dd00">MQTT主题</font><br /> **
```
tele/HL810PRO_[网关MAC后六位]/RESULT
```
后面的所有主题均以`HL810PRO_46AC70`为例

** <font color="#00dd00">MQTT消息内容</font><br /> **

```
{"IrReceived":{"Protocol":"NEOCLIMA","Bits":96,"Data":"0x000000200000006A8049A5F8","Repeat":0,"IRHVAC":{"Vendor":"NEOCLIMA","Model":-1,"Mode":"Dry","Power":"On","Celsius":"On","Temp":25,"FanSpeed":"Min","SwingV":"Off","SwingH":"Auto","Quiet":"Off","Turbo":"Off","Econo":"Off","Light":"Off","Filter":"Off","Clean":"Off","Beep":"Off","Sleep":-1}}}
```

将消息内容中的`{"Vendor":"NEOCLIMA","Model":-1,"Mode":"Dry","Power":"On","Celsius":"On","Temp":25,"FanSpeed":"Min","SwingV":"Off","SwingH":"Auto","Quiet":"Off","Turbo":"Off","Econo":"Off","Light":"Off","Filter":"Off","Clean":"Off","Beep":"Off","Sleep":-1}`部分复制下来用于红外发送。


### 红外发射

#### 控制主题

** <font color="#00dd00">MQTT主题</font><br /> **
```
cmnd/HL810PRO_46AC70/IRhvac
```
** <font color="#00dd00">MQTT消息内容</font><br /> **
```
{"Vendor":"NEOCLIMA","Model":-1,"Mode":"Dry","Power":"On","Celsius":"On","Temp":25,"FanSpeed":"Min","SwingV":"Off","SwingH":"Auto","Quiet":"Off","Turbo":"Off","Econo":"Off","Light":"Off","Filter":"Off","Clean":"Off","Beep":"Off","Sleep":-1}
```
该消息内容是您在红外接收阶段获取并复制下来的遥控码。
#### 反馈主题

** <font color="#00dd00">MQTT主题</font><br /> **
```
stat/HL810PRO_46AC70/RESULT
```

** <font color="#00dd00">MQTT消息内容</font><br /> **
```
{"IRHVAC":{"Vendor":"NEOCLIMA","Model":-1,"Mode":"Dry","Power":"On","Celsius":"On","Temp":25,"FanSpeed":"Min","SwingV":"Off","SwingH":"Auto","Quiet":"Off","Turbo":"Off","Econo":"Off","Light":"Off","Filter":"Off","Clean":"Off","Beep":"Off","Sleep":-1}}
```
该反馈主题和消息仅能反馈控制命令的发送成功与否，不能反馈控制命令的执行结果。









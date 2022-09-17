# USB



## 拨动开关

拨动开关切换到如下状态。

1|OFF
:---:|:---:
2|OFF
:::caution 注意

进行下一步之前，请务必确认拨动开关是否已设置正确，否则zigbee功能在此模式下将不能正常工作。

:::



## 上位机配置

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Z2M" label="Z2M" default>

打开z2m的配置文件 `configuration.yaml` ,修改以下配置：


```yaml
# 开启ha自动发现
homeassistant: true

# 开启配对模式
permit_join: true

# 开启前端网页管理(默认端口号为8080)
frontend: true

# MQTT配置
mqtt:
  # mqtt发布主题前缀
  base_topic: zigbee2mqtt
  # mqtt服务器地址(请务必改成自己的服务器地址)
  server: 'mqtt://192.168.100.1:1883'
  # mqtt账号密码，如果有账号密码请去掉前面的注释，如果没有无需修改。
  # user: my_user
  # password: my_password

# 串口设置(务必跟此处配置一致，请勿修改)
serial:
  port: /dev/ttyUSB0
```
  </TabItem>
  <TabItem value="ZHA" label="ZHA">

homeassistant搜索集成 `zha` 并添加 ---> 选择 `/dev/ttyUSB0 - USB Serial, s/n: n/a`提交(如果没出现此串口地址，那么证明没有成功将串口引入到hass容器内，请检查您的设置)


  </TabItem>
</Tabs>



:::caution 注意
如果docker部署的zigbee2mqtt或者homeassistant，请在docker部署命令中加入`--device=/dev/ttyUSB0`参数，将串口引入到docker容器中，否则容器无法使用串口。
:::









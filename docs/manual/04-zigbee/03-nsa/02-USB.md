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


```
permit_join: true  //开启允许配对
mqtt:
  server: mqtt://[mqtt-server-ip]:1883  //请将ip设置为自己的mqtt服务器地址,此为必须项。
serial:
  port: /dev/ttyUSB0    //网关串口地址，请勿修改
frontend: true      //开启可视化管理页面，可选
```
  </TabItem>
  <TabItem value="ZHA" label="ZHA">

:::caution 注意
如果您部署的hass为docker容器，那么hass容器的网络模式必须为host模式，而且在hass所在主机上插入网关后，需重启hass容器，否则hass获取不到网关的串口地址。
:::


homeassistant搜索集成 `zha` 并添加 ---> 选择 `/dev/ttyUSB0 - USB Serial, s/n: n/a`提交(如果没出现此串口地址，那么证明没有成功将串口引入到hass容器内，请检查您的设置)


  </TabItem>
</Tabs>






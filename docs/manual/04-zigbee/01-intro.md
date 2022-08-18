# 模式说明

网关zigbee功能根据是否独立工作，是否依赖上位机这个特点，可以概括为两种工作模式，分别为`SA模式`和`NSA模式`

-----------------------

## SA模式(standalone mode)
又叫独立模式，是网关独立自主工作，仅依靠esp32芯片完成数据的处理和发送，不依赖其他主机作为上位机。

#### 优势

* 无需上位机，组网成本低廉
* 网络拓扑简单，单一节点，容错率高，组网故障率较低。

#### 劣势

* esp32的处理能力有限，不适用于zigbee子设备数量庞大的场景，如果子设备数量过多，可能会出现网络延迟的情况。
* 不可使用zigbee2mqtt或者ZHA组件，子设备的支持数量少于NSA模式

-----------------------------

## NSA模式(non-standalone mode)
又叫非独立模式，网关是作为下位机工作，对所有的zigbee数据不做处理，网关只在zigbee子设备和上位机之间进行数据转发，因此必须需要有一个主机作为上位机，才能正常工作。

NSA模式根据通信方式的不同分为以下四种方式：



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="TCP" label="TCP" default>
    网关通过tcp(也就是wifi网络)与上位机通信，上位机需安装zigbee2mqtt或者ZHA
  </TabItem>
  <TabItem value="USB" label="USB">
    网关通过usb与上位机通信，上位机需安装zigbee2mqtt或者ZHA
  </TabItem>
  <TabItem value="树莓派" label="树莓派">
    网关通过串口与主板上直插的树莓派通信，树莓派系统内需安装zigbee2mqtt或者ZHA
  </TabItem>
  <TabItem value="4G" label="4G">
    网关通过主板上直插的4G模块实现的4G网络与远程的上位机或云服务器通信，远程的上位机或云服务器需安装zigbee2mqtt或者ZHA
  </TabItem>
</Tabs>




#### 优势
* 子设备的支持数量大于SA模式
* 支持设备的更新速度快于SA模式
* 上位机数据处理能力远强于esp32，所以适用于子设备数量较多的场景

#### 劣势
* 网络拓扑多出一个上位机节点，出故障的概率增加。
* 需要部署zigbee2mqtt或者ZHA，所以部署难度大于SA模式





:::info

1. 如果您使用zigbee2mqtt或者ZHA组件，那么您就必须选择NSA模式。
2. 网关出厂固件默认为NSA模式。如果您需要SA模式，请根据[此文章](./sa/enable)，进行设置。

:::




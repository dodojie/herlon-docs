# 配置MQTT

## 服务器设置

进入网关后台管理主界面，依次进入，`设置`-->`MQTT设置`，然后填写mqtt的地址、用户名、密码等信息，其他信息无需修改，点击`保存`。- > 如下图所示




![](../img/mqtt.jpg)



## MQTT主题

默认mqtt的主题为  

`tele/HL810PRO_[网关MAC后六位]/*`  
`stat/HL810PRO_[网关MAC后六位]/*`  
`cmnd/HL810PRO_[网关MAC后六位]/*`  

例如：

`tele/HL810PRO_460560/SENSOR`
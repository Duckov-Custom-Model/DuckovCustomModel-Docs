# 模型安装

通常情况下，我们下载到的是模型Mod，模型Mod的作用是：在游戏内启用后会自动复制模型包到DCM的文件夹`Escape from Duckov\ModConfigs\DuckovCustomModel\Models`。

因此只需要启用模型mod，就可以直接在DCM内选择模型替换。

## 模型包

这是一个模型包，它应该被放置在`Escape from Duckov\ModConfigs\DuckovCustomModel\Models`

![image-20251229161427201](/images/image-20251229161427201.png)

## 模型Mod

这是一个模型Mod，它应该被放置在`Escape from Duckov\Duckov_Data\Mods`

![image-20251229161535568](/images/image-20251229161535568.png)

## 只读环境处理

::: info
如果游戏安装目录为只读环境（如 macOS 上的某些安装方式），模组会自动将模型路径切换到游戏存档的上一级目录的 ModConfigs。
:::

**不同平台的自动切换路径：**

- **Windows**: `AppData\LocalLow\TeamSoda\Duckov\ModConfigs\DuckovCustomModel\Models`
- **macOS/Linux**: 对应的用户数据目录

模组会自动检测并处理这种情况，**无需手动配置**。

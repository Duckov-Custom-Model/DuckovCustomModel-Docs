# 自定义着色器
了解如何在 DCM 中使用和配置自定义着色器，包括着色器替换控制和渲染优化选项。

## 特性

在自定义模型时，可以使用以下特性来控制着色器的行为：

### NoAutoShaderReplace

**特性名称**: `NoAutoShaderReplace`

**描述**: 禁用自动着色器替换功能。

**使用场景**:
- 当你需要保留模型原有的着色器设置
- 当你有特殊的着色器需求，不希望DCM自动修改
- 当你的着色器配置与标准流程不兼容时

::: tip
当此特性被启用时，DCM将不会自动替换模型上的着色器为`SodaCharacter.shader`。这对于需要使用自定义着色器配置的模型非常有用。
:::

### SkipShowBackMaterial

![img](/images/c5139330bd921ce94d33ce795e741eda.png)

**特性名称**: `SkipShowBackMaterial`

**描述**: 跳过角色透视网格的显示。

**使用场景**:

- 不希望显示角色的透视网格



::: tip
当此特性被启用时，模型的透视网格将不会被渲染。
:::


## 如何使用

在`bundleinfo.json`中，你可以通过添加对应的特性来启用相应的功能：

```json [json]
{
  "ModelID": "10001",
  "Name": "自定义模型",
  "Features": [
    "NoAutoShaderReplace",
    "SkipShowBackMaterial"
  ]
}
```


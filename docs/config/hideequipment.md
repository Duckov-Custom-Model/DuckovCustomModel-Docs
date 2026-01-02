### HideEquipmentConfig.json

隐藏装备配置。**⚠️ 已升级至 v2 版本，旧格式已过时。**

```json
{
  "Version": 2,
  "TargetTypeHideEquipment": {
    "built-in:Character": false,
    "built-in:Pet": false,
    "built-in:AICharacter_*": false
  }
}
```

- `Version`：配置文件版本（当前为 `2`）
- `TargetTypeHideEquipment`：字典类型，键为目标类型 ID（字符串格式，如 `"built-in:Character"`、`"built-in:Pet"`、`"built-in:AICharacter_*"` 或 `"built-in:AICharacter_<角色名>"`），值为布尔类型
  - `built-in:Character`：是否隐藏角色原有装备（默认：`false`）
    - 设置为 `true` 时，角色模型的 Animator 的 `HideOriginalEquipment` 参数会被设置为 `true`
    - 可在模型选择界面的设置区域中切换此选项
  - `built-in:Pet`：是否隐藏宠物原有装备（默认：`false`）
    - 设置为 `true` 时，宠物模型的 Animator 的 `HideOriginalEquipment` 参数会被设置为 `true`
    - 可在模型选择界面的设置区域中切换此选项
  - `built-in:AICharacter_*`：所有 AI 角色的默认隐藏装备设置
  - `built-in:AICharacter_<角色名>`：特定 AI 角色的隐藏装备设置

**⚠️ 过时格式（v1）**：
- `HideEquipment` (Dictionary<ModelTarget, bool>) - 已过时，使用 `TargetTypeHideEquipment` 替代
- `HideAICharacterEquipment` (Dictionary<string, bool>) - 已过时，使用 `TargetTypeHideEquipment` 替代

**兼容性说明**：
- 系统会自动从 v1 格式迁移到 v2 格式
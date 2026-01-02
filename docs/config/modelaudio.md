# ModelAudioConfig.json

模型音频开关配置。**⚠️ 已升级至 v2 版本，旧格式已过时。**

```json
{
  "Version": 2,
  "TargetTypeEnableModelAudio": {
    "built-in:Character": true,
    "built-in:Pet": true,
    "built-in:AICharacter_*": true,
    "built-in:AICharacter_Cname_Wolf": true
  }
}
```

- `Version`：配置文件版本（当前为 `2`）
- `TargetTypeEnableModelAudio`：字典类型，键为目标类型 ID（字符串格式），值为布尔值，控制该目标类型是否使用模型音频
  - `built-in:Character`：玩家角色是否使用模型音频（默认：`true`）
    - 设置为 `false` 时，玩家角色的所有模型音频都不会播放（包括按键触发和待机音频）
    - 可在模型选择界面的目标设置区域中切换此选项
  - `built-in:Pet`：宠物角色是否使用模型音频（默认：`true`）
    - 设置为 `false` 时，宠物角色的所有模型音频都不会播放（包括 AI 自动触发和待机音频）
    - 可在模型选择界面的目标设置区域中切换此选项
  - `built-in:AICharacter_*`：所有 AI 角色的默认值（默认：`true`）
  - `built-in:AICharacter_<角色名>`：特定 AI 角色的配置
    - 可以为每个 AI 角色单独配置是否使用模型音频
    - **配置选择逻辑**：音频设置会根据实际使用的模型来选择配置
      - 如果 AI 角色使用的是自己的模型配置（在 `UsingModel.json` 中为该 AI 角色单独配置了模型），则使用该 AI 角色的音频设置
      - 如果 AI 角色使用的是回退模型（`*`，即"所有 AI 角色"的默认模型），则使用`*`的音频设置
    - 可在模型选择界面的目标设置区域中切换此选项

**⚠️ 过时格式（v1）**：
- `EnableModelAudio` (Dictionary<ModelTarget, bool>) - 已过时，使用 `TargetTypeEnableModelAudio` 替代
- `AICharacterEnableModelAudio` (Dictionary<string, bool>) - 已过时，使用 `TargetTypeEnableModelAudio` 替代

## 注意事项

- 当禁用模型音频时，对应角色的所有模型音频都不会播放，包括：
  - 玩家按键触发的音频（`"normal"` 标签）
  - AI 自动触发的音频（`"normal"`、`"surprise"`、`"death"` 标签）
  - 待机音频（`"idle"` 标签）
- 此配置与 `IdleAudioConfig.json` 中的 `EnableIdleAudio` 配置是独立的：
  - `ModelAudioConfig.json` 控制是否使用模型音频（总开关）
  - `IdleAudioConfig.json` 中的 `EnableIdleAudio` 控制是否允许自动播放待机音频（仅影响待机音频的自动播放）
  - 如果 `ModelAudioConfig.json` 中禁用了模型音频，即使 `EnableIdleAudio` 为 `true`，待机音频也不会播放
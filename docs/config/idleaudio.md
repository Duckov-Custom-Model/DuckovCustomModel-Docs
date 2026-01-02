### IdleAudioConfig.json

待机音频自动播放间隔配置。**⚠️ 已升级至 v2 版本，旧格式已过时。**

```json
{
  "Version": 2,
  "TargetTypeIdleAudioIntervals": {
    "built-in:Character": { "Min": 30.0, "Max": 45.0 },
    "built-in:Pet": { "Min": 30.0, "Max": 45.0 },
    "built-in:AICharacter_*": { "Min": 30.0, "Max": 45.0 },
    "built-in:AICharacter_Cname_Wolf": { "Min": 20.0, "Max": 30.0 }
  },
  "TargetTypeEnableIdleAudio": {
    "built-in:Character": false,
    "built-in:Pet": true,
    "built-in:AICharacter_*": true
  }
}
```

- `Version`：配置文件版本（当前为 `2`）
- `TargetTypeIdleAudioIntervals`：字典类型，键为目标类型 ID（字符串格式），值为包含 `Min` 和 `Max` 的对象
  - `built-in:Character`：玩家角色的待机音频播放间隔（秒）
    - `Min`：最小间隔时间（默认：`30.0`）
    - `Max`：最大间隔时间（默认：`45.0`）
  - `built-in:Pet`：宠物角色的待机音频播放间隔（秒）
    - `Min`：最小间隔时间（默认：`30.0`）
    - `Max`：最大间隔时间（默认：`45.0`）
  - `built-in:AICharacter_*`：所有 AI 角色的默认间隔
  - `built-in:AICharacter_<角色名>`：特定 AI 角色的间隔配置
  - 系统会在最小值和最大值之间随机选择间隔时间

- `TargetTypeEnableIdleAudio`：字典类型，键为目标类型 ID（字符串格式），值为布尔值，控制该目标类型是否允许自动播放待机音频
  - `built-in:Character`：玩家角色是否允许自动播放待机音频（默认：`false`）
  - `built-in:Pet`：宠物角色是否允许自动播放待机音频（默认：`true`）
  - `built-in:AICharacter_*`：所有 AI 角色的默认值（默认：`true`）
  - `built-in:AICharacter_<角色名>`：特定 AI 角色的配置

**⚠️ 过时格式（v1）**：
- `IdleAudioIntervals` (Dictionary<ModelTarget, IdleAudioInterval>) - 已过时，使用 `TargetTypeIdleAudioIntervals` 替代
- `AICharacterIdleAudioIntervals` (Dictionary<string, IdleAudioInterval>) - 已过时，使用 `TargetTypeIdleAudioIntervals` 替代
- `EnableIdleAudio` (Dictionary<ModelTarget, bool>) - 已过时，使用 `TargetTypeEnableIdleAudio` 替代
- `AICharacterEnableIdleAudio` (Dictionary<string, bool>) - 已过时，使用 `TargetTypeEnableIdleAudio` 替代

**注意事项**：
- 最小间隔时间不能小于 0.1 秒
- 最大间隔时间不能小于最小间隔时间
- 只有配置了 `"idle"` 标签音效的模型才会自动播放待机音效
- 只有启用了自动播放的角色类型才会自动播放待机音效（通过 `EnableIdleAudio` 和 `AICharacterEnableIdleAudio` 配置控制）
- 玩家角色默认不允许自动播放待机音效，可以通过配置启用
### UsingModel.json

当前使用的模型配置。**⚠️ 已升级至 v2 版本，旧格式已过时。**

```json
{
  "Version": 2,
  "TargetTypeModelIDs": {
    "built-in:Character": "",
    "built-in:Pet": "",
    "built-in:AICharacter_*": "",
    "built-in:AICharacter_Cname_Wolf": "",
    "built-in:AICharacter_Cname_Scav": ""
  }
}
```

- `Version`：配置文件版本（当前为 `2`）
- `TargetTypeModelIDs`：字典类型，键为目标类型 ID（字符串格式，如 `"built-in:Character"`、`"built-in:Pet"`、`"built-in:AICharacter_*"` 或 `"built-in:AICharacter_<角色名>"`），值为模型 ID（字符串，为空时使用原始模型）
  - `built-in:Character`：当前使用的角色模型 ID
    - 设置后，游戏会在关卡加载时自动应用该模型到所有角色对象
    - 可通过模型选择界面修改，修改后会自动保存到此文件
  - `built-in:Pet`：当前使用的宠物模型 ID
    - 设置后，游戏会在关卡加载时自动应用该模型到所有宠物对象
    - 可通过模型选择界面修改，修改后会自动保存到此文件
  - `built-in:AICharacter_*`：所有 AI 角色的默认模型
    - 当某个 AI 角色没有单独配置模型时，会使用此默认模型
    - 如果此键也没有配置，则使用原始模型
  - `built-in:AICharacter_<角色名>`：特定 AI 角色的模型配置
    - 可以为每个 AI 角色单独配置模型
    - 可通过模型选择界面修改，修改后会自动保存到此文件

**⚠️ 过时格式（v1）**：
- `ModelIDs` (Dictionary<ModelTarget, string>) - 已过时，使用 `TargetTypeModelIDs` 替代
- `AICharacterModelIDs` (Dictionary<string, string>) - 已过时，使用 `TargetTypeModelIDs` 替代

**兼容性说明**：
- 系统会自动从 v1 格式迁移到 v2 格式
- 如果配置文件中存在旧的 `ModelID` 或 `PetModelID` 字段，系统会自动迁移到新的 `TargetTypeModelIDs` 字典格式
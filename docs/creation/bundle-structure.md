# 打包模型包

制作好模型后，需要打包成模型包方便我们的Mod使用。

## 模型包结构

每个模型包文件夹应包含以下文件：

<BundleStructure />

## bundleinfo.json 格式

```json [json]
{
  "BundleName": "模型包名称",
  "BundlePath": "modelbundle.assetbundle",
  "Models": [
    {
      "ModelID": "unique_model_id",
      "Name": "模型显示名称",
      "Author": "作者名称",
      "Description": "模型描述",
      "Version": "1.0.0",
      "ThumbnailPath": "thumbnail.png",
      "PrefabPath": "Assets/Model.prefab",
      "DeathLootBoxPrefabPath": "Assets/DeathLootBox.prefab",
      "TargetTypes": ["built-in:Character", "built-in:AICharacter_*"],
      "CustomSounds": [
        {
          "Path": "sounds/normal1.wav",
          "Tags": ["normal"]
        },
        {
          "Path": "sounds/normal2.wav",
          "Tags": ["normal"]
        },
        {
          "Path": "sounds/surprise.wav",
          "Tags": ["surprise", "normal"]
        },
        {
          "Path": "sounds/得吃的小曲.ogg",
          "Tags": ["search_found_item_quality_red"]
        },
        {
          "Path": "sounds/idle1.wav",
          "Tags": ["idle"]
        }
      ],
      "BuffAnimatorParams": {
        "HasBuff1": [
          { "Id": 123 },
          { "DisplayNameKey": "buff_key_1" }
        ],
        "HasBuff2": [
          { "Id": 456 }
        ]
      }
    }
  ]
}
```

## 字段说明

#### **BundleName**（必需）

模型包名称，用于标识和显示

#### **BundlePath**（必需）

AssetBundle 文件路径，相对于模型包文件夹的路径

#### **Models**（必需）

模型信息数组，可包含多个模型

#### **ModelInfo 字段**

- `ModelID`（必需）：模型的唯一标识符，用于在配置文件中引用模型，可以是数字，中文或英文

- `Name`（可选）：模型在界面中显示的名称

- `Author`（可选）：模型作者

- `Description`（可选）：模型描述信息

- `Version`（可选）：模型版本号

- `ThumbnailPath`（可选）：缩略图路径，相对于模型包文件夹的外部文件路径（如 `"thumbnail.png"`）

- `PrefabPath`（必需）：模型 Prefab 在打包 AssetBundle 时，在 Unity 内的资源路径（如 `"Assets/Model.prefab"`）

- `DeathLootBoxPrefabPath`（可选）：死亡战利品箱 Prefab 在打包 AssetBundle 时，在 Unity 内的资源路径（如 `"Assets/DeathLootBox.prefab"`）
  - 当角色使用该模型并死亡时，如果配置了此字段，死亡战利品箱会使用自定义的 Prefab 替换默认模型
  - 如果未配置此字段，死亡战利品箱将使用默认模型
  
- `TargetTypes`（可选）：模型适用的目标类型 ID 数组（默认：`["built-in:Character"]`）
  - 使用字符串格式的目标类型 ID，支持内置类型和扩展类型
  - 内置类型示例：`"built-in:Character"`（角色）、`"built-in:Pet"`（宠物）、`"built-in:AICharacter_*"`（所有 AI 角色）、`"built-in:AICharacter_<角色名>"`（特定 AI 角色）
  - 扩展类型示例：`"extension:CustomType"`（由第三方扩展注册的自定义类型）
  - 可以同时包含多个值，表示该模型同时适用于多个目标类型
  - 模型选择界面会根据当前选择的目标类型过滤显示兼容的模型
  - **示例**：
    - 适用于角色和所有 AI 角色：`["built-in:Character", "built-in:AICharacter_*"]`
    - 适用于特定 AI 角色：`["built-in:AICharacter_Cname_Wolf", "built-in:AICharacter_Cname_Scav"]`
    - 适用于角色、宠物和所有 AI 角色：`["built-in:Character", "built-in:Pet", "built-in:AICharacter_*"]`

**⚠️ 过时字段（v1.10.0 起已过时，但仍支持向后兼容）**：
- `Target`（可选）：模型适用的目标类型数组（已过时，使用 `TargetTypes` 替代）
  - 可选值：`"Character"`（角色）、`"Pet"`（宠物）、`"AICharacter"`（AI 角色标记）
  - 系统会自动从 `Target` 和 `SupportedAICharacters` 迁移到 `TargetTypes`
  - **注意**：`"AICharacter"` 只是一个标记，表示需要处理 `SupportedAICharacters`，它本身不会被转换为目标类型
- `SupportedAICharacters`（可选）：支持的 AI 角色名称键数组（已过时，使用 `TargetTypes` 替代）
  - 仅在 `Target` 包含 `"AICharacter"` 时有效
  - 可以指定该模型适用于哪些 AI 角色，具体请查看[AI 角色适配](/creation/ai-characters.md)
  - 特殊值 `"*"`：表示该模型适用于所有 AI 角色
  - 如果为空数组且 `Target` 包含 `"AICharacter"`，则该模型不会应用于任何 AI 角色
  - **重要**：如果 `Target` 中没有 `"AICharacter"` 标记，即使 `SupportedAICharacters` 有值，也不会被处理
  - 系统会自动将 `Target` 和 `SupportedAICharacters` 转换为 `TargetTypes` 格式（如 `"built-in:AICharacter_*"` 或 `"built-in:AICharacter_<角色名>"`）
  
- `CustomSounds`（可选）：自定义音效信息数组，支持为音效配置标签
  - 每个音效可以配置多个标签（`normal`、`surprise`、`death`）
  - 未指定标签时，默认为 `["normal"]`
  - 同一音效文件可以同时用于多个场景
  - 音效文件路径在 `Path` 中指定，相对于模型包文件夹
  - 具体标签信息请查看[添加自定义音效](./sounds.md#SoundInfo-字段说明)
- `SoundTagPlayChance`（可选）：音效标签播放概率配置
  - 字典类型，键为音效标签（不区分大小写），值为播放概率（0-100）
  - 当触发该标签的音效时，会根据配置的概率决定是否播放
  - 如果未配置或概率为 0，则始终播放（默认行为）
- `WalkSoundFrequency`（可选）：走路时每秒的脚步声触发频率
  - 用于控制角色走路时脚步声的播放频率
  - 如果未指定，将自动使用原始角色的走路脚步声频率设置
  
- `RunSoundFrequency`（可选）：跑步时每秒的脚步声触发频率
  - 用于控制角色跑步时脚步声的播放频率
  - 如果未指定，将自动使用原始角色的跑步脚步声频率设置
  
- `BuffAnimatorParams`（可选）：Buff 驱动的动画器参数配置<Badge type="success" text="new" />

  - 字典类型，键为动画器参数名称（bool 类型），值为 Buff 匹配条件数组
  - 当角色拥有匹配的 Buff 时，对应的动画器参数会被设置为 `true`，否则为 `false`
  - 每个条件可以指定 `Id`（Buff ID）或 `DisplayNameKey`（Buff 显示名称键），满足任意一个条件即可。具体的`DisplayNameKey`请查看[Buff_状态参数](../animator/bool-params.md#Buff_状态参数)
  - 示例配置：
    ```json [json]
    "BuffAnimatorParams": {
      "HasBuff1": [
        { "Id": 123 },
        { "DisplayNameKey": "buff_key_1" }
      ],
      "HasBuff2": [
        { "Id": 456 }
      ],
      "HasAnyBuff": [
        { "DisplayNameKey": "buff_key_1" },
        { "DisplayNameKey": "buff_key_2" }
      ]
    }

## 添加多个模型

可以在`Models`内添加多个模型，以下是酒狐Mod的示例`bundleinfo.json`文件。文件内添加了酒狐的`Character`模型和狐狸的`Pet`模型，同时两个模型都支持替换所有`AICharacter`模型。

```json [json]
{
  "BundleName": "jiuhu",
  "BundlePath": "jiuhu",
  "Models": [
    {
      "ModelID": "10004",
      "Name": "酒狐",
      "Author": "酒石酸菌",
      "Description": "酒狐模型",
      "Version": "1.0.12",
      "ThumbnailPath": "preview.png",
      "PrefabPath": "Assets/酒狐模型.prefab",
      "TargetTypes": [
        "built-in:Character", 
        "built-in:AICharacter_*"
      ],
      "CustomSounds": [
        {
          "Path": "sounds/idle1.ogg",
          "Tags": [
            "normal"
          ]
        },
        {
          "Path": "sounds/idle2.ogg",
          "Tags": [
            "normal"
          ]
        }
      ]
    },
    {
      "ModelID": "10005",
      "Name": "酒狐(狐狸形态)",
      "Author": "酒石酸菌",
      "Description": "酒狐狐狸模型",
      "Version": "1.0.12",
      "ThumbnailPath": "preview2.png",
      "PrefabPath": "Assets/酒狐狐狸.prefab",
      "TargetTypes": [
        "built-in:Pet",
        "built-in:AICharacter_*"
      ]
    }
  ]
}
```
<!-- 
## bundleinfo生成器

<BundleInfoEditor /> -->

## 下一步

完成打包模型包后，轮到我们的最后一步——[创建模组](./create-mod)，就快要成功了！

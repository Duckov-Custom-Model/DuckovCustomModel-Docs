# 战斗女仆 · 酒狐

在《逃离鸭科夫》中部署你的专属战斗女仆！拥有战术AI、技能树和深度定制功能。

模组作者：[**LOVEIII486**](https://space.bilibili.com/3553128)

## 模组简介

在《逃离鸭科夫》中部署你的专属战斗女仆！本模组可以为你带来可深度定制的AI战斗伙伴，她们拥有战术状态机、独立技能系统和可升级的战斗属性。

她们将成为你最坚实的后盾，在复杂多变的战场上为你提供火力支援、战术掩护、紧急治疗与物资搜刮服务！

**B站视频演示**: [BV1PBmYBpEHK](https://www.bilibili.com/video/BV1PBmYBpEHK)

**Bug/兼容性问题反馈群**: 1030349064

## 物品与召唤方式

女仆通过消耗特定的契约物品或瓶中女仆物品来召唤。大部分女仆物品在泥巴商人处出售。

所有女仆物品在商店中默认锁定，需要先在基地中的技能机处研究并解锁对应的技能节点。

### 召唤物品列表

| 图片                                                         | 物品名称<div style="width:100px;"></div> | ID    | 描述                                                         |
| ------------------------------------------------------------ | ---------------------------------------- | ----- | ------------------------------------------------------------ |
| <img src="/images/战斗女仆/MaidContract_WineFox.png" style="zoom:20%;" /> | **酒狐女仆契约**                         | 88000 | 召唤皇家女仆·酒狐。酒狐是唯一拥有持久化数据的战斗女仆，其属性将随着女仆战术科技技能树的解锁而永久提升。此物品不消耗，但拥有120秒的冷却时间。 |
| <img src="/images/战斗女仆/VialMaid_I.png" style="zoom:20%;" /> | **瓶中女仆·I型**                         | 88001 | 一次性消耗品。召唤基础配置的临时支援女仆，适用于应急作战。   |
| <img src="/images/战斗女仆/VialMaid_I.png" style="zoom:20%;" /> | **瓶中女仆·II型**                        | 88002 | 一次性消耗品。召唤进阶配置的临时支援女仆。                   |
| <img src="/images/战斗女仆/VialMaid_II.png" style="zoom:20%;" /> | **瓶中女仆·III型**                       | 88003 | 一次性消耗品。召唤高级配置的临时支援女仆，适用于快速撤离。   |
| <img src="/images/战斗女仆/VialMaid_III.png" style="zoom:20%;" /> | **酒狐御制回复药**                       | 88101 | 酒狐以秘法酿造的恢复药剂，专用于快速修复受损的魔力躯体与生命核心。（于佛哥商店出售） |
| <img src="/images/战斗女仆/MaidRecallBell.png" style="zoom:20%;" /> | **女仆召回铃**                           | 88102 | 摇响铃铛，命令所有当前跟随的女仆撤退。此物品不会消耗。       |
| <img src="/images/战斗女仆/ArmorRepairPotion.png" style="zoom:20%;" /> | **酒狐的魔力抛光剂**                     | 88103 | 酒狐女仆擦拭魔具的秘方，可以在战场中快速修复装备耐久。（于佛哥商店出售） |
| <img src="/images/战斗女仆/MaidScanner.png" style="zoom:20%;" /> | **战斗女仆体检套装**                     | 88104 | 用于给女仆进行简单体检，反馈实时生理指标。支持多次使用。     |

## 女仆战术科技

你可以在基地内的技能机处，通过 **战斗女仆: 战术技能** 交互选项进入技能树。解锁的技能和属性将永久提升酒狐的属性。

### 技能树分类

#### 属性增强
- 生命值提升
- 物理减伤
- 伤害输出
- 移动速度
- 耐力回复

#### 技能解锁
- 自动修复模块技能
- 投掷物演算技能
- 增益契约技能
- 小队协同被动技能

#### 装备管理
- **酒狐战备行囊管理**: 解锁后可以完全自由的管理女仆的装备和背包空间！



### 科技树展示

这里展示了酒狐的所有可升级战术节点。

![SkillTree](/images/SkillTree.png)

## 指挥手册

你可以在游戏设置中调整这些指令按键，以下为核心功能：

| 指令             | 默认按键 | 功能描述                                                     |
| ---------------- | -------- | ------------------------------------------------------------ |
| **聚焦**         | 鼠标左键 | 瞄准敌人时，锁定目标为集火目标。所有女仆的小队协同被动技能将使其优先攻击该目标。 |
| **移动指令**     | G        | 命令女仆移动到你鼠标瞄准的位置，进入战术移动状态。           |
| **强制治疗**     | H        | 命令所有女仆立即尝试使用背包内的医疗物品。                   |
| **切换驻守**     | J        | 在驻守模式（原地守卫）和自主模式（跟随主人自由战斗）间切换。 |
| **搜刮指令**     | L        | 命令女仆进入搜刮模式，在周围8m区域内自动收集物资。           |
| **吐出战利品**   | K        | 命令女仆清空搜刮模式中获得的所有战利品。                     |
| **管理酒狐背包** | B        | 打开酒狐的背包，自由的存取管理女仆的装备。                   |
| **和平模式**     | Z        | 使所有女仆进入和平模式，停止搜索攻击敌人。                   |

## 模组特点

- **持续成长的伙伴** — 酒狐女仆拥有独立存档和技能树升级路径
- **深度定制的AI** — 可通过配置文件全面调整女仆的属性和装备
- **智能的女仆行为** — 包含精心设计并优化的状态机以让女仆更加智能
- **自由安全的女仆装备管理** — 酒狐女仆拥有独立装备数据存档，玩家可以自由选择配置装备，支持改枪和部分mod武器
- **自定义模型支持** — 完全兼容 DuckovCustomModel 模组，可以自由选择模型

## 模组加载顺序

请确保按以下顺序加载模组，以保证各依赖正确生效：

1. HarmonyLib
2. ModSetting
3. 快速模组开发库
4. DuckovCustomModel
5. 战斗女仆·酒狐

::: warning
如果出现闪退情况，请尽可能将战斗女仆mod本体放在靠后的位置！
:::

## 重要备注

::: warning
以下事项请特别注意，以获得最佳游戏体验。
:::

### 数值修改与存档

如果你希望修改酒狐的数值或物品，请直接修改 `CombatMaidSaves\WineFox_Data.json` 文件（至少召唤一次才会生成）。但是修改后科技树的相关加成可能会不符合预期的设计，请自行承担风险。

#### WineFox_Data.json

```json [json]
{
  "ProfileName": "RoyalMaid_WineFox",
  "PresetConfig": {
    "CustomName": "皇家女仆·酒狐",
    "IsBossIcon": true,
    "ShowName": true,
    "ShowHealthBar": true,
    "Health": 100.0,
    "MoveSpeedFactor": 1.2,
    "HasSoul": true,
    "Exp": 0,
    "PushCharacter": true,
    "CustomItemIDs": [ 254, 594, 15, 32, 41, 36 ],
    "WantItem": -1,
    "DropBoxOnDead": false,
    "HasCashChance": 0.0,
    "CashRange": { "x": 0, "y": 0 },
    "InventoryCapacity": 35.0,
    "SightDistance": 14.0,
    "SightAngle": 100.0,
    "HearingAbility": 1.1,
    "NightVisionAbility": 0.5,
    "ForgetTime": 8.0,
    "ReactionTime": 0.55,
    "NightReactionTimeFactor": 1.5,
    "ShootDelay": 0.25,
    "ShootTimeRange": { "x": 0.4, "y": 0.8 },
    "ShootTimeSpaceRange": { "x": 0.8, "y": 2.2 },
    "ShootCanMove": false,
    "DefaultWeaponOut": true,
    "PatrolRange": 8.0,
    "CombatMoveRange": 8.0,
    "CombatMoveTimeRange": { "x": 1.0, "y": 3.0 },
    "PatrolTurnSpeed": 720.0,
    "CombatTurnSpeed": 1440.0,
    "CanDash": true,
    "DashCoolTimeRange": { "x": 2.0, "y": 4.0 },
    "CanTalk": true,
    "DamageMultiplier": 1.1,
    "BulletSpeedMultiplier": 1.0,
    "GunDistanceMultiplier": 1.0,
    "GunScatterMultiplier": 0.5,
    "ScatterMultiIfTargetRunning": 3.0,
    "ScatterMultiIfOffScreen": 4.0,
    "GunCritRateGain": 0.0,
    "AiCombatFactor": 1.5,
    "SetActiveByPlayerDistance": true,
    "ForceTracePlayerDistance": 0.0,
    "MinTraceTargetChance": 0.1,
    "MaxTraceTargetChance": 0.8,
    "HasSkill": false,
    "HasSkillChance": 1.0,
    "SkillSuccessChance": 1.0,
    "SkillCoolTimeRange": { "x": 1.0, "y": 1.0 },
    "ResistPhysics": 1.0,
    "ResistFire": 1.0,
    "ResistPoison": 1.0,
    "ResistElectricity": 1.0,
    "ResistSpace": 1.0,
    "ResistGhost": 1.0,
    "HeadArmor": 0.0,
    "BodyArmor": 0.0
  },
  "ExtraData": {
    "Description": "皇家女仆·酒狐 - 会不断升级的契约女仆",
    "BasePresetKey": "Cname_Speedy",
    "CustomModelID": "10004",
    "TacticalMode": "Assault",
    "Skills": [
      {
        "SkillID": "SelfHeal",
        "Params": {}
      },
      {
        "SkillID": "GrenadeThrow",
        "Params": { "ItemIDs": [ 67, 66 ] }
      },
      {
        "SkillID": "VanillaBuff",
        "Params": { "BuffIDs": [ 1101, 1018, 1013, 1084, 1017 ] }
      }
    ],
    "AppliedModifierKeys": [
      "maid_survival_health_1#0",
      "maid_skill_selfheal#0",
      "maid_skill_grenade#0",
    ]
  },
  "Inventory": {
    "Equipment": [
      { "TypeID": 655, "SlotIndex": 0, "SlotKey": "PrimaryWeapon", "Count": 1, "Durability": 100.0, "DurabilityLoss": 0.0, "MaxDurability": 100.0, "FromInfoKey": "Unknown", "Inspected": true, "CustomVariables": [ { "Key": "BulletCount", "TypeEnumVal": 2, "RawBytes": "JAAAAA==" }, { "Key": "IsGun", "TypeEnumVal": 3, "RawBytes": "AQ==" } ], "Attachments": [ ... ], "InnerContainer": [ ... ] },
      { "TypeID": 45, "SlotIndex": 0, "SlotKey": "Helmat", "Count": 1, "Durability": 53.77, "MaxDurability": 75.0, ... },
      { "TypeID": 35, "SlotIndex": 0, "SlotKey": "Armor", "Count": 1, "Durability": 37.84, "MaxDurability": 120.0, ... },
      { "TypeID": 1252, "SlotKey": "Headset", ... },
      { "TypeID": 1166, "SlotKey": "Backpack", ... },
      { "TypeID": 957, "SlotKey": "Totem1", ... },
      { "TypeID": 434, "SlotKey": "Totem2", ... },
      { "TypeID": 451, "SlotKey": "Cash", ... },
      { "TypeID": 15, "SlotKey": "Medic", ... },
      { "TypeID": 836, "SlotKey": "Key", ... }
    ],
    "InventoryContent": [
      { "TypeID": 88101, "SlotIndex": 0, "Count": 1, "Durability": 3.0, "MaxDurability": 6.0, ... },
    ]
  }
}

```

### 2. 字段说明

::: tip
由AI生成，可能不准确。
:::

#### **ProfileName (必需)**

存档配置文件的唯一标识符。

- 示例值: `"RoyalMaid_WineFox"`
- 说明：用于系统内部识别该角色配置，对应女仆的独立存档文件。

#### **PresetConfig (必需)**

角色的基础属性与AI行为配置对象。

- **CustomName**: 角色在游戏中显示的名称。
- **IsBossIcon**: 是否在地图或UI上显示为 Boss 图标。
- **ShowName**: 是否在角色头顶显示名称。
- **ShowHealthBar**: 是否显示血条。
- **Health**: 基础生命值。100.0 为基础值，实际值会受到 `AppliedModifierKeys` 修正。
- **MoveSpeedFactor**: 移动速度倍率。
- **InventoryCapacity**: 背包负重/容量限制。
- **SightDistance**: 视觉索敌距离。
- **HearingAbility**: 听觉灵敏度，数值越高越容易听到动静。
- **NightVisionAbility**: 夜视能力，夜间视野受限系数。
- **ReactionTime**: 发现敌人后的反应延迟。
- **ShootDelay**: 开火前的瞄准延迟。
- **ShootTimeRange**: 连续射击持续时间范围，控制点射或扫射的节奏。
- **PatrolRange**: 巡逻半径。
- **CombatMoveRange**: 战斗时的移动半径。
- **CanDash**: 是否允许使用冲刺/滑铲动作。
- **DamageMultiplier**: 伤害输出倍率。
- **GunScatterMultiplier**: 枪械散布/后坐力系数。
- **AiCombatFactor**: AI 战斗强度系数，影响攻击频率和激进程度。
- **DropBoxOnDead**: 死亡时是否掉落战利品箱。
- **Resist**: 各类伤害抗性（Physics-物理, Fire-火, Poison-毒 等），1.0 为无减免。

#### **ExtraData (必需)**

战斗女仆模组专用的扩展数据，用于存储技能树状态和特殊配置。

- **Description**: 角色的描述文本。
- **BasePresetKey**: 基础AI行为模板。
- **CustomModelID**: 自定义模型ID。
- **TacticalMode**: 当前的战术模式。
- **Skills**: 角色拥有的技能列表。
- **AppliedModifierKeys**: 关键字段，已激活的科技树节点列表。
  - 该数组记录了玩家在基地技能机处解锁的所有科技。
  - 例如 `"maid_backpack_upgrade_1#0"` 对应 **酒狐战备行囊管理** 解锁。
  - **注意**：修改此字段可直接影响女仆拥有的被动加成。

#### **Inventory (必需)**

角色的物品与装备数据。

**1. Equipment (装备栏)** ：包含当前穿戴的装备，每个对象包含 `TypeID` (物品ID)、`SlotKey` (装备槽位)、`Durability` (耐久度) 等。

- **PrimaryWeapon**(主武器)
- **Helmat** (头盔)
- **Armor** (护甲)
- **Backpack**(背包)
- **Medic** (医疗栏)
- **Headset** (耳机)
-  **Totem** (图腾)
- **Cash** (现金) 等

**2. InventoryContent (背包内容)** ：背包格子内的物品列表。

### 自定义模型配置

如果你需要修改女仆的自定义模型，请在配置文件中正确填写自定义模型ID。可以在DCM窗口中查阅指定模型ID，默认为 `酒狐: 10004`。

### 搜刮物品管理

- 女仆处于战斗中死亡但是身上携带搜刮模式物资时，会自动吐出
- 切换场景不会保存搜刮物品，请务必确认撤离前已经拾取搜刮物品

### 版本与更新

当前战斗女仆模组已经进入正式版，不会大幅改动底层框架，但不排除未来新增科技树节点的情况。为避免可能的冲突，请注意备份 `CombatMaidSaves` 存档。

### 装备功能限制

当前酒狐的行囊管理功能仅部分支持存储 **【武器词缀】** 这类模组的数据。仅当局内生效，重新召唤会丢失词缀效果（但是拿到玩家背包后可以重新附魔）。

### 已知兼容性问题

| 冲突模组                                                     | 问题描述             | 解决方案                               |
| ------------------------------------------------------------ | -------------------- | -------------------------------------- |
| [快速自动拾取](https://steamcommunity.com/sharedfiles/filedetails/?id=3593624580) | 女仆装备管理界面冲突 | 已添加临时补丁                         |
| 堆叠调整模组                                                 | 召唤道具堆叠数量冲突 | 将女仆道具全部添加到堆叠黑名单         |
| [史诗级背包扩容](https://steamcommunity.com/sharedfiles/filedetails/?id=3595314238) | 部分冲突             | 使用时必须确保玩家背包在第一页后再打开 |

### 地形限制

战术移动指令在农场镇的三个厂房地形无法正常使用，暂时没找到好办法解决。



## 声明

出于制作周期考虑，本模组技能树图标资源和物品图标资源使用了ChatGPT辅助生成。后期有时间会考虑使用人工设计的更精致的图标替换。
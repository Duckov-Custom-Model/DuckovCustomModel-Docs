# Bool 类型参数

布尔类型参数用于控制状态切换，值为 `true` 或 `false`。

## 基础状态参数

### Grounded
角色是否在地面上

- `true`：角色在地面上
- `false`：角色在空中（跳跃、下落）

### Die
角色是否死亡

- `true`：角色已死亡
- `false`：角色存活

### Moving
角色是否正在移动

- `true`：角色正在移动
- `false`：角色静止

### Running
角色是否正在奔跑

- `true`：角色正在奔跑
- `false`：角色正常行走或静止

### Dashing
角色是否正在冲刺

- `true`：角色正在冲刺
- `false`：角色未冲刺

### Hidden
角色是否处于隐藏状态

- `true`：角色隐藏
- `false`：角色可见

## 武器相关参数

### GunReady
枪械是否准备就绪

- `true`：枪械准备就绪
- `false`：枪械未准备就绪

### Loaded
枪械是否已装弹

- **更新机制**：当持有 `ItemAgent_Gun` 时，由 `OnLoadedEvent` 事件更新
- `true`：枪械已装弹
- `false`：枪械未装弹或空弹

### Reloading
是否正在装弹

- `true`：正在装弹
- `false`：未在装弹

### RightHandOut
右手是否伸出

- `true`：右手伸出
- `false`：右手收回

### InAds
是否正在瞄准（ADS - Aim Down Sights）

- `true`：正在瞄准
- `false`：未瞄准

## 动作状态参数

### ActionRunning
是否正在执行动作

- **判断依据**：由 `CharacterMainControl.CurrentAction` 决定
- `true`：正在执行动作
- `false`：未执行动作

::: tip
可以配合 `ActionPriority`（Int 参数）来判断具体执行的动作类型
:::

## 装备相关参数

### HideOriginalEquipment
是否隐藏原有装备

- **控制方式**：由 `HideEquipmentConfig.json` 中对应 `ModelTarget` 的配置控制
- `true`：隐藏原有装备
- `false`：显示原有装备

### 装备槽位参数

以下参数基于装备的 TypeID 判断（TypeID > 0 时为 `true`）：

| 参数               | 说明                   |
| ------------------ | ---------------------- |
| `LeftHandEquip`    | 左手槽位是否有装备     |
| `RightHandEquip`   | 右手槽位是否有装备     |
| `ArmorEquip`       | 护甲槽位是否有装备     |
| `HelmetEquip`      | 头盔槽位是否有装备     |
| `HeadsetEquip`     | 耳机槽位是否有装备     |
| `FaceEquip`        | 面部槽位是否有装备     |
| `BackpackEquip`    | 背包槽位是否有装备     |
| `MeleeWeaponEquip` | 近战武器槽位是否有装备 |

## Buff 状态参数

### BuffAnimatorParams

支持通过 Buff ID 或 DisplayNameKey 匹配 Buff，满足任意条件即可触发参数。

- `true`：持有Buff
- `false`：未持有Buff

| DisplayNameKey                     | ID   | 描述                                         |
| ---------------------------------- | ---- | -------------------------------------------- |
| Buff_AddSpeed                      | 1011 | 加速（提升移动速度）                         |
| Buff_BleedS                        | 1001 | 出血（持续流失血量）                         |
| Buff_Starve                        | 1032 | 饥饿（回复能力降低，持续身体损伤）           |
| Buff_Stun                          | 1041 | 震慑（受到震慑，行动力影响）                 |
| Buff_Thirsty                       | 1    | 脱水（严重脱水，机能降低）                   |
| Buff_Weight_Heavy                  | 1022 | 负重（物品较重，移动受到影响）               |
| Buff_Weight_Light                  | 1021 | 轻盈（负重较低，灵活）                       |
| Buff_Weight_Overweight             | 1024 | 无法承受（重量过大）                         |
| Buff_Weight_SuperHeavy             | 1023 | 超重（物品过重，影响速度以及水分消耗）       |
| Buff_PoisonS                       | 1061 | 中毒（持续伤害，降低回复量）                 |
| Buff_Electric                      | 1071 | 触电（因为麻痹而减少移动速度）               |
| Buff_Pain                          | 1081 | 疼痛（疼痛会让角色失力，并降低移动能力）     |
| Buff_PainResistShort               | 1082 | 镇静（无视疼痛，持续60秒）                   |
| Buff_PainResistMiddle              | 1083 | 镇静（无视疼痛，持续180秒）                  |
| Buff_PainResistLong                | 1084 | 镇静（无视疼痛，持续300秒）                  |
| Buff_ElecResistShort               | 1072 | 抗电（受到的电伤害降低）                     |
| Buff_HotBlood                      | 1091 | 热血（提高耐力，但水分消耗变多）             |
| Buff_Happy                         | 1101 | 高兴（今个真高兴）                           |
| Buff_Base                          | 1051 | 基地                                         |
| Buff_NightVision                   | 1201 | 明视（略微增加夜间可见度）                   |
| Buff_Burn                          | 1121 | 点燃（受到持续伤害且护甲降低）               |
| Buff_Space                         | 1111 | 扰动（感觉...不太对劲）                      |
| Buff_InjectorArmor                 | 1013 | 硬化（提高少量护甲）                         |
| Buff_InjectorStamina               | 1014 | 持久（提高耐力回复和水分消耗，降低耐力消耗） |
| Buff_InjectorMeleeDamage           | 1015 | 力量（提高近战伤害80%）                      |
| Buff_InjectorMeleeDamageDebuff     | 1016 | 萎靡（降低近战伤害30%）                      |
| Buff_Space2                        | 1112 | 扭曲（周围空间在坍缩）                       |
| Buff_StormProtection1              | 1113 | 弱效空间抵抗（免疫扰动）                     |
| Buff_StormProtection2              | 1114 | 强效空间抵抗（免疫扭曲）                     |
| Buff_SpaceResistLow                | 1115 | 空间减伤（小）（小幅减少受到的空间伤害）     |
| Buff_SpaceResistHigh               | 1116 | 空间减伤（大）（较大幅降低受到的空间伤害）   |
| Buff_InjectorRecoilControl         | 1017 | 强翅（提高后坐力与散布控制）                 |
| Buff_Heal                          | 1018 | 回复（持续回复血量）                         |
| Buff_PaperBox                      | 1202 | 伪装（站着不动，就没人能发现你）             |
| Buff_Space3                        | 1117 | 碎裂（属性全方面下降）                       |
| Buff_Hurt                          | 1401 | 干枯（装备正在持续汲取你的力量）             |
| Buff_BleedResist                   | 1491 | 出血免疫（不会陷入出血状态）                 |
| Buff_PoisonResist                  | 1492 | 免疫中毒（不会陷入中毒状态）                 |
| Buff_ElecResist                    | 1493 | 免疫感电（不会陷入感电状态）                 |
| Buff_BurnResist                    | 1494 | 免疫点燃（不会陷入点燃状态）                 |
| Buff_SpaceResist                   | 1495 | 免疫碎裂（不会陷入碎裂状态）                 |
| Buff_PoisonLow                     | 1122 | 弱毒（持续受到伤害，毒性较低）               |
| Buff_Nauseous                      | 1123 | 恶心（犯恶心，持续流失水分和能量）           |
| Buff_NauseousResist                | 1496 | 免疫恶心（不会犯恶心了）                     |
| Buff_FireResistShort               | 1074 | 抗火（受到的火伤害降低）                     |
| Buff_PoisonResistShort             | 1075 | 抗毒（受到的毒伤害降低）                     |
| Buff_SpaceResistShort              | 1076 | 抗空间（受到的空间伤害降低）                 |
| Buff_Rage                          | 1093 | 愤怒（移速与近战伤害提高）                   |
| Buff_RageTrigger                   | 1092 | 易怒（受到伤害时，移速与近战伤害提高）       |
| Buff_StunResist                    | 1497 | 免疫震慑（不会陷入震慑状态）                 |
| Buff_equip_FC_Buff                 | 1402 | 高手（伤害提高）                             |
| Buff_Buff_RedEye                   | 1499 | \?\?\?（身体护甲：+0.5<br/>头部护甲：+0.5<br/>枪械伤害倍率：+10%<br/>枪械暴击率：+0.1<br/>近战暴击率：+0.1<br/>近战暴击伤害：+0.1<br/>感知距离：+1.5<br/>最大生命值：+15）                             |
| Buff_BoneCrack                     | 1003 | 骨折（持续疼痛，奔跑会受伤，降低生命上限）   |
| Buff_Wound                         | 1004 | 创伤（减少生命上限）                         |
| Buff_Totem_Describe_hurt           | 1900 | 图腾诅咒（持续流失生命值）                   |
| Buff_Ghost                         | 1124 | 害怕（受到持续伤害且枪械和近战伤害降低）     |
| Buff_Burnbig                       | 1125 | 燃烧                                         |
| Buff_GhostResist                   | 1498 | 免疫害怕（不会陷入害怕状态）                 |
| Buff_InjectorMaxWeight             | 1012 | 负重提升                                     |
| Buff_Injector_BleedResist          | 1019 | 出血免疫                                     |
| Buff_ElectricGrenade               | 1073 | 触电                                         |
| Buff_Totem_Heal1                   | 1481 | 回复                                         |
| Buff_Boss_Heal_StormFire           | 1301 | 回复                                         |
| Buff_Boss_Heal_StormSpace          | 1302 | 回复                                         |
| Buff_Injector_HotBlood_Trigger     | 1092 | 易怒                                         |
| Buff_Injector_HotBlood_SpeedDamage | 1093 | 愤怒                                         |
| Buff_Boss_Trigger_School           | 1303 | 易怒                                         |
| Buff_Boss_SpeedDamage_School       | 1304 | 愤怒                                         |
| Buff_equip_FC_Remove               | 1403 | 高手                                         |
| Buff_Boss_Hurt_StormSpace          | 1305 | 干枯                                         |
| Buff_Boss_Hurt_StormFire           | 1306 | 干枯                                         |
| Buff_BleedUnlimit                  | 1002 | 出血                                         |
| Buff_Boss_RedBoss                  | 1307 | *Buff_Red*                                   |
| Buff_PaperBoxMelee                 | 1204 | 伪装                                         |

## 控制相关参数

- IsPlayerControlling

  角色是否为当前玩家正在操作的角色

  - `true`：是
  - `false`：否

  ### IsVehicle

  角色是否为载具

  - `true`：角色为载具
  - `false`：角色不是载具

  ### IsControllingOtherCharacter

  角色是否正在控制其他角色

  - `true`：是
  - `false`：否

  ### IsControllingVehicle

  角色是否正在控制载具（为 `true` 时，`IsControllingOtherCharacter` 必定为 `true`）

  - `true`：是
  - `false`：否



## 其他参数

### ThermalOn
热成像是否开启

- `true`：热成像开启
- `false`：热成像关闭

### HavePopText
是否有弹出文本

- **检测方式**：检测弹出文本槽位是否有子对象
- `true`：有弹出文本
- `false`：无弹出文本

## 相关文档

- [Float 参数](/animator/float-params)
- [Int 参数](/animator/int-params)
- [Trigger 参数](/animator/trigger-params)
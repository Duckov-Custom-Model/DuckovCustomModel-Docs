# 迁移指南

`v1.10.0`进行了大规模 API 重构，引入了新的目标类型系统以支持第三方扩展。**大量 API 已标记为过时**，建议尽快迁移到新 API。

## 基本迁移步骤

1. ### **替换枚举为字符串标识符**
   
   ```csharp [csharp]
   // 旧代码
   ModelTarget.Character
   
   // 新代码
   ModelTargetType.Character
   ```
   
2. ### **更新方法调用**
   
   ```csharp [csharp]
   // 旧代码
   usingModel.GetModelID(ModelTarget.Character);
   
   // 新代码
   usingModel.GetModelID(ModelTargetType.Character);
   ```
   
3. ### **处理 AI 角色**
   
   ```csharp [csharp]
   // 旧代码
   usingModel.GetAICharacterModelID("Character_Duck");
   
   // 新代码
   var targetTypeId = ModelTargetType.CreateAICharacterTargetType("Character_Duck");
   usingModel.GetModelID(targetTypeId);
   ```
   
4. ### **更新事件处理**
   
   ```csharp [csharp]
   // 旧代码
   void OnModelChanged(ModelChangedEventArgs e)
   {
       if (e.Target == ModelTarget.Character) { ... }
   }
   
   // 新代码
   void OnModelChanged(ModelChangedEventArgs e)
   {
       if (e.TargetTypeId == ModelTargetType.Character) { ... }
   }
   ```

## 配置文件迁移

所有配置文件会自动从旧格式迁移到新格式。迁移会在首次加载时自动执行，无需手动操作。

## ModelInfo 配置迁移

在 `bundleinfo.json` 中，`Target` 和 `SupportedAICharacters` 会自动迁移到 `TargetTypes`：

**示例 1**：基本迁移
```json [json]
// 旧格式
{
  "Target": ["Pet", "AICharacter"],
  "SupportedAICharacters": ["Cname_Wolf"]
}

// 迁移后（自动）
{
  "TargetTypes": ["built-in:Pet", "built-in:AICharacter_Cname_Wolf"]
}
```

**示例 2**：没有 AICharacter 标记
```json [json]
// 旧格式
{
  "Target": ["Pet"],
  "SupportedAICharacters": ["Cname_Wolf"]  // 会被忽略
}

// 迁移后（自动）
{
  "TargetTypes": ["built-in:Pet"]
}
```

**示例 3**：AICharacter 标记但 SupportedAICharacters 为空
```json [json]
// 旧格式
{
  "Target": ["Pet", "AICharacter"],
  "SupportedAICharacters": []
}

// 迁移后（自动）
{
  "TargetTypes": ["built-in:Pet"]
}
```

## 向后兼容性

- 所有过时 API 仍然可用，但会在编译时显示警告
- 配置文件会自动从旧格式迁移到新格式
- 现有代码可以继续工作，但建议尽快迁移到新 API
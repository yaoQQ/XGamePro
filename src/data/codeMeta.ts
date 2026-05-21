// Auto-generated code metadata for XGame Unity Project
// This file contains all classes, interfaces, inheritance edges, and module definitions

// ============================================================
// Type Definitions
// ============================================================

export interface CodeMethod {
  name: string;
  returnType: string;
  parameters: string[];
  accessModifier: 'public' | 'protected' | 'private';
  description: string;
  isStatic: boolean;
}

export interface CodeProperty {
  name: string;
  type: string;
  description: string;
}

export interface CodeClass {
  id: string;
  name: string;
  namespace: string;
  type: 'class' | 'abstract_class' | 'interface' | 'struct' | 'enum' | 'static_class';
  description: string;
  filePath: string;
  baseClass?: string;
  interfaces: string[];
  methods: CodeMethod[];
  properties: CodeProperty[];
}

export interface InheritanceEdge {
  source: string;
  target: string;
  type: 'inherits' | 'implements';
}

export interface ModuleInfo {
  id: string;
  name: string;
  description: string;
  layer: 'framework' | 'network' | 'entity' | 'module' | 'business' | 'ui' | 'editor' | 'sdk' | 'update';
  keyClasses: string[];
  dependencies: string[];
}

export interface CodeMetaData {
  classes: CodeClass[];
  edges: InheritanceEdge[];
  modules: ModuleInfo[];
}

// ============================================================
// Helper: Create class with defaults
// ============================================================

function cls(
  id: string,
  name: string,
  ns: string,
  type: CodeClass['type'],
  desc: string,
  filePath: string,
  opts: Partial<Omit<CodeClass, 'id' | 'name' | 'namespace' | 'type' | 'description' | 'filePath'>> = {}
): CodeClass {
  return {
    id, name, namespace: ns, type, description: desc, filePath,
    interfaces: [], methods: [], properties: [],
    ...opts,
  };
}

function method(
  name: string,
  returnType: string,
  parameters: string[],
  accessModifier: CodeMethod['accessModifier'] = 'public',
  description = '',
  isStatic = false
): CodeMethod {
  return { name, returnType, parameters, accessModifier, description, isStatic };
}

function prop(name: string, type: string, description = ''): CodeProperty {
  return { name, type, description };
}

// ============================================================
// Data
// ============================================================

export const codeMetaData: CodeMetaData = {
  classes: [
    // ==========================================================
    // XClient.Common
    // ==========================================================
    cls('XClient.Common.IGame', 'IGame', 'XClient.Common', 'interface', 'Game接口文件', 'XClient/Common/IGame.cs', {
      properties: [
        prop('GlobalTransform', 'Transform', '全局Transform'),
        prop('GameStateManager', 'IGameStateManager', '游戏状态管理器'),
        prop('UnityObjectPool', 'IUnityObjectPool', 'Unity对象池'),
        prop('TimerManager', 'ITimerManager', '定时器管理器'),
        prop('EventEngine', 'IEventEngine', '事件引擎'),
        prop('SchemeModule', 'ISchemeModule', '配置模块'),
        prop('NetModule', 'INetModule', '网络模块'),
        prop('AudioCom', 'IAudioCom', '音频组件'),
      ],
      methods: [
        method('GetCom', 'ICom', ['int nID'], 'public', '获取组件'),
        method('GetModule', 'IModule', ['int nModuleID'], 'public', '获取模块'),
      ],
    }),
    cls('XClient.Common.IGameComAndModule', 'IGameComAndModule', 'XClient.Common', 'interface', '组件与模块获取接口', 'XClient/Common/IGameComAndModule.cs', {
      methods: [
        method('GetCom', 'ICom', ['int ID'], 'public', '获取组件'),
        method('GetModule', 'IModule', ['int ID'], 'public', '获取模块'),
      ],
    }),
    cls('XClient.Common.IModule', 'IModule', 'XClient.Common', 'interface', '模块基类', 'XClient/Common/IModule.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
      properties: [
        prop('ModuleName', 'string', '模块名称'),
        prop('State', 'int', '模块状态'),
        prop('Progress', 'float', '模块进度'),
      ],
      methods: [
        method('OnGameStateChange', 'void', ['int', 'int'], 'public', '游戏状态变化回调'),
        method('FixedUpdate', 'void', [], 'public', '固定帧更新'),
        method('LateUpdate', 'void', [], 'public', '延迟更新'),
        method('Clear', 'void', ['int'], 'public', '清理'),
        method('OnRoleDataReady', 'void', [], 'public', '角色数据就绪'),
      ],
    }),
    cls('XClient.Common.INetModule', 'INetModule', 'XClient.Common', 'interface', '网络模块接口', 'XClient/Common/INetModule.cs', {
      baseClass: 'IModule',
      interfaces: ['IModule', 'IMessageDispatcher'],
      methods: [
        method('GetLatency', 'uint', [], 'public', '获取延迟'),
        method('SetKick', 'void', ['bool'], 'public', '设置踢出'),
        method('ReConnect', 'void', ['bool'], 'public', '重连'),
        method('Connect', 'bool', ['string', 'int', 'int'], 'public', '连接服务器'),
        method('Disconnect', 'void', [], 'public', '断开连接'),
        method('OnReceiveMsg', 'void', ['TCSMessage'], 'public', '接收消息'),
        method('SendMessage_CS', 'void', ['byte', 'byte', 'TCSMessage'], 'public', '发送CS消息'),
        method('IsConnected', 'bool', [], 'public', '是否已连接'),
        method('StartPing', 'void', ['bool', 'bool', 'Action'], 'public', '开始Ping'),
        method('PingServer', 'void', ['bool', 'Action'], 'public', 'Ping服务器'),
      ],
    }),
    cls('XClient.Common.IMessageDispatcher', 'IMessageDispatcher', 'XClient.Common', 'interface', '消息分发器接口', 'XClient/Common/IMessageDispatcher.cs', {
      methods: [
        method('AddMessageHandler', 'void', ['uint', 'OnMessageSink', 'string'], 'public', '添加消息处理器'),
        method('RemoveMessageHandler', 'void', ['uint', 'OnMessageSink'], 'public', '移除消息处理器'),
        method('AddGatewayMessageHandler', 'void', ['uint', 'OnHandleGatewayMessage', 'string'], 'public', '添加网关消息处理器'),
      ],
    }),
    cls('XClient.Common.ISchemeModule', 'ISchemeModule', 'XClient.Common', 'interface', '配置中心', 'XClient/Common/ISchemeModule.cs', {
      methods: [
        method('LoadScheme', 'void', ['string'], 'public', '加载配置'),
        method('GetScheme', 'object', ['string'], 'public', '获取配置'),
      ],
    }),
    cls('XClient.Common.IGameStateManager', 'IGameStateManager', 'XClient.Common', 'interface', '游戏状态管理', 'XClient/Common/IGameStateManager.cs', {
      methods: [
        method('GetState', 'int', [], 'public', '获取当前状态'),
        method('EnterLogin', 'bool', [], 'public', '进入登录'),
        method('EnterGame', 'bool', [], 'public', '进入游戏'),
        method('EnterBattle', 'bool', [], 'public', '进入战斗'),
        method('EnterState', 'void', ['int', 'object'], 'public', '进入指定状态'),
      ],
    }),
    cls('XClient.Common.IUpdateEngine', 'IUpdateEngine', 'XClient.Common', 'interface', '更新引擎', 'XClient/Common/IUpdateEngine.cs', {
      methods: [
        method('RequestBlockDownload', 'bool', ['string'], 'public', '请求分块下载'),
        method('GetProgress', 'int', [], 'public', '获取进度'),
        method('IsUpdateOK', 'bool', [], 'public', '更新是否完成'),
        method('CheckNewVersion', 'void', ['Action'], 'public', '检查新版本'),
        method('GetNeedUpdate', 'bool', [], 'public', '是否需要更新'),
      ],
    }),
    cls('XClient.Common.ILuaEngine', 'ILuaEngine', 'XClient.Common', 'interface', 'Lua引擎接口', 'XClient/Common/ILuaEngine.cs', {
      methods: [
        method('RunLuaFunction', 'void', ['string', 'object[]'], 'public', '运行Lua函数'),
        method('Get', 'T', ['string'], 'public', '获取Lua值'),
        method('DoString', 'void', ['string'], 'public', '执行Lua字符串'),
      ],
    }),
    cls('XClient.Common.IRoomModule', 'IRoomModule', 'XClient.Common', 'interface', '房间模块接口', 'XClient/Common/IRoomModule.cs', {
      baseClass: 'IModule',
      interfaces: ['IModule'],
      methods: [
        method('EnterRoom', 'void', ['int'], 'public', '进入房间'),
        method('LeaveRoom', 'void', [], 'public', '离开房间'),
        method('GetLocalRoleID', 'long', [], 'public', '获取本地角色ID'),
        method('GetAllProperty', 'Dictionary', ['int'], 'public', '获取所有属性'),
        method('SetIntProperty', 'void', ['int', 'int', 'long', 'bool', 'string'], 'public', '设置整型属性'),
      ],
    }),
    cls('XClient.Common.IAgentModule', 'IAgentModule', 'XClient.Common', 'interface', '代理实体模块接口', 'XClient/Common/IAgentModule.cs', {
      baseClass: 'IModule',
      interfaces: ['IModule'],
      methods: [
        method('CreateAgent', 'bool', ['long', 'int'], 'public', '创建代理'),
        method('DestroyAgent', 'void', ['long'], 'public', '销毁代理'),
        method('GetAgent', 'IAgent', ['long'], 'public', '获取代理'),
        method('DestroyAllAgents', 'void', [], 'public', '销毁所有代理'),
      ],
    }),
    cls('XClient.Common.GameGlobal', 'GameGlobal', 'XClient.Common', 'class', '存储全局IGame指针', 'XClient/Common/GameGlobal.cs', {
      properties: [
        prop('Instance', 'IGame', '全局IGame实例(静态)'),
        prop('ComAndModule', 'IGameComAndModule', '组件与模块(静态)'),
        prop('GameScheme', 'ISchemeModule', '配置中心'),
      ],
      methods: [
        method('SetGame', 'void', ['IGame'], 'public', '设置Game实例', true),
        method('SetGameComAndMudule', 'void', ['IGameComAndModule'], 'public', '设置组件和模块', true),
      ],
    }),
    cls('XClient.Common.GameHelp', 'GameHelp', 'XClient.Common', 'class', '游戏帮助类', 'XClient/Common/GameHelp.cs'),
    cls('XClient.Common.GameTime', 'GameTime', 'XClient.Common', 'class', '时钟管理类', 'XClient/Common/GameTime.cs'),
    cls('XClient.Common.RandCreater', 'RandCreater', 'XClient.Common', 'class', '随机数生成器', 'XClient/Common/RandCreater.cs'),
    cls('XClient.Common.Function', 'Function', 'XClient.Common', 'class', '游戏全局通用函数', 'XClient/Common/Function.cs'),
    cls('XClient.Common.HtmlToRtf', 'HtmlToRtf', 'XClient.Common', 'class', 'HTML转富文本', 'XClient/Common/HtmlToRtf.cs'),
    cls('XClient.Common.GameNotify', 'GameNotify', 'XClient.Common', 'class', '游戏通知', 'XClient/Common/GameNotify.cs'),
    cls('XClient.Common.FPSMonitor', 'FPSMonitor', 'XClient.Common', 'class', 'FPS监控', 'XClient/Common/FPSMonitor.cs'),
    cls('XClient.Common.PingMonitor', 'PingMonitor', 'XClient.Common', 'class', 'Ping监控', 'XClient/Common/PingMonitor.cs'),
    cls('XClient.Common.DGlobalEvent', 'DGlobalEvent', 'XClient.Common', 'static_class', '全局事件定义', 'XClient/Common/DGlobalEvent.cs'),
    cls('XClient.Common.DComID', 'DComID', 'XClient.Common', 'static_class', '组件ID定义', 'XClient/Common/DComID.cs'),
    cls('XClient.Common.DGlobalErrorCode', 'DGlobalErrorCode', 'XClient.Common', 'static_class', '全局错误码', 'XClient/Common/DGlobalErrorCode.cs'),
    cls('XClient.Common.CountdownManager', 'CountdownManager', 'XClient.Common', 'class', '倒计时管理器', 'XClient/Common/CountdownManager.cs'),
    cls('XClient.Common.ModuleMessageHandler', 'ModuleMessageHandler', 'XClient.Common', 'class', '模块消息处理器', 'XClient/Common/ModuleMessageHandler.cs'),
    cls('XClient.Common.CommonNetMessageRegister', 'CommonNetMessageRegister', 'XClient.Common', 'class', '公共网络消息注册器', 'XClient/Common/CommonNetMessageRegister.cs'),
    cls('XClient.Common.NetMessageHandle', 'NetMessageHandle', 'XClient.Common', 'class', '网络消息处理', 'XClient/Common/NetMessageHandle.cs'),
    cls('XClient.Common.GameZone', 'GameZone', 'XClient.Common', 'class', '游戏区服', 'XClient/Common/GameZone.cs'),
    cls('XClient.Common.XmlLoader', 'XmlLoader', 'XClient.Common', 'class', 'XML加载器', 'XClient/Common/XmlLoader.cs'),

    // ==========================================================
    // XClient.Game
    // ==========================================================
    cls('XClient.Game.GameApp', 'GameApp', 'XClient.Game', 'class', '负责GameApp初始化和组件创建', 'XClient/Game/GameApp.cs', {
      baseClass: 'MonoBehaviourEX<GameApp>',
      interfaces: ['IXGameAppSink', 'ILoaderProviderSink'],
      methods: [
        method('RegisterAction', 'void', ['AppAction', 'OnXGameEvent'], 'public', '注册Action'),
        method('Awake', 'void', [], 'protected', 'Unity Awake'),
        method('Start', 'void', [], 'protected', 'Unity Start'),
        method('CreateMonitors', 'void', [], 'public', '创建监控器'),
        method('OnXGameAppInited', 'void', [], 'public', 'XGameApp初始化完成回调'),
        method('OnPreInit', 'void', [], 'public', '预初始化'),
        method('OnRegisterXGameComs', 'void', [], 'public', '注册XGame组件'),
        method('Restart', 'void', [], 'public', '重启', true),
      ],
    }),
    cls('XClient.Game.CGame', 'CGame', 'XClient.Game', 'class', '游戏主体单例', 'XClient/Game/CGame.cs', {
      baseClass: 'MonoBehaviourEX<CGame>',
      interfaces: ['IGame', 'IEventExecuteSink', 'IGameComAndModule', 'ILowPowerSink', 'ILockScreenSink'],
      properties: [
        prop('GameStateManager', 'IGameStateManager', '游戏状态管理器'),
        prop('GlobalTransform', 'Transform', '全局Transform'),
        prop('IsInit', 'bool', '是否已初始化'),
      ],
    }),
    cls('XClient.Game.GameStateMachine', 'GameStateMachine', 'XClient.Game', 'class', '游戏客户端状态机', 'XClient/Game/GameStateMachine.cs', {
      baseClass: 'BaseStateMachine',
      methods: [
        method('GetState', 'int', [], 'public', '获取当前状态'),
        method('OnCreate', 'T', ['object'], 'public', '创建状态'),
        method('OnPreChangeState', 'void', ['int', 'int'], 'protected', '状态切换前'),
        method('OnAfterChangeState', 'void', ['int', 'int'], 'protected', '状态切换后'),
      ],
    }),
    cls('XClient.Game.GameStateBase', 'GameStateBase', 'XClient.Game', 'class', '游戏状态基类', 'XClient/Game/GameStateBase.cs', { baseClass: 'BaseState' }),
    cls('XClient.Game.GameStateNone', 'GameStateNone', 'XClient.Game', 'class', '空状态', 'XClient/Game/GameStateNone.cs', { baseClass: 'GameStateBase' }),
    cls('XClient.Game.GameStateLogin', 'GameStateLogin', 'XClient.Game', 'class', '登录状态', 'XClient/Game/GameStateLogin.cs', { baseClass: 'GameStateBase' }),
    cls('XClient.Game.GameStateGame', 'GameStateGame', 'XClient.Game', 'class', '游戏状态', 'XClient/Game/GameStateGame.cs', { baseClass: 'GameStateBase' }),
    cls('XClient.Game.GameStateBattle', 'GameStateBattle', 'XClient.Game', 'class', '战斗状态', 'XClient/Game/GameStateBattle.cs', { baseClass: 'GameStateBase' }),
    cls('XClient.Game.GameStateSwitchValidator', 'GameStateSwitchValidator', 'XClient.Game', 'class', '状态切换校验器', 'XClient/Game/GameStateSwitchValidator.cs'),
    cls('XClient.Game.GameStateManager', 'GameStateManager', 'XClient.Game', 'class', '游戏状态管理器', 'XClient/Game/GameStateManager.cs'),
    cls('XClient.Game.GameRoots', 'GameRoots', 'XClient.Game', 'class', '游戏根节点', 'XClient/Game/GameRoots.cs'),
    cls('XClient.Game.GameSceneManager', 'GameSceneManager', 'XClient.Game', 'class', '游戏场景管理器', 'XClient/Game/GameSceneManager.cs'),
    cls('XClient.Game.ModuleSetup', 'ModuleSetup', 'XClient.Game', 'class', '模块设置', 'XClient/Game/ModuleSetup.cs'),
    cls('XClient.Game.SystemSettings', 'SystemSettings', 'XClient.Game', 'class', '系统设置', 'XClient/Game/SystemSettings.cs'),
    cls('XClient.Game.GamePreProcesser', 'GamePreProcesser', 'XClient.Game', 'class', '游戏预处理器', 'XClient/Game/GamePreProcesser.cs'),
    cls('XClient.Game.XGameSink', 'XGameSink', 'XClient.Game', 'class', 'XGame回调接收器', 'XClient/Game/XGameSink.cs'),
    cls('XClient.Game.NetModule', 'NetModule', 'XClient.Game', 'class', '网络模块', 'XClient/Game/NetModule.cs', {
      interfaces: ['INetModule'],
      methods: [
        method('Connect', 'bool', ['string', 'int', 'int'], 'public', '连接服务器'),
        method('Disconnect', 'void', [], 'public', '断开连接'),
        method('SendMessage_CS', 'void', ['byte', 'byte', 'TCSMessage'], 'public', '发送CS消息'),
        method('OnReceiveMsg', 'void', ['TCSMessage'], 'public', '接收消息'),
        method('IsConnected', 'bool', [], 'public', '是否已连接'),
        method('StartPing', 'void', ['bool', 'bool', 'Action'], 'public', '开始Ping'),
      ],
    }),
    cls('XClient.Game.NetHeartBeatChecker', 'NetHeartBeatChecker', 'XClient.Game', 'class', '网络心跳检测', 'XClient/Game/NetHeartBeatChecker.cs'),
    cls('XClient.Game.CSchemeModule', 'CSchemeModule', 'XClient.Game', 'class', '配置中心模块', 'XClient/Game/CSchemeModule.cs', { interfaces: ['ISchemeModule'] }),
    cls('XClient.Game.GameSchemeCom', 'GameSchemeCom', 'XClient.Game', 'class', '游戏配置组件', 'XClient/Game/GameSchemeCom.cs'),
    cls('XClient.Game.ILua', 'ILua', 'XClient.Game', 'interface', 'Lua引擎接口', 'XClient/Game/ILua.cs', {
      methods: [
        method('RunLuaFunction', 'void', ['string', 'object[]'], 'public', '运行Lua函数'),
        method('Get', 'T', ['string'], 'public', '获取Lua值'),
        method('DoString', 'void', ['string'], 'public', '执行Lua字符串'),
      ],
    }),
    cls('XClient.Game.ILuaProxyMono', 'ILuaProxyMono', 'XClient.Game', 'interface', 'Lua代理Mono接口', 'XClient/Game/ILuaProxyMono.cs'),
    cls('XClient.Game.I18NTranslater', 'I18NTranslater', 'XClient.Game', 'class', '国际化翻译器', 'XClient/Game/I18NTranslater.cs'),
    cls('XClient.Game.GameInitConfig', 'GameInitConfig', 'XClient.Game', 'class', '游戏初始化配置', 'XClient/Game/GameInitConfig.cs'),
    cls('XClient.Game.WWWRequest', 'WWWRequest', 'XClient.Game', 'class', 'HTTP请求', 'XClient/Game/WWWRequest.cs'),
    cls('XClient.Game.ShaderCollectionWarmUp', 'ShaderCollectionWarmUp', 'XClient.Game', 'class', 'Shader预热', 'XClient/Game/ShaderCollectionWarmUp.cs'),
    cls('XClient.Game.GameProjectSettings', 'GameProjectSettings', 'XClient.Game', 'class', '游戏项目设置', 'XClient/Game/GameProjectSettings.cs'),

    // ==========================================================
    // XClient.Network
    // ==========================================================
    cls('XClient.Network.INetable', 'INetable', 'XClient.Network', 'interface', '让对象具有网络处理能力', 'XClient/Network/INetable.cs', {
      properties: [
        prop('NetID', 'ulong', '网络ID'),
        prop('NetVars', 'List<INetVar>', '网络变量列表'),
        prop('IsPublic', 'bool', '是否公开'),
        prop('IsHasRight', 'bool', '是否有权限'),
      ],
      methods: [
        method('OnNetVarChange', 'void', ['INetVar'], 'public', '网络变量变化'),
        method('OnNetVarRemoteChange', 'void', ['INetVar'], 'public', '远端网络变量变化'),
      ],
    }),
    cls('XClient.Network.INetObject', 'INetObject', 'XClient.Network', 'interface', '网络对象', 'XClient/Network/INetObject.cs', {
      baseClass: 'INetable',
      interfaces: ['INetable'],
      properties: [prop('IsDirty', 'bool', '是否脏标记')],
      methods: [
        method('Create', 'bool', [], 'public', '创建'),
        method('Release', 'void', [], 'public', '释放'),
        method('SetupNetID', 'void', ['ulong'], 'public', '设置网络ID'),
        method('Start', 'void', ['bool'], 'public', '启动'),
        method('Stop', 'void', [], 'public', '停止'),
        method('SyncImmediately', 'void', [], 'public', '立即同步'),
      ],
    }),
    cls('XClient.Network.INetVar', 'INetVar', 'XClient.Network', 'interface', '网络数据接口', 'XClient/Network/INetVar.cs', {
      properties: [
        prop('Name', 'string', '变量名'),
        prop('Owner', 'INetable', '所有者'),
        prop('DataType', 'Type', '数据类型'),
        prop('IsDirty', 'bool', '是否脏标记'),
      ],
      methods: [
        method('SetOwner', 'void', ['INetable'], 'public', '设置所有者'),
        method('SetDirty', 'void', [], 'public', '设置脏标记'),
        method('ClearDirty', 'void', [], 'public', '清除脏标记'),
      ],
    }),
    cls('XClient.Network.INetVarSerializer', 'INetVarSerializer', 'XClient.Network', 'interface', '网络变量序列化器', 'XClient/Network/INetVarSerializer.cs'),
    cls('XClient.Network.NetVarImpl', 'NetVarImpl', 'XClient.Network', 'class', '网络变量实现', 'XClient/Network/NetVarImpl.cs'),
    cls('XClient.Network.NetVar', 'NetVar', 'XClient.Network', 'class', '网络变量', 'XClient/Network/NetVar.cs'),
    cls('XClient.Network.NetVarUtility', 'NetVarUtility', 'XClient.Network', 'class', '网络变量工具', 'XClient/Network/NetVarUtility.cs'),
    cls('XClient.Network.NetworkManager', 'NetworkManager', 'XClient.Network', 'class', '网络管理器(单例)', 'XClient/Network/NetworkManager.cs', {
      properties: [
        prop('Instance', 'NetworkManager', '单例实例(静态)'),
        prop('LocalClientID', 'ulong', '本地客户端ID'),
        prop('HostClientID', 'ulong', '主机客户端ID'),
        prop('Syncer', 'NetableSyncer', '同步器'),
      ],
      methods: [method('IsLocalClient', 'bool', ['NetID'], 'public', '是否本地客户端')],
    }),
    cls('XClient.Network.NetworkUtility', 'NetworkUtility', 'XClient.Network', 'class', '网络工具类', 'XClient/Network/NetworkUtility.cs'),
    cls('XClient.Network.NetID', 'NetID', 'XClient.Network', 'class', '网络ID', 'XClient/Network/NetID.cs'),
    cls('XClient.Network.NetableSyncer', 'NetableSyncer', 'XClient.Network', 'class', '可网络化对象同步器', 'XClient/Network/NetableSyncer.cs'),
    cls('XClient.Network.NetObject', 'NetObject', 'XClient.Network', 'class', '网络对象实现', 'XClient/Network/NetObject.cs'),
    cls('XClient.Network.NetObjectManager', 'NetObjectManager', 'XClient.Network', 'class', '网络对象管理器', 'XClient/Network/NetObjectManager.cs'),
    cls('XClient.Network.VirtualNetObject', 'VirtualNetObject', 'XClient.Network', 'class', '虚拟网络对象', 'XClient/Network/VirtualNetObject.cs'),
    cls('XClient.Network.VirtualNetObjectManager', 'VirtualNetObjectManager', 'XClient.Network', 'class', '虚拟网络对象管理器', 'XClient/Network/VirtualNetObjectManager.cs'),
    cls('XClient.Network.INetableSerializer', 'INetableSerializer', 'XClient.Network', 'interface', '网络序列化接口', 'XClient/Network/INetableSerializer.cs'),
    cls('XClient.Network.NetableSerializerForCSMessage', 'NetableSerializerForCSMessage', 'XClient.Network', 'class', 'CS消息序列化器', 'XClient/Network/NetableSerializerForCSMessage.cs'),
    cls('XClient.Network.INetObjectBehaviour', 'INetObjectBehaviour', 'XClient.Network', 'interface', '网络对象行为接口', 'XClient/Network/INetObjectBehaviour.cs'),
    cls('XClient.Network.NetObjectBehaviour', 'NetObjectBehaviour', 'XClient.Network', 'class', '网络对象行为', 'XClient/Network/NetObjectBehaviour.cs'),
    cls('XClient.Network.MonoNetObject', 'MonoNetObject', 'XClient.Network', 'class', 'Mono网络对象', 'XClient/Network/MonoNetObject.cs'),
    cls('XClient.Network.NetObjectTransform', 'NetObjectTransform', 'XClient.Network', 'class', '网络对象Transform同步', 'XClient/Network/NetObjectTransform.cs'),
    cls('XClient.Network.NetCommData', 'NetCommData', 'XClient.Network', 'class', '网络通信数据', 'XClient/Network/NetCommData.cs'),
    cls('XClient.Network.NetCommDataManager', 'NetCommDataManager', 'XClient.Network', 'class', '网络通信数据管理器', 'XClient/Network/NetCommDataManager.cs'),
    cls('XClient.Network.NetObjectContainer', 'NetObjectContainer', 'XClient.Network', 'class', '网络对象容器', 'XClient/Network/NetObjectContainer.cs'),
    cls('XClient.Network.NetObjectElement', 'NetObjectElement', 'XClient.Network', 'class', '网络对象元素', 'XClient/Network/NetObjectElement.cs'),

    // ==========================================================
    // XClient.Entity
    // ==========================================================
    cls('XClient.Entity.IEntityModule', 'IEntityModule', 'XClient.Entity', 'interface', '玩家数据模块', 'XClient/Entity/IEntityModule.cs', {
      baseClass: 'IModule',
      interfaces: ['IModule'],
      properties: [prop('role', 'IEntity', '角色实体')],
      methods: [
        method('SetRoleIntProp', 'void', ['int', 'int'], 'public', '设置角色整型属性'),
        method('GetRoleIntProp', 'int', ['int'], 'public', '获取角色整型属性'),
        method('SEND_MSG_ENTITY_RENAME_REQ', 'void', ['string'], 'public', '发送改名请求'),
      ],
    }),
    cls('XClient.Entity.EntityModule', 'EntityModule', 'XClient.Entity', 'class', '实体模块', 'XClient/Entity/EntityModule.cs', {
      interfaces: ['IEntityModule'],
      methods: [
        method('Create', 'bool', ['object', 'object'], 'public', '创建'),
        method('Start', 'bool', [], 'public', '启动'),
        method('Stop', 'void', [], 'public', '停止'),
        method('Release', 'void', [], 'public', '释放'),
        method('Update', 'void', [], 'public', '更新'),
      ],
    }),
    cls('XClient.Entity.EntityDef', 'EntityDef', 'XClient.Entity', 'class', '内置实体类型定义', 'XClient/Entity/EntityDef.cs'),
    cls('XClient.Entity.EntityType', 'EntityType', 'XClient.Entity', 'class', '实体类型扩展', 'XClient/Entity/EntityType.cs', { baseClass: 'EntityDef' }),
    cls('XClient.Entity.ICreatureEntity', 'ICreatureEntity', 'XClient.Entity', 'interface', '生物实体接口', 'XClient/Entity/ICreatureEntity.cs', {
      baseClass: 'IVisibleEntity',
      interfaces: ['IVisibleEntity'],
      methods: [
        method('GetCamp', 'ulong', [], 'public', '获取阵营'),
        method('GetPos', 'Vector3', [], 'public', '获取位置'),
        method('SetFace', 'void', ['bool'], 'public', '设置朝向'),
        method('SetRotation', 'void', ['Quaternion'], 'public', '设置旋转'),
        method('SetPos', 'void', ['ref Vector3'], 'public', '设置位置'),
        method('SetForward', 'void', ['ref Vector3'], 'public', '设置前方向'),
      ],
    }),
    cls('XClient.Entity.IBullet', 'IBullet', 'XClient.Entity', 'interface', '子弹实体接口', 'XClient/Entity/IBullet.cs', {
      baseClass: 'ICreatureEntity',
      interfaces: ['ICreatureEntity'],
      methods: [method('Jump2NextTarget', 'bool', ['List<IDReco>'], 'public', '跳到下一个目标')],
    }),
    cls('XClient.Entity.IMonster', 'IMonster', 'XClient.Entity', 'interface', '怪物实体接口', 'XClient/Entity/IMonster.cs', {
      baseClass: 'ICreatureEntity',
      interfaces: ['ICreatureEntity'],
    }),
    cls('XClient.Entity.IBuff', 'IBuff', 'XClient.Entity', 'interface', 'Buff接口', 'XClient/Entity/IBuff.cs'),
    cls('XClient.Entity.IEffectAction', 'IEffectAction', 'XClient.Entity', 'interface', '效果动作接口', 'XClient/Entity/IEffectAction.cs'),
    cls('XClient.Entity.ISkillPart', 'ISkillPart', 'XClient.Entity', 'interface', '技能部件接口', 'XClient/Entity/ISkillPart.cs', {
      baseClass: 'IEntityPart',
      interfaces: ['IEntityPart'],
      methods: [
        method('DoAttack', 'void', ['int'], 'public', '执行攻击'),
        method('AddSkill', 'void', ['int'], 'public', '添加技能'),
        method('ClearPreConfig', 'void', ['bool'], 'public', '清除预配置'),
        method('GetSkillCount', 'int', [], 'public', '获取技能数量'),
        method('GetSkillID', 'int', ['int'], 'public', '获取技能ID'),
      ],
    }),
    cls('XClient.Entity.IEntityMovePart', 'IEntityMovePart', 'XClient.Entity', 'interface', '移动部件接口', 'XClient/Entity/IEntityMovePart.cs', {
      baseClass: 'IEntityPart',
      interfaces: ['IEntityPart'],
      methods: [
        method('IsMoving', 'bool', [], 'public', '是否移动中'),
        method('GetTargetPos', 'Vector3', [], 'public', '获取目标位置'),
        method('MoveTo', 'void', ['Vector3'], 'public', '移动到目标'),
      ],
    }),
    cls('XClient.Entity.IDamagePart', 'IDamagePart', 'XClient.Entity', 'interface', '伤害部件接口', 'XClient/Entity/IDamagePart.cs', { baseClass: 'IEntityPart', interfaces: ['IEntityPart'] }),
    cls('XClient.Entity.IAIPart', 'IAIPart', 'XClient.Entity', 'interface', 'AI部件接口', 'XClient/Entity/IAIPart.cs', { baseClass: 'IEntityPart', interfaces: ['IEntityPart'] }),
    cls('XClient.Entity.RoleEntity', 'RoleEntity', 'XClient.Entity', 'class', '玩家角色实体', 'XClient/Entity/RoleEntity.cs'),
    cls('XClient.Entity.PersonEntity', 'PersonEntity', 'XClient.Entity', 'class', '人物实体', 'XClient/Entity/PersonEntity.cs'),
    cls('XClient.Entity.GoodsEntity', 'GoodsEntity', 'XClient.Entity', 'class', '物品实体', 'XClient/Entity/GoodsEntity.cs'),
    cls('XClient.Entity.Monster', 'Monster', 'XClient.Entity', 'class', '怪物实体', 'XClient/Entity/Monster.cs', { interfaces: ['IMonster'] }),
    cls('XClient.Entity.Bullet', 'Bullet', 'XClient.Entity', 'class', '子弹实体', 'XClient/Entity/Bullet.cs', { interfaces: ['IBullet'] }),
    cls('XClient.Entity.Buff', 'Buff', 'XClient.Entity', 'class', 'Buff实体', 'XClient/Entity/Buff.cs', { interfaces: ['IBuff'] }),
    cls('XClient.Entity.BulletSystem', 'BulletSystem', 'XClient.Entity', 'class', '子弹系统', 'XClient/Entity/BulletSystem.cs'),
    cls('XClient.Entity.MonsterSystem', 'MonsterSystem', 'XClient.Entity', 'class', '怪物系统', 'XClient/Entity/MonsterSystem.cs'),
    cls('XClient.Entity.BulletLauncher', 'BulletLauncher', 'XClient.Entity', 'class', '子弹发射器', 'XClient/Entity/BulletLauncher.cs'),
    cls('XClient.Entity.BulletHitMgr', 'BulletHitMgr', 'XClient.Entity', 'class', '子弹碰撞管理', 'XClient/Entity/BulletHitMgr.cs'),
    cls('XClient.Entity.TrackMovement', 'TrackMovement', 'XClient.Entity', 'class', '追踪运动', 'XClient/Entity/TrackMovement.cs'),
    cls('XClient.Entity.ForwardMovement', 'ForwardMovement', 'XClient.Entity', 'class', '直线运动', 'XClient/Entity/ForwardMovement.cs'),
    cls('XClient.Entity.ForwardMovement2D', 'ForwardMovement2D', 'XClient.Entity', 'class', '2D直线运动', 'XClient/Entity/ForwardMovement2D.cs'),
    cls('XClient.Entity.CircleMovement', 'CircleMovement', 'XClient.Entity', 'class', '圆形运动', 'XClient/Entity/CircleMovement.cs'),
    cls('XClient.Entity.LockForward', 'LockForward', 'XClient.Entity', 'class', '锁定方向', 'XClient/Entity/LockForward.cs'),
    cls('XClient.Entity.IDReco', 'IDReco', 'XClient.Entity', 'class', 'ID识别', 'XClient/Entity/IDReco.cs'),
    cls('XClient.Entity.IDRecoEntityMgr', 'IDRecoEntityMgr', 'XClient.Entity', 'class', 'ID识别实体管理器', 'XClient/Entity/IDRecoEntityMgr.cs'),
    cls('XClient.Entity.ICollisionSink', 'ICollisionSink', 'XClient.Entity', 'interface', '碰撞接收器', 'XClient/Entity/ICollisionSink.cs'),
    cls('XClient.Entity.CollisionItem', 'CollisionItem', 'XClient.Entity', 'class', '碰撞项', 'XClient/Entity/CollisionItem.cs'),
    cls('XClient.Entity.VisibleComponent', 'VisibleComponent', 'XClient.Entity', 'class', '可见性组件', 'XClient/Entity/VisibleComponent.cs'),
    cls('XClient.Entity.BodyEffectCompnent', 'BodyEffectCompnent', 'XClient.Entity', 'class', '身体特效组件', 'XClient/Entity/BodyEffectCompnent.cs'),
    cls('XClient.Entity.TitleBuffComponent', 'TitleBuffComponent', 'XClient.Entity', 'class', '称号Buff组件', 'XClient/Entity/TitleBuffComponent.cs'),
    cls('XClient.Entity.BuffBaseComponent', 'BuffBaseComponent', 'XClient.Entity', 'class', 'Buff基础组件', 'XClient/Entity/BuffBaseComponent.cs'),
    cls('XClient.Entity.EffectActionBase', 'EffectActionBase', 'XClient.Entity', 'class', '效果动作基类', 'XClient/Entity/EffectActionBase.cs'),
    cls('XClient.Entity.INetEntity', 'INetEntity', 'XClient.Entity', 'interface', '网络实体接口', 'XClient/Entity/INetEntity.cs'),
    cls('XClient.Entity.NetEntity', 'NetEntity', 'XClient.Entity', 'class', '网络实体', 'XClient/Entity/NetEntity.cs'),
    cls('XClient.Entity.NetGameObjectEntity', 'NetGameObjectEntity', 'XClient.Entity', 'class', '网络GameObject实体', 'XClient/Entity/NetGameObjectEntity.cs'),
    cls('XClient.Entity.NetVisibleEntity', 'NetVisibleEntity', 'XClient.Entity', 'class', '网络可见实体', 'XClient/Entity/NetVisibleEntity.cs'),
    cls('XClient.Entity.NetRecoObject', 'NetRecoObject', 'XClient.Entity', 'class', '网络识别对象', 'XClient/Entity/NetRecoObject.cs'),
    cls('XClient.Entity.NetDataPart', 'NetDataPart', 'XClient.Entity', 'class', '网络数据部件', 'XClient/Entity/NetDataPart.cs'),
    cls('XClient.Entity.RoleDataPart', 'RoleDataPart', 'XClient.Entity', 'class', '角色数据部件', 'XClient/Entity/RoleDataPart.cs'),
    cls('XClient.Entity.RoleVisiblePart', 'RoleVisiblePart', 'XClient.Entity', 'class', '角色可见部件', 'XClient/Entity/RoleVisiblePart.cs'),
    cls('XClient.Entity.EntityMovePart', 'EntityMovePart', 'XClient.Entity', 'class', '实体移动部件', 'XClient/Entity/EntityMovePart.cs', { interfaces: ['IEntityMovePart'] }),
    cls('XClient.Entity.SkillPart', 'SkillPart', 'XClient.Entity', 'class', '技能部件', 'XClient/Entity/SkillPart.cs', { interfaces: ['ISkillPart'] }),
    cls('XClient.Entity.SkillCompontBase', 'SkillCompontBase', 'XClient.Entity', 'class', '技能组件基类', 'XClient/Entity/SkillCompontBase.cs'),
    cls('XClient.Entity.SkillObject', 'SkillObject', 'XClient.Entity', 'class', '技能对象', 'XClient/Entity/SkillObject.cs'),
    cls('XClient.Entity.DamagePart', 'DamagePart', 'XClient.Entity', 'class', '伤害部件', 'XClient/Entity/DamagePart.cs', { interfaces: ['IDamagePart'] }),
    cls('XClient.Entity.AIPart', 'AIPart', 'XClient.Entity', 'class', 'AI部件', 'XClient/Entity/AIPart.cs', { interfaces: ['IAIPart'] }),
    cls('XClient.Entity.CreatureInfoBarPart', 'CreatureInfoBarPart', 'XClient.Entity', 'class', '生物信息条部件', 'XClient/Entity/CreatureInfoBarPart.cs'),
    cls('XClient.Entity.SkinHelper', 'SkinHelper', 'XClient.Entity', 'class', '皮肤辅助类', 'XClient/Entity/SkinHelper.cs'),
    cls('XClient.Entity.SpineSkinAnimation', 'SpineSkinAnimation', 'XClient.Entity', 'class', 'Spine皮肤动画', 'XClient/Entity/SpineSkinAnimation.cs'),
    cls('XClient.Entity.SpineSkinGraphic', 'SpineSkinGraphic', 'XClient.Entity', 'class', 'Spine皮肤图形', 'XClient/Entity/SpineSkinGraphic.cs'),
    cls('XClient.Entity.SpineMixSkinAnimation', 'SpineMixSkinAnimation', 'XClient.Entity', 'class', 'Spine混合皮肤动画', 'XClient/Entity/SpineMixSkinAnimation.cs'),
    cls('XClient.Entity.SpineMixSkinGraphic', 'SpineMixSkinGraphic', 'XClient.Entity', 'class', 'Spine混合皮肤图形', 'XClient/Entity/SpineMixSkinGraphic.cs'),
    cls('XClient.Entity.EntityModuleMessageHandler', 'EntityModuleMessageHandler', 'XClient.Entity', 'class', '实体模块消息处理器', 'XClient/Entity/EntityModuleMessageHandler.cs'),
    cls('XClient.Entity.NetEntityEffectSyncManager', 'NetEntityEffectSyncManager', 'XClient.Entity', 'class', '网络实体特效同步管理器', 'XClient/Entity/NetEntityEffectSyncManager.cs'),

    // ==========================================================
    // XClient.Login
    // ==========================================================
    cls('XClient.Login.ILoginModule', 'ILoginModule', 'XClient.Login', 'interface', '登录模块', 'XClient/Login/ILoginModule.cs', {
      baseClass: 'IModule',
      interfaces: ['IModule'],
      methods: [
        method('Login', 'void', ['int'], 'public', '登录'),
        method('Logout', 'void', ['LOGOUT_ACTION'], 'public', '登出'),
        method('GetLogoutAction', 'LOGOUT_ACTION', [], 'public', '获取登出动作'),
        method('StartEnterRoom', 'void', ['int'], 'public', '开始进入房间'),
        method('ExitRoom', 'void', [], 'public', '退出房间'),
        method('CheckIntegralHourPoint', 'void', [], 'public', '检查整点奖励'),
        method('GetGameServerManager', 'GameServerManager', [], 'public', '获取服务器管理器'),
      ],
    }),
    cls('XClient.Login.LoginModule', 'LoginModule', 'XClient.Login', 'class', '登录模块实现', 'XClient/Login/LoginModule.cs', { interfaces: ['ILoginModule'] }),
    cls('XClient.Login.LoginDataManager', 'LoginDataManager', 'XClient.Login', 'class', '登录数据管理器', 'XClient/Login/LoginDataManager.cs'),
    cls('XClient.Login.GameServerManager', 'GameServerManager', 'XClient.Login', 'class', '游戏服务器管理器', 'XClient/Login/GameServerManager.cs'),
    cls('XClient.Login.LoginModuleMessageHandler', 'LoginModuleMessageHandler', 'XClient.Login', 'class', '登录模块消息处理器', 'XClient/Login/LoginModuleMessageHandler.cs'),
    cls('XClient.Login.LoginStateMachine', 'LoginStateMachine', 'XClient.Login', 'class', '登录状态机', 'XClient/Login/LoginStateMachine.cs', { baseClass: 'BaseStateMachine' }),
    cls('XClient.Login.StateBase', 'StateBase', 'XClient.Login', 'class', '登录状态基类', 'XClient/Login/StateBase.cs', { baseClass: 'BaseState' }),
    cls('XClient.Login.StateNone', 'StateNone', 'XClient.Login', 'class', '空状态', 'XClient/Login/StateNone.cs', { baseClass: 'StateBase' }),
    cls('XClient.Login.StateGateway', 'StateGateway', 'XClient.Login', 'class', '网关状态', 'XClient/Login/StateGateway.cs', { baseClass: 'StateBase' }),
    cls('XClient.Login.StateLogin', 'StateLogin', 'XClient.Login', 'class', '登录状态', 'XClient/Login/StateLogin.cs', { baseClass: 'StateBase' }),
    cls('XClient.Login.StateEnterRoom', 'StateEnterRoom', 'XClient.Login', 'class', '进入房间状态', 'XClient/Login/StateEnterRoom.cs', { baseClass: 'StateBase' }),
    cls('XClient.Login.StateGame', 'StateGame', 'XClient.Login', 'class', '游戏状态', 'XClient/Login/StateGame.cs', { baseClass: 'StateBase' }),
    cls('XClient.Login.StateSwitchValidator', 'StateSwitchValidator', 'XClient.Login', 'class', '状态切换校验器', 'XClient/Login/StateSwitchValidator.cs'),
    cls('XClient.Login.LoginStateManager', 'LoginStateManager', 'XClient.Login', 'class', '登录状态管理器', 'XClient/Login/LoginStateManager.cs'),

    // ==========================================================
    // XClient.RPC
    // ==========================================================
    cls('XClient.RPC.IRPCModule', 'IRPCModule', 'XClient.RPC', 'interface', '远程调用模块', 'XClient/RPC/IRPCModule.cs', {
      baseClass: 'IModule',
      interfaces: ['IModule'],
      methods: [
        method('Register', 'void', ['string', 'OnRecieveRpcCallback'], 'public', '注册RPC回调'),
        method('Deregister', 'void', ['string', 'OnRecieveRpcCallback'], 'public', '注销RPC回调'),
        method('CallServer', 'void', ['string', 'List<string>'], 'public', '调用服务器(List)'),
        method('CallServer', 'void', ['string', 'string[]'], 'public', '调用服务器(数组)'),
      ],
    }),
    cls('XClient.RPC.RPCModule', 'RPCModule', 'XClient.RPC', 'class', 'RPC模块实现', 'XClient/RPC/RPCModule.cs', { interfaces: ['IRPCModule'] }),
    cls('XClient.RPC.RPCModuleMessageHandler', 'RPCModuleMessageHandler', 'XClient.RPC', 'class', 'RPC模块消息处理器', 'XClient/RPC/RPCModuleMessageHandler.cs'),
    cls('XClient.RPC.RPCInnerNames', 'RPCInnerNames', 'XClient.RPC', 'class', 'RPC内部名称定义', 'XClient/RPC/RPCInnerNames.cs'),

    // ==========================================================
    // XClient.Reddot
    // ==========================================================
    cls('XClient.Reddot.IReddotModule', 'IReddotModule', 'XClient.Reddot', 'interface', '红点模块接口', 'XClient/Reddot/IReddotModule.cs', {
      baseClass: 'IModule',
      interfaces: ['IModule'],
      properties: [prop('Manager', 'IReddotManager', '红点管理器')],
    }),
    cls('XClient.Reddot.ReddotModule', 'ReddotModule', 'XClient.Reddot', 'class', '红点模块实现', 'XClient/Reddot/ReddotModule.cs', { interfaces: ['IReddotModule'] }),
    cls('XClient.Reddot.ReddotModuleMessageHandler', 'ReddotModuleMessageHandler', 'XClient.Reddot', 'class', '红点模块消息处理器', 'XClient/Reddot/ReddotModuleMessageHandler.cs'),

    // ==========================================================
    // XClient.Room
    // ==========================================================
    cls('XClient.Room.RoomModule', 'RoomModule', 'XClient.Room', 'class', '房间模块', 'XClient/Room/RoomModule.cs', {
      interfaces: ['IRoomModule'],
      methods: [
        method('Create', 'bool', ['object', 'object'], 'public', '创建'),
        method('EnterRoom', 'void', ['int'], 'public', '进入房间'),
        method('LeaveRoom', 'void', [], 'public', '离开房间'),
        method('OnMessage', 'void', ['TCSMessage'], 'public', '消息处理'),
      ],
    }),
    cls('XClient.Room.RoomPropertySet', 'RoomPropertySet', 'XClient.Room', 'class', '房间属性集', 'XClient/Room/RoomPropertySet.cs'),

    // ==========================================================
    // XClient.Agent
    // ==========================================================
    cls('XClient.Agent.AgentModule', 'AgentModule', 'XClient.Agent', 'class', '代理实体模块', 'XClient/Agent/AgentModule.cs', {
      interfaces: ['IAgentModule'],
      methods: [
        method('CreateAgent', 'bool', ['long', 'int'], 'public', '创建代理'),
        method('DestroyAgent', 'void', ['long'], 'public', '销毁代理'),
        method('GetAgent', 'IAgent', ['long'], 'public', '获取代理'),
        method('DestroyAllAgents', 'void', [], 'public', '销毁所有代理'),
      ],
    }),
    cls('XClient.Agent.Agent', 'Agent', 'XClient.Agent', 'class', '代理实体', 'XClient/Agent/Agent.cs'),
    cls('XClient.Agent.AgentEntity', 'AgentEntity', 'XClient.Agent', 'class', '代理实体', 'XClient/Agent/AgentEntity.cs'),
    cls('XClient.Agent.AgentDataPart', 'AgentDataPart', 'XClient.Agent', 'class', '代理数据部件', 'XClient/Agent/AgentDataPart.cs'),
    cls('XClient.Agent.AgentVisiblePart', 'AgentVisiblePart', 'XClient.Agent', 'class', '代理可见部件', 'XClient/Agent/AgentVisiblePart.cs'),
    cls('XClient.Agent.AgentEntityType', 'AgentEntityType', 'XClient.Agent', 'class', '代理实体类型', 'XClient/Agent/AgentEntityType.cs'),

    // ==========================================================
    // XClient.FlowText
    // ==========================================================
    cls('XClient.FlowText.IFlowText', 'IFlowText', 'XClient.FlowText', 'interface', '飘字接口', 'XClient/FlowText/IFlowText.cs'),
    cls('XClient.FlowText.TMPFlowTextView', 'TMPFlowTextView', 'XClient.FlowText', 'class', 'TMP飘字视图', 'XClient/FlowText/TMPFlowTextView.cs'),
    cls('XClient.FlowText.TMPFlowSpriteView', 'TMPFlowSpriteView', 'XClient.FlowText', 'class', 'TMP飘字精灵视图', 'XClient/FlowText/TMPFlowSpriteView.cs'),
    cls('XClient.FlowText.CustomFowTextView', 'CustomFowTextView', 'XClient.FlowText', 'class', '自定义飘字视图', 'XClient/FlowText/CustomFowTextView.cs'),
    cls('XClient.FlowText.IconFlowTextView', 'IconFlowTextView', 'XClient.FlowText', 'class', '图标飘字视图', 'XClient/FlowText/IconFlowTextView.cs'),
    cls('XClient.FlowText.CanvasGroupFlowTextView', 'CanvasGroupFlowTextView', 'XClient.FlowText', 'class', 'CanvasGroup飘字视图', 'XClient/FlowText/CanvasGroupFlowTextView.cs'),
    cls('XClient.FlowText.FlowSpriteSwitcherView', 'FlowSpriteSwitcherView', 'XClient.FlowText', 'class', '飘字精灵切换视图', 'XClient/FlowText/FlowSpriteSwitcherView.cs'),

    // ==========================================================
    // XClient.Features.SelectOne
    // ==========================================================
    cls('XClient.Features.SelectOne.ISelectOneDataSource', 'ISelectOneDataSource', 'XClient.Features.SelectOne', 'interface', 'N选一数据源', 'XClient/Features/SelectOne/ISelectOneDataSource.cs', {
      methods: [
        method('Create', 'bool', [], 'public', '创建'),
        method('ConvertToOptionData', 'bool', ['object', 'SelectOneOptionData'], 'public', '转换为选项数据'),
        method('GetAvailableItems', 'void', ['List<object>', 'int'], 'public', '获取可用项'),
        method('Release', 'void', [], 'public', '释放'),
      ],
    }),
    cls('XClient.Features.SelectOne.SelectOneOptionData', 'SelectOneOptionData', 'XClient.Features.SelectOne', 'class', 'N选一选项数据', 'XClient/Features/SelectOne/SelectOneOptionData.cs'),
    cls('XClient.Features.SelectOne.SelectOneDataSourceSelector', 'SelectOneDataSourceSelector', 'XClient.Features.SelectOne', 'class', 'N选一数据源选择器', 'XClient/Features/SelectOne/SelectOneDataSourceSelector.cs'),

    // ==========================================================
    // XClient.Features.Random
    // ==========================================================
    cls('XClient.Features.Random.RandomUtility', 'RandomUtility', 'XClient.Features.Random', 'class', '随机工具类', 'XClient/Features/Random/RandomUtility.cs'),

    // ==========================================================
    // XClient.Module
    // ==========================================================
    cls('XClient.Module.BaseModule', 'BaseModule', 'XClient.Module', 'class', '游戏模块基类', 'XClient/Module/BaseModule.cs', {
      interfaces: ['IModule', 'IFrameUpdateSink', 'ITimerHandler'],
      properties: [
        prop('ModuleName', 'string', '模块名称'),
        prop('State', 'int', '模块状态'),
        prop('Progress', 'float', '模块进度'),
        prop('ID', 'int', '模块ID'),
        prop('IsRunning', 'bool', '是否运行中'),
        prop('IsSupportUpdate', 'bool', '是否支持更新'),
      ],
    }),

    // ==========================================================
    // XClient.UI
    // ==========================================================
    cls('XClient.UI.ScrollRectController', 'ScrollRectController', 'XClient.UI', 'class', '滚动视图控制器', 'XClient/UI/ScrollRectController.cs'),
    cls('XClient.UI.ButtonAnimation', 'ButtonAnimation', 'XClient.UI', 'class', '按钮动画', 'XClient/UI/ButtonAnimation.cs'),
    cls('XClient.UI.ButtonEx', 'ButtonEx', 'XClient.UI', 'class', '扩展按钮', 'XClient/UI/ButtonEx.cs'),
    cls('XClient.UI.UIDrag', 'UIDrag', 'XClient.UI', 'class', 'UI拖拽', 'XClient/UI/UIDrag.cs'),
    cls('XClient.UI.UIJoystickCommon', 'UIJoystickCommon', 'XClient.UI', 'class', 'UI摇杆', 'XClient/UI/UIJoystickCommon.cs'),
    cls('XClient.UI.CanvasRaycastFilter', 'CanvasRaycastFilter', 'XClient.UI', 'class', 'Canvas射线过滤器', 'XClient/UI/CanvasRaycastFilter.cs'),
    cls('XClient.UI.CanvasScalerEx', 'CanvasScalerEx', 'XClient.UI', 'class', 'Canvas缩放扩展', 'XClient/UI/CanvasScalerEx.cs'),
    cls('XClient.UI.UIRotateAnim', 'UIRotateAnim', 'XClient.UI', 'class', 'UI旋转动画', 'XClient/UI/UIRotateAnim.cs'),
    cls('XClient.UI.UISettings', 'UISettings', 'XClient.UI', 'class', 'UI设置', 'XClient/UI/UISettings.cs'),
    cls('XClient.UI.UIMoviePlayer', 'UIMoviePlayer', 'XClient.UI', 'class', 'UI视频播放器', 'XClient/UI/UIMoviePlayer.cs'),
    cls('XClient.UI.UI2DTrigger', 'UI2DTrigger', 'XClient.UI', 'class', 'UI 2D触发器', 'XClient/UI/UI2DTrigger.cs'),
    cls('XClient.UI.UISound', 'UISound', 'XClient.UI', 'class', 'UI音效', 'XClient/UI/UISound.cs'),

    // ==========================================================
    // XClient.VirtualServer
    // ==========================================================
    cls('XClient.VirtualServer.IVirtualServer', 'IVirtualServer', 'XClient.VirtualServer', 'interface', '虚拟服务器接口', 'XClient/VirtualServer/IVirtualServer.cs', {
      methods: [
        method('Initialize', 'void', [], 'public', '初始化'),
        method('Start', 'void', [], 'public', '启动'),
        method('Stop', 'void', [], 'public', '停止'),
        method('RegMsgModule', 'void', [], 'public', '注册消息模块'),
        method('UnregMsgModule', 'void', [], 'public', '注销消息模块'),
      ],
    }),
    cls('XClient.VirtualServer.VirtualServer', 'VirtualServer', 'XClient.VirtualServer', 'class', '虚拟服务器实现', 'XClient/VirtualServer/VirtualServer.cs', { interfaces: ['IVirtualServer'] }),
    cls('XClient.VirtualServer.VirtualNet', 'VirtualNet', 'XClient.VirtualServer', 'class', '虚拟网络', 'XClient/VirtualServer/VirtualNet.cs'),
    cls('XClient.VirtualServer.BaseHandler', 'BaseHandler', 'XClient.VirtualServer', 'class', '虚拟消息处理器基类', 'XClient/VirtualServer/BaseHandler.cs'),

    // ==========================================================
    // XClient.NetTransfer
    // ==========================================================
    cls('XClient.NetTransfer.INetTransferModule', 'INetTransferModule', 'XClient.NetTransfer', 'interface', '网络传输模块接口', 'XClient/NetTransfer/INetTransferModule.cs'),
    cls('XClient.NetTransfer.NetTransferModule', 'NetTransferModule', 'XClient.NetTransfer', 'class', '网络传输模块实现', 'XClient/NetTransfer/NetTransferModule.cs', { interfaces: ['INetTransferModule'] }),
    cls('XClient.NetTransfer.NetTransferMessageRegister', 'NetTransferMessageRegister', 'XClient.NetTransfer', 'class', '网络传输消息注册器', 'XClient/NetTransfer/NetTransferMessageRegister.cs'),

    // ==========================================================
    // XClient.LightEffect
    // ==========================================================
    cls('XClient.LightEffect.EffectMgr', 'EffectMgr', 'XClient.LightEffect', 'class', '光效管理器', 'XClient/LightEffect/EffectMgr.cs'),
    cls('XClient.LightEffect.NetEffectPlayer', 'NetEffectPlayer', 'XClient.LightEffect', 'class', '网络光效播放器', 'XClient/LightEffect/NetEffectPlayer.cs'),

    // ==========================================================
    // XClient.PreLoad
    // ==========================================================
    cls('XClient.PreLoad.PreLoadCache', 'PreLoadCache', 'XClient.PreLoad', 'class', '预加载缓存', 'XClient/PreLoad/PreLoadCache.cs'),
    cls('XClient.PreLoad.PreLoadSkinCache', 'PreLoadSkinCache', 'XClient.PreLoad', 'class', '预加载皮肤缓存', 'XClient/PreLoad/PreLoadSkinCache.cs'),

    // ==========================================================
    // XClient.Common.GameNetCom
    // ==========================================================
    cls('XClient.Common.GameNetCom.IGameNetCom', 'IGameNetCom', 'XClient.Common.GameNetCom', 'interface', '游戏网络通信接口', 'XClient/Common/GameNetCom/IGameNetCom.cs'),
    cls('XClient.Common.GameNetCom.GameNetCom', 'GameNetCom', 'XClient.Common.GameNetCom', 'class', '游戏网络通信实现', 'XClient/Common/GameNetCom/GameNetCom.cs', { interfaces: ['IGameNetCom'] }),
    cls('XClient.Common.GameNetCom.IGamePackProcess', 'IGamePackProcess', 'XClient.Common.GameNetCom', 'interface', '游戏打包处理接口', 'XClient/Common/GameNetCom/IGamePackProcess.cs'),
    cls('XClient.Common.GameNetCom.CSPackProcess', 'CSPackProcess', 'XClient.Common.GameNetCom', 'class', 'CS打包处理', 'XClient/Common/GameNetCom/CSPackProcess.cs', { interfaces: ['IGamePackProcess'] }),
    cls('XClient.Common.GameNetCom.LuaPackProcess', 'LuaPackProcess', 'XClient.Common.GameNetCom', 'class', 'Lua打包处理', 'XClient/Common/GameNetCom/LuaPackProcess.cs', { interfaces: ['IGamePackProcess'] }),
    cls('XClient.Common.GameNetCom.NetDefine', 'NetDefine', 'XClient.Common.GameNetCom', 'class', '网络定义', 'XClient/Common/GameNetCom/NetDefine.cs'),
    cls('XClient.Common.GameNetCom.PackDataMerge', 'PackDataMerge', 'XClient.Common.GameNetCom', 'class', '打包数据合并', 'XClient/Common/GameNetCom/PackDataMerge.cs'),
    cls('XClient.Common.GameNetCom.MessageSinkEvent', 'MessageSinkEvent', 'XClient.Common.GameNetCom', 'class', '消息接收事件', 'XClient/Common/GameNetCom/MessageSinkEvent.cs'),

    // ==========================================================
    // XClient.Game.SchemeModule
    // ==========================================================
    cls('XClient.Game.SchemeModule.CSchemeModule', 'CSchemeModule', 'XClient.Game.SchemeModule', 'class', '配置中心模块', 'XClient/Game/SchemeModule/CSchemeModule.cs', { interfaces: ['ISchemeModule'] }),
    cls('XClient.Game.SchemeModule.GameSchemeCom', 'GameSchemeCom', 'XClient.Game.SchemeModule', 'class', '游戏配置组件', 'XClient/Game/SchemeModule/GameSchemeCom.cs'),
    cls('XClient.Game.SchemeModule.EditorSchemeCenter', 'EditorSchemeCenter', 'XClient.Game.SchemeModule', 'class', '编辑器配置中心', 'XClient/Game/SchemeModule/EditorSchemeCenter.cs'),
    cls('XClient.Game.SchemeModule.CDefaultFileSystem', 'CDefaultFileSystem', 'XClient.Game.SchemeModule', 'class', '默认文件系统', 'XClient/Game/SchemeModule/CDefaultFileSystem.cs'),

    // ==========================================================
    // XClient.Game.ResLoader
    // ==========================================================
    cls('XClient.Game.ResLoader.UnityObjPoolResLoader', 'UnityObjPoolResLoader', 'XClient.Game.ResLoader', 'class', 'Unity对象池资源加载器', 'XClient/Game/ResLoader/UnityObjPoolResLoader.cs'),
    cls('XClient.Game.ResLoader.InnerResourceLoader', 'InnerResourceLoader', 'XClient.Game.ResLoader', 'class', '内部资源加载器', 'XClient/Game/ResLoader/InnerResourceLoader.cs'),
    cls('XClient.Game.ResLoader.DefualtSpriteLoader', 'DefualtSpriteLoader', 'XClient.Game.ResLoader', 'class', '默认精灵加载器', 'XClient/Game/ResLoader/DefualtSpriteLoader.cs'),
    cls('XClient.Game.ResLoader.HandleableResourceLoader', 'HandleableResourceLoader', 'XClient.Game.ResLoader', 'class', '可处理资源加载器', 'XClient/Game/ResLoader/HandleableResourceLoader.cs'),

    // ==========================================================
    // XGame.Banner
    // ==========================================================
    cls('XGame.Banner.IBannerManager', 'IBannerManager', 'XGame.Banner', 'interface', '横幅管理器接口', 'XGame/Banner/IBannerManager.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
      methods: [
        method('SetFindNextDisplayBannerCallback', 'void', ['OnFindNextDisplayBannerCallback'], 'public', '设置查找下一个横幅回调'),
        method('Add', 'void', ['int', 'object'], 'public', '添加横幅'),
        method('ClearAll', 'void', [], 'public', '清除所有横幅'),
      ],
    }),
    cls('XGame.Banner.BannerManager', 'BannerManager', 'XGame.Banner', 'class', '横幅管理器', 'XGame/Banner/BannerManager.cs', {
      interfaces: ['IBannerManager'],
      methods: [
        method('Add', 'void', ['int', 'object'], 'public', '添加横幅'),
        method('ClearAll', 'void', [], 'public', '清除所有'),
        method('Create', 'bool', [], 'public', '创建'),
        method('Start', 'bool', [], 'public', '启动'),
        method('Stop', 'void', [], 'public', '停止'),
        method('Release', 'void', [], 'public', '释放'),
        method('Update', 'void', [], 'public', '更新'),
      ],
    }),
    cls('XGame.Banner.BannerViewBase', 'BannerViewBase', 'XGame.Banner', 'class', '横幅视图基类', 'XGame/Banner/BannerViewBase.cs', {
      baseClass: 'MonoBehaviour',
      methods: [
        method('OnInit', 'void', [], 'protected', '初始化(虚方法)'),
        method('OnReset', 'void', [], 'protected', '重置(虚方法)'),
        method('IsFinish', 'bool', [], 'public', '是否完成(虚方法)'),
      ],
    }),
    cls('XGame.Banner.BannerViewDefault', 'BannerViewDefault', 'XGame.Banner', 'class', '默认横幅视图', 'XGame/Banner/BannerViewDefault.cs', { baseClass: 'BannerViewBase' }),
    cls('XGame.Banner.BannerNode', 'BannerNode', 'XGame.Banner', 'class', '横幅节点', 'XGame/Banner/BannerNode.cs'),
    cls('XGame.Banner.BannerSettings', 'BannerSettings', 'XGame.Banner', 'class', '横幅设置', 'XGame/Banner/BannerSettings.cs'),

    // ==========================================================
    // XGame.AssetScript.UI
    // ==========================================================
    cls('XGame.AssetScript.UI.RectTransformSetter', 'RectTransformSetter', 'XGame.AssetScript.UI', 'class', 'RectTransform设置器', 'XGame/AssetScript/UI/RectTransformSetter.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.AssetScript.UI.ForceLayoutRebuider', 'ForceLayoutRebuider', 'XGame.AssetScript.UI', 'class', '强制布局重建', 'XGame/AssetScript/UI/ForceLayoutRebuider.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.AssetScript.UI.TextStyleSwitcher', 'TextStyleSwitcher', 'XGame.AssetScript.UI', 'class', '文本样式切换器', 'XGame/AssetScript/UI/TextStyleSwitcher.cs', { baseClass: 'BaseMonoStateSwitcher' }),
    cls('XGame.AssetScript.UI.TextStrSwitcher', 'TextStrSwitcher', 'XGame.AssetScript.UI', 'class', '文本字符串切换器', 'XGame/AssetScript/UI/TextStrSwitcher.cs', { baseClass: 'BaseMonoStateSwitcher' }),
    cls('XGame.AssetScript.UI.RectTransformSizeSyncer', 'RectTransformSizeSyncer', 'XGame.AssetScript.UI', 'class', 'RectTransform尺寸同步器', 'XGame/AssetScript/UI/RectTransformSizeSyncer.cs', { baseClass: 'UIBehaviour' }),
    cls('XGame.AssetScript.UI.TextMeshProPreferreWidthSyncer', 'TextMeshProPreferreWidthSyncer', 'XGame.AssetScript.UI', 'class', 'TMP首选宽度同步器', 'XGame/AssetScript/UI/TextMeshProPreferreWidthSyncer.cs'),
    cls('XGame.AssetScript.UI.LOPUIWindowMetaEx', 'LOPUIWindowMetaEx', 'XGame.AssetScript.UI', 'class', 'UI窗口配置扩展', 'XGame/AssetScript/UI/LOPUIWindowMetaEx.cs', { baseClass: 'LOPUIWindowMeta' }),
    cls('XGame.AssetScript.UI.UIWindowExSetting', 'UIWindowExSetting', 'XGame.AssetScript.UI', 'class', 'UI窗口扩展设置', 'XGame/AssetScript/UI/UIWindowExSetting.cs', { baseClass: 'ScriptableObject' }),
    cls('XGame.AssetScript.UI.MaskLevel', 'MaskLevel', 'XGame.AssetScript.UI', 'class', '遮罩层级', 'XGame/AssetScript/UI/MaskLevel.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.AssetScript.UI.MaskBorderBlur', 'MaskBorderBlur', 'XGame.AssetScript.UI', 'class', '边框模糊遮罩', 'XGame/AssetScript/UI/MaskBorderBlur.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.AssetScript.UI.MaskScreenTime', 'MaskScreenTime', 'XGame.AssetScript.UI', 'class', '屏幕时间遮罩', 'XGame/AssetScript/UI/MaskScreenTime.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.AssetScript.UI.MaskEffect', 'MaskEffect', 'XGame.AssetScript.UI', 'class', '遮罩效果', 'XGame/AssetScript/UI/MaskEffect.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.AssetScript.UI.CanvasCull', 'CanvasCull', 'XGame.AssetScript.UI', 'class', 'Canvas裁剪', 'XGame/AssetScript/UI/CanvasCull.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.AssetScript.UI.TextSkipMgr', 'TextSkipMgr', 'XGame.AssetScript.UI', 'class', '跳字管理器', 'XGame/AssetScript/UI/TextSkipMgr.cs', {
      methods: [
        method('SkipText', 'void', ['Text', '...'], 'public', '跳字(Text)'),
        method('SkipText', 'void', ['TextMeshPro', '...'], 'public', '跳字(TMP)'),
        method('SkipText', 'void', ['TextMeshProUGUI', '...'], 'public', '跳字(TMP_UGUI)'),
      ],
    }),

    // ==========================================================
    // XGame.AssetScript.ResLoader
    // ==========================================================
    cls('XGame.AssetScript.ResLoader.IResLoader', 'IResLoader', 'XGame.AssetScript.ResLoader', 'interface', '通用资源加载适配接口', 'XGame/AssetScript/ResLoader/IResLoader.cs', {
      methods: [
        method('Create', 'bool', [], 'public', '创建'),
        method('Release', 'void', [], 'public', '释放'),
        method('LoadRes', 'uint', ['string', 'int', 'bool', 'bool', 'IResLoaderSink', 'Transform'], 'public', '加载资源'),
        method('UnloadRes', 'void', ['uint', 'bool'], 'public', '卸载资源'),
        method('IsResCaching', 'bool', ['string'], 'public', '资源是否缓存中'),
        method('IsExistLocalCache', 'bool', ['string'], 'public', '本地缓存是否存在'),
      ],
    }),
    cls('XGame.AssetScript.ResLoader.IResLoaderSink', 'IResLoaderSink', 'XGame.AssetScript.ResLoader', 'interface', '资源加载回调', 'XGame/AssetScript/ResLoader/IResLoaderSink.cs', {
      methods: [
        method('OnLoadResSucess', 'void', ['Object', 'uint', 'int'], 'public', '加载成功'),
        method('OnLoadResFail', 'void', ['uint', 'int'], 'public', '加载失败'),
      ],
    }),
    cls('XGame.AssetScript.ResLoader.IResourcesLoader', 'IResourcesLoader', 'XGame.AssetScript.ResLoader', 'interface', '资源加载器接口', 'XGame/AssetScript/ResLoader/IResourcesLoader.cs', {
      baseClass: 'IResLoaderSink',
      interfaces: ['IResLoaderSink'],
    }),
    cls('XGame.AssetScript.ResLoader.ResourceLoadAdapter', 'ResourceLoadAdapter', 'XGame.AssetScript.ResLoader', 'class', '资源加载适配器', 'XGame/AssetScript/ResLoader/ResourceLoadAdapter.cs', { interfaces: ['IResLoader', 'IUnityObjectPoolSinkWithObj'] }),
    cls('XGame.AssetScript.ResLoader.ResourcesManager', 'ResourcesManager', 'XGame.AssetScript.ResLoader', 'class', '资源管理器', 'XGame/AssetScript/ResLoader/ResourcesManager.cs', {
      methods: [
        method('Create', 'bool', [], 'public', '创建'),
        method('Update', 'void', [], 'public', '更新'),
        method('SetLoader', 'void', ['IResLoader'], 'public', '设置加载器'),
        method('Release', 'void', [], 'public', '释放'),
        method('GetResourcesLoad', 'IResourcesLoader', ['int'], 'public', '获取资源加载器'),
      ],
    }),
    cls('XGame.AssetScript.ResLoader.ResourceLoader', 'ResourceLoader', 'XGame.AssetScript.ResLoader', 'class', '资源加载器', 'XGame/AssetScript/ResLoader/ResourceLoader.cs'),
    cls('XGame.AssetScript.ResLoader.SpineResourcesLoader', 'SpineResourcesLoader', 'XGame.AssetScript.ResLoader', 'class', 'Spine资源加载器', 'XGame/AssetScript/ResLoader/SpineResourcesLoader.cs'),
    cls('XGame.AssetScript.ResLoader.RemoteResCacheMgr', 'RemoteResCacheMgr', 'XGame.AssetScript.ResLoader', 'class', '远程资源缓存管理器', 'XGame/AssetScript/ResLoader/RemoteResCacheMgr.cs'),

    // ==========================================================
    // XGame.AssetScript.UHyperText
    // ==========================================================
    cls('XGame.AssetScript.UHyperText.SymbolTextEmojSelector', 'SymbolTextEmojSelector', 'XGame.AssetScript.UHyperText', 'class', '表情选择面板', 'XGame/AssetScript/UHyperText/SymbolTextEmojSelector.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.AssetScript.UHyperText.SymbolTextEventExtend', 'SymbolTextEventExtend', 'XGame.AssetScript.UHyperText', 'class', '富文本点击处理', 'XGame/AssetScript/UHyperText/SymbolTextEventExtend.cs', {
      baseClass: 'SymbolTextEvent',
      methods: [
        method('AddClickLinkListener', 'void', ['Action<string>'], 'public', '添加链接点击监听'),
        method('RemoveClickLinkListener', 'void', ['Action<string>'], 'public', '移除链接点击监听'),
        method('AddClickSpriteListener', 'void', ['Action<string>'], 'public', '添加精灵点击监听'),
      ],
    }),
    cls('XGame.AssetScript.UHyperText.SymbolTextEmojItem', 'SymbolTextEmojItem', 'XGame.AssetScript.UHyperText', 'class', '富文本表情项', 'XGame/AssetScript/UHyperText/SymbolTextEmojItem.cs', {
      baseClass: 'Button',
      methods: [
        method('SetEmojName', 'void', ['string', 'Action<string>'], 'public', '设置表情名'),
        method('Clear', 'void', [], 'public', '清理'),
      ],
    }),
    cls('XGame.AssetScript.UHyperText.UHyperTextToolExtend', 'UHyperTextToolExtend', 'XGame.AssetScript.UHyperText', 'class', '富文本工具扩展', 'XGame/AssetScript/UHyperText/UHyperTextToolExtend.cs', {
      methods: [
        method('LoadSprite', 'uint', ['string', 'Action<Sprite,uint>'], 'public', '加载精灵'),
        method('UnloadSprite', 'void', ['uint'], 'public', '卸载精灵'),
      ],
    }),

    // ==========================================================
    // XGame.AssetScript.TextSetting
    // ==========================================================
    cls('XGame.AssetScript.TextSetting.PSDTMPTextStyleSettings', 'PSDTMPTextStyleSettings', 'XGame.AssetScript.TextSetting', 'class', 'TMP文本样式设置', 'XGame/AssetScript/TextSetting/PSDTMPTextStyleSettings.cs', {
      baseClass: 'ScriptableObject',
      methods: [
        method('GetAllStyles', 'Dictionary', [], 'public', '获取所有样式'),
        method('GetStyle', 'StyleSetting', ['string'], 'public', '获取样式'),
      ],
    }),
    cls('XGame.AssetScript.TextSetting.TextSettingConfig', 'TextSettingConfig', 'XGame.AssetScript.TextSetting', 'class', '文本设置配置', 'XGame/AssetScript/TextSetting/TextSettingConfig.cs', { baseClass: 'SingletonScriptObject' }),
    cls('XGame.AssetScript.TextSetting.TextColorLibrary', 'TextColorLibrary', 'XGame.AssetScript.TextSetting', 'class', '文本颜色库', 'XGame/AssetScript/TextSetting/TextColorLibrary.cs', {
      baseClass: 'AddressableAssetCollections',
      methods: [
        method('GetColorByName', 'Color', ['string'], 'public', '通过名称获取颜色'),
        method('GetHexColorStringByName', 'string', ['string'], 'public', '通过名称获取十六进制颜色'),
      ],
    }),

    // ==========================================================
    // XGame.AssetScript.I18N
    // ==========================================================
    cls('XGame.AssetScript.I18N.I18NFontPreProcesser', 'I18NFontPreProcesser', 'XGame.AssetScript.I18N', 'class', '国际化字体预处理', 'XGame/AssetScript/I18N/I18NFontPreProcesser.cs', { baseClass: 'GamePreProcesser' }),

    // ==========================================================
    // XGame.AssetScript.Animation
    // ==========================================================
    cls('XGame.AssetScript.Animation.SimpleAnimatioEventHandler', 'SimpleAnimatioEventHandler', 'XGame.AssetScript.Animation', 'class', '简单动画事件处理器', 'XGame/AssetScript/Animation/SimpleAnimatioEventHandler.cs', { baseClass: 'MonoBehaviour', interfaces: ['IAnimationEventSink'] }),

    // ==========================================================
    // XGame.AssetScript.OrmBuffer
    // ==========================================================
    cls('XGame.AssetScript.OrmBuffer.OrmBufferManager', 'OrmBufferManager', 'XGame.AssetScript.OrmBuffer', 'class', 'ORM缓冲管理器(单例)', 'XGame/AssetScript/OrmBuffer/OrmBufferManager.cs', {
      methods: [
        method('Create', 'void', [], 'public', '创建'),
        method('Release', 'void', [], 'public', '释放'),
        method('GetAllOrmBuffers', 'void', [], 'public', '获取所有ORM缓冲'),
        method('GetMessageID', 'uint', ['string'], 'public', '获取消息ID'),
        method('CacheBufferField', 'int', ['string', 'TCSMessage', 'string'], 'public', '缓存Buffer字段'),
      ],
    }),

    // ==========================================================
    // XGame.AssetScript.Utils
    // ==========================================================
    cls('XGame.AssetScript.Utils.CameraOrthographicProjectionSizeAdapter', 'CameraOrthographicProjectionSizeAdapter', 'XGame.AssetScript.Utils', 'class', '相机投影视口适配', 'XGame/AssetScript/Utils/CameraOrthographicProjectionSizeAdapter.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.AssetScript.Utils.DelayActive', 'DelayActive', 'XGame.AssetScript.Utils', 'class', '延迟激活', 'XGame/AssetScript/Utils/DelayActive.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.AssetScript.Utils.RawImageVideoDisplay', 'RawImageVideoDisplay', 'XGame.AssetScript.Utils', 'class', '视频展示器', 'XGame/AssetScript/Utils/RawImageVideoDisplay.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.AssetScript.Utils.TextMeshProAutoLink', 'TextMeshProAutoLink', 'XGame.AssetScript.Utils', 'class', 'TMP自动链接', 'XGame/AssetScript/Utils/TextMeshProAutoLink.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.AssetScript.Utils.NetworkReachabilityMonitor', 'NetworkReachabilityMonitor', 'XGame.AssetScript.Utils', 'class', '网络可达性监控', 'XGame/AssetScript/Utils/NetworkReachabilityMonitor.cs', { baseClass: 'MonoBehaviourEX' }),
    cls('XGame.AssetScript.Utils.TransformInfo', 'TransformInfo', 'XGame.AssetScript.Utils', 'class', 'Transform信息', 'XGame/AssetScript/Utils/TransformInfo.cs', { baseClass: 'MonoBehaviour' }),

    // ==========================================================
    // XGame.DoTweenEx
    // ==========================================================
    cls('XGame.DoTweenEx.TweenNode', 'TweenNode', 'XGame.DoTweenEx', 'abstract_class', 'DoTween扩展基础处理节点', 'XGame/DoTweenEx/TweenNode.cs', {
      baseClass: 'LitePoolableObject',
      properties: [
        prop('target', 'object', '目标对象'),
        prop('hashCode', 'int', '哈希码'),
        prop('delay', 'float', '延迟'),
        prop('duration', 'float', '持续时间'),
        prop('ease', 'Ease', '缓动类型'),
        prop('loopType', 'LoopType', '循环类型'),
        prop('loopCount', 'int', '循环次数'),
      ],
      methods: [method('CreateInit', 'void', [], 'public', '创建初始化')],
    }),
    cls('XGame.DoTweenEx.FloatTweenNode', 'FloatTweenNode', 'XGame.DoTweenEx', 'abstract_class', '浮点缓动节点', 'XGame/DoTweenEx/FloatTweenNode.cs', { baseClass: 'TweenNode' }),
    cls('XGame.DoTweenEx.Vector3TweenNode', 'Vector3TweenNode', 'XGame.DoTweenEx', 'abstract_class', 'Vector3缓动节点', 'XGame/DoTweenEx/Vector3TweenNode.cs', { baseClass: 'TweenNode' }),
    cls('XGame.DoTweenEx.QuaternionTweenNode', 'QuaternionTweenNode', 'XGame.DoTweenEx', 'abstract_class', 'Quaternion缓动节点', 'XGame/DoTweenEx/QuaternionTweenNode.cs', { baseClass: 'TweenNode' }),
    cls('XGame.DoTweenEx.ImageFadeTweenNode', 'ImageFadeTweenNode', 'XGame.DoTweenEx', 'class', '图片淡入淡出', 'XGame/DoTweenEx/ImageFadeTweenNode.cs', { baseClass: 'FloatTweenNode' }),
    cls('XGame.DoTweenEx.ImageFillTweenNode', 'ImageFillTweenNode', 'XGame.DoTweenEx', 'class', 'Image填充', 'XGame/DoTweenEx/ImageFillTweenNode.cs', { baseClass: 'FloatTweenNode' }),
    cls('XGame.DoTweenEx.ScrollRectNormalPosNode', 'ScrollRectNormalPosNode', 'XGame.DoTweenEx', 'class', '滚动视图位置', 'XGame/DoTweenEx/ScrollRectNormalPosNode.cs', { baseClass: 'FloatTweenNode' }),
    cls('XGame.DoTweenEx.TMPFadeTweenNode', 'TMPFadeTweenNode', 'XGame.DoTweenEx', 'class', 'TMP淡入淡出', 'XGame/DoTweenEx/TMPFadeTweenNode.cs', { baseClass: 'FloatTweenNode' }),
    cls('XGame.DoTweenEx.TrsPosTweenNode', 'TrsPosTweenNode', 'XGame.DoTweenEx', 'class', '位置缓动', 'XGame/DoTweenEx/TrsPosTweenNode.cs', { baseClass: 'Vector3TweenNode' }),
    cls('XGame.DoTweenEx.RTTrsPosTweenNode', 'RTTrsPosTweenNode', 'XGame.DoTweenEx', 'class', 'RectTransform位置缓动', 'XGame/DoTweenEx/RTTrsPosTweenNode.cs', { baseClass: 'Vector3TweenNode' }),
    cls('XGame.DoTweenEx.TrsScaleTweenNode', 'TrsScaleTweenNode', 'XGame.DoTweenEx', 'class', '缩放缓动', 'XGame/DoTweenEx/TrsScaleTweenNode.cs', { baseClass: 'Vector3TweenNode' }),
    cls('XGame.DoTweenEx.TrsRotateTweenNode', 'TrsRotateTweenNode', 'XGame.DoTweenEx', 'class', '旋转缓动', 'XGame/DoTweenEx/TrsRotateTweenNode.cs', { baseClass: 'QuaternionTweenNode' }),
    cls('XGame.DoTweenEx.SequenceNode', 'SequenceNode', 'XGame.DoTweenEx', 'class', '序列节点', 'XGame/DoTweenEx/SequenceNode.cs', { baseClass: 'TweenNode' }),
    cls('XGame.DoTweenEx.DoTweenExMgr', 'DoTweenExMgr', 'XGame.DoTweenEx', 'class', 'DoTween扩展管理器(单例)', 'XGame/DoTweenEx/DoTweenExMgr.cs'),
    cls('XGame.DoTweenEx.DoTweenInterfaceEx', 'DoTweenInterfaceEx', 'XGame.DoTweenEx', 'static_class', 'DoTween扩展接口', 'XGame/DoTweenEx/DoTweenInterfaceEx.cs'),

    // ==========================================================
    // XGame.AssetScript.SDK
    // ==========================================================
    cls('XGame.AssetScript.SDK.ISDK', 'ISDK', 'XGame.AssetScript.SDK', 'interface', 'SDK接口', 'XGame/AssetScript/SDK/ISDK.cs', {
      properties: [
        prop('Name', 'string', 'SDK名称'),
        prop('IsSupport', 'bool', '是否支持'),
        prop('IsInitialized', 'bool', '是否已初始化'),
      ],
      methods: [
        method('Initialize', 'bool', ['string', 'string'], 'public', '初始化'),
        method('SetDebug', 'void', ['bool'], 'public', '设置调试模式'),
        method('Update', 'void', [], 'public', '更新'),
        method('Destroy', 'void', [], 'public', '销毁'),
        method('OnReceiveSDKMessage', 'void', ['int', 'string'], 'public', '接收SDK消息'),
      ],
    }),
    cls('XGame.AssetScript.SDK.IBaseSDK', 'IBaseSDK', 'XGame.AssetScript.SDK', 'interface', '基础SDK接口', 'XGame/AssetScript/SDK/IBaseSDK.cs', {
      baseClass: 'ISDK',
      interfaces: ['ISDK'],
      methods: [
        method('HasNotchInScreen', 'bool', [], 'public', '是否有刘海屏'),
        method('RestartApp', 'void', [], 'public', '重启应用'),
        method('VibratorApp', 'void', ['long', 'long'], 'public', '震动'),
        method('RequestDeviceIdentify', 'void', ['Action'], 'public', '请求设备标识'),
        method('SaveApplicationData', 'void', ['string'], 'public', '保存应用数据'),
        method('LoadApplicationData', 'void', ['Action'], 'public', '加载应用数据'),
      ],
    }),
    cls('XGame.AssetScript.SDK.SDK_Android', 'SDK_Android', 'XGame.AssetScript.SDK', 'abstract_class', 'Android SDK基类', 'XGame/AssetScript/SDK/SDK_Android.cs', { interfaces: ['ISDK'] }),
    cls('XGame.AssetScript.SDK.BaseSDK_IOS', 'BaseSDK_IOS', 'XGame.AssetScript.SDK', 'class', 'iOS基础SDK', 'XGame/AssetScript/SDK/BaseSDK_IOS.cs', { interfaces: ['IBaseSDK'] }),
    cls('XGame.AssetScript.SDK.BaseSDK_Android', 'BaseSDK_Android', 'XGame.AssetScript.SDK', 'class', 'Android基础SDK', 'XGame/AssetScript/SDK/BaseSDK_Android.cs', { baseClass: 'SDK_Android', interfaces: ['IBaseSDK'] }),
    cls('XGame.AssetScript.SDK.BaseSDK_Default', 'BaseSDK_Default', 'XGame.AssetScript.SDK', 'class', '默认基础SDK', 'XGame/AssetScript/SDK/BaseSDK_Default.cs', { interfaces: ['IBaseSDK'] }),
    cls('XGame.AssetScript.SDK.GameSDKManager', 'GameSDKManager', 'XGame.AssetScript.SDK', 'class', '游戏SDK管理器', 'XGame/AssetScript/SDK/GameSDKManager.cs'),
    cls('XGame.AssetScript.SDK.GameSDKMessageProxyMono', 'GameSDKMessageProxyMono', 'XGame.AssetScript.SDK', 'class', 'SDK消息代理', 'XGame/AssetScript/SDK/GameSDKMessageProxyMono.cs', { baseClass: 'MonoBehaviour' }),

    // ==========================================================
    // XGame.Update
    // ==========================================================
    cls('XGame.Update.UpdateScene', 'UpdateScene', 'XGame.Update', 'class', '更新场景', 'XGame/Update/UpdateScene.cs', {
      baseClass: 'MonoBehaviour',
      methods: [
        method('OnSkipUpdate', 'void', [], 'public', '跳过更新'),
        method('StartUpdate', 'void', [], 'public', '开始更新'),
        method('CheckNetwork', 'bool', [], 'public', '检查网络'),
        method('ChangeToLogin', 'void', [], 'public', '切换到登录'),
      ],
    }),
    cls('XGame.Update.UpdateSetup', 'UpdateSetup', 'XGame.Update', 'class', '更新设置', 'XGame/Update/UpdateSetup.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.Update.UpdateI18NConfig', 'UpdateI18NConfig', 'XGame.Update', 'class', '更新国际化配置', 'XGame/Update/UpdateI18NConfig.cs', { baseClass: 'ScriptableObject' }),
    cls('XGame.Update.UpdateMessageBoxUI', 'UpdateMessageBoxUI', 'XGame.Update', 'class', '更新消息框UI', 'XGame/Update/UpdateMessageBoxUI.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.Update.PingTest', 'PingTest', 'XGame.Update', 'class', 'Ping测试', 'XGame/Update/PingTest.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.Update.UpdateDebug', 'UpdateDebug', 'XGame.Update', 'class', '更新调试', 'XGame/Update/UpdateDebug.cs'),
    cls('XGame.Update.UIMoviePlayer', 'UIMoviePlayer', 'XGame.Update', 'class', 'UI视频播放器', 'XGame/Update/UIMoviePlayer.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.Update.LoadDll', 'LoadDll', 'XGame.Update', 'class', '热更DLL加载', 'XGame/Update/LoadDll.cs'),
    cls('XGame.Update.LoadSystem', 'LoadSystem', 'XGame.Update', 'class', '热更加载系统', 'XGame/Update/LoadSystem.cs'),

    // ==========================================================
    // XGame.HybridCLR
    // ==========================================================
    cls('XGame.HybridCLR.HybridCLRDef', 'HybridCLRDef', 'XGame.HybridCLR', 'class', 'HybridCLR定义', 'XGame/HybridCLR/HybridCLRDef.cs'),
    cls('XGame.HybridCLR.HybridCLRStartUp', 'HybridCLRStartUp', 'XGame.HybridCLR', 'class', 'HybridCLR启动', 'XGame/HybridCLR/HybridCLRStartUp.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.HybridCLR.AOTGenericReferences', 'AOTGenericReferences', 'XGame.HybridCLR', 'class', 'AOT泛型引用', 'XGame/HybridCLR/AOTGenericReferences.cs', { baseClass: 'MonoBehaviour' }),

    // ==========================================================
    // Monitor System
    // ==========================================================
    cls('Monitor.IMonitorMgr', 'IMonitorMgr', 'Monitor', 'interface', '监控管理器接口', 'Monitor/IMonitorMgr.cs', {
      methods: [
        method('AddMonitor', 'void', ['MonitorType'], 'public', '添加监控'),
        method('RemoveMonitor', 'void', ['MonitorType'], 'public', '移除监控'),
      ],
    }),
    cls('Monitor.IMonitorNode', 'IMonitorNode', 'Monitor', 'interface', '监控节点接口', 'Monitor/IMonitorNode.cs', {
      methods: [method('SnapShot', 'MonitorNodeData', [], 'public', '快照')],
    }),
    cls('Monitor.MonitorMgr', 'MonitorMgr', 'Monitor', 'class', '监控管理器', 'Monitor/MonitorMgr.cs', { interfaces: ['IMonitorMgr'] }),
    cls('Monitor.MonitorNodeBase', 'MonitorNodeBase', 'Monitor', 'class', '监控节点基类', 'Monitor/MonitorNodeBase.cs'),
    cls('Monitor.CSEventEngineNode', 'CSEventEngineNode', 'Monitor', 'class', '事件引擎监控', 'Monitor/CSEventEngineNode.cs', { baseClass: 'MonitorNodeBase' }),
    cls('Monitor.CSTimerAxisNode', 'CSTimerAxisNode', 'Monitor', 'class', '定时器监控', 'Monitor/CSTimerAxisNode.cs', { baseClass: 'MonitorNodeBase' }),
    cls('Monitor.CSUnityPoolNode', 'CSUnityPoolNode', 'Monitor', 'class', '对象池监控', 'Monitor/CSUnityPoolNode.cs', { baseClass: 'MonitorNodeBase' }),
    cls('Monitor.CSFrameUpdateManagerNode', 'CSFrameUpdateManagerNode', 'Monitor', 'class', '帧更新监控', 'Monitor/CSFrameUpdateManagerNode.cs', { baseClass: 'MonitorNodeBase' }),
    cls('Monitor.CSNetModuleNode', 'CSNetModuleNode', 'Monitor', 'class', '网络模块监控', 'Monitor/CSNetModuleNode.cs', { baseClass: 'MonitorNodeBase' }),
    cls('Monitor.CSSpriteAtlasNode', 'CSSpriteAtlasNode', 'Monitor', 'class', '图集监控', 'Monitor/CSSpriteAtlasNode.cs', { baseClass: 'MonitorNodeBase' }),
    cls('Monitor.CSLOPObjectNode', 'CSLOPObjectNode', 'Monitor', 'class', 'LOP对象监控', 'Monitor/CSLOPObjectNode.cs', { baseClass: 'MonitorNodeBase' }),
    cls('Monitor.CSAssetNode', 'CSAssetNode', 'Monitor', 'class', '资产监控', 'Monitor/CSAssetNode.cs', { baseClass: 'MonitorNodeBase' }),

    // ==========================================================
    // GameScripts (Animation)
    // ==========================================================
    cls('GameScripts.Animation.SpineAni', 'SpineAni', 'GameScripts.Animation', 'class', 'Spine动画', 'GameScripts/Animation/SpineAni.cs'),
    cls('GameScripts.Animation.ImageAni', 'ImageAni', 'GameScripts.Animation', 'class', '图片动画', 'GameScripts/Animation/ImageAni.cs'),
    cls('GameScripts.Animation.NetObjectAni', 'NetObjectAni', 'GameScripts.Animation', 'class', '网络对象动画', 'GameScripts/Animation/NetObjectAni.cs'),
    cls('GameScripts.Animation.SpineObject', 'SpineObject', 'GameScripts.Animation', 'class', 'Spine对象', 'GameScripts/Animation/SpineObject.cs'),

    // ==========================================================
    // CommonScript
    // ==========================================================
    cls('CommonScript.GamePlayConfig', 'GamePlayConfig', 'CommonScript', 'class', '游戏玩法配置', 'CommonScript/GamePlayConfig.cs'),

    // ==========================================================
    // XGame.Common (Core Framework - XGameDll)
    // ==========================================================
    cls('XGame.Common.XGameApp', 'XGameApp', 'XGame.Common', 'class', 'XGame应用入口', 'XGame/Common/XGameApp.cs', {
      methods: [
        method('GetApp', 'XGameApp', [], 'public', '获取应用实例', true),
        method('Init', 'void', [], 'public', '初始化'),
        method('Update', 'void', [], 'public', '更新'),
        method('LateUpdate', 'void', [], 'public', '延迟更新'),
        method('FixedUpdate', 'void', [], 'public', '固定帧更新'),
        method('Release', 'void', [], 'public', '释放'),
        method('GetCom', 'ICom', ['int'], 'public', '获取组件'),
        method('AddCom', 'void', ['ICom'], 'public', '添加组件'),
        method('RemoveCom', 'void', ['int'], 'public', '移除组件'),
        method('OnXGameAppSink_OnInit', 'void', [], 'public', '应用初始化回调'),
        method('OnXGameAppSink_OnWillQuit', 'void', [], 'public', '应用即将退出回调'),
      ],
    }),
    cls('XGame.Common.XGameAppEnv', 'XGameAppEnv', 'XGame.Common', 'class', 'XGame应用环境配置', 'XGame/Common/XGameAppEnv.cs', {
      properties: [
        prop('IsDebug', 'bool', '是否调试模式'),
        prop('IsEditor', 'bool', '是否编辑器'),
        prop('Platform', 'int', '平台'),
        prop('AppVersion', 'string', '应用版本'),
      ],
    }),
    cls('XGame.Common.XGameAppEnvMono', 'XGameAppEnvMono', 'XGame.Common', 'class', 'XGame应用环境Mono', 'XGame/Common/XGameAppEnvMono.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.Common.XGameComs', 'XGameComs', 'XGame.Common', 'class', 'XGame组件容器', 'XGame/Common/XGameComs.cs', {
      methods: [
        method('GetCom', 'ICom', ['int'], 'public', '获取组件'),
        method('AddCom', 'void', ['ICom'], 'public', '添加组件'),
        method('RemoveCom', 'void', ['int'], 'public', '移除组件'),
        method('Clear', 'void', [], 'public', '清空组件'),
      ],
    }),
    cls('XGame.Common.ICom', 'ICom', 'XGame.Common', 'interface', '组件接口', 'XGame/Common/ICom.cs', {
      methods: [
        method('Create', 'bool', ['object', 'object'], 'public', '创建'),
        method('Start', 'bool', [], 'public', '启动'),
        method('Stop', 'void', [], 'public', '停止'),
        method('Release', 'void', [], 'public', '释放'),
        method('Update', 'void', [], 'public', '更新'),
        method('SetID', 'void', ['int'], 'public', '设置ID'),
        method('GetID', 'int', [], 'public', '获取ID'),
      ],
    }),
    cls('XGame.Common.IComEx', 'IComEx', 'XGame.Common', 'interface', '组件扩展接口', 'XGame/Common/IComEx.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
      methods: [
        method('LateUpdate', 'void', [], 'public', '延迟更新'),
        method('FixedUpdate', 'void', [], 'public', '固定帧更新'),
      ],
    }),
    cls('XGame.Common.IXGameAppSink', 'IXGameAppSink', 'XGame.Common', 'interface', 'XGame应用回调', 'XGame/Common/IXGameAppSink.cs', {
      methods: [
        method('OnXGameAppInited', 'void', [], 'public', '应用初始化完成'),
        method('OnXGameAppWillQuit', 'void', [], 'public', '应用即将退出'),
      ],
    }),
    cls('XGame.Common.Def', 'Def', 'XGame.Common', 'static_class', '全局常量定义', 'XGame/Common/Def.cs'),
    cls('XGame.Common.GamePath', 'GamePath', 'XGame.Common', 'static_class', '游戏路径工具', 'XGame/Common/GamePath.cs', {
      methods: [
        method('GetPersistentDataPath', 'string', [], 'public', '获取持久化数据路径', true),
        method('GetStreamingAssetsPath', 'string', [], 'public', '获取StreamingAssets路径', true),
        method('GetTemporaryCachePath', 'string', [], 'public', '获取临时缓存路径', true),
      ],
    }),

    // ==========================================================
    // XGame.Common.Utils (XGameDll)
    // ==========================================================
    cls('XGame.Common.Utils.Singleton', 'Singleton', 'XGame.Common.Utils', 'abstract_class', '泛型单例基类', 'XGame/Common/Utils/Singleton.cs', {
      properties: [prop('Instance', 'T', '单例实例(get)')],
    }),
    cls('XGame.Common.Utils.ObjectPool', 'ObjectPool', 'XGame.Common.Utils', 'class', '对象池', 'XGame/Common/Utils/ObjectPool.cs', {
      methods: [
        method('Get', 'T', [], 'public', '获取对象'),
        method('Release', 'void', ['T'], 'public', '释放对象'),
        method('Clear', 'void', [], 'public', '清空'),
      ],
    }),
    cls('XGame.Common.Utils.ListPool', 'ListPool', 'XGame.Common.Utils', 'class', '列表对象池', 'XGame/Common/Utils/ListPool.cs', {
      methods: [
        method('Get', 'List<T>', [], 'public', '获取列表'),
        method('Release', 'void', ['List<T>'], 'public', '释放列表'),
      ],
    }),
    cls('XGame.Common.Utils.StringUtil', 'StringUtil', 'XGame.Common.Utils', 'static_class', '字符串工具', 'XGame/Common/Utils/StringUtil.cs'),
    cls('XGame.Common.Utils.MathUtil', 'MathUtil', 'XGame.Common.Utils', 'static_class', '数学工具', 'XGame/Common/Utils/MathUtil.cs'),
    cls('XGame.Common.Utils.DateTimeUtil', 'DateTimeUtil', 'XGame.Common.Utils', 'static_class', '日期时间工具', 'XGame/Common/Utils/DateTimeUtil.cs'),
    cls('XGame.Common.Utils.EncryptUtil', 'EncryptUtil', 'XGame.Common.Utils', 'static_class', '加密工具', 'XGame/Common/Utils/EncryptUtil.cs'),
    cls('XGame.Common.Utils.HashHelper', 'HashHelper', 'XGame.Common.Utils', 'static_class', '哈希工具', 'XGame/Common/Utils/HashHelper.cs'),
    cls('XGame.Common.Utils.DebugEx', 'DebugEx', 'XGame.Common.Utils', 'static_class', '调试扩展工具', 'XGame/Common/Utils/DebugEx.cs'),
    cls('XGame.Common.Utils.File', 'File', 'XGame.Common.Utils', 'static_class', '文件操作工具', 'XGame/Common/Utils/File.cs'),
    cls('XGame.Common.Utils.Path', 'Path', 'XGame.Common.Utils', 'static_class', '路径工具', 'XGame/Common/Utils/Path.cs'),
    cls('XGame.Common.Utils.Platform', 'Platform', 'XGame.Common.Utils', 'static_class', '平台工具', 'XGame/Common/Utils/Platform.cs'),
    cls('XGame.Common.Utils.MemUtil', 'MemUtil', 'XGame.Common.Utils', 'static_class', '内存工具', 'XGame/Common/Utils/MemUtil.cs'),
    cls('XGame.Common.Utils.BinParser', 'BinParser', 'XGame.Common.Utils', 'class', '二进制解析器', 'XGame/Common/Utils/BinParser.cs'),
    cls('XGame.Common.Utils.BitFlag', 'BitFlag', 'XGame.Common.Utils', 'class', '位标记工具', 'XGame/Common/Utils/BitFlag.cs'),
    cls('XGame.Common.Utils.CRLE', 'CRLE', 'XGame.Common.Utils', 'class', 'RLE压缩', 'XGame/Common/Utils/CRLE.cs'),
    cls('XGame.Common.Utils.XXTea', 'XXTea', 'XGame.Common.Utils', 'class', 'XXTea加密', 'XGame/Common/Utils/XXTea.cs'),
    cls('XGame.Common.Utils.XmlParser', 'XmlParser', 'XGame.Common.Utils', 'class', 'XML解析器', 'XGame/Common/Utils/XmlParser.cs'),
    cls('XGame.Common.Utils.DataConfig', 'DataConfig', 'XGame.Common.Utils', 'class', '数据配置', 'XGame/Common/Utils/DataConfig.cs'),
    cls('XGame.Common.Utils.ResourceRef', 'ResourceRef', 'XGame.Common.Utils', 'class', '资源引用', 'XGame/Common/Utils/ResourceRef.cs'),
    cls('XGame.Common.Utils.ScreenUtil', 'ScreenUtil', 'XGame.Common.Utils', 'static_class', '屏幕工具', 'XGame/Common/Utils/ScreenUtil.cs'),
    cls('XGame.Common.Utils.Temps', 'Temps', 'XGame.Common.Utils', 'static_class', '临时变量工具', 'XGame/Common/Utils/Temps.cs'),
    cls('XGame.Common.Utils.EnumUtil', 'EnumUtil', 'XGame.Common.Utils', 'static_class', '枚举工具', 'XGame/Common/Utils/EnumUtil.cs'),
    cls('XGame.Common.Utils.CoreFileSync', 'CoreFileSync', 'XGame.Common.Utils', 'class', '核心文件同步', 'XGame/Common/Utils/CoreFileSync.cs'),
    cls('XGame.Common.Utils.Trace', 'Trace', 'XGame.Common.Utils', 'class', '追踪工具', 'XGame/Common/Utils/Trace.cs'),

    // ==========================================================
    // XGame.Common.Memory (XGameDll)
    // ==========================================================
    cls('XGame.Common.Memory.ByteData', 'ByteData', 'XGame.Common.Memory', 'class', '字节数据', 'XGame/Common/Memory/ByteData.cs'),
    cls('XGame.Common.Memory.IMemPool', 'IMemPool', 'XGame.Common.Memory', 'interface', '内存池接口', 'XGame/Common/Memory/IMemPool.cs'),
    cls('XGame.Common.Memory.MemPool', 'MemPool', 'XGame.Common.Memory', 'class', '内存池实现', 'XGame/Common/Memory/MemPool.cs'),

    // ==========================================================
    // XGame.Common.Buffer (XGameDll)
    // ==========================================================
    cls('XGame.Common.Buffer.PacketRecv', 'PacketRecv', 'XGame.Common.Buffer', 'class', '接收数据包', 'XGame/Common/Buffer/PacketRecv.cs'),
    cls('XGame.Common.Buffer.PacketSend', 'PacketSend', 'XGame.Common.Buffer', 'class', '发送数据包', 'XGame/Common/Buffer/PacketSend.cs'),

    // ==========================================================
    // XGame.Common.Event (XGameDll)
    // ==========================================================
    cls('XGame.Common.Event.XGameEvent', 'XGameEvent', 'XGame.Common.Event', 'class', 'XGame事件', 'XGame/Common/Event/XGameEvent.cs', {
      methods: [
        method('GetEventID', 'int', [], 'public', '获取事件ID'),
        method('SetEventID', 'void', ['int'], 'public', '设置事件ID'),
        method('GetEventData', 'object', [], 'public', '获取事件数据'),
      ],
    }),

    // ==========================================================
    // XGame.Common.Thread (XGameDll)
    // ==========================================================
    cls('XGame.Common.Thread.QueueNode', 'QueueNode', 'XGame.Common.Thread', 'class', '队列节点', 'XGame/Common/Thread/QueueNode.cs'),
    cls('XGame.Common.Thread.ThreadQueue', 'ThreadQueue', 'XGame.Common.Thread', 'class', '线程安全队列', 'XGame/Common/Thread/ThreadQueue.cs'),

    // ==========================================================
    // XGame.State (XGameDll)
    // ==========================================================
    cls('XGame.State.IState', 'IState', 'XGame.State', 'interface', '状态接口', 'XGame/State/IState.cs', {
      methods: [
        method('GetStateID', 'int', [], 'public', '获取状态ID'),
        method('OnEnter', 'void', ['object'], 'public', '进入状态'),
        method('OnExit', 'void', [], 'public', '退出状态'),
        method('OnUpdate', 'void', [], 'public', '状态更新'),
      ],
    }),
    cls('XGame.State.IStateMachine', 'IStateMachine', 'XGame.State', 'interface', '状态机接口', 'XGame/State/IStateMachine.cs', {
      methods: [
        method('GetCurrentState', 'IState', [], 'public', '获取当前状态'),
        method('ChangeState', 'void', ['int', 'object'], 'public', '切换状态'),
        method('OnCreate', 'void', ['object'], 'public', '创建'),
        method('OnPreChangeState', 'void', ['int', 'int'], 'public', '状态切换前'),
        method('OnAfterChangeState', 'void', ['int', 'int'], 'public', '状态切换后'),
      ],
    }),
    cls('XGame.State.IStateMachineManager', 'IStateMachineManager', 'XGame.State', 'interface', '状态机管理器接口', 'XGame/State/IStateMachineManager.cs'),
    cls('XGame.State.IStateSwitchValidator', 'IStateSwitchValidator', 'XGame.State', 'interface', '状态切换校验器接口', 'XGame/State/IStateSwitchValidator.cs', {
      methods: [method('CanSwitch', 'bool', ['int', 'int'], 'public', '是否可以切换')],
    }),
    cls('XGame.State.BaseState', 'BaseState', 'XGame.State', 'abstract_class', '状态基类', 'XGame/State/BaseState.cs', {
      interfaces: ['IState'],
      methods: [
        method('GetStateID', 'int', [], 'public', '获取状态ID'),
        method('OnEnter', 'void', ['object'], 'public', '进入状态'),
        method('OnExit', 'void', [], 'public', '退出状态'),
        method('OnUpdate', 'void', [], 'public', '状态更新'),
      ],
    }),
    cls('XGame.State.BaseStateMachine', 'BaseStateMachine', 'XGame.State', 'abstract_class', '状态机基类', 'XGame/State/BaseStateMachine.cs', {
      interfaces: ['IStateMachine'],
      methods: [
        method('GetCurrentState', 'IState', [], 'public', '获取当前状态'),
        method('ChangeState', 'void', ['int', 'object'], 'public', '切换状态'),
        method('OnCreate', 'void', ['object'], 'public', '创建'),
        method('OnPreChangeState', 'void', ['int', 'int'], 'public', '状态切换前'),
        method('OnAfterChangeState', 'void', ['int', 'int'], 'public', '状态切换后'),
      ],
    }),
    cls('XGame.State.StateMachineManager', 'StateMachineManager', 'XGame.State', 'class', '状态机管理器', 'XGame/State/StateMachineManager.cs', {
      interfaces: ['IStateMachineManager'],
    }),

    // ==========================================================
    // XGame.EventEngine (XGameDll)
    // ==========================================================
    cls('XGame.EventEngine.EventEngine', 'EventEngine', 'XGame.EventEngine', 'class', '事件引擎', 'XGame/EventEngine/EventEngine.cs', {
      methods: [
        method('AddSink', 'void', ['IEventExecuteSink', 'int'], 'public', '添加回调'),
        method('RemoveSink', 'void', ['IEventExecuteSink', 'int'], 'public', '移除回调'),
        method('ExecuteEvent', 'void', ['int', 'object'], 'public', '执行事件'),
        method('RegisterEvent', 'void', ['int'], 'public', '注册事件'),
        method('UnRegisterEvent', 'void', ['int'], 'public', '注销事件'),
      ],
    }),
    cls('XGame.EventEngine.OnEventObject', 'OnEventObject', 'XGame.EventEngine', 'class', '事件对象', 'XGame/EventEngine/OnEventObject.cs'),

    // ==========================================================
    // XGame.Timer (XGameDll)
    // ==========================================================
    cls('XGame.Timer.TimerManager', 'TimerManager', 'XGame.Timer', 'class', '定时器管理器', 'XGame/Timer/TimerManager.cs', {
      methods: [
        method('AddTimer', 'void', ['int', 'float', 'int', 'ITimerHandler'], 'public', '添加定时器'),
        method('KillTimer', 'void', ['int'], 'public', '销毁定时器'),
        method('KillAllTimer', 'void', [], 'public', '销毁所有定时器'),
        method('PauseTimer', 'void', ['int'], 'public', '暂停定时器'),
        method('ResumeTimer', 'void', ['int'], 'public', '恢复定时器'),
      ],
    }),
    cls('XGame.Timer.TimerApi', 'TimerApi', 'XGame.Timer', 'static_class', '定时器API', 'XGame/Timer/TimerApi.cs', {
      methods: [
        method('AddTimer', 'int', ['float', 'int', 'ITimerHandler'], 'public', '添加定时器', true),
        method('KillTimer', 'void', ['int'], 'public', '销毁定时器', true),
      ],
    }),
    cls('XGame.Timer.TimerCollection', 'TimerCollection', 'XGame.Timer', 'class', '定时器集合', 'XGame/Timer/TimerCollection.cs'),

    // ==========================================================
    // XGame.FrameUpdate (XGameDll)
    // ==========================================================
    cls('XGame.FrameUpdate.UpdateNode', 'UpdateNode', 'XGame.FrameUpdate', 'class', '帧更新节点', 'XGame/FrameUpdate/UpdateNode.cs'),

    // ==========================================================
    // XGame.Net (XGameDll)
    // ==========================================================
    cls('XGame.Net.INetCom', 'INetCom', 'XGame.Net', 'interface', '网络组件接口', 'XGame/Net/INetCom.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
      methods: [
        method('Connect', 'bool', ['string', 'int', 'int'], 'public', '连接'),
        method('Disconnect', 'void', [], 'public', '断开连接'),
        method('IsConnected', 'bool', [], 'public', '是否已连接'),
        method('SendMessage_CS', 'void', ['byte', 'byte', 'TCSMessage'], 'public', '发送CS消息'),
        method('OnReceiveMsg', 'void', ['TCSMessage'], 'public', '接收消息'),
        method('GetLatency', 'uint', [], 'public', '获取延迟'),
      ],
    }),
    cls('XGame.Net.NetCom', 'NetCom', 'XGame.Net', 'class', '网络组件实现', 'XGame/Net/NetCom.cs', {
      interfaces: ['INetCom'],
      methods: [
        method('Connect', 'bool', ['string', 'int', 'int'], 'public', '连接'),
        method('Disconnect', 'void', [], 'public', '断开连接'),
        method('SendMessage_CS', 'void', ['byte', 'byte', 'TCSMessage'], 'public', '发送CS消息'),
        method('OnReceiveMsg', 'void', ['TCSMessage'], 'public', '接收消息'),
        method('IsConnected', 'bool', [], 'public', '是否已连接'),
      ],
    }),
    cls('XGame.Net.IConnection', 'IConnection', 'XGame.Net', 'interface', '连接接口', 'XGame/Net/IConnection.cs', {
      methods: [
        method('Connect', 'void', ['string', 'int'], 'public', '连接'),
        method('Disconnect', 'void', [], 'public', '断开连接'),
        method('Send', 'void', ['byte[]', 'int'], 'public', '发送数据'),
        method('IsConnected', 'bool', [], 'public', '是否已连接'),
      ],
    }),
    cls('XGame.Net.ISocketClient', 'ISocketClient', 'XGame.Net', 'interface', 'Socket客户端接口', 'XGame/Net/ISocketClient.cs'),
    cls('XGame.Net.ISocketSink', 'ISocketSink', 'XGame.Net', 'interface', 'Socket回调接口', 'XGame/Net/ISocketSink.cs'),
    cls('XGame.Net.TCPSocketClient', 'TCPSocketClient', 'XGame.Net', 'class', 'TCP Socket客户端', 'XGame/Net/TCPSocketClient.cs', {
      interfaces: ['IConnection'],
    }),
    cls('XGame.Net.UDPSocketClient', 'UDPSocketClient', 'XGame.Net', 'class', 'UDP Socket客户端', 'XGame/Net/UDPSocketClient.cs', {
      interfaces: ['IConnection'],
    }),
    cls('XGame.Net.WebSocketClient', 'WebSocketClient', 'XGame.Net', 'class', 'WebSocket客户端', 'XGame/Net/WebSocketClient.cs', {
      interfaces: ['IConnection'],
    }),
    cls('XGame.Net.NetApi', 'NetApi', 'XGame.Net', 'static_class', '网络API', 'XGame/Net/NetApi.cs'),
    cls('XGame.Net.Connection', 'Connection', 'XGame.Net', 'class', '网关连接', 'XGame/Net/Connection.cs'),
    cls('XGame.Net.PackageData', 'PackageData', 'XGame.Net', 'class', '网关数据包', 'XGame/Net/PackageData.cs'),
    cls('XGame.Net.NetComSettings', 'NetComSettings', 'XGame.Net', 'class', '网络设置', 'XGame/Net/NetComSettings.cs'),

    // ==========================================================
    // XGame.ItemPool (XGameDll)
    // ==========================================================
    cls('XGame.ItemPool.IPoolable', 'IPoolable', 'XGame.ItemPool', 'interface', '可池化对象接口', 'XGame/ItemPool/IPoolable.cs', {
      methods: [
        method('OnPoolCreate', 'void', [], 'public', '池创建'),
        method('OnPoolGet', 'void', [], 'public', '池获取'),
        method('OnPoolRelease', 'void', [], 'public', '池释放'),
        method('OnPoolDestroy', 'void', [], 'public', '池销毁'),
      ],
    }),
    cls('XGame.ItemPool.IItemPoolManager', 'IItemPoolManager', 'XGame.ItemPool', 'interface', '对象池管理器接口', 'XGame/ItemPool/IItemPoolManager.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
    }),
    cls('XGame.ItemPool.IObjectItemPool', 'IObjectItemPool', 'XGame.ItemPool', 'interface', '对象池接口', 'XGame/ItemPool/IObjectItemPool.cs', {
      methods: [
        method('Get', 'T', [], 'public', '获取对象'),
        method('Release', 'void', ['T'], 'public', '释放对象'),
        method('Clear', 'void', [], 'public', '清空'),
      ],
    }),
    cls('XGame.ItemPool.PoolableItemPool', 'PoolableItemPool', 'XGame.ItemPool', 'class', '可池化项对象池', 'XGame/ItemPool/PoolableItemPool.cs'),
    cls('XGame.ItemPool.PoolableObject', 'PoolableObject', 'XGame.ItemPool', 'abstract_class', '可池化对象基类', 'XGame/ItemPool/PoolableObject.cs', {
      interfaces: ['IPoolable'],
    }),
    cls('XGame.ItemPool.LitePoolableObject', 'LitePoolableObject', 'XGame.ItemPool', 'abstract_class', '轻量可池化对象', 'XGame/ItemPool/LitePoolableObject.cs', { baseClass: 'PoolableObject' }),
    cls('XGame.ItemPool.ObjectItemPool', 'ObjectItemPool', 'XGame.ItemPool', 'class', '对象项对象池', 'XGame/ItemPool/ObjectItemPool.cs'),
    cls('XGame.ItemPool.ItemPoolBase', 'ItemPoolBase', 'XGame.ItemPool', 'abstract_class', '对象池基类', 'XGame/ItemPool/ItemPoolBase.cs'),
    cls('XGame.ItemPool.PoolableList', 'PoolableList', 'XGame.ItemPool', 'class', '可池化列表', 'XGame/ItemPool/PoolableList.cs'),
    cls('XGame.ItemPool.UserData', 'UserData', 'XGame.ItemPool', 'class', '用户数据', 'XGame/ItemPool/UserData.cs'),

    // ==========================================================
    // XGame.LOP (XGameDll)
    // ==========================================================
    cls('XGame.LOP.ILOPSupportable', 'ILOPSupportable', 'XGame.LOP', 'interface', 'LOP支持接口', 'XGame/LOP/ILOPSupportable.cs'),
    cls('XGame.LOP.ILOPObjectManager', 'ILOPObjectManager', 'XGame.LOP', 'interface', 'LOP对象管理器接口', 'XGame/LOP/ILOPObjectManager.cs'),
    cls('XGame.LOP.ILOPObjectComponents', 'ILOPObjectComponents', 'XGame.LOP', 'interface', 'LOP对象组件接口', 'XGame/LOP/ILOPObjectComponents.cs'),
    cls('XGame.LOP.LOPObject', 'LOPObject', 'XGame.LOP', 'class', 'LOP对象', 'XGame/LOP/LOPObject.cs'),
    cls('XGame.LOP.LOPObjectManager', 'LOPObjectManager', 'XGame.LOP', 'class', 'LOP对象管理器', 'XGame/LOP/LOPObjectManager.cs'),
    cls('XGame.LOP.LOPObjectComponents', 'LOPObjectComponents', 'XGame.LOP', 'class', 'LOP对象组件', 'XGame/LOP/LOPObjectComponents.cs'),
    cls('XGame.LOP.LOPObjectComponentsManager', 'LOPObjectComponentsManager', 'XGame.LOP', 'class', 'LOP对象组件管理器', 'XGame/LOP/LOPObjectComponentsManager.cs'),
    cls('XGame.LOP.LOPObjectComponentsRaw', 'LOPObjectComponentsRaw', 'XGame.LOP', 'class', 'LOP对象原始组件', 'XGame/LOP/LOPObjectComponentsRaw.cs'),
    cls('XGame.LOP.LOPObjectManagerInstance', 'LOPObjectManagerInstance', 'XGame.LOP', 'class', 'LOP对象管理器实例', 'XGame/LOP/LOPObjectManagerInstance.cs'),
    cls('XGame.LOP.LOPObjectRegister', 'LOPObjectRegister', 'XGame.LOP', 'class', 'LOP对象注册器', 'XGame/LOP/LOPObjectRegister.cs'),
    cls('XGame.LOP.LOPProfiler', 'LOPProfiler', 'XGame.LOP', 'class', 'LOP性能分析器', 'XGame/LOP/LOPProfiler.cs'),
    cls('XGame.LOP.LOPUtility', 'LOPUtility', 'XGame.LOP', 'class', 'LOP工具类', 'XGame/LOP/LOPUtility.cs'),

    // ==========================================================
    // XGame.Asset (XGameDll)
    // ==========================================================
    cls('XGame.Asset.ILoadSystem', 'ILoadSystem', 'XGame.Asset', 'interface', '加载系统接口', 'XGame/Asset/ILoadSystem.cs', {
      methods: [
        method('Load', 'uint', ['string', 'int', 'bool', 'bool', 'IResLoaderSink', 'Transform'], 'public', '加载资源'),
      ],
    }),
    cls('XGame.Asset.IAssetBundle', 'IAssetBundle', 'XGame.Asset', 'interface', 'AssetBundle接口', 'XGame/Asset/IAssetBundle.cs'),
    cls('XGame.Asset.IAsset2Bundle', 'IAsset2Bundle', 'XGame.Asset', 'interface', '资源到Bundle映射接口', 'XGame/Asset/IAsset2Bundle.cs'),
    cls('XGame.Asset.LoadMgr', 'LoadMgr', 'XGame.Asset', 'class', '加载管理器', 'XGame/Asset/LoadMgr.cs'),
    cls('XGame.Asset.RequestQueue', 'RequestQueue', 'XGame.Asset', 'class', '请求队列', 'XGame/Asset/RequestQueue.cs'),
    cls('XGame.Asset.DevLoadSystem', 'DevLoadSystem', 'XGame.Asset', 'class', '开发模式加载系统', 'XGame/Asset/DevLoadSystem.cs'),
    cls('XGame.Asset.WebLoadSystem', 'WebLoadSystem', 'XGame.Asset', 'class', 'Web加载系统', 'XGame/Asset/WebLoadSystem.cs'),
    cls('XGame.Asset.DevAssetBundle', 'DevAssetBundle', 'XGame.Asset', 'class', '开发模式AssetBundle', 'XGame/Asset/DevAssetBundle.cs'),
    cls('XGame.Asset.WebAssetBundle', 'WebAssetBundle', 'XGame.Asset', 'class', 'Web模式AssetBundle', 'XGame/Asset/WebAssetBundle.cs'),
    cls('XGame.Asset.AssetDef', 'AssetDef', 'XGame.Asset', 'class', '资源定义', 'XGame/Asset/AssetDef.cs'),
    cls('XGame.Asset.DataProxy', 'DataProxy', 'XGame.Asset', 'class', '数据代理', 'XGame/Asset/DataProxy.cs'),
    cls('XGame.Asset.Package', 'Package', 'XGame.Asset', 'class', '资源包', 'XGame/Asset/Package.cs'),
    cls('XGame.Asset.ResUtil', 'ResUtil', 'XGame.Asset', 'class', '资源工具', 'XGame/Asset/ResUtil.cs'),

    // ==========================================================
    // XGame.Command (XGameDll)
    // ==========================================================
    cls('XGame.Command.ICommandManager', 'ICommandManager', 'XGame.Command', 'interface', '命令管理器接口', 'XGame/Command/ICommandManager.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
      methods: [
        method('Execute', 'void', ['ICommandContext'], 'public', '执行命令'),
        method('CanExecute', 'bool', ['ICommandContext'], 'public', '是否可执行'),
      ],
    }),
    cls('XGame.Command.ICommandHandler', 'ICommandHandler', 'XGame.Command', 'interface', '命令处理器接口', 'XGame/Command/ICommandHandler.cs', {
      methods: [
        method('Execute', 'void', ['ICommandContext'], 'public', '执行命令'),
        method('CanExecute', 'bool', ['ICommandContext'], 'public', '是否可执行'),
      ],
    }),
    cls('XGame.Command.ICommandContext', 'ICommandContext', 'XGame.Command', 'interface', '命令上下文接口', 'XGame/Command/ICommandContext.cs'),
    cls('XGame.Command.ICommandQueue', 'ICommandQueue', 'XGame.Command', 'interface', '命令队列接口', 'XGame/Command/ICommandQueue.cs'),
    cls('XGame.Command.CommandManager', 'CommandManager', 'XGame.Command', 'class', '命令管理器', 'XGame/Command/CommandManager.cs', {
      interfaces: ['ICommandManager'],
    }),
    cls('XGame.Command.CommandHandlerBase', 'CommandHandlerBase', 'XGame.Command', 'abstract_class', '命令处理器基类', 'XGame/Command/CommandHandlerBase.cs', {
      interfaces: ['ICommandHandler'],
    }),
    cls('XGame.Command.CommandContextBase', 'CommandContextBase', 'XGame.Command', 'class', '命令上下文基类', 'XGame/Command/CommandContextBase.cs', {
      interfaces: ['ICommandContext'],
    }),
    cls('XGame.Command.CommandFactory', 'CommandFactory', 'XGame.Command', 'class', '命令工厂', 'XGame/Command/CommandFactory.cs'),
    cls('XGame.Command.CommandQueue', 'CommandQueue', 'XGame.Command', 'class', '命令队列', 'XGame/Command/CommandQueue.cs', {
      interfaces: ['ICommandQueue'],
    }),
    cls('XGame.Command.DefaultCommandHandler', 'DefaultCommandHandler', 'XGame.Command', 'class', '默认命令处理器', 'XGame/Command/DefaultCommandHandler.cs', { baseClass: 'CommandHandlerBase' }),

    // ==========================================================
    // XGame.I18N (XGameDll)
    // ==========================================================
    cls('XGame.I18N.II18NManager', 'II18NManager', 'XGame.I18N', 'interface', '国际化管理器接口', 'XGame/I18N/II18NManager.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
    }),
    cls('XGame.I18N.I18NManager', 'I18NManager', 'XGame.I18N', 'class', '国际化管理器', 'XGame/I18N/I18NManager.cs', {
      interfaces: ['II18NManager'],
    }),
    cls('XGame.I18N.ELanguage', 'ELanguage', 'XGame.I18N', 'enum', '语言枚举', 'XGame/I18N/ELanguage.cs'),
    cls('XGame.I18N.I18NConfig', 'I18NConfig', 'XGame.I18N', 'class', '国际化配置', 'XGame/I18N/I18NConfig.cs'),
    cls('XGame.I18N.ITextTranslater', 'ITextTranslater', 'XGame.I18N', 'interface', '文本翻译器接口', 'XGame/I18N/ITextTranslater.cs'),
    cls('XGame.I18N.ISpriteLoader', 'ISpriteLoader', 'XGame.I18N', 'interface', '精灵加载器接口', 'XGame/I18N/ISpriteLoader.cs'),
    cls('XGame.I18N.ILocalizeComp', 'ILocalizeComp', 'XGame.I18N', 'interface', '本地化组件接口', 'XGame/I18N/ILocalizeComp.cs'),
    cls('XGame.I18N.LocalizeText', 'LocalizeText', 'XGame.I18N', 'class', '本地化文本', 'XGame/I18N/LocalizeText.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.I18N.LocalizeImage', 'LocalizeImage', 'XGame.I18N', 'class', '本地化图片', 'XGame/I18N/LocalizeImage.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.I18N.LocalizeTextMeshPro', 'LocalizeTextMeshPro', 'XGame.I18N', 'class', '本地化TMP文本', 'XGame/I18N/LocalizeTextMeshPro.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.I18N.I18NFontManager', 'I18NFontManager', 'XGame.I18N', 'class', '国际化字体管理器', 'XGame/I18N/I18NFontManager.cs'),
    cls('XGame.I18N.I18NFontSetter', 'I18NFontSetter', 'XGame.I18N', 'class', '国际化字体设置器', 'XGame/I18N/I18NFontSetter.cs'),
    cls('XGame.I18N.I18NFontConfig', 'I18NFontConfig', 'XGame.I18N', 'class', '国际化字体配置', 'XGame/I18N/I18NFontConfig.cs'),

    // ==========================================================
    // XGame.HttpCom (XGameDll)
    // ==========================================================
    cls('XGame.HttpCom.IHttp', 'IHttp', 'XGame.HttpCom', 'interface', 'HTTP接口', 'XGame/HttpCom/IHttp.cs', {
      methods: [
        method('Get', 'void', ['string', 'Action'], 'public', 'GET请求'),
        method('Post', 'void', ['string', 'string', 'Action'], 'public', 'POST请求'),
      ],
    }),
    cls('XGame.HttpCom.HTTP', 'HTTP', 'XGame.HttpCom', 'class', 'HTTP实现', 'XGame/HttpCom/HTTP.cs', {
      interfaces: ['IHttp'],
    }),

    // ==========================================================
    // XGame.SpriteAtlas (XGameDll)
    // ==========================================================
    cls('XGame.SpriteAtlas.ISpriteAtlasManager', 'ISpriteAtlasManager', 'XGame.SpriteAtlas', 'interface', '图集管理器接口', 'XGame/SpriteAtlas/ISpriteAtlasManager.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
    }),
    cls('XGame.SpriteAtlas.SpriteAtlasManager', 'SpriteAtlasManager', 'XGame.SpriteAtlas', 'class', '图集管理器', 'XGame/SpriteAtlas/SpriteAtlasManager.cs', {
      interfaces: ['ISpriteAtlasManager'],
    }),
    cls('XGame.SpriteAtlas.SpriteAtlasToOthers', 'SpriteAtlasToOthers', 'XGame.SpriteAtlas', 'class', '图集转换工具', 'XGame/SpriteAtlas/SpriteAtlasToOthers.cs'),

    // ==========================================================
    // XGame.Culling (XGameDll)
    // ==========================================================
    cls('XGame.Culling.CullingObject', 'CullingObject', 'XGame.Culling', 'class', '裁剪对象', 'XGame/Culling/CullingObject.cs'),
    cls('XGame.Culling.CullingObjectManager', 'CullingObjectManager', 'XGame.Culling', 'class', '裁剪对象管理器', 'XGame/Culling/CullingObjectManager.cs'),
    cls('XGame.Culling.CullingInfo', 'CullingInfo', 'XGame.Culling', 'class', '裁剪信息', 'XGame/Culling/CullingInfo.cs'),
    cls('XGame.Culling.CullingDefine', 'CullingDefine', 'XGame.Culling', 'class', '裁剪定义', 'XGame/Culling/CullingDefine.cs'),
    cls('XGame.Culling.CullingCameraCom', 'CullingCameraCom', 'XGame.Culling', 'class', '裁剪相机组件', 'XGame/Culling/CullingCameraCom.cs'),
    cls('XGame.Culling.OCMgr', 'OCMgr', 'XGame.Culling', 'class', '遮挡剔除管理器', 'XGame/Culling/OCMgr.cs'),

    // ==========================================================
    // XGame.Curves (XGameDll)
    // ==========================================================
    cls('XGame.Curves.IXCurves', 'IXCurves', 'XGame.Curves', 'interface', '曲线接口', 'XGame/Curves/IXCurves.cs'),
    cls('XGame.Curves.XBezierCurves', 'XBezierCurves', 'XGame.Curves', 'class', '贝塞尔曲线', 'XGame/Curves/XBezierCurves.cs'),
    cls('XGame.Curves.XCurvesPathCommon', 'XCurvesPathCommon', 'XGame.Curves', 'class', '曲线路径通用', 'XGame/Curves/XCurvesPathCommon.cs'),
    cls('XGame.Curves.XCurvesPathUtil', 'XCurvesPathUtil', 'XGame.Curves', 'class', '曲线路径工具', 'XGame/Curves/XCurvesPathUtil.cs'),
    cls('XGame.Curves.XStraightLine', 'XStraightLine', 'XGame.Curves', 'class', '直线', 'XGame/Curves/XStraightLine.cs'),

    // ==========================================================
    // XGame.GameObjCache (XGameDll)
    // ==========================================================
    cls('XGame.GameObjCache.IGameObjectCache', 'IGameObjectCache', 'XGame.GameObjCache', 'interface', '游戏对象缓存接口', 'XGame/GameObjCache/IGameObjectCache.cs'),
    cls('XGame.GameObjCache.GameObjectCache', 'GameObjectCache', 'XGame.GameObjCache', 'class', '游戏对象缓存', 'XGame/GameObjCache/GameObjectCache.cs'),
    cls('XGame.GameObjCache.CacheItem', 'CacheItem', 'XGame.GameObjCache', 'class', '缓存项', 'XGame/GameObjCache/CacheItem.cs'),

    // ==========================================================
    // XGame.Monitor (XGameDll)
    // ==========================================================
    cls('XGame.Monitor.MonitorBase', 'MonitorBase', 'XGame.Monitor', 'abstract_class', '监控基类', 'XGame/Monitor/MonitorBase.cs'),
    cls('XGame.Monitor.MonitorManager', 'MonitorManager', 'XGame.Monitor', 'class', '监控管理器', 'XGame/Monitor/MonitorManager.cs'),

    // ==========================================================
    // XGame.UpdateEngine (XGameDll)
    // ==========================================================
    cls('XGame.UpdateEngine.UpdateClient', 'UpdateClient', 'XGame.UpdateEngine', 'class', '更新客户端', 'XGame/UpdateEngine/UpdateClient.cs'),

    // ==========================================================
    // XGame.LitJson (XGameDll)
    // ==========================================================
    cls('XGame.LitJson.IJsonWrapper', 'IJsonWrapper', 'XGame.LitJson', 'interface', 'JSON包装器接口', 'XGame/LitJson/IJsonWrapper.cs'),
    cls('XGame.LitJson.JsonData', 'JsonData', 'XGame.LitJson', 'class', 'JSON数据', 'XGame/LitJson/JsonData.cs'),
    cls('XGame.LitJson.JsonMapper', 'JsonMapper', 'XGame.LitJson', 'static_class', 'JSON映射器', 'XGame/LitJson/JsonMapper.cs', {
      methods: [
        method('ToObject', 'T', ['string'], 'public', '反序列化对象', true),
        method('ToJson', 'string', ['object'], 'public', '序列化为JSON', true),
      ],
    }),
    cls('XGame.LitJson.JsonReader', 'JsonReader', 'XGame.LitJson', 'class', 'JSON读取器', 'XGame/LitJson/JsonReader.cs'),
    cls('XGame.LitJson.JsonWriter', 'JsonWriter', 'XGame.LitJson', 'class', 'JSON写入器', 'XGame/LitJson/JsonWriter.cs'),

    // ==========================================================
    // XGame.Attribute (XGameDll)
    // ==========================================================
    cls('XGame.Attribute.AutoBind', 'AutoBind', 'XGame.Attribute', 'class', '自动绑定特性', 'XGame/Attribute/AutoBind.cs', { baseClass: 'Attribute' }),
    cls('XGame.Attribute.CheckerAttribute', 'CheckerAttribute', 'XGame.Attribute', 'class', '检查器特性', 'XGame/Attribute/CheckerAttribute.cs', { baseClass: 'Attribute' }),
    cls('XGame.Attribute.CustomDisplayAttribute', 'CustomDisplayAttribute', 'XGame.Attribute', 'class', '自定义显示特性', 'XGame/Attribute/CustomDisplayAttribute.cs', { baseClass: 'Attribute' }),
    cls('XGame.Attribute.DropdownAttribute', 'DropdownAttribute', 'XGame.Attribute', 'class', '下拉框特性', 'XGame/Attribute/DropdownAttribute.cs', { baseClass: 'Attribute' }),
    cls('XGame.Attribute.EnumNameAttribute', 'EnumNameAttribute', 'XGame.Attribute', 'class', '枚举名称特性', 'XGame/Attribute/EnumNameAttribute.cs', { baseClass: 'Attribute' }),
    cls('XGame.Attribute.LabelAttribute', 'LabelAttribute', 'XGame.Attribute', 'class', '标签特性', 'XGame/Attribute/LabelAttribute.cs', { baseClass: 'Attribute' }),
    cls('XGame.Attribute.ReadOnlyAttribute', 'ReadOnlyAttribute', 'XGame.Attribute', 'class', '只读特性', 'XGame/Attribute/ReadOnlyAttribute.cs', { baseClass: 'Attribute' }),
    cls('XGame.Attribute.SortingLayerAttribute', 'SortingLayerAttribute', 'XGame.Attribute', 'class', '排序层特性', 'XGame/Attribute/SortingLayerAttribute.cs', { baseClass: 'Attribute' }),
    cls('XGame.Attribute.TitleAttribute', 'TitleAttribute', 'XGame.Attribute', 'class', '标题特性', 'XGame/Attribute/TitleAttribute.cs', { baseClass: 'Attribute' }),
    cls('XGame.Attribute.ValueMinAttribute', 'ValueMinAttribute', 'XGame.Attribute', 'class', '最小值特性', 'XGame/Attribute/ValueMinAttribute.cs', { baseClass: 'Attribute' }),
    cls('XGame.Attribute.ValueRangeAttribute', 'ValueRangeAttribute', 'XGame.Attribute', 'class', '值范围特性', 'XGame/Attribute/ValueRangeAttribute.cs', { baseClass: 'Attribute' }),

    // ==========================================================
    // XGame.Config (XGameDll)
    // ==========================================================
    cls('XGame.Config.GameConfig', 'GameConfig', 'XGame.Config', 'class', '游戏配置', 'XGame/Config/GameConfig.cs'),

    // ==========================================================
    // XGame.UnityExtension (XGameDll)
    // ==========================================================
    cls('XGame.UnityExtension.ComponentExtension', 'ComponentExtension', 'XGame.UnityExtension', 'static_class', '组件扩展方法', 'XGame/UnityExtension/ComponentExtension.cs'),
    cls('XGame.UnityExtension.TransformExtension', 'TransformExtension', 'XGame.UnityExtension', 'static_class', 'Transform扩展方法', 'XGame/UnityExtension/TransformExtension.cs'),

    // ==========================================================
    // XGame.Anim (XGameDll)
    // ==========================================================
    cls('XGame.Anim.AnimBase', 'AnimBase', 'XGame.Anim', 'abstract_class', '特效动画基类', 'XGame/Anim/AnimBase.cs', {
      baseClass: 'MonoBehaviour',
      methods: [
        method('Play', 'void', ['bool', 'float'], 'public', '播放'),
        method('Stop', 'void', [], 'public', '停止'),
        method('Init', 'void', [], 'public', '初始化'),
        method('Sample', 'void', ['float'], 'public', '采样'),
        method('GetDuration', 'float', [], 'public', '获取时长'),
        method('AddFinishedListener', 'void', ['Action<bool>'], 'public', '添加完成监听'),
      ],
    }),
    cls('XGame.Anim.TweenCore', 'TweenCore', 'XGame.Anim', 'abstract_class', 'Tween动画基类', 'XGame/Anim/TweenCore.cs', {
      baseClass: 'AnimBase',
      properties: [
        prop('duration', 'float', '持续时间'),
        prop('playMode', 'int', '播放模式'),
        prop('easeType', 'int', '缓动类型'),
      ],
    }),
    cls('XGame.Anim.TweenBase', 'TweenBase', 'XGame.Anim', 'abstract_class', '泛型Tween基类', 'XGame/Anim/TweenBase.cs', { baseClass: 'TweenCore' }),
    cls('XGame.Anim.PropertyTween', 'PropertyTween', 'XGame.Anim', 'abstract_class', '属性Tween基类', 'XGame/Anim/PropertyTween.cs', { baseClass: 'TweenBase' }),
    cls('XGame.Anim.TweenPlayer', 'TweenPlayer', 'XGame.Anim', 'class', 'Tween播放器', 'XGame/Anim/TweenPlayer.cs', {
      methods: [
        method('Play', 'void', [], 'public', '播放'),
        method('Stop', 'void', [], 'public', '停止'),
        method('AppendTweenArray', 'void', ['List<TweenCore>'], 'public', '追加Tween数组'),
      ],
    }),
    cls('XGame.Anim.TweenSequence', 'TweenSequence', 'XGame.Anim', 'class', 'Tween序列', 'XGame/Anim/TweenSequence.cs', {
      methods: [
        method('Append', 'void', ['TweenCore'], 'public', '追加'),
        method('Join', 'void', ['TweenCore'], 'public', '合并'),
        method('Play', 'void', [], 'public', '播放'),
        method('Stop', 'void', [], 'public', '停止'),
      ],
    }),
    cls('XGame.Anim.Interpolate', 'Interpolate', 'XGame.Anim', 'static_class', '插值工具', 'XGame/Anim/Interpolate.cs', {
      methods: [
        method('Ease', 'float', ['float', 'EaseType'], 'public', '缓动', true),
        method('Bezier', 'Vector3', ['float', 'Vector3', 'Vector3', 'Vector3'], 'public', '贝塞尔', true),
      ],
    }),
    cls('XGame.Anim.TweenPosition', 'TweenPosition', 'XGame.Anim', 'class', '位移Tween', 'XGame/Anim/TweenPosition.cs', { baseClass: 'Vector3PropertyTween' }),
    cls('XGame.Anim.TweenRotation', 'TweenRotation', 'XGame.Anim', 'class', '旋转Tween', 'XGame/Anim/TweenRotation.cs', { baseClass: 'Vector3PropertyTween' }),
    cls('XGame.Anim.TweenScale', 'TweenScale', 'XGame.Anim', 'class', '缩放Tween', 'XGame/Anim/TweenScale.cs', { baseClass: 'Vector3PropertyTween' }),
    cls('XGame.Anim.TweenColor', 'TweenColor', 'XGame.Anim', 'class', '颜色Tween', 'XGame/Anim/TweenColor.cs', { baseClass: 'ColorPropertyTween' }),
    cls('XGame.Anim.TweenAlpha', 'TweenAlpha', 'XGame.Anim', 'class', '透明度Tween', 'XGame/Anim/TweenAlpha.cs', { baseClass: 'FloatPropertyTween' }),
    cls('XGame.Anim.TweenCanvasGroupAlpha', 'TweenCanvasGroupAlpha', 'XGame.Anim', 'class', 'CanvasGroup透明度Tween', 'XGame/Anim/TweenCanvasGroupAlpha.cs', { baseClass: 'FloatPropertyTween' }),
    cls('XGame.Anim.FloatPropertyTween', 'FloatPropertyTween', 'XGame.Anim', 'abstract_class', '浮点属性Tween', 'XGame/Anim/FloatPropertyTween.cs', { baseClass: 'PropertyTween' }),
    cls('XGame.Anim.Vector3PropertyTween', 'Vector3PropertyTween', 'XGame.Anim', 'abstract_class', 'Vector3属性Tween', 'XGame/Anim/Vector3PropertyTween.cs', { baseClass: 'TweenBase' }),
    cls('XGame.Anim.ColorPropertyTween', 'ColorPropertyTween', 'XGame.Anim', 'abstract_class', 'Color属性Tween', 'XGame/Anim/ColorPropertyTween.cs', { baseClass: 'TweenBase' }),

    // ==========================================================
    // XGame.Audio (XGameDll)
    // ==========================================================
    cls('XGame.Audio.IAudioCom', 'IAudioCom', 'XGame.Audio', 'interface', '音效组件接口', 'XGame/Audio/IAudioCom.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
      methods: [
        method('Play', 'int', ['int', 'PlayAudioParams'], 'public', '播放音效'),
        method('Stop', 'void', ['int'], 'public', '停止音效'),
        method('Pause', 'void', ['int'], 'public', '暂停音效'),
        method('Resume', 'void', ['int'], 'public', '恢复音效'),
        method('SetVolume', 'void', ['int', 'float'], 'public', '设置音量'),
      ],
    }),
    cls('XGame.Audio.IAudioPlayer', 'IAudioPlayer', 'XGame.Audio', 'interface', '音效播放器接口', 'XGame/Audio/IAudioPlayer.cs'),
    cls('XGame.Audio.IAudioLoader', 'IAudioLoader', 'XGame.Audio', 'interface', '音效加载器接口', 'XGame/Audio/IAudioLoader.cs'),
    cls('XGame.Audio.AudioCom', 'AudioCom', 'XGame.Audio', 'class', '音效组件实现', 'XGame/Audio/AudioCom.cs', {
      interfaces: ['IAudioCom'],
    }),
    cls('XGame.Audio.AudioPlayer', 'AudioPlayer', 'XGame.Audio', 'class', '音效播放器', 'XGame/Audio/AudioPlayer.cs', {
      interfaces: ['IAudioPlayer'],
    }),
    cls('XGame.Audio.AudioNode', 'AudioNode', 'XGame.Audio', 'class', '音效节点', 'XGame/Audio/AudioNode.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.Audio.AudioMixerGroupManager', 'AudioMixerGroupManager', 'XGame.Audio', 'class', '混音器组管理器', 'XGame/Audio/AudioMixerGroupManager.cs'),
    cls('XGame.Audio.DefaultAudioLoader', 'DefaultAudioLoader', 'XGame.Audio', 'class', '默认音效加载器', 'XGame/Audio/DefaultAudioLoader.cs', {
      interfaces: ['IAudioLoader'],
    }),

    // ==========================================================
    // XGame.Effect (XGameDll)
    // ==========================================================
    cls('XGame.Effect.IEffectCom', 'IEffectCom', 'XGame.Effect', 'interface', '特效组件接口', 'XGame/Effect/IEffectCom.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
    }),
    cls('XGame.Effect.IEffect', 'IEffect', 'XGame.Effect', 'interface', '特效接口', 'XGame/Effect/IEffect.cs', {
      methods: [
        method('Play', 'void', [], 'public', '播放'),
        method('Stop', 'void', [], 'public', '停止'),
        method('IsPlaying', 'bool', [], 'public', '是否播放中'),
      ],
    }),
    cls('XGame.Effect.EffectCom', 'EffectCom', 'XGame.Effect', 'class', '特效组件实现', 'XGame/Effect/EffectCom.cs', {
      interfaces: ['IEffectCom'],
    }),
    cls('XGame.Effect.EffectFacade', 'EffectFacade', 'XGame.Effect', 'class', '特效外观类', 'XGame/Effect/EffectFacade.cs'),
    cls('XGame.Effect.EffectPlayer', 'EffectPlayer', 'XGame.Effect', 'class', '特效播放器', 'XGame/Effect/EffectPlayer.cs'),
    cls('XGame.Effect.Effect_Animation', 'Effect_Animation', 'XGame.Effect', 'class', '动画特效', 'XGame/Effect/Effect_Animation.cs'),
    cls('XGame.Effect.Effect_Animator', 'Effect_Animator', 'XGame.Effect', 'class', 'Animator特效', 'XGame/Effect/Effect_Animator.cs'),
    cls('XGame.Effect.Effect_ParticleSystem', 'Effect_ParticleSystem', 'XGame.Effect', 'class', '粒子特效', 'XGame/Effect/Effect_ParticleSystem.cs'),
    cls('XGame.Effect.Effect_PlaySound', 'Effect_PlaySound', 'XGame.Effect', 'class', '播放声音特效', 'XGame/Effect/Effect_PlaySound.cs'),
    cls('XGame.Effect.ParabolaEffect', 'ParabolaEffect', 'XGame.Effect', 'class', '抛物线特效', 'XGame/Effect/ParabolaEffect.cs'),
    cls('XGame.Effect.ShieldBase', 'ShieldBase', 'XGame.Effect', 'abstract_class', '护盾基类', 'XGame/Effect/ShieldBase.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.Effect.ForceShield', 'ForceShield', 'XGame.Effect', 'class', '力场护盾', 'XGame/Effect/ForceShield.cs', { baseClass: 'ShieldBase' }),
    cls('XGame.Effect.SpreadShield', 'SpreadShield', 'XGame.Effect', 'class', '扩散护盾', 'XGame/Effect/SpreadShield.cs', { baseClass: 'ShieldBase' }),

    // ==========================================================
    // XGame.Entity (XGameDll)
    // ==========================================================
    cls('XGame.Entity.IEntity', 'IEntity', 'XGame.Entity', 'interface', '实体接口', 'XGame/Entity/IEntity.cs', {
      baseClass: 'IPoolable',
      interfaces: ['IPoolable'],
      methods: [
        method('GetEntityType', 'int', [], 'public', '获取实体类型'),
        method('GetEntityID', 'long', [], 'public', '获取实体ID'),
        method('Create', 'void', [], 'public', '创建'),
        method('Release', 'void', [], 'public', '释放'),
      ],
    }),
    cls('XGame.Entity.IVisibleEntity', 'IVisibleEntity', 'XGame.Entity', 'interface', '可见实体接口', 'XGame/Entity/IVisibleEntity.cs', {
      baseClass: 'IEntity',
      interfaces: ['IEntity'],
    }),
    cls('XGame.Entity.IRoleEntity', 'IRoleEntity', 'XGame.Entity', 'interface', '角色实体接口', 'XGame/Entity/IRoleEntity.cs', {
      baseClass: 'IVisibleEntity',
      interfaces: ['IVisibleEntity'],
    }),
    cls('XGame.Entity.IGoodsEntity', 'IGoodsEntity', 'XGame.Entity', 'interface', '物品实体接口', 'XGame/Entity/IGoodsEntity.cs', {
      baseClass: 'IEntity',
      interfaces: ['IEntity'],
    }),
    cls('XGame.Entity.IEntityWorld', 'IEntityWorld', 'XGame.Entity', 'interface', '实体世界接口', 'XGame/Entity/IEntityWorld.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
    }),
    cls('XGame.Entity.IEntityManager', 'IEntityManager', 'XGame.Entity', 'interface', '实体管理器接口', 'XGame/Entity/IEntityManager.cs'),
    cls('XGame.Entity.IEntityPart', 'IEntityPart', 'XGame.Entity', 'interface', '实体部件接口', 'XGame/Entity/IEntityPart.cs', {
      methods: [
        method('GetPartType', 'int', [], 'public', '获取部件类型'),
        method('Create', 'void', [], 'public', '创建'),
        method('Release', 'void', [], 'public', '释放'),
      ],
    }),
    cls('XGame.Entity.IVisiblePart', 'IVisiblePart', 'XGame.Entity', 'interface', '可见部件接口', 'XGame/Entity/IVisiblePart.cs', {
      baseClass: 'IEntityPart',
      interfaces: ['IEntityPart'],
    }),
    cls('XGame.Entity.BaseEntity', 'BaseEntity', 'XGame.Entity', 'abstract_class', '实体基类', 'XGame/Entity/BaseEntity.cs', {
      interfaces: ['IEntity'],
    }),
    cls('XGame.Entity.VisibleEntity', 'VisibleEntity', 'XGame.Entity', 'abstract_class', '可见实体', 'XGame/Entity/VisibleEntity.cs', {
      baseClass: 'BaseEntity',
      interfaces: ['IVisibleEntity'],
    }),
    cls('XGame.Entity.EntityWorld', 'EntityWorld', 'XGame.Entity', 'class', '实体世界', 'XGame/Entity/EntityWorld.cs', {
      interfaces: ['IEntityWorld'],
    }),
    cls('XGame.Entity.EntityManager', 'EntityManager', 'XGame.Entity', 'class', '实体管理器', 'XGame/Entity/EntityManager.cs', {
      interfaces: ['IEntityManager'],
    }),
    cls('XGame.Entity.EntityFactory', 'EntityFactory', 'XGame.Entity', 'class', '实体工厂', 'XGame/Entity/EntityFactory.cs'),
    cls('XGame.Entity.EntityIDGenerator', 'EntityIDGenerator', 'XGame.Entity', 'class', '实体ID生成器', 'XGame/Entity/EntityIDGenerator.cs'),
    cls('XGame.Entity.EntityDef', 'EntityDef', 'XGame.Entity', 'class', '实体定义', 'XGame/Entity/EntityDef.cs'),
    cls('XGame.Entity.BasePart', 'BasePart', 'XGame.Entity', 'abstract_class', '部件基类', 'XGame/Entity/BasePart.cs', {
      interfaces: ['IEntityPart'],
    }),
    cls('XGame.Entity.PrefabPart', 'PrefabPart', 'XGame.Entity', 'class', '预制体部件', 'XGame/Entity/PrefabPart.cs', { baseClass: 'BasePart' }),
    cls('XGame.Entity.VisiblePart', 'VisiblePart', 'XGame.Entity', 'abstract_class', '可见部件', 'XGame/Entity/VisiblePart.cs', {
      baseClass: 'BasePart',
      interfaces: ['IVisiblePart'],
    }),
    cls('XGame.Entity.MovePart', 'MovePart', 'XGame.Entity', 'class', '移动部件', 'XGame/Entity/MovePart.cs', { baseClass: 'BasePart' }),
    cls('XGame.Entity.LightnEffectPart', 'LightnEffectPart', 'XGame.Entity', 'class', '光效部件', 'XGame/Entity/LightnEffectPart.cs', { baseClass: 'BasePart' }),

    // ==========================================================
    // XGame.EcoMode (XGameDll)
    // ==========================================================
    cls('XGame.EcoMode.IEcoMode', 'IEcoMode', 'XGame.EcoMode', 'interface', '节能模式接口', 'XGame/EcoMode/IEcoMode.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
    }),
    cls('XGame.EcoMode.EcoMode', 'EcoMode', 'XGame.EcoMode', 'class', '节能模式实现', 'XGame/EcoMode/EcoMode.cs', {
      interfaces: ['IEcoMode'],
    }),
    cls('XGame.EcoMode.LockScreen', 'LockScreen', 'XGame.EcoMode', 'class', '锁屏处理', 'XGame/EcoMode/LockScreen.cs'),
    cls('XGame.EcoMode.LowPower', 'LowPower', 'XGame.EcoMode', 'class', '低功耗处理', 'XGame/EcoMode/LowPower.cs'),

    // ==========================================================
    // XGame.FlowText (XGameDll)
    // ==========================================================
    cls('XGame.FlowText.IFlowTextManager', 'IFlowTextManager', 'XGame.FlowText', 'interface', '飘字管理器接口', 'XGame/FlowText/IFlowTextManager.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
    }),
    cls('XGame.FlowText.IFlowTextView', 'IFlowTextView', 'XGame.FlowText', 'interface', '飘字视图接口', 'XGame/FlowText/IFlowTextView.cs'),
    cls('XGame.FlowText.FlowTextManager', 'FlowTextManager', 'XGame.FlowText', 'class', '飘字管理器实现', 'XGame/FlowText/FlowTextManager.cs', {
      interfaces: ['IFlowTextManager'],
    }),
    cls('XGame.FlowText.FlowTextCalcer', 'FlowTextCalcer', 'XGame.FlowText', 'class', '飘字计算器', 'XGame/FlowText/FlowTextCalcer.cs'),
    cls('XGame.FlowText.FlowTextNode', 'FlowTextNode', 'XGame.FlowText', 'class', '飘字节点', 'XGame/FlowText/FlowTextNode.cs'),
    cls('XGame.FlowText.FlowTextLayer', 'FlowTextLayer', 'XGame.FlowText', 'class', '飘字层', 'XGame/FlowText/FlowTextLayer.cs'),
    cls('XGame.FlowText.BaseFlowTextView', 'BaseFlowTextView', 'XGame.FlowText', 'abstract_class', '飘字视图基类', 'XGame/FlowText/BaseFlowTextView.cs'),
    cls('XGame.FlowText.UGUIFlowTextView', 'UGUIFlowTextView', 'XGame.FlowText', 'class', 'UGUI飘字视图', 'XGame/FlowText/UGUIFlowTextView.cs', { baseClass: 'BaseFlowTextView' }),

    // ==========================================================
    // XGame.FlyEffect (XGameDll)
    // ==========================================================
    cls('XGame.FlyEffect.IFlyEffectManager', 'IFlyEffectManager', 'XGame.FlyEffect', 'interface', '飞行特效管理器接口', 'XGame/FlyEffect/IFlyEffectManager.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
    }),
    cls('XGame.FlyEffect.IFlyEffectObject', 'IFlyEffectObject', 'XGame.FlyEffect', 'interface', '飞行特效对象接口', 'XGame/FlyEffect/IFlyEffectObject.cs'),
    cls('XGame.FlyEffect.FlyEffectManager', 'FlyEffectManager', 'XGame.FlyEffect', 'class', '飞行特效管理器', 'XGame/FlyEffect/FlyEffectManager.cs', {
      interfaces: ['IFlyEffectManager'],
    }),
    cls('XGame.FlyEffect.FlyEffectObject', 'FlyEffectObject', 'XGame.FlyEffect', 'class', '飞行特效对象', 'XGame/FlyEffect/FlyEffectObject.cs'),
    cls('XGame.FlyEffect.FlyEffectViewBase', 'FlyEffectViewBase', 'XGame.FlyEffect', 'abstract_class', '飞行特效视图基类', 'XGame/FlyEffect/FlyEffectViewBase.cs'),

    // ==========================================================
    // XGame.Guide (XGameDll)
    // ==========================================================
    cls('XGame.Guide.IGuideManager', 'IGuideManager', 'XGame.Guide', 'interface', '引导管理器接口', 'XGame/Guide/IGuideManager.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
    }),
    cls('XGame.Guide.IGuideManagerSink', 'IGuideManagerSink', 'XGame.Guide', 'interface', '引导回调接口', 'XGame/Guide/IGuideManagerSink.cs'),
    cls('XGame.Guide.GuideManager', 'GuideManager', 'XGame.Guide', 'class', '引导管理器', 'XGame/Guide/GuideManager.cs', {
      interfaces: ['IGuideManager'],
    }),
    cls('XGame.Guide.GuideNode', 'GuideNode', 'XGame.Guide', 'class', '引导节点', 'XGame/Guide/GuideNode.cs'),
    cls('XGame.Guide.GuideStep', 'GuideStep', 'XGame.Guide', 'class', '引导步骤', 'XGame/Guide/GuideStep.cs'),
    cls('XGame.Guide.GuideFactory', 'GuideFactory', 'XGame.Guide', 'class', '引导工厂', 'XGame/Guide/GuideFactory.cs'),
    cls('XGame.Guide.GuideAction', 'GuideAction', 'XGame.Guide', 'abstract_class', '引导动作基类', 'XGame/Guide/GuideAction.cs'),
    cls('XGame.Guide.GuideCondition', 'GuideCondition', 'XGame.Guide', 'abstract_class', '引导条件基类', 'XGame/Guide/GuideCondition.cs'),
    cls('XGame.Guide.GuideTrigger', 'GuideTrigger', 'XGame.Guide', 'abstract_class', '引导触发器基类', 'XGame/Guide/GuideTrigger.cs'),
    cls('XGame.Guide.GuideMask', 'GuideMask', 'XGame.Guide', 'class', '引导遮罩', 'XGame/Guide/GuideMask.cs'),
    cls('XGame.Guide.GuideLayer', 'GuideLayer', 'XGame.Guide', 'class', '引导层', 'XGame/Guide/GuideLayer.cs'),
    cls('XGame.Guide.GuideBubble', 'GuideBubble', 'XGame.Guide', 'class', '引导气泡', 'XGame/Guide/GuideBubble.cs'),
    cls('XGame.Guide.GuideBubbleManager', 'GuideBubbleManager', 'XGame.Guide', 'class', '引导气泡管理器', 'XGame/Guide/GuideBubbleManager.cs'),

    // ==========================================================
    // XGame.LightingEff (XGameDll)
    // ==========================================================
    cls('XGame.LightingEff.ILightingEffectManager', 'ILightingEffectManager', 'XGame.LightingEff', 'interface', '光效管理器接口', 'XGame/LightingEff/ILightingEffectManager.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
    }),
    cls('XGame.LightingEff.LightingEffectManager', 'LightingEffectManager', 'XGame.LightingEff', 'class', '光效管理器', 'XGame/LightingEff/LightingEffectManager.cs', {
      interfaces: ['ILightingEffectManager'],
    }),
    cls('XGame.LightingEff.LightingEffectFacade', 'LightingEffectFacade', 'XGame.LightingEff', 'class', '光效外观类', 'XGame/LightingEff/LightingEffectFacade.cs'),
    cls('XGame.LightingEff.LightingEffectPlayer', 'LightingEffectPlayer', 'XGame.LightingEff', 'class', '光效播放器', 'XGame/LightingEff/LightingEffectPlayer.cs'),
    cls('XGame.LightingEff.LightingEffectFactory', 'LightingEffectFactory', 'XGame.LightingEff', 'class', '光效工厂', 'XGame/LightingEff/LightingEffectFactory.cs'),
    cls('XGame.LightingEff.LightingEffectBase', 'LightingEffectBase', 'XGame.LightingEff', 'abstract_class', '光效基类', 'XGame/LightingEff/LightingEffectBase.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.LightingEff.LightingEffectBind', 'LightingEffectBind', 'XGame.LightingEff', 'class', '绑定光效', 'XGame/LightingEff/LightingEffectBind.cs', { baseClass: 'LightingEffectBase' }),
    cls('XGame.LightingEff.LightingEffectPosition', 'LightingEffectPosition', 'XGame.LightingEff', 'class', '定位光效', 'XGame/LightingEff/LightingEffectPosition.cs', { baseClass: 'LightingEffectBase' }),
    cls('XGame.LightingEff.LightingEffectUI', 'LightingEffectUI', 'XGame.LightingEff', 'class', 'UI光效', 'XGame/LightingEff/LightingEffectUI.cs', { baseClass: 'LightingEffectBase' }),

    // ==========================================================
    // XGame.Reddot (XGameDll)
    // ==========================================================
    cls('XGame.Reddot.IReddotManager', 'IReddotManager', 'XGame.Reddot', 'interface', '红点管理器接口', 'XGame/Reddot/IReddotManager.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
    }),
    cls('XGame.Reddot.ReddotManager', 'ReddotManager', 'XGame.Reddot', 'class', '红点管理器', 'XGame/Reddot/ReddotManager.cs', {
      interfaces: ['IReddotManager'],
    }),
    cls('XGame.Reddot.ReddotData', 'ReddotData', 'XGame.Reddot', 'class', '红点数据', 'XGame/Reddot/ReddotData.cs'),
    cls('XGame.Reddot.ReddotView', 'ReddotView', 'XGame.Reddot', 'class', '红点视图', 'XGame/Reddot/ReddotView.cs'),
    cls('XGame.Reddot.ReddotIcon', 'ReddotIcon', 'XGame.Reddot', 'class', '红点图标', 'XGame/Reddot/ReddotIcon.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.Reddot.ReddotSettings', 'ReddotSettings', 'XGame.Reddot', 'class', '红点设置', 'XGame/Reddot/ReddotSettings.cs', { baseClass: 'ScriptableObject' }),

    // ==========================================================
    // XGame.UI (XGameDll)
    // ==========================================================
    cls('XGame.UI.IUISortingManager', 'IUISortingManager', 'XGame.UI', 'interface', 'UI排序管理器接口', 'XGame/UI/IUISortingManager.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
    }),
    cls('XGame.UI.UISortingManager', 'UISortingManager', 'XGame.UI', 'class', 'UI排序管理器', 'XGame/UI/UISortingManager.cs', {
      interfaces: ['IUISortingManager'],
    }),
    cls('XGame.UI.GraphicGreyManager', 'GraphicGreyManager', 'XGame.UI', 'class', '图形灰化管理器', 'XGame/UI/GraphicGreyManager.cs'),
    cls('XGame.UI.UIStateSwitcher', 'UIStateSwitcher', 'XGame.UI', 'static_class', 'UI状态切换器', 'XGame/UI/UIStateSwitcher.cs'),
    cls('XGame.UI.UIStateSwitcherManager', 'UIStateSwitcherManager', 'XGame.UI', 'class', 'UI状态切换管理器', 'XGame/UI/UIStateSwitcherManager.cs'),
    cls('XGame.UI.BaseMonoStateSwitcher', 'BaseMonoStateSwitcher', 'XGame.UI', 'abstract_class', 'Mono状态切换器基类', 'XGame/UI/BaseMonoStateSwitcher.cs', {
      baseClass: 'MonoBehaviour',
      interfaces: ['IMonoStateSwitcher'],
    }),
    cls('XGame.UI.UIAnimationNode', 'UIAnimationNode', 'XGame.UI', 'class', 'UI动画节点', 'XGame/UI/UIAnimationNode.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.UI.ButtonExtend', 'ButtonExtend', 'XGame.UI', 'class', '按钮扩展', 'XGame/UI/ButtonExtend.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.UI.VirtualJoystick', 'VirtualJoystick', 'XGame.UI', 'class', '虚拟摇杆', 'XGame/UI/VirtualJoystick.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.UI.UICircleImage', 'UICircleImage', 'XGame.UI', 'class', '圆形图片', 'XGame/UI/UICircleImage.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.UI.ImageAdvance', 'ImageAdvance', 'XGame.UI', 'class', '高级图片', 'XGame/UI/ImageAdvance.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.UI.ImageScroller', 'ImageScroller', 'XGame.UI', 'class', '图片滚动器', 'XGame/UI/ImageScroller.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.UI.UIDrag', 'UIDrag', 'XGame.UI', 'class', 'UI拖拽', 'XGame/UI/UIDrag.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.UI.GraphicRaycasterEx', 'GraphicRaycasterEx', 'XGame.UI', 'class', '图形射线扩展', 'XGame/UI/GraphicRaycasterEx.cs', { baseClass: 'GraphicRaycaster' }),

    // ==========================================================
    // XGame.NewAnimator (XGameDll)
    // ==========================================================
    cls('XGame.NewAnimator.IActionPlayer', 'IActionPlayer', 'XGame.NewAnimator', 'interface', '动作播放器接口', 'XGame/NewAnimator/IActionPlayer.cs'),
    cls('XGame.NewAnimator.IActionSink', 'IActionSink', 'XGame.NewAnimator', 'interface', '动作回调接口', 'XGame/NewAnimator/IActionSink.cs'),
    cls('XGame.NewAnimator.IAnimationEventSink', 'IAnimationEventSink', 'XGame.NewAnimator', 'interface', '动画事件回调接口', 'XGame/NewAnimator/IAnimationEventSink.cs'),
    cls('XGame.NewAnimator.ActionPlayer', 'ActionPlayer', 'XGame.NewAnimator', 'class', '动作播放器', 'XGame/NewAnimator/ActionPlayer.cs', {
      interfaces: ['IActionPlayer'],
    }),
    cls('XGame.NewAnimator.AnimationEventHandler', 'AnimationEventHandler', 'XGame.NewAnimator', 'class', '动画事件处理器', 'XGame/NewAnimator/AnimationEventHandler.cs'),
    cls('XGame.NewAnimator.AnimationEventManager', 'AnimationEventManager', 'XGame.NewAnimator', 'class', '动画事件管理器', 'XGame/NewAnimator/AnimationEventManager.cs'),
    cls('XGame.NewAnimator.RuntimeActionNode', 'RuntimeActionNode', 'XGame.NewAnimator', 'class', '运行时动作节点', 'XGame/NewAnimator/RuntimeActionNode.cs'),
    cls('XGame.NewAnimator.AnimatorConfig', 'AnimatorConfig', 'XGame.NewAnimator', 'class', '动画配置', 'XGame/NewAnimator/AnimatorConfig.cs'),
    cls('XGame.NewAnimator.ActionNodeData', 'ActionNodeData', 'XGame.NewAnimator', 'class', '动作节点数据', 'XGame/NewAnimator/ActionNodeData.cs'),

    // ==========================================================
    // XGame.Performance (XGameDll)
    // ==========================================================
    cls('XGame.Performance.IPerformanceCom', 'IPerformanceCom', 'XGame.Performance', 'interface', '性能组件接口', 'XGame/Performance/IPerformanceCom.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
    }),
    cls('XGame.Performance.IPerformanceManager', 'IPerformanceManager', 'XGame.Performance', 'interface', '性能管理器接口', 'XGame/Performance/IPerformanceManager.cs'),
    cls('XGame.Performance.PerformanceComImpl', 'PerformanceComImpl', 'XGame.Performance', 'class', '性能组件实现', 'XGame/Performance/PerformanceComImpl.cs', {
      interfaces: ['IPerformanceCom'],
    }),
    cls('XGame.Performance.PerformanceManager', 'PerformanceManager', 'XGame.Performance', 'class', '性能管理器', 'XGame/Performance/PerformanceManager.cs', {
      interfaces: ['IPerformanceManager'],
    }),

    // ==========================================================
    // XGame.Chat (XGameDll)
    // ==========================================================
    cls('XGame.Chat.IChatMessageManager', 'IChatMessageManager', 'XGame.Chat', 'interface', '聊天消息管理器接口', 'XGame/Chat/IChatMessageManager.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
    }),
    cls('XGame.Chat.ChatMessageManager', 'ChatMessageManager', 'XGame.Chat', 'class', '聊天消息管理器', 'XGame/Chat/ChatMessageManager.cs', {
      interfaces: ['IChatMessageManager'],
    }),
    cls('XGame.Chat.ChatMessageManagerSink', 'ChatMessageManagerSink', 'XGame.Chat', 'class', '聊天消息回调', 'XGame/Chat/ChatMessageManagerSink.cs'),
    cls('XGame.Chat.ChatMessageView', 'ChatMessageView', 'XGame.Chat', 'class', '聊天消息视图', 'XGame/Chat/ChatMessageView.cs'),
    cls('XGame.Chat.ChatMessageItemView', 'ChatMessageItemView', 'XGame.Chat', 'class', '聊天消息项视图', 'XGame/Chat/ChatMessageItemView.cs'),

    // ==========================================================
    // XGame.FunctionIcon (XGameDll)
    // ==========================================================
    cls('XGame.FunctionIcon.IFunctionIconManager', 'IFunctionIconManager', 'XGame.FunctionIcon', 'interface', '功能图标管理器接口', 'XGame/FunctionIcon/IFunctionIconManager.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
    }),
    cls('XGame.FunctionIcon.FunctionIconManager', 'FunctionIconManager', 'XGame.FunctionIcon', 'class', '功能图标管理器', 'XGame/FunctionIcon/FunctionIconManager.cs', {
      interfaces: ['IFunctionIconManager'],
    }),

    // ==========================================================
    // XGame.FunctionOpen (XGameDll)
    // ==========================================================
    cls('XGame.FunctionOpen.IFunctionOpenManager', 'IFunctionOpenManager', 'XGame.FunctionOpen', 'interface', '功能开放管理器接口', 'XGame/FunctionOpen/IFunctionOpenManager.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
    }),
    cls('XGame.FunctionOpen.FunctionOpenManager', 'FunctionOpenManager', 'XGame.FunctionOpen', 'class', '功能开放管理器', 'XGame/FunctionOpen/FunctionOpenManager.cs', {
      interfaces: ['IFunctionOpenManager'],
    }),
    cls('XGame.FunctionOpen.FunctionOpenNode', 'FunctionOpenNode', 'XGame.FunctionOpen', 'class', '功能开放节点', 'XGame/FunctionOpen/FunctionOpenNode.cs'),
    cls('XGame.FunctionOpen.FunctionOpenFactory', 'FunctionOpenFactory', 'XGame.FunctionOpen', 'class', '功能开放工厂', 'XGame/FunctionOpen/FunctionOpenFactory.cs'),

    // ==========================================================
    // XGame.Preload (XGameDll)
    // ==========================================================
    cls('XGame.Preload.IPreloader', 'IPreloader', 'XGame.Preload', 'interface', '预加载组件接口', 'XGame/Preload/IPreloader.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
    }),
    cls('XGame.Preload.PreLoader', 'PreLoader', 'XGame.Preload', 'class', '预加载器', 'XGame/Preload/PreLoader.cs', {
      interfaces: ['IPreloader'],
    }),

    // ==========================================================
    // XGame.Blur (XGameDll)
    // ==========================================================
    cls('XGame.Blur.BlurEffectManager', 'BlurEffectManager', 'XGame.Blur', 'class', '模糊效果管理器', 'XGame/Blur/BlurEffectManager.cs', { baseClass: 'MonoBehaviour' }),

    // ==========================================================
    // XGame.Cam (XGameDll)
    // ==========================================================
    cls('XGame.Cam.CameraController', 'CameraController', 'XGame.Cam', 'class', '相机控制组件', 'XGame/Cam/CameraController.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.Cam.CameraControllerManager', 'CameraControllerManager', 'XGame.Cam', 'class', '相机控制器管理器(单例)', 'XGame/Cam/CameraControllerManager.cs'),
    cls('XGame.Cam.SceneCamera', 'SceneCamera', 'XGame.Cam', 'class', '场景相机', 'XGame/Cam/SceneCamera.cs', { baseClass: 'MonoBehaviour' }),

    // ==========================================================
    // XGame.MeshInst (XGameDll)
    // ==========================================================
    cls('XGame.MeshInst.IMeshInstanceManager', 'IMeshInstanceManager', 'XGame.MeshInst', 'interface', '网格实例管理器接口', 'XGame/MeshInst/IMeshInstanceManager.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
    }),
    cls('XGame.MeshInst.MeshInstanceManager', 'MeshInstanceManager', 'XGame.MeshInst', 'class', '网格实例管理器', 'XGame/MeshInst/MeshInstanceManager.cs', {
      interfaces: ['IMeshInstanceManager'],
    }),

    // ==========================================================
    // XGame.Material (XGameDll)
    // ==========================================================
    cls('XGame.Material.MaterialPropertySetter', 'MaterialPropertySetter', 'XGame.Material', 'abstract_class', '材质属性设置器基类', 'XGame/Material/MaterialPropertySetter.cs', { baseClass: 'MonoBehaviour' }),
    cls('XGame.Material.FloatMaterialPropertySetter', 'FloatMaterialPropertySetter', 'XGame.Material', 'class', '浮点材质属性设置器', 'XGame/Material/FloatMaterialPropertySetter.cs', { baseClass: 'MaterialPropertySetter' }),
    cls('XGame.Material.ColorMaterialPropertySetter', 'ColorMaterialPropertySetter', 'XGame.Material', 'class', '颜色材质属性设置器', 'XGame/Material/ColorMaterialPropertySetter.cs', { baseClass: 'MaterialPropertySetter' }),
    cls('XGame.Material.MaterialPropertyBinder', 'MaterialPropertyBinder', 'XGame.Material', 'abstract_class', '材质属性绑定器基类', 'XGame/Material/MaterialPropertyBinder.cs', { baseClass: 'MonoBehaviour' }),

    // ==========================================================
    // XGame.MonoState (XGameDll)
    // ==========================================================
    cls('XGame.MonoState.IMonoStateSwitcher', 'IMonoStateSwitcher', 'XGame.MonoState', 'interface', 'Mono状态切换器接口', 'XGame/MonoState/IMonoStateSwitcher.cs'),
    cls('XGame.MonoState.BaseMonoStateSwitcher', 'BaseMonoStateSwitcher', 'XGame.MonoState', 'abstract_class', 'Mono状态切换器基类', 'XGame/MonoState/BaseMonoStateSwitcher.cs', {
      baseClass: 'MonoBehaviour',
      interfaces: ['IMonoStateSwitcher'],
    }),

    // ==========================================================
    // XGame.AnimationOverrides (XGameDll)
    // ==========================================================
    cls('XGame.AnimationOverrides.IAnimationOverridesMgr', 'IAnimationOverridesMgr', 'XGame.AnimationOverrides', 'interface', '动画重载管理器接口', 'XGame/AnimationOverrides/IAnimationOverridesMgr.cs', {
      baseClass: 'ICom',
      interfaces: ['ICom'],
    }),
    cls('XGame.AnimationOverrides.AnimationOverridesMgr', 'AnimationOverridesMgr', 'XGame.AnimationOverrides', 'class', '动画重载管理器', 'XGame/AnimationOverrides/AnimationOverridesMgr.cs', {
      interfaces: ['IAnimationOverridesMgr'],
    }),
    cls('XGame.AnimationOverrides.AnimationClipOverrides', 'AnimationClipOverrides', 'XGame.AnimationOverrides', 'class', '动画片段重载', 'XGame/AnimationOverrides/AnimationClipOverrides.cs'),
    cls('XGame.AnimationOverrides.IAnimaitonPlayer', 'IAnimaitonPlayer', 'XGame.AnimationOverrides', 'interface', '动画播放器接口', 'XGame/AnimationOverrides/IAnimaitonPlayer.cs'),

    // ==========================================================
    // XGame.PointerFollow (XGameDll)
    // ==========================================================
    cls('XGame.PointerFollow.IPointerFollower', 'IPointerFollower', 'XGame.PointerFollow', 'interface', '指针跟随器接口', 'XGame/PointerFollow/IPointerFollower.cs'),
    cls('XGame.PointerFollow.PointerFollowManager', 'PointerFollowManager', 'XGame.PointerFollow', 'class', '指针跟随管理器', 'XGame/PointerFollow/PointerFollowManager.cs'),
  ],

  edges: [
    // XClient.Common - interface extends
    { source: 'XClient.Common.IModule', target: 'ICom', type: 'inherits' },
    { source: 'XClient.Common.INetModule', target: 'XClient.Common.IModule', type: 'inherits' },
    { source: 'XClient.Common.INetModule', target: 'XClient.Common.IMessageDispatcher', type: 'inherits' },
    { source: 'XClient.Common.IRoomModule', target: 'XClient.Common.IModule', type: 'inherits' },
    { source: 'XClient.Common.IAgentModule', target: 'XClient.Common.IModule', type: 'inherits' },

    // XClient.Game - class extends
    { source: 'XClient.Game.GameStateBase', target: 'BaseState', type: 'inherits' },
    { source: 'XClient.Game.GameStateNone', target: 'XClient.Game.GameStateBase', type: 'inherits' },
    { source: 'XClient.Game.GameStateLogin', target: 'XClient.Game.GameStateBase', type: 'inherits' },
    { source: 'XClient.Game.GameStateGame', target: 'XClient.Game.GameStateBase', type: 'inherits' },
    { source: 'XClient.Game.GameStateBattle', target: 'XClient.Game.GameStateBase', type: 'inherits' },
    { source: 'XClient.Game.GameStateMachine', target: 'BaseStateMachine', type: 'inherits' },

    // XClient.Game - implements
    { source: 'XClient.Game.CGame', target: 'XClient.Common.IGame', type: 'implements' },
    { source: 'XClient.Game.CGame', target: 'IGameComAndModule', type: 'implements' },
    { source: 'XClient.Game.NetModule', target: 'XClient.Common.INetModule', type: 'implements' },
    { source: 'XClient.Game.CSchemeModule', target: 'XClient.Common.ISchemeModule', type: 'implements' },

    // XClient.Network - interface extends
    { source: 'XClient.Network.INetObject', target: 'XClient.Network.INetable', type: 'inherits' },

    // XClient.Entity - interface extends
    { source: 'XClient.Entity.IEntityModule', target: 'XClient.Common.IModule', type: 'inherits' },
    { source: 'XClient.Entity.ICreatureEntity', target: 'IVisibleEntity', type: 'inherits' },
    { source: 'XClient.Entity.IBullet', target: 'XClient.Entity.ICreatureEntity', type: 'inherits' },
    { source: 'XClient.Entity.IMonster', target: 'XClient.Entity.ICreatureEntity', type: 'inherits' },
    { source: 'XClient.Entity.ISkillPart', target: 'IEntityPart', type: 'inherits' },
    { source: 'XClient.Entity.IEntityMovePart', target: 'IEntityPart', type: 'inherits' },
    { source: 'XClient.Entity.IDamagePart', target: 'IEntityPart', type: 'inherits' },
    { source: 'XClient.Entity.IAIPart', target: 'IEntityPart', type: 'inherits' },
    { source: 'XClient.Entity.EntityType', target: 'XClient.Entity.EntityDef', type: 'inherits' },

    // XClient.Entity - implements
    { source: 'XClient.Entity.EntityModule', target: 'XClient.Entity.IEntityModule', type: 'implements' },
    { source: 'XClient.Entity.Monster', target: 'XClient.Entity.IMonster', type: 'implements' },
    { source: 'XClient.Entity.Bullet', target: 'XClient.Entity.IBullet', type: 'implements' },
    { source: 'XClient.Entity.Buff', target: 'XClient.Entity.IBuff', type: 'implements' },
    { source: 'XClient.Entity.EntityMovePart', target: 'XClient.Entity.IEntityMovePart', type: 'implements' },
    { source: 'XClient.Entity.SkillPart', target: 'XClient.Entity.ISkillPart', type: 'implements' },
    { source: 'XClient.Entity.DamagePart', target: 'XClient.Entity.IDamagePart', type: 'implements' },
    { source: 'XClient.Entity.AIPart', target: 'XClient.Entity.IAIPart', type: 'implements' },

    // XClient.Login - extends
    { source: 'XClient.Login.ILoginModule', target: 'XClient.Common.IModule', type: 'inherits' },
    { source: 'XClient.Login.LoginStateMachine', target: 'BaseStateMachine', type: 'inherits' },
    { source: 'XClient.Login.StateBase', target: 'BaseState', type: 'inherits' },
    { source: 'XClient.Login.StateNone', target: 'XClient.Login.StateBase', type: 'inherits' },
    { source: 'XClient.Login.StateGateway', target: 'XClient.Login.StateBase', type: 'inherits' },
    { source: 'XClient.Login.StateLogin', target: 'XClient.Login.StateBase', type: 'inherits' },
    { source: 'XClient.Login.StateEnterRoom', target: 'XClient.Login.StateBase', type: 'inherits' },
    { source: 'XClient.Login.StateGame', target: 'XClient.Login.StateBase', type: 'inherits' },
    { source: 'XClient.Login.LoginModule', target: 'XClient.Login.ILoginModule', type: 'implements' },

    // XClient.RPC - extends/implements
    { source: 'XClient.RPC.IRPCModule', target: 'XClient.Common.IModule', type: 'inherits' },
    { source: 'XClient.RPC.RPCModule', target: 'XClient.RPC.IRPCModule', type: 'implements' },

    // XClient.Reddot - extends/implements
    { source: 'XClient.Reddot.IReddotModule', target: 'XClient.Common.IModule', type: 'inherits' },
    { source: 'XClient.Reddot.ReddotModule', target: 'XClient.Reddot.IReddotModule', type: 'implements' },

    // XClient.Room - implements
    { source: 'XClient.Room.RoomModule', target: 'XClient.Common.IRoomModule', type: 'implements' },

    // XClient.Agent - implements
    { source: 'XClient.Agent.AgentModule', target: 'XClient.Common.IAgentModule', type: 'implements' },

    // XClient.Module - implements
    { source: 'XClient.Module.BaseModule', target: 'XClient.Common.IModule', type: 'implements' },

    // XClient.VirtualServer - implements
    { source: 'XClient.VirtualServer.VirtualServer', target: 'XClient.VirtualServer.IVirtualServer', type: 'implements' },

    // XClient.NetTransfer - implements
    { source: 'XClient.NetTransfer.NetTransferModule', target: 'XClient.NetTransfer.INetTransferModule', type: 'implements' },

    // XClient.Common.GameNetCom - implements
    { source: 'XClient.Common.GameNetCom.GameNetCom', target: 'XClient.Common.GameNetCom.IGameNetCom', type: 'implements' },
    { source: 'XClient.Common.GameNetCom.CSPackProcess', target: 'XClient.Common.GameNetCom.IGamePackProcess', type: 'implements' },
    { source: 'XClient.Common.GameNetCom.LuaPackProcess', target: 'XClient.Common.GameNetCom.IGamePackProcess', type: 'implements' },

    // XGame.Banner - extends/implements
    { source: 'XGame.Banner.IBannerManager', target: 'ICom', type: 'inherits' },
    { source: 'XGame.Banner.BannerManager', target: 'XGame.Banner.IBannerManager', type: 'implements' },
    { source: 'XGame.Banner.BannerViewBase', target: 'MonoBehaviour', type: 'inherits' },
    { source: 'XGame.Banner.BannerViewDefault', target: 'XGame.Banner.BannerViewBase', type: 'inherits' },

    // XGame.AssetScript.UI - extends
    { source: 'XGame.AssetScript.UI.RectTransformSetter', target: 'MonoBehaviour', type: 'inherits' },
    { source: 'XGame.AssetScript.UI.ForceLayoutRebuider', target: 'MonoBehaviour', type: 'inherits' },
    { source: 'XGame.AssetScript.UI.TextStyleSwitcher', target: 'BaseMonoStateSwitcher', type: 'inherits' },
    { source: 'XGame.AssetScript.UI.TextStrSwitcher', target: 'BaseMonoStateSwitcher', type: 'inherits' },
    { source: 'XGame.AssetScript.UI.RectTransformSizeSyncer', target: 'UIBehaviour', type: 'inherits' },
    { source: 'XGame.AssetScript.UI.LOPUIWindowMetaEx', target: 'LOPUIWindowMeta', type: 'inherits' },
    { source: 'XGame.AssetScript.UI.UIWindowExSetting', target: 'ScriptableObject', type: 'inherits' },
    { source: 'XGame.AssetScript.UI.MaskLevel', target: 'MonoBehaviour', type: 'inherits' },
    { source: 'XGame.AssetScript.UI.MaskBorderBlur', target: 'MonoBehaviour', type: 'inherits' },
    { source: 'XGame.AssetScript.UI.MaskScreenTime', target: 'MonoBehaviour', type: 'inherits' },
    { source: 'XGame.AssetScript.UI.MaskEffect', target: 'MonoBehaviour', type: 'inherits' },
    { source: 'XGame.AssetScript.UI.CanvasCull', target: 'MonoBehaviour', type: 'inherits' },

    // XGame.AssetScript.ResLoader - extends/implements
    { source: 'XGame.AssetScript.ResLoader.IResourcesLoader', target: 'XGame.AssetScript.ResLoader.IResLoaderSink', type: 'inherits' },
    { source: 'XGame.AssetScript.ResLoader.ResourceLoadAdapter', target: 'XGame.AssetScript.ResLoader.IResLoader', type: 'implements' },

    // XGame.AssetScript.UHyperText - extends
    { source: 'XGame.AssetScript.UHyperText.SymbolTextEmojSelector', target: 'MonoBehaviour', type: 'inherits' },
    { source: 'XGame.AssetScript.UHyperText.SymbolTextEventExtend', target: 'SymbolTextEvent', type: 'inherits' },
    { source: 'XGame.AssetScript.UHyperText.SymbolTextEmojItem', target: 'Button', type: 'inherits' },

    // XGame.AssetScript.TextSetting - extends
    { source: 'XGame.AssetScript.TextSetting.PSDTMPTextStyleSettings', target: 'ScriptableObject', type: 'inherits' },
    { source: 'XGame.AssetScript.TextSetting.TextSettingConfig', target: 'SingletonScriptObject', type: 'inherits' },
    { source: 'XGame.AssetScript.TextSetting.TextColorLibrary', target: 'AddressableAssetCollections', type: 'inherits' },

    // XGame.AssetScript.I18N - extends
    { source: 'XGame.AssetScript.I18N.I18NFontPreProcesser', target: 'GamePreProcesser', type: 'inherits' },

    // XGame.AssetScript.Animation - extends/implements
    { source: 'XGame.AssetScript.Animation.SimpleAnimatioEventHandler', target: 'MonoBehaviour', type: 'inherits' },
    { source: 'XGame.AssetScript.Animation.SimpleAnimatioEventHandler', target: 'IAnimationEventSink', type: 'implements' },

    // XGame.AssetScript.Utils - extends
    { source: 'XGame.AssetScript.Utils.CameraOrthographicProjectionSizeAdapter', target: 'MonoBehaviour', type: 'inherits' },
    { source: 'XGame.AssetScript.Utils.DelayActive', target: 'MonoBehaviour', type: 'inherits' },
    { source: 'XGame.AssetScript.Utils.RawImageVideoDisplay', target: 'MonoBehaviour', type: 'inherits' },
    { source: 'XGame.AssetScript.Utils.TextMeshProAutoLink', target: 'MonoBehaviour', type: 'inherits' },
    { source: 'XGame.AssetScript.Utils.NetworkReachabilityMonitor', target: 'MonoBehaviourEX', type: 'inherits' },
    { source: 'XGame.AssetScript.Utils.TransformInfo', target: 'MonoBehaviour', type: 'inherits' },

    // XGame.DoTweenEx - extends
    { source: 'XGame.DoTweenEx.TweenNode', target: 'LitePoolableObject', type: 'inherits' },
    { source: 'XGame.DoTweenEx.FloatTweenNode', target: 'XGame.DoTweenEx.TweenNode', type: 'inherits' },
    { source: 'XGame.DoTweenEx.Vector3TweenNode', target: 'XGame.DoTweenEx.TweenNode', type: 'inherits' },
    { source: 'XGame.DoTweenEx.QuaternionTweenNode', target: 'XGame.DoTweenEx.TweenNode', type: 'inherits' },
    { source: 'XGame.DoTweenEx.ImageFadeTweenNode', target: 'XGame.DoTweenEx.FloatTweenNode', type: 'inherits' },
    { source: 'XGame.DoTweenEx.ImageFillTweenNode', target: 'XGame.DoTweenEx.FloatTweenNode', type: 'inherits' },
    { source: 'XGame.DoTweenEx.ScrollRectNormalPosNode', target: 'XGame.DoTweenEx.FloatTweenNode', type: 'inherits' },
    { source: 'XGame.DoTweenEx.TMPFadeTweenNode', target: 'XGame.DoTweenEx.FloatTweenNode', type: 'inherits' },
    { source: 'XGame.DoTweenEx.TrsPosTweenNode', target: 'XGame.DoTweenEx.Vector3TweenNode', type: 'inherits' },
    { source: 'XGame.DoTweenEx.RTTrsPosTweenNode', target: 'XGame.DoTweenEx.Vector3TweenNode', type: 'inherits' },
    { source: 'XGame.DoTweenEx.TrsScaleTweenNode', target: 'XGame.DoTweenEx.Vector3TweenNode', type: 'inherits' },
    { source: 'XGame.DoTweenEx.TrsRotateTweenNode', target: 'XGame.DoTweenEx.QuaternionTweenNode', type: 'inherits' },
    { source: 'XGame.DoTweenEx.SequenceNode', target: 'XGame.DoTweenEx.TweenNode', type: 'inherits' },

    // XGame.AssetScript.SDK - extends/implements
    { source: 'XGame.AssetScript.SDK.IBaseSDK', target: 'XGame.AssetScript.SDK.ISDK', type: 'inherits' },
    { source: 'XGame.AssetScript.SDK.SDK_Android', target: 'XGame.AssetScript.SDK.ISDK', type: 'implements' },
    { source: 'XGame.AssetScript.SDK.BaseSDK_IOS', target: 'XGame.AssetScript.SDK.IBaseSDK', type: 'implements' },
    { source: 'XGame.AssetScript.SDK.BaseSDK_Android', target: 'XGame.AssetScript.SDK.SDK_Android', type: 'inherits' },
    { source: 'XGame.AssetScript.SDK.BaseSDK_Android', target: 'XGame.AssetScript.SDK.IBaseSDK', type: 'implements' },
    { source: 'XGame.AssetScript.SDK.BaseSDK_Default', target: 'XGame.AssetScript.SDK.IBaseSDK', type: 'implements' },
    { source: 'XGame.AssetScript.SDK.GameSDKMessageProxyMono', target: 'MonoBehaviour', type: 'inherits' },

    // XGame.Update - extends
    { source: 'XGame.Update.UpdateScene', target: 'MonoBehaviour', type: 'inherits' },
    { source: 'XGame.Update.UpdateSetup', target: 'MonoBehaviour', type: 'inherits' },
    { source: 'XGame.Update.UpdateI18NConfig', target: 'ScriptableObject', type: 'inherits' },
    { source: 'XGame.Update.UpdateMessageBoxUI', target: 'MonoBehaviour', type: 'inherits' },
    { source: 'XGame.Update.PingTest', target: 'MonoBehaviour', type: 'inherits' },
    { source: 'XGame.Update.UIMoviePlayer', target: 'MonoBehaviour', type: 'inherits' },

    // XGame.HybridCLR - extends
    { source: 'XGame.HybridCLR.HybridCLRStartUp', target: 'MonoBehaviour', type: 'inherits' },
    { source: 'XGame.HybridCLR.AOTGenericReferences', target: 'MonoBehaviour', type: 'inherits' },

    // Monitor - extends/implements
    { source: 'Monitor.MonitorMgr', target: 'Monitor.IMonitorMgr', type: 'implements' },
    { source: 'Monitor.CSEventEngineNode', target: 'Monitor.MonitorNodeBase', type: 'inherits' },
    { source: 'Monitor.CSTimerAxisNode', target: 'Monitor.MonitorNodeBase', type: 'inherits' },
    { source: 'Monitor.CSUnityPoolNode', target: 'Monitor.MonitorNodeBase', type: 'inherits' },
    { source: 'Monitor.CSFrameUpdateManagerNode', target: 'Monitor.MonitorNodeBase', type: 'inherits' },
    { source: 'Monitor.CSNetModuleNode', target: 'Monitor.MonitorNodeBase', type: 'inherits' },
    { source: 'Monitor.CSSpriteAtlasNode', target: 'Monitor.MonitorNodeBase', type: 'inherits' },
    { source: 'Monitor.CSLOPObjectNode', target: 'Monitor.MonitorNodeBase', type: 'inherits' },
    { source: 'Monitor.CSAssetNode', target: 'Monitor.MonitorNodeBase', type: 'inherits' },

    // XGame.State - inherits/implements (XGameDll)
    { source: 'XGame.State.BaseState', target: 'XGame.State.IState', type: 'inherits' },
    { source: 'XGame.State.BaseStateMachine', target: 'XGame.State.IStateMachine', type: 'inherits' },
    { source: 'XGame.State.StateMachineManager', target: 'XGame.State.IStateMachineManager', type: 'implements' },

    // XGame.Net - inherits/implements (XGameDll)
    { source: 'XGame.Net.NetCom', target: 'XGame.Net.INetCom', type: 'implements' },
    { source: 'XGame.Net.INetCom', target: 'XGame.Common.ICom', type: 'inherits' },
    { source: 'XGame.Net.TCPSocketClient', target: 'XGame.Net.IConnection', type: 'implements' },
    { source: 'XGame.Net.UDPSocketClient', target: 'XGame.Net.IConnection', type: 'implements' },
    { source: 'XGame.Net.WebSocketClient', target: 'XGame.Net.IConnection', type: 'implements' },

    // XGame.ItemPool - inherits/implements (XGameDll)
    { source: 'XGame.ItemPool.PoolableObject', target: 'XGame.ItemPool.IPoolable', type: 'implements' },
    { source: 'XGame.ItemPool.LitePoolableObject', target: 'XGame.ItemPool.PoolableObject', type: 'inherits' },
    { source: 'XGame.ItemPool.IItemPoolManager', target: 'XGame.Common.ICom', type: 'inherits' },

    // XGame.Entity - inherits/implements (XGameDll)
    { source: 'XGame.Entity.BaseEntity', target: 'XGame.Entity.IEntity', type: 'implements' },
    { source: 'XGame.Entity.VisibleEntity', target: 'XGame.Entity.BaseEntity', type: 'inherits' },
    { source: 'XGame.Entity.VisibleEntity', target: 'XGame.Entity.IVisibleEntity', type: 'implements' },
    { source: 'XGame.Entity.EntityWorld', target: 'XGame.Entity.IEntityWorld', type: 'implements' },
    { source: 'XGame.Entity.EntityManager', target: 'XGame.Entity.IEntityManager', type: 'implements' },
    { source: 'XGame.Entity.BasePart', target: 'XGame.Entity.IEntityPart', type: 'implements' },
    { source: 'XGame.Entity.PrefabPart', target: 'XGame.Entity.BasePart', type: 'inherits' },
    { source: 'XGame.Entity.VisiblePart', target: 'XGame.Entity.BasePart', type: 'inherits' },
    { source: 'XGame.Entity.VisiblePart', target: 'XGame.Entity.IVisiblePart', type: 'implements' },
    { source: 'XGame.Entity.MovePart', target: 'XGame.Entity.BasePart', type: 'inherits' },
    { source: 'XGame.Entity.IEntity', target: 'XGame.ItemPool.IPoolable', type: 'inherits' },
    { source: 'XGame.Entity.IVisibleEntity', target: 'XGame.Entity.IEntity', type: 'inherits' },
    { source: 'XGame.Entity.IRoleEntity', target: 'XGame.Entity.IVisibleEntity', type: 'inherits' },
    { source: 'XGame.Entity.IGoodsEntity', target: 'XGame.Entity.IEntity', type: 'inherits' },
    { source: 'XGame.Entity.IEntityWorld', target: 'XGame.Common.ICom', type: 'inherits' },

    // XGame.Audio - inherits/implements (XGameDll)
    { source: 'XGame.Audio.IAudioCom', target: 'XGame.Common.ICom', type: 'inherits' },
    { source: 'XGame.Audio.AudioCom', target: 'XGame.Audio.IAudioCom', type: 'implements' },

    // XGame.Effect - inherits/implements (XGameDll)
    { source: 'XGame.Effect.IEffectCom', target: 'XGame.Common.ICom', type: 'inherits' },
    { source: 'XGame.Effect.EffectCom', target: 'XGame.Effect.IEffectCom', type: 'implements' },
    { source: 'XGame.Effect.ForceShield', target: 'XGame.Effect.ShieldBase', type: 'inherits' },
    { source: 'XGame.Effect.SpreadShield', target: 'XGame.Effect.ShieldBase', type: 'inherits' },

    // XGame.EcoMode - inherits/implements (XGameDll)
    { source: 'XGame.EcoMode.IEcoMode', target: 'XGame.Common.ICom', type: 'inherits' },
    { source: 'XGame.EcoMode.EcoMode', target: 'XGame.EcoMode.IEcoMode', type: 'implements' },

    // XGame.FlowText - inherits/implements (XGameDll)
    { source: 'XGame.FlowText.IFlowTextManager', target: 'XGame.Common.ICom', type: 'inherits' },
    { source: 'XGame.FlowText.FlowTextManager', target: 'XGame.FlowText.IFlowTextManager', type: 'implements' },
    { source: 'XGame.FlowText.UGUIFlowTextView', target: 'XGame.FlowText.BaseFlowTextView', type: 'inherits' },

    // XGame.FlyEffect - inherits/implements (XGameDll)
    { source: 'XGame.FlyEffect.IFlyEffectManager', target: 'XGame.Common.ICom', type: 'inherits' },
    { source: 'XGame.FlyEffect.FlyEffectManager', target: 'XGame.FlyEffect.IFlyEffectManager', type: 'implements' },

    // XGame.Guide - inherits/implements (XGameDll)
    { source: 'XGame.Guide.IGuideManager', target: 'XGame.Common.ICom', type: 'inherits' },
    { source: 'XGame.Guide.GuideManager', target: 'XGame.Guide.IGuideManager', type: 'implements' },

    // XGame.LightingEff - inherits/implements (XGameDll)
    { source: 'XGame.LightingEff.ILightingEffectManager', target: 'XGame.Common.ICom', type: 'inherits' },
    { source: 'XGame.LightingEff.LightingEffectManager', target: 'XGame.LightingEff.ILightingEffectManager', type: 'implements' },
    { source: 'XGame.LightingEff.LightingEffectBind', target: 'XGame.LightingEff.LightingEffectBase', type: 'inherits' },
    { source: 'XGame.LightingEff.LightingEffectPosition', target: 'XGame.LightingEff.LightingEffectBase', type: 'inherits' },
    { source: 'XGame.LightingEff.LightingEffectUI', target: 'XGame.LightingEff.LightingEffectBase', type: 'inherits' },

    // XGame.Reddot - inherits/implements (XGameDll)
    { source: 'XGame.Reddot.IReddotManager', target: 'XGame.Common.ICom', type: 'inherits' },
    { source: 'XGame.Reddot.ReddotManager', target: 'XGame.Reddot.IReddotManager', type: 'implements' },

    // XGame.UI - inherits/implements (XGameDll)
    { source: 'XGame.UI.IUISortingManager', target: 'XGame.Common.ICom', type: 'inherits' },
    { source: 'XGame.UI.UISortingManager', target: 'XGame.UI.IUISortingManager', type: 'implements' },
    { source: 'XGame.UI.BaseMonoStateSwitcher', target: 'XGame.MonoState.IMonoStateSwitcher', type: 'implements' },

    // XGame.NewAnimator - inherits/implements (XGameDll)
    { source: 'XGame.NewAnimator.ActionPlayer', target: 'XGame.NewAnimator.IActionPlayer', type: 'implements' },

    // XGame.Performance - inherits/implements (XGameDll)
    { source: 'XGame.Performance.IPerformanceCom', target: 'XGame.Common.ICom', type: 'inherits' },
    { source: 'XGame.Performance.PerformanceComImpl', target: 'XGame.Performance.IPerformanceCom', type: 'implements' },

    // XGame.Chat - inherits/implements (XGameDll)
    { source: 'XGame.Chat.IChatMessageManager', target: 'XGame.Common.ICom', type: 'inherits' },
    { source: 'XGame.Chat.ChatMessageManager', target: 'XGame.Chat.IChatMessageManager', type: 'implements' },

    // XGame.FunctionIcon - inherits/implements (XGameDll)
    { source: 'XGame.FunctionIcon.IFunctionIconManager', target: 'XGame.Common.ICom', type: 'inherits' },
    { source: 'XGame.FunctionIcon.FunctionIconManager', target: 'XGame.FunctionIcon.IFunctionIconManager', type: 'implements' },

    // XGame.FunctionOpen - inherits/implements (XGameDll)
    { source: 'XGame.FunctionOpen.IFunctionOpenManager', target: 'XGame.Common.ICom', type: 'inherits' },
    { source: 'XGame.FunctionOpen.FunctionOpenManager', target: 'XGame.FunctionOpen.IFunctionOpenManager', type: 'implements' },

    // XGame.Preload - inherits/implements (XGameDll)
    { source: 'XGame.Preload.IPreloader', target: 'XGame.Common.ICom', type: 'inherits' },
    { source: 'XGame.Preload.PreLoader', target: 'XGame.Preload.IPreloader', type: 'implements' },

    // XGame.MeshInst - inherits/implements (XGameDll)
    { source: 'XGame.MeshInst.IMeshInstanceManager', target: 'XGame.Common.ICom', type: 'inherits' },
    { source: 'XGame.MeshInst.MeshInstanceManager', target: 'XGame.MeshInst.IMeshInstanceManager', type: 'implements' },

    // XGame.AnimationOverrides - inherits/implements (XGameDll)
    { source: 'XGame.AnimationOverrides.IAnimationOverridesMgr', target: 'XGame.Common.ICom', type: 'inherits' },
    { source: 'XGame.AnimationOverrides.AnimationOverridesMgr', target: 'XGame.AnimationOverrides.IAnimationOverridesMgr', type: 'implements' },

    // XGame.Anim - inherits (XGameDll)
    { source: 'XGame.Anim.TweenCore', target: 'XGame.Anim.AnimBase', type: 'inherits' },
    { source: 'XGame.Anim.TweenBase', target: 'XGame.Anim.TweenCore', type: 'inherits' },
    { source: 'XGame.Anim.PropertyTween', target: 'XGame.Anim.TweenBase', type: 'inherits' },
    { source: 'XGame.Anim.FloatPropertyTween', target: 'XGame.Anim.PropertyTween', type: 'inherits' },
    { source: 'XGame.Anim.Vector3PropertyTween', target: 'XGame.Anim.TweenBase', type: 'inherits' },
    { source: 'XGame.Anim.ColorPropertyTween', target: 'XGame.Anim.TweenBase', type: 'inherits' },
    { source: 'XGame.Anim.TweenPosition', target: 'XGame.Anim.Vector3PropertyTween', type: 'inherits' },
    { source: 'XGame.Anim.TweenRotation', target: 'XGame.Anim.Vector3PropertyTween', type: 'inherits' },
    { source: 'XGame.Anim.TweenScale', target: 'XGame.Anim.Vector3PropertyTween', type: 'inherits' },
    { source: 'XGame.Anim.TweenAlpha', target: 'XGame.Anim.FloatPropertyTween', type: 'inherits' },
    { source: 'XGame.Anim.TweenColor', target: 'XGame.Anim.ColorPropertyTween', type: 'inherits' },
    { source: 'XGame.Anim.TweenCanvasGroupAlpha', target: 'XGame.Anim.FloatPropertyTween', type: 'inherits' },

    // XGame.SpriteAtlas - inherits/implements (XGameDll)
    { source: 'XGame.SpriteAtlas.ISpriteAtlasManager', target: 'XGame.Common.ICom', type: 'inherits' },
    { source: 'XGame.SpriteAtlas.SpriteAtlasManager', target: 'XGame.SpriteAtlas.ISpriteAtlasManager', type: 'implements' },

    // XGame.I18N - inherits/implements (XGameDll)
    { source: 'XGame.I18N.II18NManager', target: 'XGame.Common.ICom', type: 'inherits' },
    { source: 'XGame.I18N.I18NManager', target: 'XGame.I18N.II18NManager', type: 'implements' },

    // XGame.Command - inherits/implements (XGameDll)
    { source: 'XGame.Command.ICommandManager', target: 'XGame.Common.ICom', type: 'inherits' },
    { source: 'XGame.Command.CommandManager', target: 'XGame.Command.ICommandManager', type: 'implements' },

    // XGame.HttpCom - implements (XGameDll)
    { source: 'XGame.HttpCom.HTTP', target: 'XGame.HttpCom.IHttp', type: 'implements' },

    // XGame.Monitor - inherits/implements (XGameDll)
    { source: 'XGame.Monitor.MonitorManager', target: 'XGame.Monitor.MonitorBase', type: 'implements' },

    // XGame.Material - inherits (XGameDll)
    { source: 'XGame.Material.FloatMaterialPropertySetter', target: 'XGame.Material.MaterialPropertySetter', type: 'inherits' },
    { source: 'XGame.Material.ColorMaterialPropertySetter', target: 'XGame.Material.MaterialPropertySetter', type: 'inherits' },
  ],

  modules: [
    {
      id: 'framework',
      name: 'XGame引擎框架',
      description: 'XGame引擎核心框架层，包含XGameEngine.dll和XGameBase.dll的基础设施，提供Game接口、模块系统、状态机、事件引擎等核心能力',
      layer: 'framework',
      keyClasses: [
        'XClient.Common.IGame',
        'XClient.Common.IGameComAndModule',
        'XClient.Common.IModule',
        'XClient.Common.IMessageDispatcher',
        'XClient.Common.IGameStateManager',
        'XClient.Common.GameGlobal',
        'XClient.Game.GameApp',
        'XClient.Game.CGame',
        'XClient.Game.GameStateMachine',
        'XClient.Game.GameStateBase',
        'XClient.Game.GameStateNone',
        'XClient.Game.GameStateLogin',
        'XClient.Game.GameStateGame',
        'XClient.Game.GameStateBattle',
        'XClient.Game.GameStateManager',
        'XClient.Game.GameRoots',
        'XClient.Game.GameSceneManager',
        'XClient.Game.ModuleSetup',
        'XClient.Game.SystemSettings',
        'XClient.Game.GamePreProcesser',
        'XClient.Game.XGameSink',
        'XClient.Module.BaseModule',
        'XClient.Common.GameHelp',
        'XClient.Common.GameTime',
        'XClient.Common.RandCreater',
        'XClient.Common.Function',
        'XClient.Common.HtmlToRtf',
        'XClient.Common.GameNotify',
        'XClient.Common.FPSMonitor',
        'XClient.Common.PingMonitor',
        'XClient.Common.DGlobalEvent',
        'XClient.Common.DComID',
        'XClient.Common.DGlobalErrorCode',
        'XClient.Common.CountdownManager',
        'XClient.Common.ModuleMessageHandler',
        'XClient.Common.GameZone',
        'XClient.Common.XmlLoader',
      ],
      dependencies: [],
    },
    {
      id: 'network',
      name: '网络通信层',
      description: '负责网络连接、消息收发、网络变量同步、网络对象管理等网络通信核心功能',
      layer: 'network',
      keyClasses: [
        'XClient.Common.INetModule',
        'XClient.Game.NetModule',
        'XClient.Game.NetHeartBeatChecker',
        'XClient.Network.INetable',
        'XClient.Network.INetObject',
        'XClient.Network.INetVar',
        'XClient.Network.NetworkManager',
        'XClient.Network.NetableSyncer',
        'XClient.Network.NetObject',
        'XClient.Network.NetObjectManager',
        'XClient.Network.VirtualNetObject',
        'XClient.Network.VirtualNetObjectManager',
        'XClient.Network.NetObjectBehaviour',
        'XClient.Network.MonoNetObject',
        'XClient.Network.NetObjectTransform',
        'XClient.Network.NetCommData',
        'XClient.Network.NetCommDataManager',
        'XClient.Common.GameNetCom.IGameNetCom',
        'XClient.Common.GameNetCom.GameNetCom',
        'XClient.Common.GameNetCom.IGamePackProcess',
        'XClient.Common.GameNetCom.CSPackProcess',
        'XClient.Common.GameNetCom.LuaPackProcess',
        'XClient.Common.GameNetCom.NetDefine',
        'XClient.Common.GameNetCom.PackDataMerge',
        'XClient.Common.GameNetCom.MessageSinkEvent',
        'XClient.Common.CommonNetMessageRegister',
        'XClient.Common.NetMessageHandle',
        'XClient.NetTransfer.INetTransferModule',
        'XClient.NetTransfer.NetTransferModule',
        'XClient.NetTransfer.NetTransferMessageRegister',
      ],
      dependencies: ['framework'],
    },
    {
      id: 'entity',
      name: '实体系统层',
      description: '游戏实体系统，包含角色、怪物、子弹、Buff等实体定义，以及移动、技能、伤害、AI等部件系统',
      layer: 'entity',
      keyClasses: [
        'XClient.Entity.IEntityModule',
        'XClient.Entity.EntityModule',
        'XClient.Entity.EntityDef',
        'XClient.Entity.EntityType',
        'XClient.Entity.ICreatureEntity',
        'XClient.Entity.IBullet',
        'XClient.Entity.IMonster',
        'XClient.Entity.IBuff',
        'XClient.Entity.ISkillPart',
        'XClient.Entity.IEntityMovePart',
        'XClient.Entity.IDamagePart',
        'XClient.Entity.IAIPart',
        'XClient.Entity.RoleEntity',
        'XClient.Entity.PersonEntity',
        'XClient.Entity.GoodsEntity',
        'XClient.Entity.Monster',
        'XClient.Entity.Bullet',
        'XClient.Entity.Buff',
        'XClient.Entity.BulletSystem',
        'XClient.Entity.MonsterSystem',
        'XClient.Entity.BulletLauncher',
        'XClient.Entity.BulletHitMgr',
        'XClient.Entity.EntityMovePart',
        'XClient.Entity.SkillPart',
        'XClient.Entity.DamagePart',
        'XClient.Entity.AIPart',
        'XClient.Entity.NetEntity',
        'XClient.Entity.NetGameObjectEntity',
        'XClient.Entity.NetVisibleEntity',
        'XClient.Agent.AgentModule',
        'XClient.Agent.Agent',
        'XClient.Agent.AgentEntity',
        'XClient.Agent.AgentDataPart',
        'XClient.Agent.AgentVisiblePart',
        'XClient.Agent.AgentEntityType',
      ],
      dependencies: ['framework', 'network'],
    },
    {
      id: 'module',
      name: '模块层',
      description: '业务模块层，包含登录、房间、RPC、红点、配置中心等游戏功能模块',
      layer: 'module',
      keyClasses: [
        'XClient.Login.ILoginModule',
        'XClient.Login.LoginModule',
        'XClient.Login.LoginDataManager',
        'XClient.Login.GameServerManager',
        'XClient.Login.LoginStateMachine',
        'XClient.Login.StateBase',
        'XClient.Login.StateNone',
        'XClient.Login.StateGateway',
        'XClient.Login.StateLogin',
        'XClient.Login.StateEnterRoom',
        'XClient.Login.StateGame',
        'XClient.Login.LoginStateManager',
        'XClient.Room.RoomModule',
        'XClient.Room.RoomPropertySet',
        'XClient.RPC.IRPCModule',
        'XClient.RPC.RPCModule',
        'XClient.RPC.RPCInnerNames',
        'XClient.Reddot.IReddotModule',
        'XClient.Reddot.ReddotModule',
        'XClient.Common.ISchemeModule',
        'XClient.Game.CSchemeModule',
        'XClient.Game.GameSchemeCom',
        'XClient.Game.SchemeModule.CSchemeModule',
        'XClient.Game.SchemeModule.EditorSchemeCenter',
        'XClient.Game.SchemeModule.CDefaultFileSystem',
      ],
      dependencies: ['framework', 'network'],
    },
    {
      id: 'business',
      name: '业务逻辑层',
      description: '游戏业务逻辑层，包含飘字、N选一、随机、光效、预加载等业务功能',
      layer: 'business',
      keyClasses: [
        'XClient.FlowText.IFlowText',
        'XClient.FlowText.TMPFlowTextView',
        'XClient.FlowText.TMPFlowSpriteView',
        'XClient.FlowText.CustomFowTextView',
        'XClient.FlowText.IconFlowTextView',
        'XClient.FlowText.CanvasGroupFlowTextView',
        'XClient.FlowText.FlowSpriteSwitcherView',
        'XClient.Features.SelectOne.ISelectOneDataSource',
        'XClient.Features.SelectOne.SelectOneOptionData',
        'XClient.Features.SelectOne.SelectOneDataSourceSelector',
        'XClient.Features.Random.RandomUtility',
        'XClient.LightEffect.EffectMgr',
        'XClient.LightEffect.NetEffectPlayer',
        'XClient.PreLoad.PreLoadCache',
        'XClient.PreLoad.PreLoadSkinCache',
        'XClient.VirtualServer.IVirtualServer',
        'XClient.VirtualServer.VirtualServer',
        'XClient.VirtualServer.VirtualNet',
        'XClient.VirtualServer.BaseHandler',
      ],
      dependencies: ['framework', 'module'],
    },
    {
      id: 'ui',
      name: 'UI表现层',
      description: 'UI表现层，包含UI组件、Banner、富文本、文本样式、资源加载等UI相关功能',
      layer: 'ui',
      keyClasses: [
        'XClient.UI.ScrollRectController',
        'XClient.UI.ButtonAnimation',
        'XClient.UI.ButtonEx',
        'XClient.UI.UIDrag',
        'XClient.UI.UIJoystickCommon',
        'XClient.UI.CanvasRaycastFilter',
        'XClient.UI.CanvasScalerEx',
        'XClient.UI.UIRotateAnim',
        'XClient.UI.UISettings',
        'XClient.UI.UIMoviePlayer',
        'XClient.UI.UI2DTrigger',
        'XClient.UI.UISound',
        'XGame.Banner.IBannerManager',
        'XGame.Banner.BannerManager',
        'XGame.Banner.BannerViewBase',
        'XGame.Banner.BannerViewDefault',
        'XGame.Banner.BannerNode',
        'XGame.Banner.BannerSettings',
        'XGame.AssetScript.UI.RectTransformSetter',
        'XGame.AssetScript.UI.ForceLayoutRebuider',
        'XGame.AssetScript.UI.TextStyleSwitcher',
        'XGame.AssetScript.UI.TextStrSwitcher',
        'XGame.AssetScript.UI.RectTransformSizeSyncer',
        'XGame.AssetScript.UI.TextMeshProPreferreWidthSyncer',
        'XGame.AssetScript.UI.LOPUIWindowMetaEx',
        'XGame.AssetScript.UI.UIWindowExSetting',
        'XGame.AssetScript.UI.MaskLevel',
        'XGame.AssetScript.UI.MaskBorderBlur',
        'XGame.AssetScript.UI.MaskScreenTime',
        'XGame.AssetScript.UI.MaskEffect',
        'XGame.AssetScript.UI.CanvasCull',
        'XGame.AssetScript.UI.TextSkipMgr',
        'XGame.AssetScript.UHyperText.SymbolTextEmojSelector',
        'XGame.AssetScript.UHyperText.SymbolTextEventExtend',
        'XGame.AssetScript.UHyperText.SymbolTextEmojItem',
        'XGame.AssetScript.UHyperText.UHyperTextToolExtend',
        'XGame.AssetScript.TextSetting.PSDTMPTextStyleSettings',
        'XGame.AssetScript.TextSetting.TextSettingConfig',
        'XGame.AssetScript.TextSetting.TextColorLibrary',
        'XGame.AssetScript.ResLoader.IResLoader',
        'XGame.AssetScript.ResLoader.IResLoaderSink',
        'XGame.AssetScript.ResLoader.IResourcesLoader',
        'XGame.AssetScript.ResLoader.ResourceLoadAdapter',
        'XGame.AssetScript.ResLoader.ResourcesManager',
        'XGame.AssetScript.ResLoader.ResourceLoader',
        'XGame.AssetScript.ResLoader.SpineResourcesLoader',
        'XGame.AssetScript.ResLoader.RemoteResCacheMgr',
        'XGame.DoTweenEx.TweenNode',
        'XGame.DoTweenEx.FloatTweenNode',
        'XGame.DoTweenEx.Vector3TweenNode',
        'XGame.DoTweenEx.QuaternionTweenNode',
        'XGame.DoTweenEx.ImageFadeTweenNode',
        'XGame.DoTweenEx.ImageFillTweenNode',
        'XGame.DoTweenEx.ScrollRectNormalPosNode',
        'XGame.DoTweenEx.TMPFadeTweenNode',
        'XGame.DoTweenEx.TrsPosTweenNode',
        'XGame.DoTweenEx.RTTrsPosTweenNode',
        'XGame.DoTweenEx.TrsScaleTweenNode',
        'XGame.DoTweenEx.TrsRotateTweenNode',
        'XGame.DoTweenEx.SequenceNode',
        'XGame.DoTweenEx.DoTweenExMgr',
        'XGame.DoTweenEx.DoTweenInterfaceEx',
      ],
      dependencies: ['framework', 'module'],
    },
    {
      id: 'editor',
      name: '编辑器工具层',
      description: '编辑器和调试工具层，包含监控系统和性能分析工具',
      layer: 'editor',
      keyClasses: [
        'Monitor.IMonitorMgr',
        'Monitor.IMonitorNode',
        'Monitor.MonitorMgr',
        'Monitor.MonitorNodeBase',
        'Monitor.CSEventEngineNode',
        'Monitor.CSTimerAxisNode',
        'Monitor.CSUnityPoolNode',
        'Monitor.CSFrameUpdateManagerNode',
        'Monitor.CSNetModuleNode',
        'Monitor.CSSpriteAtlasNode',
        'Monitor.CSLOPObjectNode',
        'Monitor.CSAssetNode',
      ],
      dependencies: ['framework'],
    },
    {
      id: 'sdk',
      name: 'SDK层',
      description: '平台SDK适配层，提供iOS/Android/Default平台SDK接口和实现',
      layer: 'sdk',
      keyClasses: [
        'XGame.AssetScript.SDK.ISDK',
        'XGame.AssetScript.SDK.IBaseSDK',
        'XGame.AssetScript.SDK.SDK_Android',
        'XGame.AssetScript.SDK.BaseSDK_IOS',
        'XGame.AssetScript.SDK.BaseSDK_Android',
        'XGame.AssetScript.SDK.BaseSDK_Default',
        'XGame.AssetScript.SDK.GameSDKManager',
        'XGame.AssetScript.SDK.GameSDKMessageProxyMono',
      ],
      dependencies: ['framework'],
    },
    {
      id: 'update',
      name: '更新系统层',
      description: '热更新和资源更新系统，包含HybridCLR热更、DLL加载、版本检查等功能',
      layer: 'update',
      keyClasses: [
        'XClient.Common.IUpdateEngine',
        'XGame.Update.UpdateScene',
        'XGame.Update.UpdateSetup',
        'XGame.Update.UpdateI18NConfig',
        'XGame.Update.UpdateMessageBoxUI',
        'XGame.Update.PingTest',
        'XGame.Update.UpdateDebug',
        'XGame.Update.UIMoviePlayer',
        'XGame.Update.LoadDll',
        'XGame.Update.LoadSystem',
        'XGame.HybridCLR.HybridCLRDef',
        'XGame.HybridCLR.HybridCLRStartUp',
        'XGame.HybridCLR.AOTGenericReferences',
      ],
      dependencies: ['framework', 'network'],
    },
    {
      id: 'xgame-core',
      name: 'XGame核心框架',
      description: 'XGame引擎核心框架，包含应用入口、组件系统、事件引擎、定时器、状态机、命令系统、对象池等基础模块',
      layer: 'framework',
      keyClasses: [
        'XGame.Common.XGameApp',
        'XGame.Common.ICom',
        'XGame.Common.XGameComs',
        'XGame.EventEngine.EventEngine',
        'XGame.Timer.TimerManager',
        'XGame.State.BaseStateMachine',
        'XGame.Command.CommandManager',
        'XGame.ItemPool.PoolableItemPool',
      ],
      dependencies: [],
    },
    {
      id: 'xgame-asset',
      name: 'XGame资源系统',
      description: '资源加载管理系统，支持开发模式和Web模式的AssetBundle加载',
      layer: 'framework',
      keyClasses: [
        'XGame.Asset.LoadMgr',
        'XGame.Asset.ILoadSystem',
        'XGame.Asset.IAssetBundle',
        'XGame.Asset.DevLoadSystem',
        'XGame.Asset.WebLoadSystem',
      ],
      dependencies: ['xgame-core'],
    },
    {
      id: 'xgame-net-base',
      name: 'XGame网络基础',
      description: '底层网络通信模块，支持TCP/UDP/WebSocket连接和网关通信',
      layer: 'framework',
      keyClasses: [
        'XGame.Net.INetCom',
        'XGame.Net.NetCom',
        'XGame.Net.TCPSocketClient',
        'XGame.Net.UDPSocketClient',
        'XGame.Net.WebSocketClient',
        'XGame.Net.Connection',
      ],
      dependencies: ['xgame-core'],
    },
    {
      id: 'xgame-entity-base',
      name: 'XGame实体基础',
      description: '引擎层实体系统基础，定义实体/部件接口和基类，与业务层Entity模块对接',
      layer: 'framework',
      keyClasses: [
        'XGame.Entity.IEntity',
        'XGame.Entity.BaseEntity',
        'XGame.Entity.VisibleEntity',
        'XGame.Entity.IEntityPart',
        'XGame.Entity.BasePart',
        'XGame.Entity.EntityWorld',
      ],
      dependencies: ['xgame-core', 'xgame-asset'],
    },
    {
      id: 'xgame-anim',
      name: 'XGame动画系统',
      description: '引擎层动画和缓动系统，包含Tween动画框架和多种属性动画',
      layer: 'framework',
      keyClasses: [
        'XGame.Anim.AnimBase',
        'XGame.Anim.TweenCore',
        'XGame.Anim.TweenPlayer',
        'XGame.Anim.TweenSequence',
        'XGame.Anim.TweenPosition',
        'XGame.Anim.TweenScale',
      ],
      dependencies: ['xgame-core'],
    },
    {
      id: 'xgame-audio',
      name: 'XGame音频系统',
      description: '音频管理和播放系统，支持2D/3D音效、混音器组管理',
      layer: 'framework',
      keyClasses: [
        'XGame.Audio.IAudioCom',
        'XGame.Audio.AudioCom',
        'XGame.Audio.AudioPlayer',
        'XGame.Audio.AudioNode',
      ],
      dependencies: ['xgame-core', 'xgame-asset'],
    },
    {
      id: 'xgame-effect',
      name: 'XGame特效系统',
      description: '特效管理和播放系统，支持动画/粒子/声音特效及护盾效果',
      layer: 'framework',
      keyClasses: [
        'XGame.Effect.IEffectCom',
        'XGame.Effect.EffectCom',
        'XGame.Effect.EffectPlayer',
        'XGame.Effect.ShieldBase',
      ],
      dependencies: ['xgame-core', 'xgame-anim'],
    },
    {
      id: 'xgame-lighting',
      name: 'XGame光效系统',
      description: '光效管理和播放系统，支持绑定/定位/UI光效及Spine骨骼绑定',
      layer: 'framework',
      keyClasses: [
        'XGame.LightingEff.ILightingEffectManager',
        'XGame.LightingEff.LightingEffectManager',
        'XGame.LightingEff.LightingEffectFacade',
        'XGame.LightingEff.LightingEffectBase',
      ],
      dependencies: ['xgame-core', 'xgame-effect'],
    },
    {
      id: 'xgame-ui-base',
      name: 'XGame UI基础',
      description: 'UI基础系统，包含排序管理、灰化、状态切换、动画节点等',
      layer: 'ui',
      keyClasses: [
        'XGame.UI.IUISortingManager',
        'XGame.UI.GraphicGreyManager',
        'XGame.UI.UIStateSwitcher',
        'XGame.UI.UIAnimationNode',
        'XGame.UI.BaseMonoStateSwitcher',
      ],
      dependencies: ['xgame-core'],
    },
    {
      id: 'xgame-guide',
      name: 'XGame引导系统',
      description: '新手引导系统，支持步骤/节点/条件/触发器/气泡/遮罩',
      layer: 'business',
      keyClasses: [
        'XGame.Guide.IGuideManager',
        'XGame.Guide.GuideManager',
        'XGame.Guide.GuideStep',
        'XGame.Guide.GuideCondition',
        'XGame.Guide.GuideTrigger',
      ],
      dependencies: ['xgame-core', 'xgame-ui-base'],
    },
    {
      id: 'xgame-reddot-base',
      name: 'XGame红点基础',
      description: '引擎层红点系统，定义红点管理器和视图接口',
      layer: 'framework',
      keyClasses: [
        'XGame.Reddot.IReddotManager',
        'XGame.Reddot.ReddotManager',
        'XGame.Reddot.ReddotData',
        'XGame.Reddot.ReddotIcon',
      ],
      dependencies: ['xgame-core'],
    },
    {
      id: 'xgame-i18n',
      name: 'XGame国际化',
      description: '国际化系统，支持多语言文本/图片/字体切换',
      layer: 'framework',
      keyClasses: [
        'XGame.I18N.II18NManager',
        'XGame.I18N.I18NManager',
        'XGame.I18N.LocalizeText',
        'XGame.I18N.LocalizeImage',
        'XGame.I18N.I18NFontManager',
      ],
      dependencies: ['xgame-core'],
    },
    {
      id: 'xgame-new-animator',
      name: 'XGame新动画系统',
      description: '新动画控制器系统，支持动作播放/事件/状态机行为',
      layer: 'framework',
      keyClasses: [
        'XGame.NewAnimator.IActionPlayer',
        'XGame.NewAnimator.ActionPlayer',
        'XGame.NewAnimator.AnimationEventManager',
        'XGame.NewAnimator.RuntimeActionNode',
      ],
      dependencies: ['xgame-core'],
    },
    {
      id: 'xgame-performance',
      name: 'XGame性能系统',
      description: '性能/画质管理，支持多级画质和兼容模式',
      layer: 'framework',
      keyClasses: [
        'XGame.Performance.IPerformanceCom',
        'XGame.Performance.PerformanceComImpl',
        'XGame.Performance.PerformanceManager',
      ],
      dependencies: ['xgame-core'],
    },
    {
      id: 'xgame-function-open',
      name: 'XGame功能开放',
      description: '功能开放系统，控制功能按钮/元素的显示和交互',
      layer: 'business',
      keyClasses: [
        'XGame.FunctionOpen.IFunctionOpenManager',
        'XGame.FunctionOpen.FunctionOpenManager',
        'XGame.FunctionOpen.FunctionOpenNode',
      ],
      dependencies: ['xgame-core', 'xgame-ui-base'],
    },
    {
      id: 'xgame-chat',
      name: 'XGame聊天系统',
      description: '聊天消息管理，支持频道/消息队列/视图',
      layer: 'business',
      keyClasses: [
        'XGame.Chat.IChatMessageManager',
        'XGame.Chat.ChatMessageManager',
        'XGame.Chat.ChatMessageView',
      ],
      dependencies: ['xgame-core'],
    },
    {
      id: 'xgame-fly-effect',
      name: 'XGame飞行特效',
      description: '飞行特效系统，支持粒子吸引和完成效果',
      layer: 'business',
      keyClasses: [
        'XGame.FlyEffect.IFlyEffectManager',
        'XGame.FlyEffect.FlyEffectManager',
        'XGame.FlyEffect.FlyEffectObject',
      ],
      dependencies: ['xgame-core', 'xgame-effect'],
    },
    {
      id: 'xgame-anim-overrides',
      name: 'XGame动画重载',
      description: '动画片段重载系统，支持Spine皮肤动画切换',
      layer: 'framework',
      keyClasses: [
        'XGame.AnimationOverrides.IAnimationOverridesMgr',
        'XGame.AnimationOverrides.AnimationOverridesMgr',
        'XGame.AnimationOverrides.AnimationClipOverrides',
      ],
      dependencies: ['xgame-core', 'xgame-new-animator'],
    },
  ],
};

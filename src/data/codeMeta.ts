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
  ],
};

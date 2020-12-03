import BPermission from "./classes/BPermissions";
import { BProperties } from "./classes/BProperties";
import { MinimalBServer } from "./classes/BServer";

// #region client to server
interface setPermission {
    userId: number;
    perm: number;
    serverId: number;
}
interface serverLoad {
    serverId: number;
}
interface getServers {}
interface login {
    username: string;
    password: string;
}

interface changeProperty {
    properties: BProperties;
    serverId: number;
    description?: string;
}

interface consoleCommand {
    command: string;
}

interface createWorld {
    name: string;
    seed: string;
    serverId: number;
    levelType: string;
}

interface setOpVal {
    permissions: BPermission;
    update?: boolean;
    serverId: number;
}

// Use changeProperty
// interface selectWorld {
//     name: string;
//     serverId: number;
// }
// #endregion

// #region server to client 
interface loginResult {
    success: boolean;
}
interface loginResultSuccess extends loginResult {
    id: number;
    perm: string;
    username: string;
    globalPermissions: number;
}
interface serverList {
    servers: MinimalBServer[];
}
interface changeStatus {
    serverId: number;
    status: 'Start' | 'Stop';
}
interface copyWorld {
    fromServer: number;
    fromWorld: string;
    toServer: number;
    toWorld: string;
}
interface deleteWorld {
    serverId: number;
    world: string;
}
// interface serverLoadResultBase {
//     success: boolean;
// }
// interface serverLoadResultSuccess extends serverLoadResultBase {
//     server: BServer;
// }
// interface serverLoadResultError extends serverLoadResultBase {
//     reason: string;
// }
// type serverLoadResult = serverLoadResultSuccess | serverLoadResultError;
interface serverCopyResponse {
    success: boolean;
    reason?: string;
}
interface serverUpdate {
    id?: number;
    consoleAppend?: string;
    properties?: BProperties;
    status?: string;
    worlds?: any;
    currentWorld?: string;
    description?: string;
    allowedUsers?: userPermissionData[];
    controls19132?: boolean;
}
interface clobberAll {
    server: MinimalBServer;
}
interface fullServerSend {
    // Wrong, the user may not have permission for the full server
    // server: BServer;
    id: number;
    // name: string; In properties now
    description: string;
    status: string;
    version: string;
    onlinePlayers: number;
    properties: BProperties;
    worlds: any;
    whitelist: null;
    access: number;
    controls19132: boolean;
    autostart: boolean;
    permissions?: BPermission[];
    output?: string;
    allowedUsers?: userPermissionData[];
    currentWorld: string;
}

interface refreshDB {}
interface DBRefresh {
    success: boolean;
    reason?: string;
}

// interface permissionSet {
//     id: number;
//     perm: number;
// }
// interface permissionSetSuccess extends permissionSet {
//     id: number;
//     perm: number;
//     serverId: number;
// }
// interface permissionSetError extends permissionSet {
//     reason: string;
// }
interface debug {
    msg: string;
}
// #endregion

interface userPermissionData {
    id: number;
    name: string;
    perm: string;
    access: number;
}

// Not implemented

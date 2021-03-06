import DatabaseConnection from './DatabaseConnection';

export default class Player {
    static xuidToPlayer: Map<string, Player> = new Map();
    static nameToPlayer: Map<string, Player> = new Map();
    xuid: string;
    username: string;
    constructor(username, xuid, addToDb = false) {
        this.username = username;
        this.xuid = xuid;
        Player.xuidToPlayer.set(xuid, this);
        Player.nameToPlayer.set(username, this);
        if(addToDb) {
            if(DatabaseConnection.type === 'postgresql') {
                DatabaseConnection.query({
                    text: "INSERT INTO players (username, xuid) VALUES ($1, $2) ON CONFLICT (xuid) DO UPDATE SET username = $1",
                    values: [username, xuid]
                });
            } else {
                DatabaseConnection.query({
                    text: "INSERT INTO players (username, xuid) values ($1, $2) ON DUPLICATE KEY UPDATE username = $1",
                    values: [username, xuid]
                });
            }
        }
    }
}

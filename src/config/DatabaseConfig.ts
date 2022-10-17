export default class DatabaseConfig {
    getDbUrl(): string {
        return process.env.DB_URL;
    }
}

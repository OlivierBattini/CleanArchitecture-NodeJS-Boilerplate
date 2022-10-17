export default class AppConfig {
    getParam(): string {
        return process.env.PLACEHOLDER;
    }
}

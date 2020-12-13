export default class CustomError extends Error {
    public status: number;
    public message: string;
    public error: string | null;

    constructor(status: number, message: string, error?: string) {
        super(message);
        this.status = status;
        this.message = message;
        this.error = error || null;
    }
}

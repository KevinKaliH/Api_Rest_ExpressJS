import bcrypt from 'bcrypt';
import config from '../config';

async function GetPasswordEncrypt(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(config.salt);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
}

async function CheckRecord(password: string, passwordRecord: string): Promise<boolean> {
    return await bcrypt.compare(password, passwordRecord);
}

export default {
    GetPasswordEncrypt: GetPasswordEncrypt,
    CheckValidPassword: CheckRecord,
};

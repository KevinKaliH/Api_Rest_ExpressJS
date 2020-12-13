import CustomError from '../utils/CustomError';
import { IUser, IUserDTO } from '../interfaces/IUser';
import UserModel from '../models/user';
import encrypt from '../utils/encrypt';
import { ILogin } from 'src/interfaces/ILogin';

export default class AuthService {
    public async SingUp(newUser: IUser): Promise<{ userDTO: IUser }> {
        const userModel = UserModel;

        try {
            const ifExistRecord = await userModel.countDocuments({ username: newUser.username });
            if (ifExistRecord != 0) throw new Error('Username no puede ser duplicado');

            console.log('creating user db record');
            newUser.password = await encrypt.GetPasswordEncrypt(newUser.password);
            const userRecord = await userModel.create({
                ...newUser,
            });

            if (!userRecord) throw new CustomError(400, 'User cannot be created');

            const user = userRecord.toObject();
            Reflect.deleteProperty(user, 'password');
            return user;
        } catch (e) {
            throw new CustomError(300, e.message);
        }
    }

    public async SingIn(login: ILogin): Promise<IUserDTO> {
        const userdb = UserModel;

        const userRecord = await userdb.findOne({ username: login.username });
        if (!userRecord) {
            throw new Error('User not registered');
        }
        const validPassword = await encrypt.CheckValidPassword(login.password, userRecord.password);

        if (validPassword) {
            const returnDTO: IUserDTO = userRecord.toObject();

            Reflect.deleteProperty(returnDTO, 'password');
            Reflect.deleteProperty(returnDTO, '__v');
            return returnDTO;
        } else throw new Error('Invalid Password');
    }
}

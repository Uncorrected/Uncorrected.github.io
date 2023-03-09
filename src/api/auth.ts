import instance from '@/utils/request';

interface LoginForm {
    username: string,
    password: string,
};
interface User {
    id: number,
    username: string,
    nickname: string,
    school: string,
}
interface LoginResponse {
    token: string;
    user: User;
}

const api = {
    login: '/auth/login',
};

const login = (data: LoginForm) => instance.post<LoginResponse>(api.login, data);

export {
    login,
}
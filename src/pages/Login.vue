<script setup lang="ts">
import { login } from '@/api/auth'

interface formType {
    username: string,
    password: string,
    nickname?: string,
    school?: string,
}
const form = ref<formType>({
    username: '',
    password: '',
    nickname: '',
    school: '',
});
const onLogin = async (values: any) => {
    // console.log('我要进行登录啦！', values);
    const res = await login(values);
    console.log(res)
};
</script>

<template>
    <div>
        <van-form @submit="onLogin">
            <van-cell-group inset>
                <van-field v-model="form.username" name="username" label="用户名" placeholder="它是你的唯一凭证"
                    :rules="[{ required: true, message: '请填写用户名' }]" required />
                <van-field v-model="form.password" type="password" name="password" label="密码" placeholder="你可以通过特殊手段找回它"
                    :rules="[{ required: true, message: '请填写密码' }]" required />
            </van-cell-group>
            <van-button round block type="primary" native-type="submit">
                登录
            </van-button>
        </van-form>
    </div>
</template>

<style scoped></style>
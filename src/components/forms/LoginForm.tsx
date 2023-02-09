import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { postLoginUser } from "../../utils/api";
import { InputContainer, InputField, InputLabel, Button } from "../../utils/styles"
import { UserCredentialsParams } from "../../utils/types";
import styles from './index.module.scss';

export const LoginForm = () => { 
     const {
          register, 
          handleSubmit,
          formState: { errors },
     } = useForm<UserCredentialsParams>();
     const navigate = useNavigate();

     const onSubmit = async (data: UserCredentialsParams) => {
          try {
               await postLoginUser(data);
               navigate(`/conversations`);
          } catch (err) {
               console.log(err);
          }
     };

     return (
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
               <InputContainer>
                    <InputLabel htmlFor="email">이메일</InputLabel>
                    <InputField type="email" id="email" {...register('email', { required: true })} />
               </InputContainer>
               <InputContainer className={styles.loginFormPassword}>
                    <InputLabel htmlFor="password">비밀번호</InputLabel>
                    <InputField type="password" id="password" {...register('password', { required: true })}/>
               </InputContainer>
               <Button>로그인</Button>
               <div className={styles.footerText}>
                    <span>계정이 없으십니까? </span>
                    <Link to="/register">
                         <span>회원가입</span>
                    </Link>
               </div>
          </form>
     )
}


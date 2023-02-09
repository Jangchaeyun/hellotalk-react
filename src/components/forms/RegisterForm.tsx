import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { postRegisterUser } from "../../utils/api";
import { InputContainer, InputField, InputLabel, Button } from "../../utils/styles"
import { CreateUserParams } from "../../utils/types";
import styles from './index.module.scss';

export const RegisterForm = () => {
     const {
          register, 
          handleSubmit,
          formState: { errors },
     } = useForm<CreateUserParams>();

     console.log(errors);
     
     const onSubmit = async (data: CreateUserParams) => {
          console.log(data);
          try {
               await postRegisterUser(data);
          } catch (err) {
               console.log(err);
          }
     };

     return (
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
               <InputContainer>
                    <InputLabel htmlFor="email">이메일</InputLabel>
                    <InputField type="email" id="email" {...register('email', {
                         required: '이메일이 이미 존재합니다.'
                    })} />
               </InputContainer>
               <section className={styles.nameFieldRow}>
                    <InputContainer>
                         <InputLabel htmlFor="firstName">성</InputLabel>
                         <InputField type="text" id="firstName" {...register('firstName', {required: '이름이 이미 존재합니다.'})} />
                    </InputContainer>
                    <InputContainer>
                         <InputLabel htmlFor="lastName">이름</InputLabel>
                         <InputField type="text" id="lastname" {...register('lastName', {required: '이름이 이미 존재합니다.'})}/>
                    </InputContainer>
               </section>
               <InputContainer>
                    <InputLabel htmlFor="password">비밀번호</InputLabel>
                    <InputField type="password" id="password" {...register('password', {required: '비밀번호가 이미 존재합니다.'})} {...register('password', {required: '비밀번호가 이미 존재합니다.'})} />
               </InputContainer>
               <Button className={styles.button}>계정 만들기</Button>
               <div className={styles.footerText}>
                    <span>계정이 있으십니까? </span>
                    <Link to="/login">
                         <span>로그인</span>
                    </Link>
               </div>
          </form>
     )
}


import { Button, InputContainer, InputField, InputLabel, TextField } from "../../utils/styles"
import styles from './index.module.scss';

export const CreateConversationForm = () => {
   return (
      <form className={styles.createConversationForm}>
         <section>
            <InputContainer backgroundColor="#161616">
               <InputLabel>받는 사람</InputLabel>
               <InputField />
            </InputContainer>
         </section>
         <section className={styles.message}>
            <InputContainer backgroundColor="#161616">
               <InputLabel>메시지 (선택사항)</InputLabel>
               <TextField />
            </InputContainer>
         </section>
         <Button onClick={(e) => e.preventDefault()}>대화방 만들기</Button>
      </form>
   );
};
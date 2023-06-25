import { FC, ReactElement } from 'react'
import { Form } from 'types/form'
import './AitorForm.styles.scss'

export const AitorForm: FC<Form> = ({ onSubmit }): ReactElement => {
  return (
    <div className='contact_container'>
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input className='contact_input' type="text" name="user_name" placeholder='Name' required />
        <label>Email</label>
        <input className='contact_input' type="email" name="user_email" placeholder='Email' required />
        <label>Message</label>
        <textarea className='contact_input' name="message" placeholder='Message' required />
        <input className='contact_button' type="submit" value="Send" />
        <div className='contact_alert'>
          <div className='contact_alert-good'>Message sent!</div>
        </div>
        <div className='contact_alert'>
          <div className='contact_alert-error'>Error sending the message, try again</div>
        </div>
      </form>
    </div>
  );
}

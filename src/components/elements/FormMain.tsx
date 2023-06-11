import React from 'react';
import { send } from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

import toastOptions from '../../features/toastOptions';

const defaultValues = {
    category: 'General',
    email: '',
    message: '',
    name: '',
};

function FormMain(): React.ReactElement {
    const { formState, handleSubmit: onSubmit, register, reset }
        = useForm({ defaultValues, shouldUseNativeValidation: true });

    function handleSubmit(data: any) {
        const $KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        send('service_journeys', 'template_journeys', data, $KEY)
            .then(() => toast('Your message has been delivered.', toastOptions))
            .catch(() => toast('Your message failed to deliver.', { ...toastOptions, icon: '✘' }));
    }

    React.useEffect(() => {
        if (formState.isSubmitSuccessful) reset(defaultValues);
    }, [formState, reset]);

    return (
        <section className="form__main">
            <Toaster
                gutter={20}
                containerStyle={{ bottom: 20, right: 20 }}
            />
            <form onSubmit={onSubmit(handleSubmit)}>
                <h2>Let's Chat</h2>
                <div className="form__main--field">
                    <label htmlFor="input-name">Name</label>
                    <input
                        id="input-name"
                        type="text"
                        maxLength={50}
                        required
                        {...register('name')}
                    />
                </div>
                <div className="form__main--field">
                    <label htmlFor="input-email">Email</label>
                    <input
                        id="input-email"
                        type="email"
                        maxLength={50}
                        {...register('email')}
                    />
                </div>
                <div className="form__main--field">
                    <label htmlFor="input-category">Category</label>
                    <select
                        id="input-category"
                        {...register('category')}
                    >
                        <option value="General">General</option>
                        <option value="Support">Support</option>
                        <option value="Business">Business</option>
                    </select>
                </div>
                <div className="form__main--field">
                    <label htmlFor="input-message">Message</label>
                    <textarea
                        id="input-message"
                        maxLength={1000}
                        required
                        {...register('message')}
                    >
                    </textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default FormMain;




import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';


interface IContactInfo {
    name: string;
    phoneNumber?: string;
    email?: string;
    message: string;
}

export const ContactForm = () => {
    const { handleSubmit, register, formState, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (data: any) => {
        console.log(data);
        try {
            setIsLoading(true)
            const req = await axios.post('/api/contact', data);
            console.log({ req });
            setIsLoading(false)
            reset();
        } catch (error: any) {
            console.log({ error })
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 mt-5 md:mt-0'>
            <Input name='name' label='Nombre' required register={register} error={formState.errors['name']?.message} />
            <Input name='email' label='Email' type='email' required register={register} error={formState.errors['email']?.message} />
            <Input name='phoneNumber' type='number' label='Teléfono' required register={register} error={formState.errors['phoneNumber']?.message} />
            <Input name='message' label='Mensaje' type='textarea' register={register} error={formState.errors['message']?.message} />
            <button type='submit' className='w-full bg-[#ff7b00] text-white py-4 mt-3 rounded-md invalid:bg-slate-600 uppercase' disabled={isLoading}>
                {isLoading ? (
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                ) : 'Enviar'}
            </button>
        </form>
    )
}

const Input = ({ type = "text", name, label, placeholder, required, register, error }: {
    name: string;
    label: string;
    placeholder?: string;
    type?: string;
    defaultValue?: string;
    required?: boolean;
    register: any;
    error: any;
}) => {

    return (
        <div className='flex flex-col w-full' >
            <label
                htmlFor={name}
                className='font-thin text-white'
            > {label}</label>
            {
                type === 'textarea' ? (
                    <textarea
                        placeholder={placeholder}
                        className='h-[100px] px-3 py-2 text-white bg-[#1A1A1A] rounded-sm'
                        {...register(name, {
                            required
                        })}
                    />
                ) : (

                    <input
                        type={type}
                        placeholder={placeholder}
                        className='px-3 py-2 text-white bg-[#1A1A1A] rounded-sm focus:outline-[#689cfd]'
                        {...register(name, {
                            required
                        })}
                    />
                )
            }
            {error && <span>Este campo es necesario</span>}
        </div>
    )
}

import { useState } from 'react';

export const useForm = <T extends Object>(input:T) => {
    const [form, setForm] = useState(input);
    const onChange = ( value:string, campo: keyof T) => {
        setForm({
            ...form,
            [campo]:value
        });
    }
    return {
        ...form,
        onChange,
        form,
    }
}
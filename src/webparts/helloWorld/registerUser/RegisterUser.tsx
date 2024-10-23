import * as React from 'react';
import { useState } from 'react';
import { User } from '../../../utilities/model';
import { PrimaryButton, TextField } from '@fluentui/react';
import { createUser } from './registerUserSlice';
import { useAppDispatch } from '../../../app/hooks';
export function RegisterUser() {
    const dispatch = useAppDispatch();

    const [user, setUser] = useState<User>(() => ({
        name: '',
        lastName: '',
        email: ''
    }));

    const handleChange = (e: React.ChangeEvent<any>) => {
        debugger;
        const { id, value } = e.target;
        let newId: string = id.charAt(0).toLowerCase() + id.slice(1);
        setUser(prevState => ({
            ...prevState,
            [newId]: value
        }));
    };


    const handleSubmit = () => {
        console.log('user', user);
        dispatch(createUser(user));
    };

    React.useEffect(() => {
        
    }, []);
    return (
        <div>
            <h3>Register user</h3>
            <form>
                <div>
                    <TextField 
                    label="Name" 
                    id="name" 
                    name="name" 
                    required 
                    value={user.name} 
                    onChange={handleChange} />
                </div>
                <div>
                    <TextField 
                    label="Last Name" 
                    id="lastName" 
                    name="lastName" 
                    required 
                    value={user.lastName} 
                    onChange={handleChange} />
                </div>
                <div>
                    <TextField 
                    label="Email" 
                    id="email" 
                    name="email" 
                    required 
                    value={user.email} 
                    onChange={handleChange}
                        type="email"
                        onGetErrorMessage={(value: string) => {
                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            return (value == null || value == undefined || value == '') ? '' : (emailRegex.test(value) ? '' : 'Invalid email address');
                        }}
                    />
                </div>
                <br />
                <div>
                    <PrimaryButton text="Primary" onClick={handleSubmit} />
                </div>
            </form>
        </div>
    );
}

export default RegisterUser;


import React, {useState} from "react";


type UserInfo = {
    email: string;
    password: string;
}

const Login = () => {
    const [user, setUser] = useState<UserInfo>({
        email:'',
        password:''
    });

    const fetchUser = async () => {
        try {
            const response = await fetch('http//localhost:5000')
            const data = await response.json()

            if (!response.ok) {
                console.log('User not found')
            }
            console.log(data)
        }
        catch (error){
            console.log(error)
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchUser();
    }



return (
    <>
    <h2 className="text-xl font-semibold mb-4">Login Form</h2>
    <hr />
    <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input 
        type='email'
        placeholder='Email'
        name='email'
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="border p-2 mb-3 block w-full"
        />
        <label htmlFor="password">Password</label>
        <input
        type='text'
        placeholder='Password'
        name='password'
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="border p-2 mb-2 block w-full"
      />
      <div className='w-full flex justify-end'>
        <button type="submit" className="ml-auto bg-blue-500 text-white px-4 py-2 rounded">
        Login
        </button>
      </div>
      
    </form>
    </>
    
)}

export default Login
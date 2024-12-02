<script>
    import { login, signup } from '../firebase/auth'; // Import the auth methods
    let email = '';
    let password = '';

    const handleLogin = async () => {
        try {
            await login(email, password);
            // Handle successful login (e.g., redirect or show a message)
        } catch (error) {
            // Handle error (e.g., show an error message)
        }
    };

    const handleSignup = async () => {
        try {
            await signup(email, password);
            // Handle successful signup (e.g., redirect or show a message)
        } catch (error) {
            // Handle error (e.g., show an error message)
        }
    };
</script>

<div>
    <h2>Login</h2>
    <input type="email" bind:value={email} placeholder="Email" />
    <input type="password" bind:value={password} placeholder="Password" />
    <button on:click={handleLogin}>Login</button>
    <button on:click={handleSignup}>Sign Up</button>
</div> 
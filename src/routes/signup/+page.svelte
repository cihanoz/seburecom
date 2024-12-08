<script lang="ts">
	import { goto } from '$app/navigation';
	import BackFab from '$lib/components/BackFab.svelte';
	import { signup } from '$lib/firebase/auth';

	let email = '';
	let password = '';
	let passwordConfirm = '';
	let termsAndConditions = false;
	let firstName = '';
	let lastName = '';

	const validateEmail = (email: string) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	const validate = () => {
		if (firstName.length < 2 || lastName.length < 2) {
			alert('First and last name must be at least 2 characters long');
			return false;
		}

		if (!validateEmail(email)) {
			alert('Invalid email');
			return false;
		}

		if (password.length < 8) {
			alert('Password must be at least 8 characters long');
			return false;
		}

		if (password !== passwordConfirm) {
			alert('Passwords do not match');
			return false;
		}

		

		if (!termsAndConditions) {
			alert('You must accept the terms and conditions');
			return false;
		}

		return true;
	};

	const handleSignup = async () => {
		try {
			if (validate()) {
				await signup(email, password, firstName, lastName);
				// Handle successful signup (e.g., redirect or show a message)
				goto('/me');
			}
		} catch (error) {
			// Type assertion to specify that error is an instance of Error
		}
	};
</script>

<section class="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image">
	<div
		class="absolute inset-0 image-wrap z-1 bg-[url('/images/bg/01.jpg')] bg-no-repeat bg-center bg-cover"
	></div>
	<div
		class="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2"
		id="particles-snow"
	></div>
	<div class="container relative z-3">
		<div class="flex justify-center">
			<div
				class="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md"
			>
				<a href="index.html"><img src="assets/images/logo-icon-64.png" class="mx-auto" alt="" /></a>
				<h5 class="my-6 text-xl font-semibold">Signup</h5>
				<form class="text-start">
					<div class="grid grid-cols-1">
						<div class="mb-4">
							<label class="font-semibold" for="fname">First Name:</label>
							<input id="fname" type="text" class="form-input mt-3" placeholder="Harry" bind:value={firstName} />
						</div>

						<div class="mb-4">
							<label class="font-semibold" for="lname">Last Name:</label>
							<input id="lname" type="text" class="form-input mt-3" placeholder="Potter" bind:value={lastName} />
						</div>

						<div class="mb-4">
							<label class="font-semibold" for="email">Email Address:</label>
							<input
								id="email"
								type="email"
								class="form-input mt-3"
								placeholder="name@example.com"
								bind:value={email}
							/>
						</div>

						<div class="mb-4">
							<label class="font-semibold" for="password">Password:</label>
							<input
								id="password"
								type="password"
								class="form-input mt-3"
								placeholder="Password:"
								bind:value={password}
							/>
						</div>

						<div class="mb-4">
							<label class="font-semibold" for="passwordConfirm">Confirm Password:</label>
							<input
								id="passwordConfirm"
								type="password"
								class="form-input mt-3"
								placeholder="Confirm Password:"
								bind:value={passwordConfirm}
							/>
						</div>

						<div class="mb-4">
							<div class="flex items-center mb-0">
								<input
									class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-green-600 focus:border-green-300 focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50 me-2"
									type="checkbox"
									bind:checked={termsAndConditions}
								/>
								<label class="form-check-label text-slate-400" for="AcceptT&C"
									>I Accept <a href="/terms-and-conditions" class="text-green-600">Terms And Condition</a></label
								>
							</div>
						</div>

						<div class="mb-4">
							<button
								on:click={handleSignup}
								class="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full"
								>Register</button
							>
						</div>

						<div class="text-center">
							<span class="text-slate-400 me-2">Already have an account ? </span>
							<a href="/login" class="text-black dark:text-white font-bold">Sign in</a>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>
<!--end section -->

<BackFab />

"use client";

import Link from "next/link";
import { login } from "@/app/signin/actions";
import { useFormState, useFormStatus } from "react-dom"

export default function LoginForm() {
	const [errorMessage, dispatch] = useFormState(login, undefined);

	return <form action={dispatch} className="flex flex-col items-center gap-4 space-y-3">
		<div className="w-full flex-1 rounded-lg border border-gray-700/50 bg-white px-6 pb-4 pt-8 shadow-md md:w-96 dark:bg-zinc-950">
			<h1 className="mb-3 text-2xl font-bold">Please log in to continue</h1>
			<div className="w-full">
				<div>
					<label className="mb-3 mt-5 block text-xs font-medium text-zinc-400">
						Email
					</label>

					<div className="relative">
						<input
							className="block w-full rounded-md border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
							id="email"
							type="email"
							name="email"
							placeholder="Enter your email address"
							required
						/>
					</div>
				</div>


				<div>
					<label className="mb-3 mt-5 block text-xs font-medium text-zinc-400">
						Password
					</label>

					<div className="relative">
						<input
							className="block w-full rounded-md border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
							id="password"
							type="password"
							name="password"
							placeholder="Enter your password"
							required
						/>
					</div>
				</div>
				<div>{errorMessage && <p>{errorMessage}</p>}</div>
				<LoginButton />
			</div>

		</div>
		<Link href="/signup"
			className="flex flex-row gap-1 text-sm text-zinc-400"
		>
			No account yet? <div className="font-semibold uderline">Sign Up</div>
		</Link>
	</form>
};

const LoginButton = () => {
	const { pending } = useFormStatus();

	return <button
		className="my-4 flex h-10 w-full flex-row items-center justify-center rounded-md bg-zinc-900 p-2 text-sm font-semibold text-zinc-100 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
		aria-disabled={pending}
	>
		{pending ? "Loading..." : "Login"}
	</button>
}

"use client"

import { useState } from "react"
import { SiGoogle } from "@icons-pack/react-simple-icons";

export const SocialButton = () => {
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	return <button
		className="flex flex-row w-full justify-center gap-3 items-center rounded-md border bg-zinc-50 px-2 py-[6px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
		onClick={async () => { }}
	>
		<SiGoogle color='#cbd5e1' size={16} />
		<div className="text-lg font-medium text-zinc-400">Google</div>
	</button>
}

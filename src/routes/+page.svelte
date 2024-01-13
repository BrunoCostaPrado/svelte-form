<script lang="ts">
	import { superForm } from "sveltekit-superforms/client"
	import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
	import type { PageData } from "./$types"
	import { user } from "$lib/types"
	export let data: PageData
	import { Mail } from "lucide-svelte"
	import { Button } from "$lib/components/ui/button"

	const { form, errors, enhance, constraints } = superForm(data.form, {
		taintedMessage: "Certeza que quer sair?",
		validators: user
	})
</script>

<!-- <SuperDebug data={$form} /> -->

<article class="flex flex-col">
	<header>
		<h1 class="mb-0 flex-col bg-slate-600 inline">Login</h1>
	</header>

	<form method="POST" use:enhance>
		<label for="email" class="flex flex-col">Email address</label>
		<input type="email" id="email" name="email" bind:value={$form.email} class="flex flex-col" />
		{#if $errors.email}
			<small>{$errors.email}</small>
		{/if}

		<label for="password" class="flex flex-col">Password</label>
		<input
			type="text"
			id="password"
			name="password"
			bind:value={$form.password}
			class="flex flex-col"
		/>
		{#if $errors.password}
			<small>{$errors.password}</small>
		{/if}

		<br />
		<Button type="submit" class="flex flex-col bg-blue-800">
			<!-- <Mail class="mr-2 h-4 w-4" /> -->
			Login
		</Button>
	</form>
</article>

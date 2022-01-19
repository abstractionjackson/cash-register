<script>
	import ChangeTable from '$lib/components/ChangeTable.svelte';
	import { Payment } from '$lib/models/Payment';
	let totalCost;
	let amtProvided;
	$: totalChange = amtProvided - totalCost || 0;
</script>

<main>
	<h1>Cash Register</h1>
	<ChangeTable payment={new Payment(totalChange)} />
	<div class="container">
		<form>
			<label for="totalCost">Total Cost</label>
			<input type="number" name="totalCost" bind:value={totalCost} placeholder="Total Cost" />
			<label for="amtProvided">Amount Provided</label>
			<input
				type="number"
				name="amtProvided"
				bind:value={amtProvided}
				placeholder="Amount Provided"
			/>
			<button
				style={`display: ${totalCost || amtProvided ? 'block' : 'none'}`}
				id="reset"
				on:click|preventDefault={() => {
					totalCost = undefined;
					amtProvided = undefined;
				}}>Reset</button
			>
		</form>
	</div>
</main>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		font-size: x-large;
	}

	img {
		height: 16rem;
		width: 16rem;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 2rem auto;
		max-width: 14rem;
	}

	p {
		max-width: 14rem;
		margin: 1rem auto;
		line-height: 1.35;
	}

	form {
		display: grid;
		padding-top: 2rem;
	}

	input {
		line-height: 1.5rem;
		font-size: x-large;
		padding: 0.25rem;
		width: 100%;
		margin: 0.75rem auto;
		max-width: 18rem;
	}

	button#reset {
		margin: auto;
		padding: 0.25rem;
		background-color: #ffffff;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>

<script>
	export let payment;
	console.log(payment.amount);
</script>

<table>
	<thead>
		<tr>
			<th colspan="2">
				Change Due: ${(payment.amount / 100).toFixed(2)}
			</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Quantity</th>
			<th>Denomination</th>
		</tr>
		{#each Object.entries(payment.getCount()) as [denomination, count]}
			<tr>
				<td>{count}</td>
				<td>${denomination / 100}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		margin: auto;
		width: 16rem;
	}
	table,
	td {
		border: 1px solid #333;
	}

	thead,
	tfoot {
		background-color: #333;
		color: #fff;
	}
	th {
		padding: 0.25rem;
	}
</style>

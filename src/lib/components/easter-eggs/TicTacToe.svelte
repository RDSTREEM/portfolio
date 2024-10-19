<script>
	let board = ['', '', '', '', '', '', '', '', '']
	let currentPlayer = 'X'
	let winner = null

	const handleClick = (index) => {
		if (!board[index] && !winner) {
			board[index] = currentPlayer
			currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
			checkWinner()
		}
	}

	const checkWinner = () => {
		const winningCombos = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		]

		winningCombos.forEach(([a, b, c]) => {
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				winner = board[a]
			}
		})
	}

	const resetGame = () => {
		board = ['', '', '', '', '', '', '', '', '']
		winner = null
		currentPlayer = 'X'
	}
</script>

<section class="tic-tac-toe mt-12">
	<div class="grid grid-cols-3 gap-4">
		{#each board as square, index}
			<button
				on:click={() => handleClick(index)}
				class="bg-gray-700 text-white text-2xl p-4 rounded"
			>
				{square}
			</button>
		{/each}
	</div>
	{#if winner}
		<p class="mt-4 text-2xl font-bold">Winner: {winner}</p>
		<button on:click={resetGame} class="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
			Play Again
		</button>
	{/if}
</section>

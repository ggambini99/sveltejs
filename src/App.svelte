<script lang="ts">
import Calculator from "./components/CalculatorSv.svelte";

</script>

<main>
	<Calculator />
</main>

<style>
	:global(body){
		background-color: black;
	}

	:root {
		--bg-color: #555;
	}

	main {
		display: flex;
		justify-content: center;
		align-items: center;

		height: 100vh;
	}
</style>
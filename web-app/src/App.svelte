<style global lang="postcss">
	/* only apply purgecss on utilities, per Tailwind docs */
	/* purgecss start ignore */
	@tailwind base;
	@tailwind components;
	/* purgecss end ignore */
	@tailwind utilities;
</style>

<script lang="ts">
	let name = 'world';
</script>

<h1>Hello {name}!</h1>
<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    onMount(() => {
        goto(`/1`);
    });
</script>

<main>
    <div class="loading">Loading...</div>
</main>

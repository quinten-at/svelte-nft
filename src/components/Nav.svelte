<script>
    import { useEffect } from '../util/hooks';

    export let total;
    export let id;

    let prevUrl = `/${total}`;
    let nextUrl = '/2';

    useEffect(() => {
        let n = `/${id + 1}`;
        if (id >= total) {
            n = '/1';
        }

        let p = `/${id - 1}`;
        if (id <= 1) {
            p = `/${total}`;
        }

        prevUrl = p;
        nextUrl = n;
    }, () => [id, total]);
</script>

<nav>
    <header>
			<span class="logomark">
			  <img src="/planet.svg" />
			</span>

        <span class="word">
			  Planetary
			</span>
    </header>
    <a href={prevUrl}>&#8592;</a>
    <span>{id}/{total}</span>
    <a href={nextUrl}>&#8594;</a>
</nav>

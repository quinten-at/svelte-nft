<script>
    export let address;

    let formatted = '&mdash;';

    if (address) {
        formatted = (`${address.substr(0, 8)}…${address.substr(-4)}`).toLowerCase();
    }
</script>

<abbr class="eth-name" title={address}>{formatted}</abbr>

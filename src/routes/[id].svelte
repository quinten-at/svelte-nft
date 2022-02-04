<script context="module">
    import { contract, contractAddress } from '../../static/lib/web3';

    export const load = async ({ fetch, params }) => {
        const { id } = params;

        const token = await contract.methods.tokenURI(id).call();

        const metadataResponse = await fetch(token);
        const metadata = await metadataResponse.json();

        const openseaResponse = await fetch(`https://rinkeby-api.opensea.io/api/v1/asset/${contractAddress}/${id}`);
        const opensea = await openseaResponse.json();

        return {
            props: {
                id: parseInt(id),
                metadata,
                opensea
            }
        }
    }
</script>

<script>
    import { web3 } from '../../static/lib/web3';
    import Nav from '../components/Nav.svelte';
    import EthName from '../components/EthName.svelte';
    import Universe from '../components/Universe.svelte';
    import {useEffect} from '../util/hooks';

    export let id;
    export let metadata;
    export let opensea;

    let forSale = false;
    let price;
    let address;
    let openSeaLink = `https://testnets.opensea.io/assets/${contractAddress}/${id}`;

    if (opensea.orders.length > 0) {
        price = web3.utils.fromWei(opensea.orders[0].base_price, "ether")
        address = opensea.orders[0].maker.address

        forSale = true
    }

    useEffect(() => {
        if (typeof document === 'object') {
            document.documentElement.style.setProperty('--main-color', metadata.properties.mainColor);
            document.documentElement.style.setProperty('--secondary-color', metadata.properties.secondaryColor);
        }
    }, () => [metadata]);
</script>

<div>
    <Nav {id} total={5} />
    <Universe {metadata} />
    <section>
        <h2>Planet #{id}</h2>
        {#if !forSale}
            <p>Not for sale</p>
        {:else}
            <p>Currently for sale on Opensea for {price} ETH by <EthName address={address} /></p>
        {/if}
        <a href={openSeaLink} target="_blank" class="button">View on OpenSea</a>
    </section>
</div>
<svelte:head>
    <title>Planetary - Planet #{id}</title>
</svelte:head>

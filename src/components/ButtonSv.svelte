<script lang="ts">
    export let texto: string
    export let triplo: boolean = false
    export let duplo: boolean = false
    export let operacao: boolean = false
    export let destaque: boolean = false
    export let onClick: (value: string) => void = () => {}

    function click() {
        console.log('click...')
    }
</script>

<button class="button" 
    on:click={() => onClick(texto)}
    class:triplo class:duplo class:operacao class:destaque>
    {texto}
</button>

<style>
    .button {
        margin: 0;
        flex-basis: 25%;

        border: 1px solid var(--bg-color);
    }

    .triplo {
        flex-basis: 75%;
    }

    .duplo {
        flex-basis: 50%;
    }

    .operacao {
        background-color: orange;
        color: white;
    }

    .destaque {
        background-color: red;
        color: white;
    }
</style>
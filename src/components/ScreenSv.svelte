<script lang="ts">
    export let value: string

    $: fontSize = value.length > 20 ? 'small' : `s-${value}`
</script>

<div class={`screen ${fontSize}`}>
    <span>{value}</span>
</div>

<style>
    .screen {
        display: flex;
        flex: 1;

        justify-content: flex-end;
        align-items: center;

        border-top-right-radius: 5px;
        border-top-left-radius: 5px;

        padding: 0px 5px;
        margin: 2px 1px;

        background-color: aliceblue;
        font-size: 1.7rem;

        overflow: hidden;
    }

    .s-10 { font-size: 1.5rem; }
    .s-11 { font-size: 1.35rem; }
    .s-12 { font-size: 1.25rem; }
    .s-13 { font-size: 1.15rem; }
    .s-14 { font-size: 1.05rem; }
    .s-15 { font-size: 1rem; }
    .s-16 { font-size: 0.9rem; }
    .s-17 { font-size: 0.8rem; }
    .s-18 { font-size: 0.75rem; }
    .s-19 { font-size: 0.7rem; }

    .small { font-size: 0.6rem; }
</style>
<script lang="ts">
import CalculatorModel from "../model/CalculatorModel";

    import Button from "./ButtonSv.svelte";
    import Line from "./Line.svelte";
    import Screen from "./ScreenSv.svelte";

    let calc = new CalculatorModel()

    const numberDigit = (num: string) => calc = calc.numberDigit(num)
    const dotDigit = () => calc = calc.dotDigit('')
    const calculate = () => calc = calc.calculate()
    const opDigit = (op: string) => calc = calc.opDigit(op)
    const clear = () => calc = calc.clear()

</script>

<div class="calculator">
    <Screen value={calc.value}/>
    <Line>
        <Button triplo destaque texto="AC" onClick={clear}/>
        <Button operacao texto="/" onClick={opDigit}/>
    </Line>

    <Line>
        <Button texto="7" onClick={numberDigit}/>
        <Button texto="8" onClick={numberDigit}/>
        <Button texto="9" onClick={numberDigit}/>
        <Button operacao texto="*" onClick={opDigit}/>
    </Line>

    <Line>
        <Button texto="4" onClick={numberDigit}/>
        <Button texto="5" onClick={numberDigit}/>
        <Button texto="6" onClick={numberDigit}/>
        <Button operacao texto="+" onClick={opDigit}/>
    </Line>

    <Line>
        <Button texto="1" onClick={numberDigit}/>
        <Button texto="2" onClick={numberDigit}/>
        <Button texto="3" onClick={numberDigit}/>
        <Button operacao texto="-" onClick={opDigit}/>
    </Line>

    <Line>
        <Button duplo texto="0" onClick={numberDigit}/>
        <Button texto="," onClick={dotDigit}/>
        <Button destaque texto="=" onClick={calculate}/>
    </Line>
</div>

<style>
    .calculator {
        background-color: var(--bg-color);

        height: 250px;
        width: 200px;

        padding: 10px;

        border-radius: 10px;

        display: flex;
        flex-direction: column;
    }


</style>
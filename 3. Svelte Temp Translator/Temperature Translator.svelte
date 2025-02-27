<script lang="ts">

    let temperature = 0
    let convertedTemp = 0
    let scale = "Celcius"

    const toFahren = (celcius) => (celcius * 9/5) + 32;
    const toCelcius = (fahrenheit) => (fahrenheit - 32) * 5/9;


    function convertTemp() {
        if (scale === "Celcius") {
            convertedTemp = toFahren(temperature);
        } else {
            convertedTemp = toCelcius(temperature);
        }
    }

</script>

<div>
    <h1>Temperature Calculator</h1>
    <label>
        <input type="number" bind:value={temperature} placeholder="Enter temperature" />
    </label>

    <label>
            <input type="radio" bind:group={scale} value="Fahrenheit" /> Fahrenheit
            <input type="radio" bind:group={scale} value="Celcius" /> Celcius
    </label>

    <button on:click={convertTemp}>Convert</button>

    <h2>Converted Temperature: {convertedTemp.toFixed(2)}</h2>
    
</div>

<style>
    button {
        background-color: #a6d7dd;
    }

    button:hover {
        background-color: #a6d7dd8a;
    }


</style>
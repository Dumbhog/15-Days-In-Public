<script>
    let counter = 0;

    function increment() {
        counter++
    }
</script>

<h1>Click Counter: {counter}</h1>
<button on:click={increment}>Click me!</button>
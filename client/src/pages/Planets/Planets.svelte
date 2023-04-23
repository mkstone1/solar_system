<script>
    import {onMount} from "svelte";
    import {BASE_URL} from "../../store/globalStore.js"


    onMount(async() =>{
        const response = await fetch($BASE_URL +"/planets", {

        })

        console.log(response)

        const data = await response.json();

        console.log(data)
        
    })
</script>

<h1>
    This is planets
</h1>
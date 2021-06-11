<script context="module">
  export const load = async ({ fetch }) => {
    try {
      const res = await fetch('/home', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      return {
        props: {
          data,
        },
      }
    } catch (err) {
      console.error(err)
    }
  }
</script>

<script>
  export let data
  console.log(data)
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
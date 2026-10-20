<script lang="ts">
  import { Neko } from '@yuna0x0/svelte-neko';
</script>

<!-- Clicking the cat pauses/resumes cursor tracking; no extra floating control is needed. -->
<Neko nekoImage="/oneko-custom.png" toggleTrackingOnClick={true} />

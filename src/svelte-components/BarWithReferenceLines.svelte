<script>
	import { getContext } from 'svelte';
	import { scaleBand } from 'd3-scale';

	const { data, xGet, yGet, xScale, yScale } = getContext('LayerCake');
	
  const halfReferenceLineWidth = 1;

  // FIXME: set up a proper colour scale
</script>

<g class="bar-group">
	{#each $data.data.filter(d => d.year===2011) as d, i}
      {#if d.place===$data.items[0]}
        <rect
          class='group-rect'
          x="{$xScale.range()[0]}"
          y="{$yScale(d.variable)}"
          height={$yScale.bandwidth()}
          width="{$xScale(d.value)}"
          fill="{$data.colours[i % 2]}"
        ></rect>
      {:else}
        <rect
          class='group-rect'
          x="{$xScale(d.value) - halfReferenceLineWidth}"
          y="{$yScale(d.variable)}"
          height={$yScale.bandwidth()}
          width="{halfReferenceLineWidth * 2}"
          fill="{$data.colours[i % 2]}"
        ></rect>
      {/if}
	{/each}
</g>

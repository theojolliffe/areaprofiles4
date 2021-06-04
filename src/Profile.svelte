<script>
	import { sectionify } from './sectionify.js';
	import { getHeadline, paragraphify } from './robo_utils.js';
	import { adjectify, plusminus, ordinal_suffix_of } from './robo_utils_pure_functions.js';
	import Select from './Select.svelte';
	import { data, metadata } from './stores.js';
	import { regiondata } from './regions.js';
	import DataSection2 from './DataSection2.svelte';
	import Custom from './Custom.svelte';

		
	var countryRank = [];
	
	export let options;
	export let selected;
	export let place;
	
	let total = options.length; 

	let breaks = [];
	for (let i=0; i<10; i++)
		breaks.push(Math.round((i * total) / 10));
	
    // TODO label is just a string in an array.  Do something nicer.
	let label = [""];	
</script>

<style>
</style>

{#if selected != null}
<header style="margin-top: 100px; margin-bottom: 30px;">
	<h2 class="text-2xl font-bold">{getHeadline(place, total, breaks).headline}</h2>
</header>

{#each sectionify(place, 8, $data, $regiondata, countryRank, label, breaks) as sect}
	<DataSection2 section={sect["section"][0]} parag={sect["parag"]} {place} {options}></DataSection2>
	{#if sect["round"]==0}
		<section class="wrapper">
			<div style="margin-top: 50px; margin-bottom: 50px; height: auto;">
				<Custom location={place.name}></Custom>
			</div>
		</section>
	{/if}
{/each}

{:else}
<p>
	This demo illustrates different ways of presenting local authority level data from the 2011 Census and how it changed from 2001, making use of robo-journalism and automation techniques.
</p>
<p>
	<strong>Select a place from the dropdown above to get started, and click on the tabs to explore different kinds of outputs.</strong>
</p>
{/if}

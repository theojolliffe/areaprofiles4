<script>
  import "../assets/app.bundle.css";
  import "./sixteens_main.css";
  import "./roboto_slab.css";
  import Profile from './Profile.svelte';
  import ONSHeader from './ONSHeader.svelte';
  import ONSFooter from './ONSFooter.svelte';
  import Breadcrumbs from './Breadcrumbs.svelte';
  import TodoSections from './TodoSections.svelte';
  import AreasWithinSelector from './AreasWithinSelector.svelte';
  import KeyStats from './KeyStats.svelte';
  import PrototypeWarning from './PrototypeWarning.svelte';
  import { data, metadata } from './stores.js';
  import Select from './Select.svelte';

  let place, place_name;

  let keyStats = {
      population: 0,
      popIncrease: 0,
      sizeHectares: 0,
      popDensity: 0 
  };
  $: {
      place = $data[selected];
      if (place) {
        console.log("place", place);
          keyStats = {
              population: place.data.population.val.c2011.all.toLocaleString(),
              popIncrease: Math.floor(place.data.population.val.change.all * place.data.population.val.c2001.all / 100).toLocaleString(),
              sizeHectares: Math.floor(place.data.population.val.c2011.all / place.data.density.val.c2011.density).toLocaleString(),
              popDensity: place.data.density.val.c2011.density.toLocaleString()
          };
      }
      place_name = place?.name || "Place Name";
  };

  let options = [];
  for (const i in $data) {
  	let option = {};
  	option.value = i;
  	option.label = $data[i].name;
  	options.push(option);
  }
  options.sort((a, b) => a.label.localeCompare(b.label, 'en', {ignorePunctuation: true}));
  let selected = "E09000002";
</script>

<style>
:global(body) {
  margin: 0;
  font-family:
		system-ui,
		-apple-system, /* Firefox supports this but not yet `system-ui` */
		'Segoe UI',
		Roboto,
		Helvetica,
		Arial,
		sans-serif,
		'Apple Color Emoji',
		'Segoe UI Emoji';
}
article.key-stats-card {
    background: white;
    width: 450px;
}
#top {
    display: table;
    width: 90%;
}
article {
    padding: 1em 1.25em .33em;
    border-radius: 3px;
    border: 1px solid #02aeab;
}
header.mb-8 {
    margin-bottom: 1rem;
}
div#cover-map {
    position: relative;
    height: 30em;
}
div#map {
    position: absolute;
    width: 100%;
    height: 80%;
}
div#cover-profile {
    position: relative;
    padding-top: 8vw;
    padding-left: 8vw;
}
img {
    height: 100%;
    float: right;
    max-width: fit-content;
}
</style>
<PrototypeWarning></PrototypeWarning>
<ONSHeader></ONSHeader>
<PrototypeWarning></PrototypeWarning>

<div id="cover-map">
    <div id="map">
        <section class="mb-8">
            <div class="relative" style="height:650px">
                <div class="absolute top-0 bg-grey4 w-full h-full" id="map" data-areaid="E12000003">
                    <img src="yorkshire2.png">
                </div>
            </div>
        </section>
    </div>
    <div id="cover-profile">
        <article class="key-stats-card">
            <div id="top">
                <Breadcrumbs {place_name}></Breadcrumbs>
                <header class="mb-8" >
                    <Select {options} bind:selected message='Select a place' />
                </header>
                <KeyStats {keyStats}></KeyStats>
            </div>
        </article>
    </div>
</div>

    <section class="wrapper">
        <div>
            <Profile {options} {selected} {place}></Profile>
        </div>
    </section>

<ONSFooter></ONSFooter>            

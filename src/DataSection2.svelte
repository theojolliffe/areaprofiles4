<script>
    import { formatUnicorn } from './robo_utils_pure_functions.js';
    import BarChart from './BarChart.svelte';
    import Beeswarm from './Beeswarm.svelte'; 
    import Multiline from './svelte-components/Multiline.svelte';
    import dataSectionConfig from './data-section-config.json';

	import { data } from './stores.js';
    import { regiondata } from './regions.js';
    import AutoComplete from "simple-svelte-autocomplete";

    export let options
    let comparedPlace;

    let colours = ['#27A0CC', '#F66068'];
    let lineChartColours = ['#206095', '#27A0CC', '#871A5B', '#A8BD3A', '#F66068'];

    export let section;
    export let parag;
    export let place;
    let sectionConfig;
    let rows;
    let chartData;
    let regionName;
    let singleData;
    let singleCat = ["medage", "density", "population"];
    let singleCatSelect = {"medage": "median", "density": "density", "population": "all"};


    $: {
        regionName = $regiondata[place.code].RGN18NM;
        sectionConfig = dataSectionConfig[section];
        rows = [...sectionConfig.rows];
        console.log("rows", rows)
        let regionSumAll = {"2001": 0, "2011": 0};
        rows.forEach(row => {
            let regionCode = $regiondata[place.code].RGN18CD;
            row.val = place.data[row.var[0]].val.c2011[row.var[1]];
            row.regionSum = {"2001": 0, "2011": 0};
            Object.values($data).forEach(d => {
                if ($regiondata[d.code].RGN18CD === regionCode) {
                    for (let year of ["2001", "2011"]) {
                        row.regionSum[year] += d.data[row.var[0]].val["c"+year][row.var[1]];
                        if (!row.excludeFromTotal) {
                            regionSumAll[year] += d.data[row.var[0]].val["c"+year][row.var[1]];
                        }
                    }
                }
            });
        });
        rows.forEach(row => {
            row.regionPct = {"2001": row.regionSum["2001"] / regionSumAll["2001"] * 100, "2011": row.regionSum["2011"] / regionSumAll["2011"] * 100};
        });
        chartData = [];
        if (!singleCat.includes(section)) {
            for (let row of rows) {
                if (!row.inChart) continue;
                chartData.push({variable: row.name, year: 2001, place: place.name, value: place.data[row.var[0]].perc.c2001[row.var[1]]});
                chartData.push({variable: row.name, year: 2011, place: place.name, value: place.data[row.var[0]].perc.c2011[row.var[1]]});
                chartData.push({variable: row.name, year: 2001, place: regionName, value: row.regionPct["2001"]});
                chartData.push({variable: row.name, year: 2011, place: regionName, value: row.regionPct["2011"]});
            }
            let roboData = {name: place.name};
            rows.filter(row => row.hasOwnProperty("roboName"))
                .forEach(row => {
                    roboData[row.roboName + 2001] = place.data[row.var[0]].val.c2001[row.var[1]].toLocaleString();
                    roboData[row.roboName + 2011] = place.data[row.var[0]].val.c2011[row.var[1]].toLocaleString();
                });
            chartData = {
                data: chartData,
                groups: rows.filter(d => d.inChart).map(d => d.name),
                items: [place.name, regionName],
                years: [2001, 2011],
                colours: colours,
                lineChartColours: lineChartColours,
                roboData
            };
        }
        else if (sectionConfig.title == "Average age") {
            for (let row of rows) {
                console.log("row", row)
                if (!row.inChart) continue;
                chartData.push({variable: row.var[1], year: row.var[1], place: place.name, value: place.data[row.var[0]].val["c"+row.var[1]].median});
            }
        }
        console.log("sectionConfig", section)
        singleData = [];
        for (const i in $data) {
            let singleLoc = {};
            singleLoc.value = $data[i].data[section].val.c2011[singleCatSelect[section]];
            singleLoc.placeName = $data[i].name;
            if ($data[i].name == place.name) {
                singleLoc.place = place.name;
            }
            else if ($regiondata[place.code].RGN18NM == $regiondata[$data[i].code].RGN18NM) {
                singleLoc.place = $regiondata[$data[i].code].RGN18NM;
            }
            else if ($regiondata[place.code].RGN18NM != $regiondata[$data[i].code].RGN18NM) {
                singleLoc.place = "UK";
            };
            singleData.push(singleLoc);
        }
        console.log("chart data", chartData)

    }
</script>

<style>
    div#search-compare {
        width: 30%;
        height: 40%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40%;
        margin-bottom: 40%;
    }
</style>

<!-- FIXME why isn't h3 styling working? -->
<h3 class="padding-top--4 padding-bottom--4" style="font-weight: bold; font-size: 150%">{sectionConfig.title}</h3>
<div class="mb-8">
    <p>
        {parag}
    </p>

    <div class="wrapper padding-top--10 padding-bottom--20">
        <div class="col-wrap" style="height: 300px">
            {#if singleCat.includes(section)}
                <div class="col col--lg-full padding-left--7 padding-right--7" style="height: 300px">
                    <Beeswarm {singleData}></Beeswarm>
                </div>
            {:else}
                <div class="col col--md-half col--lg-half padding-left--1 padding-right--1" style="height: 300px">
                    <BarChart {chartData}></BarChart>
                </div>
                <div class="col col--md-half col--lg-half padding-left--1 padding-right--1" style="height: 300px">
                    <Multiline {chartData}></Multiline>
                </div>
                <div id="search-compare">
                    <AutoComplete items={options} bind:selectedItem={comparedPlace} labelFunction={option => option.label} placeholder="Compare with..."/>
                </div>
            {/if}
        </div>
    </div>

    {#if singleCat.includes(section)}

        <table class="mb-4 border-b-2 table-auto text-base leading-loose">
            <thead class="border-grey1 border-b-2">
                <tr>
                    <th scope="col" class="h-12 text-left font-bold">{sectionConfig.title}</th>
                    <th scope="col" class="h-12 text-right font-normal">2001</th>
                    <th scope="col" class="h-12 text-right font-normal" style="width: 10%">2011</th>
                </tr>
            </thead>
            <tbody class="border-t-2">
                {#if place}
                 
                    <tr class="h-9 p-0 border-grey3 border-b">
                        <td class="p-0 td-string">{place.name}</td>
                        {#each rows as row}
                            <td class="p-0 td-number">{place.data[section].val["c"+row.var[1]][singleCatSelect[section]].toLocaleString()}</td>
                        {/each}
                    </tr>
                    
                {/if}
            </tbody>
        </table>

    {:else}
        <table class="mb-4 border-b-2 table-auto text-base leading-loose">
            <thead class="border-grey1 border-b-2">
                <tr>
                    <th scope="col" class="h-12 text-left font-bold">{sectionConfig.title}</th>
                    <th scope="col" class="h-12 text-right font-normal">Count</th>
                    <th scope="col" class="h-12 text-right font-normal" style="width: 10%">%</th>
                </tr>
            </thead>
            <tbody class="border-t-2">
                {#if place}
                    {#each rows as row}
                        {#if row.bold}
                            <tr class="h-9 p-0 border-grey1 font-bold border-b">
                                <th scope="row" class="h-9 p-0 text-left font-bold">{row.name}</th>
                                <td class="p-0 td-number">{row.val.toLocaleString()}</td>
                                <td class="p-0 td-object"/>
                            </tr>
                        {:else}
                            <tr class="h-9 p-0 border-grey3 border-b">
                                <td class="p-0 td-string">{row.name}</td>
                                <td class="p-0 td-number">{place.data[row.var[0]].val.c2011[row.var[1]].toLocaleString()}</td>
                                <td class="p-0 td-number">{place.data[row.var[0]].perc.c2011[row.var[1]]}</td>
                            </tr>
                        {/if}
                    {/each}
                {/if}
            </tbody>
        </table>

    {/if}

</div>

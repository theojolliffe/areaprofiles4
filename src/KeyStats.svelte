<script>
    export let keyStats;
    
    let keyStatsText;
    
    $: keyStatsText = [
        {title: "Population", val: keyStats.population},
        {title: "hectares", val: keyStats.sizeHectares},
        {title: "people per hectare", val: keyStats.popDensity}
    ];
     
    </script>
    <style>
    .wrapper.stats {
        width: auto;
    }
    .column-half {
        width: 46%;
        float: left;
        margin: 0 0 0 0;
    }
    .stat-list {
        height: 34px;
        display: block;
    }
    section#key-stats {
        padding-left: 5px;
    }
    </style>
    <section id="key-stats">
    
        <div class="column-half">
            <div class="wrapper stats">
                <div class="mb-8">
                    {#each keyStatsText.slice(0,1) as item}
                        <span class="stat-list">
                                <span class="text-md" style="display: block;">{item.title}</span>
                                <span class="text-lg font-bold" style="display: block;">{item.val}</span>
                        </span>
                    {/each}
                </div>
            </div>
        </div>
    
        <div class="column-half">
            <div class="wrapper stats">
                <div class="mb-8">
                    {#each keyStatsText.slice(1,3) as item}
                        <span class="stat-list">
                            <span class="text-md font-bold" style="float: left;">{item.val} &nbsp</span>
                            <span class="text-sm">{item.title}</span>
                        </span>
                    {/each}
                </div>
            </div>
        </div>
    
    </section>
    
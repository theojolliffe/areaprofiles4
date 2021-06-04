<script>
    export let singleData;

    import { LayerCake, Svg, Html } from 'layercake';
    import { scaleOrdinal, scaleLog } from 'd3-scale';
  
    import Key from './svelte-components/beeswarm-components/Key.svelte';
    import AxisX from './svelte-components/beeswarm-components/AxisX.svelte';
    import Beeswarm from './svelte-components/beeswarm-components/BeeswarmForce.svelte';
    
    const xKey = 'value';
    const zKey = 'place';
    const titleKey = 'name';  
    const seriesNames = new Set();
    const seriesColors = ['#BFBFBF', '#2AA0CC', '#000'];
  
    const dataTransformed = singleData.map(d => {
      seriesNames.add(d[zKey]);
  
      return {
        [titleKey]: d[titleKey],
        [zKey]: d[zKey],
        [xKey]: d[xKey]
      }
    })
  
  </script>
  
  <style>
    /*
      The wrapper div needs to have an explicit width and height in CSS.
      It can also be a flexbox child or CSS grid element.
      The point being it needs dimensions since the <LayerCake> element will
      expand to fill it.
    */
    .chart-container {
      width: 100%;
      height: 100%;
    }
  </style>
  
  <div class='chart-container'>
    <LayerCake
      padding={{bottom: 15}}
      x={xKey}
      xScale = {scaleLog()}
      z={zKey}
      zScale={scaleOrdinal()}
      zDomain={Array.from(seriesNames)}
      zRange={seriesColors}
      data={singleData}
      custom={{
        getTitle: d => d[titleKey]
      }}
      let:width
    >
  
      <Svg>
        <AxisX/>
        <Beeswarm
          strokeWidth={1}
          xStrength={0.95}
          yStrength={0.075}
        />
      </Svg>
  
      <Html pointerEvents={false}>
        <Key shape='circle' />
      </Html>
  
    </LayerCake>
  </div>
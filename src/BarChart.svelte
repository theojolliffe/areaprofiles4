<script>
  export let chartData;

  import { LayerCake, Svg, Html } from 'layercake';
  import { scaleBand } from 'd3-scale';

  import AxisX from './svelte-components/AxisX.svelte';
  import AxisY from './svelte-components/AxisY.svelte';

  import BarWithReferenceLines from './svelte-components/BarWithReferenceLines.svelte';
  import Key from './svelte-components/Key.svelte';

  const xMaxFn = data => Math.max(...data.data.map(d => d.value));
</script>

<LayerCake
  padding={{ top: 0, bottom: 20, left: 100 }}
  x={null}
  y="key"
  yScale={scaleBand().paddingInner([0.05]).round(true)}
  yDomain={chartData.groups}
  yRange={ ({ width, height }) => [height,height*.1] }
  xDomain={[0, 100]}
  data={chartData}
>
  <Svg>
    <AxisX
      gridlines={true}
      baseline={true}
      snapTicks={false}
      ticks=4
    />
    <AxisY
      gridlines={false}
    />
    <BarWithReferenceLines/>
  </Svg>
  <Html pointerEvents={false}>
    <Key
      align='end'
      shape='square'
      showReferenceLines={true}
    />
  </Html>
</LayerCake>

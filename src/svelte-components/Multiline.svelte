<script>
  import { LayerCake, Svg, Html } from 'layercake';
  import { scaleOrdinal } from 'd3-scale';
  import { timeParse, timeFormat } from 'd3-time-format';
  import { format, precisionFixed } from 'd3-format';

  import MultiLine from './multiline-components/MultiLine.svelte';
  import AxisX from './multiline-components/AxisX.svelte';
  import AxisY from './multiline-components/AxisY.svelte';
  import Labels from './multiline-components/Labels2.svelte';
  import SharedTooltip from './multiline-components/SharedTooltip.svelte';

  const parseDate = timeParse('%Y');

  export let chartData;
  let data, seriesNames, dataLong;

  function getData() {
      data = chartData.years.map(year => {
          let result = {year: ''+year};
          chartData.data.forEach(d => {
              if (d.place === chartData.items[0] && d.year === year) {
                  result[d.variable] = d.value;
              }
          });
          return result;
      });
      seriesNames = Object.keys(data[0]).filter(d => d !== xKey);
      dataLong = seriesNames.map(key => {
        return {
          key,
          values: data.map(d => {
            d[xKey] = typeof d[xKey] === 'string' ? parseDate(d[xKey]) : d[xKey]; // Conditional required for sapper
            return {
              key,
              [yKey]: +d[key],
              [xKey]: d[xKey]
            };
          })
        };
      });
  }

  getData(chartData);

  $: {
      getData(chartData);
  }
  /* --------------------------------------------
   * Set what is our x key to separate it from the other series
   */
  const xKey = 'year';
  const yKey = 'value';
  const zKey = 'key';

  // Make a flat array of the `values` of our nested series
  // we can pluck the `value` field from each item in the array to measure extents
  const flatten = data => data.reduce((memo, group) => {
    return memo.concat(group.values);
  }, []);

  const formatTickX = timeFormat('%Y');
  const formatTickY = format(".1f");
  //const formatTickY = d => format(`.${precisionFixed(d)}s`)(d);
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

<div class="chart-container">
  <LayerCake
    padding={{ top: 7, right: 10, bottom: 20, left: 25 }}
    x={xKey}
    y={yKey}
    z={zKey}
    yDomain={[null, null]}
    zScale={scaleOrdinal()}
    zDomain={seriesNames}
    zRange={chartData.lineChartColours}
    flatData={flatten(dataLong)}
    data={dataLong}
  >
    <Svg>
      <AxisX
        gridlines={false}
        ticks={data.map(d => d[xKey]).sort((a, b) => a - b)}
        formatTick={formatTickX}
        snapTicks={true}
        tickMarks={true}
      />
      <AxisY
        ticks={4}
        formatTick={formatTickY}
      />
      <MultiLine/>
    </Svg>

    <Html>
      <Labels/>
      <SharedTooltip
        formatTitle={formatTickX}
        dataset={data}
      />
    </Html>
  </LayerCake>
</div>

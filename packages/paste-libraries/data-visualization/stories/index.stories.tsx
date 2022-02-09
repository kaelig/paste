import * as React from 'react';
import type {Story, Meta} from '@storybook/react';
import {Stack} from '@twilio-paste/stack';
/* eslint-disable import/no-extraneous-dependencies */
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
/* eslint-enable */

import {usePasteHighchartsTheme} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Libraries/data-visualization',
} as Meta;

const lineChartOptions: Highcharts.Options = {
  title: {
    text: 'Solar Employment Growth by Sector, 2010-2016',
  },
  subtitle: {
    text: 'Source: thesolarfoundation.com',
  },
  series: [
    {
      name: 'Installation',
      // @ts-expect-error copied from official highcharts docs
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
    },
    {
      name: 'Manufacturing',
      // @ts-expect-error copied from official highcharts docs
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
    },
    {
      name: 'Sales & Distribution',
      // @ts-expect-error copied from official highcharts docs
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
    },
    {
      name: 'Project Development',
      // @ts-expect-error copied from official highcharts docs
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
    },
    {
      name: 'Other',
      // @ts-expect-error copied from official highcharts docs
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
    },
  ],
};

export const LineChart: Story = () => {
  const themedLineChartOptions = usePasteHighchartsTheme(lineChartOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedLineChartOptions} />
      <HighchartsReact highcharts={Highcharts} options={lineChartOptions} />
    </Stack>
  );
};

const columnChartOptions: Highcharts.Options = {
  chart: {
    type: 'column',
  },
  title: {
    text: 'Monthly Average Rainfall',
  },
  subtitle: {
    text: 'Source: WorldClimate.com',
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Rainfall (mm)',
    },
  },
  series: [
    {
      name: 'Tokyo',
      // @ts-expect-error copied from official highcharts docs
      data: [49.9, 71.5, 106.4, 129.2, 144, 176, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    },
    {
      name: 'New York',
      // @ts-expect-error copied from official highcharts docs
      data: [83.6, 78.8, 98.5, 93.4, 106, 84.5, 105, 104.3, 91.2, 83.5, 106.6, 92.3],
    },
    {
      name: 'London',
      // @ts-expect-error copied from official highcharts docs
      data: [48.9, 38.8, 39.3, 41.4, 47.1, 48.3, 59.2, 59.6, 52.4, 65.2, 59.3, 51.2],
    },
    {
      name: 'Berlin',
      // @ts-expect-error copied from official highcharts docs
      data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1],
    },
  ],
};

export const ColumnChart: Story = () => {
  const themedColumnChartOptions = usePasteHighchartsTheme(columnChartOptions);

  return (
    <Stack orientation="vertical" spacing="space100">
      <HighchartsReact highcharts={Highcharts} options={themedColumnChartOptions} />
      <HighchartsReact highcharts={Highcharts} options={columnChartOptions} />
    </Stack>
  );
};

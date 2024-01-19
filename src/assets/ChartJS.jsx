import React from 'react';
import { ResponsivePie } from '@nivo/pie';

export function ChartJS () {
  const data = [
    { id: 'Food', label: 'Food', value: 47 },
    { id: 'Education', label: 'Education', value: 30 },
    { id: 'Humanitarian', label: 'Humanitarian Response', value: 10 },
    { id: 'Sustainable', label: 'Sustainable Development', value: 10 },
    { id: 'Peace', label: 'Peace Keeping Mission', value: 10 },
  ];

  return (
    <div className='min-h-[500px] px-20 md:px-0'>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          { match: { id: 'Food' }, id: 'dots' },
          { match: { id: 'Education' }, id: 'dots' },
          { match: { id: 'Humanitarian' }, id: 'dots' },
          { match: { id: 'Sustainable' }, id: 'dots' },
          { match: { id: 'Peace' }, id: 'lines' },
        ]}
      />
    </div>
  );
};

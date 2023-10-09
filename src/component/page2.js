import { Text } from '@mantine/core';
import classes from '@/styles/StatsGroup.module.css';

const data = [
  {
    title: 'Energy Usage',
    stats: '75 Watt',
    description: '25% more Less than in the same month last year, 33% more that two years ago',
  },
  {
    title: 'Memory Clock',
    stats: '1,950 Mhz',
    description: 'With Technology GDDR 6 we can push the limit',
  },
  {
    title: 'Vram',
    stats: '4GB',
    description: '1994 orders were completed this month, 97% satisfaction rate',
  },
];

export function StatsGroup() {
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));
  return <div className={classes.root}>{stats}</div>;
}
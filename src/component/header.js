import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import react from 'react';

import { MantineLogo } from '@mantine/ds';
import classes from '@/styles/HeaderSimple.module.css';

const links = [
  { link: '/login', label: 'Sign In' },
  { link: '/', label: 'Sign Up' }, 
//   { link: '/contact', label: 'Contact' } 
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
      <div style={{display: 'flex', alignItems: 'center'}}>
  <img width="48" height="48" src="https://img.icons8.com/color/48/nvidia.png" alt="nvidia"/>
  <span style={{marginLeft: '10px', fontSize: '20px', fontWeight: 'bold',color:'white'}}>NVDIA</span>
</div>

        <Group gap={5} visibleFrom="xl">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="xl" />
      </Container>
    </header>
  );
}
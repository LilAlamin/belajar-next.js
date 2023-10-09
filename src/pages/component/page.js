import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from '@/styles/HeroImageBackground.module.css';

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Powerful Video Graphic For{' '}
          <Text component="span" inherit className={classes.highlight}>
            Any Games
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
          The VGA 1650, also known as the Nvidia GeForce GTX 1650, is a high-performance graphics card that offers a balance between price and performance.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Get started
          </Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            Live demo
          </Button>
        </div>
      </div>
    </div>
  );
}
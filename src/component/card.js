import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import { Card, Image, Text, ActionIcon, Badge, Group, Center, Avatar, useMantineTheme, rem } from '@mantine/core';
import classes from '@/styles/ArticleCard.module.css';
import react from 'react';

export function ArticleCard({ imgSrc, imgHref, badgeContent, titleContent, linkHref, linkRel, reviewContent, avatarSrc, author }) {
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <a href={imgHref} target="_blank" rel="noopener noreferrer">
          <Image src={imgSrc} height={180} />
        </a>
      </Card.Section>

      <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        {badgeContent}
      </Badge>

      <Text className={classes.title} fw={500} component="a" href={linkHref} target={linkRel}>
        {titleContent}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        {reviewContent}
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Center>
          <Avatar src={avatarSrc} size={24} radius="xl" mr="xs" />
          <Text fz="sm" inline>
            {author}
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconHeart style={{ width: rem(16), height: rem(16) }} color={theme.colors.red[6]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBookmark style={{ width: rem(16), height: rem(16) }} color={theme.colors.yellow[7]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare style={{ width: rem(16), height: rem(16) }} color={theme.colors.blue[6]} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}

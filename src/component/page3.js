import { Container, Grid, SimpleGrid, Skeleton, rem } from '@mantine/core';
import { ArticleCard } from './card';

const PRIMARY_COL_HEIGHT = rem(300);

export function LeadGrid() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 3, sm: 3 }} spacing="sm">
        <ArticleCard 
          imgSrc="https://i.imgur.com/Cij5vdL.png"
          imgHref="https://mantine.dev"
          badgeContent="outstanding"
          titleContent="Resident Evil Village review"
          linkHref="https://mantine.dev"
          linkRel="_blank"
          reviewContent="The GTX 1650 might struggle with more demanding settings..."
          avatarSrc="https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          author="Bill Wormeater"
        />
  
        <ArticleCard 
          imgSrc="https://i.imgur.com/Cij5vdL.png"
          imgHref="https://mantine.dev"
          badgeContent="outstanding"
          titleContent="Resident Evil Village review"
          linkHref="https://mantine.dev"
          linkRel="_blank"
          reviewContent="The GTX 1650 might struggle with more demanding settings..."
          avatarSrc="https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          author="Bill Wormeater"
        />
        <ArticleCard 
          imgSrc="https://i.imgur.com/Cij5vdL.png"
          imgHref="https://mantine.dev"
          badgeContent="outstanding"
          titleContent="Resident Evil Village review"
          linkHref="https://mantine.dev"
          linkRel="_blank"
          reviewContent="The GTX 1650 might struggle with more demanding settings..."
          avatarSrc="https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          author="Bill Wormeater"
        />
      </SimpleGrid>
    </Container>
  );
  
}
import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Boiler Plates">
      <Container>
        <Title>
          HomeLab Automation Scripts <Badge>2021-</Badge>
        </Title>
        <P>
          BASH scripts to automate setup of my homelab environment. It installs Docker and Docker Compose.
          It creates a docker network for the containers and creates folders and compose files for the containers
          and deploys them.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://www.github.com/rishavnandi/boiler_plates">
              https://www.github.com/rishavnandi/boiler_plates <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>BASH scripting, Docker</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
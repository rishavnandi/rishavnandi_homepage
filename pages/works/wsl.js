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
    <Layout title="WSL Scripts">
      <Container>
        <Title>
          WSL Automation Scripts <Badge>2022-</Badge>
        </Title>
        <P>
          BASH scripts to automate the post installation of WSL2 and Windows Terminal.
          These scripts setup starship prompt and fish shell and customize the Windows Terminal the way I like it.
          It also setups WSL2 to work with Vagrant.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://www.github.com/rishavnandi/wsl_dotfiles">
              https://www.github.com/rishavnandi/wsl_dotfiles <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>BASH scripting, Powershell scripting</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
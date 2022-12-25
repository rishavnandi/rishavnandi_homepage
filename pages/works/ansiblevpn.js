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
    <Layout title="Ansible VPN">
      <Container>
        <Title>
          Ansible Selfhost VPN <Badge>2022-</Badge>
        </Title>
        <P>
          Ansible playbooks to setup a VPS as a Wireguard VPN server with a simple web interface.
          Uses wg-easy project for the web interface.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://www.github.com/rishavnandi/ansible_selfhost_vpn">
              https://www.github.com/rishavnandi/ansible_selfhost_vpn <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Ansible</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
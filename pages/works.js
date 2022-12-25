import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbwsl from '../public/images/works/wsl.png'
import thumbwg from '../public/images/works/Wireguard.jpg'
import thumbansible from '../public/images/works/ansible.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="boiler_plates" title="Boiler Plates" thumbnail={thumbwg}>
            BASH scripts to automate the setup of a homeserver
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="ansiblevpn"
            title="Ansible Selfhost VPN"
            thumbnail={thumbansible}
          >
            Ansible playbooks to automate the setup of a Wireguard VPN server with a web interface
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="wsl"
            title="WSL2 Automated Setup"
            thumbnail={thumbwsl}
          >
            BASH scripts to automate the setup of WSL2 and Windows Terminal
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
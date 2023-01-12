import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Devops and System Administration enthusiast from India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rishav Nandi
          </Heading>
          <p>Devops | System Administration</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/rishav.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Rishav Nandi is a Computer Science Sophomore and the Machine Learning Co-Lead
          of the Google Developer Student Club at his University. He is also a Devops and
          System Administration enthusiast and has been working on various projects based
          on {' '} <Link as={NextLink} href="https://github.com/rishavnandi/boiler_plates" target="_blank" > BASH scripting </Link>, Python, Ansible, Terraform and Docker.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Jamshedpur, India.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed High School from Jamshedpur Public School
          with aggregate of 80%.

          Created his first homelab and started learning about Devops and System Administration.
          His {' '} <Link as={NextLink} href="https://github.com/rishavnandi/boiler_plates" target="_blank" > BASH scripts </Link>
          that automate the process of setting up a new server have been starred by more
          than 50 people on GitHub.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Elected as the Machine Learning Co-Lead of the Google Developer Student Club at his University.

          Created {' '} <Link as={NextLink} href="https://github.com/rishavnandi/ansible_selfhost_vpn" target="_blank" > Ansible playbooks </Link>
          to automate the process of setting up a new Wireguard server that has been
          starred by nearly 40 people on GitHub.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Likes
        </Heading>
        <Paragraph>
          Reading about New Tech Products and Apps, watching MKBHD videos, playing video games,
          tinkering with electronics and learning new things and Machine Learning.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/rishavnandi" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @rishavnandi
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/rishav__nandi" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @rishav__nandi
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/rishav__nandi" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @rishav__nandi
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
